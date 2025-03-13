import paths from '@/config/constants/paths';
import { CookieType } from '@/config/enums';
import { getCookieValue, removeCookieValue, setCookieValue } from '@/utils/cookies';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  Method,
} from 'axios';

// Define the structure of the error response
interface ErrorResponse {
  message: string;
  status: number;
  type: string;
  errors: string[];
}

// Authentication-related error types
const AUTH_ERRORS = {
  LOCKED: 'locked',
  BANNED: 'banned',
} as const;

/**
 * Checks if an authentication error has occurred and returns an appropriate message.
 * @param {string} errorMessage - The error message received from the server.
 * @returns {Object | null} - Returns an object with the error type and message if matched, otherwise null.
 */
const handleAuthError = (errorMessage: string = '') => {
  if (errorMessage.includes(AUTH_ERRORS.LOCKED)) {
    return { type: 'LOCKED', message: 'User account locked, contact support' };
  }
  if (errorMessage.includes(AUTH_ERRORS.BANNED)) {
    return { type: 'BANNED', message: 'User account banned, contact support' };
  }
  return null;
};

/**
 * Handles authentication failures by redirecting the user and clearing authentication cookies.
 * @param {AxiosError<ErrorResponse>} error - The Axios error object containing the response details.
 */
const handleAuthenticationFailure = (error: AxiosError<ErrorResponse>) => {
  const lockedOut = handleAuthError(error.response?.data?.message);
  const currentUrl = window.location.href;

  if (lockedOut) {
    removeCookieValue(CookieType.Token);
    setCookieValue(CookieType.ExpiryMessage, lockedOut.message);
    window.location.href = paths.adminLogin;
  } else if (!currentUrl.includes(paths.adminLogin)) {
    setCookieValue(CookieType.CurrentUrl, currentUrl, 120);
    setCookieValue(CookieType.ExpiryMessage, 'Token Expired Please Login');
    window.location.href = paths.adminLogin;
  }
};

/**
 * Axios request interceptor to automatically add authentication headers to outgoing requests.
 */
axios.interceptors.request.use(
  async (config) => {
    const token = await getCookieValue(CookieType.Token);
    config.headers = {
      ...config.headers,
      Authorization: token ? `Bearer ${token}` : '',
    } as AxiosRequestHeaders;
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

/**
 * Axios response interceptor to handle authentication errors globally.
 */
axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ErrorResponse>) => {
    // Skip processing if on server-side or if the error is not related to authentication
    if (
      typeof window === 'undefined' ||
      !error.response ||
      ![401, 403].includes(error.response.status)
    ) {
      return Promise.reject(error);
    }

    handleAuthenticationFailure(error);
    return Promise.reject(error);
  },
);

/**
 * RTK Query base query function for making API requests using Axios.
 * @param {Object} options - Configuration options for the base query function.
 * @param {string} options.baseUrl - The base URL for API requests.
 * @param {Object} [options.baseHeaders] - Default headers for API requests.
 * @returns {BaseQueryFn} - Returns an RTK Query compatible base query function.
 */
export const axiosBaseQuery =
  ({
    baseUrl = '',
    baseHeaders = {},
  }: {
    baseUrl: string;
    baseHeaders?: AxiosRequestConfig['headers'];
  }): BaseQueryFn<
    {
      url: string;
      method: Method;
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers = {} }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        params,
        data,
        headers: { ...baseHeaders, ...headers },
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError<ErrorResponse>;
      return err.response
        ? {
            error: {
              ...err.response.data,
            },
          }
        : { error: { status: undefined, message: err.message } };
    }
  };
