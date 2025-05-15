import { NextRequest } from 'next/server';
import { noAuthPaths } from './config/constants/urls';
import { isProtectedPath, handleAuthRedirect, redirectIfLoggedIn } from './utils/redirect';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // if (pathname.includes('/verify-email') || pathname.includes('/reset-password')) {
  //   return handleTokenRedirect(request, pathname);
  // }

  if (isProtectedPath(pathname)) {
    return handleAuthRedirect(request, pathname);
  }

  if (noAuthPaths.includes(pathname)) {
    return redirectIfLoggedIn(request);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - favicons (favicons folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|favicons|images).*)',
  ],
};
