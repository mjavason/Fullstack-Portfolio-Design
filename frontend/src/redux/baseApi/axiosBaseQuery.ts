import { CookieType } from '@/config/enums';
import { getCookieValue, removeCookie, setCookieValue } from '@/utils/cookies';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  Method,
} from 'axios';

// Types
interface ErrorResponse {
  message: string;
  status: number;
  type: string;
  errors: string[];
}

// Constants
const AUTH_ERRORS = {
  LOCKED: 'locked',
  BANNED: 'banned',
} as const;

const REDIRECT_URL = '/sign-in';
const TOKEN_COOKIE = 'token';

// Helper functions
const handleAuthError = (errorMessage: string = '') => {
  if (errorMessage.includes(AUTH_ERRORS.LOCKED)) {
    return { type: 'LOCKED', message: 'User account locked, contact support' };
  }
  if (errorMessage.includes(AUTH_ERRORS.BANNED)) {
    return { type: 'BANNED', message: 'User account banned, contact support' };
  }
  return null;
};

const handleAuthenticationFailure = (error: AxiosError<ErrorResponse>) => {
  const lockedOut = handleAuthError(error.response?.data?.message);
  const currentUrl = window.location.href;

  if (lockedOut) {
    removeCookie(CookieType.Token);
    setCookieValue(CookieType.ExpiryMessage, lockedOut.message);
    window.location.href = REDIRECT_URL;
  } else if (!currentUrl.includes(REDIRECT_URL)) {
    setCookieValue(CookieType.CurrentUrl, currentUrl, 120);
    setCookieValue(CookieType.ExpiryMessage, 'Token Expired Please Login');
    // window.location.href = REDIRECT_URL; TODO: Remove later
  }
};

// Request interceptor
axios.interceptors.request.use(
  async (config) => {
    const token = getCookieValue(TOKEN_COOKIE);
    config.headers = {
      ...config.headers,
      Authorization: token ? `Bearer ${token}` : '',
    } as AxiosRequestHeaders;
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// Response interceptor
axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ErrorResponse>) => {
    // Skip interceptor for server-side rendering and non-auth errors
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

// RTK Query base query function
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
