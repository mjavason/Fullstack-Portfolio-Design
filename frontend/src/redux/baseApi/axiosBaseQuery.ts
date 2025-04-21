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

/**
 * Handles authentication failures by redirecting the user and clearing authentication cookies.
 * @param {AxiosError<ErrorResponse>} error - The Axios error object containing the response details.
 */
const handleAuthenticationFailure = () => {
  const currentUrl = window.location.href;

  if (!currentUrl.includes(paths.adminLogin)) {
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

    handleAuthenticationFailure();
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
