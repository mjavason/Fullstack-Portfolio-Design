import paths from '@/config/constants/paths';
import { authPaths } from '@/config/constants/urls';
import { CookieType } from '@/config/enums';
import { NextRequest, NextResponse } from 'next/server';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { isExpiredToken } from './token';

/**
 * Handles redirecting the user to the appropriate verification or reset page
 * after extracting the token and email from the URL query parameters.
 * It also sets the appropriate cookies for email and token.
 * @param request - The incoming Next.js request object.
 * @param pathname - The current URL path.
 * @returns A NextResponse object that redirects the user.
 */
export const handleTokenRedirect = (request: NextRequest, pathname: string) => {
  const redirectUrl = pathname.includes('/verify-email') ? '/verify-email' : '/reset-password';

  const token = request.nextUrl.searchParams.get('token');
  const email = request.nextUrl.searchParams.get('email');

  // If both token and email are present, redirect the user and set cookies
  if (token && email) {
    const response = NextResponse.redirect(new URL(redirectUrl, request.url));
    response.cookies.set(
      pathname.includes('/verify-email') ? CookieType.ConfirmEmail : CookieType.ResetPassword,
      JSON.stringify({ email, token }),
    );
    return response;
  }
};

/**
 * Checks if the requested path is a protected path that requires authentication.
 * @param pathname - The current URL path.
 * @returns A boolean indicating whether the path is protected or not.
 */
export const isProtectedPath = (pathname: string) => {
  return (
    authPaths.includes(pathname) ||
    pathname.includes('/admin/posts/') ||
    pathname.includes('/admin/works/')
  );
};

/**
 * Checks if the user is authenticated. If not, redirects to the login page.
 * If the user is authenticated but the token is expired, also redirects to the login page.
 * @param request - The incoming Next.js request object.
 * @param pathname - The current URL path.
 * @returns A NextResponse object that redirects to the login page if the user is not authenticated or the token is expired.
 */
export const handleAuthRedirect = (request: NextRequest, pathname: string) => {
  const user = request.cookies.get(CookieType.Token);

  if (!user || user.value === 'null') return redirectToLogin(request);

  const decoded = jwtDecode(user.value) as JwtPayload;
  if (isExpiredToken(decoded)) return redirectToLogin(request, pathname);
};

/**
 * Redirects the user to the login page if token expires or home if they logout manually. Optionally, stores the current path and an expiry message in cookies.
 * @param request - The incoming Next.js request object.
 * @param currentPath - The current URL path, optional.
 * @returns A NextResponse object that redirects to the login page.
 */
export const redirectToLogin = (request: NextRequest, currentPath?: string) => {
  // If a current path is provided (i.e., the user was trying to access a protected path, but their token got expired), store it in cookies
  if (currentPath) {
    const response = NextResponse.redirect(new URL(paths.adminLogin, request.url));
    response.cookies.set(CookieType.CurrentUrl, currentPath, { maxAge: 120 });
    response.cookies.set(CookieType.ExpiryMessage, 'Token Expired Please Login');
    response?.cookies.delete(CookieType.Token);
    return response;
  }

  return NextResponse.redirect(new URL(paths.adminLogin, request.url));
};

/**
 * Redirects the user to the admin dashboard if they are already logged in.
 * @param request - The incoming Next.js request object.
 * @returns A NextResponse object that redirects to the admin dashboard if the user is logged in.
 */
export const redirectIfLoggedIn = (request: NextRequest) => {
  console.log('Checking if user is logged in...');
  const user = request.cookies.get(CookieType.Token);

  if (user) {
    return NextResponse.redirect(new URL(paths.adminDashboard, request.url));
  }
};
