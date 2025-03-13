import { JwtPayload, jwtDecode } from 'jwt-decode';
import { NextRequest, NextResponse } from 'next/server';
import { CookieType } from './config/enums/CookieType';
import { authPaths, noAuthPaths } from './config/constants/urls';
import paths from './config/constants/paths';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.includes('/verify-email')) {
    return extractTokenAndRedirect(request, '/verify-email', CookieType.ConfirmEmail);
  } else if (pathname.includes('/reset-password')) {
    return extractTokenAndRedirect(request, '/reset-password', CookieType.ResetPassword);
  } else if (
    authPaths.includes(pathname) ||
    pathname.includes('/admin/posts/') ||
    pathname.includes('/admin/works/')
  ) {
    const user = request.cookies.get(CookieType.Token);
    if (user && user.value !== 'null') {
      const decoded = jwtDecode(user.value) as JwtPayload;
      if (isExpiredToken(decoded)) {
        console.log('token is expired');
        const response = NextResponse.redirect(new URL(paths.adminLogin, request.url));
        response.cookies.set(CookieType.CurrentUrl, pathname, {
          maxAge: 120,
        });
        response.cookies.set(CookieType.ExpiryMessage, 'Token Expired Please Login', {});
        response?.cookies.delete(CookieType.Token);
        return response;
      }
    } else {
      return NextResponse.redirect(new URL(paths.adminLogin, request.url));
    }
  }

  // go to main page, if logged in user tries to go to noAuth pages like login or sign up
  else if (noAuthPaths.includes(pathname)) {
    const user = request.cookies.get(CookieType.Token);
    if (user) {
      return NextResponse.redirect(new URL(paths.home, request.url));
    }
  }
}

const extractTokenAndRedirect = (request: NextRequest, redirectUrl: string, name: CookieType) => {
  const email = request.nextUrl.searchParams.get('email');
  const token = request.nextUrl.searchParams.get('token');
  if (email && token) {
    //remove token and email from url
    const response = NextResponse.redirect(new URL(redirectUrl, request.url));
    response.cookies.set(name, JSON.stringify({ email, token }), {});
    return response;
  }
};

const isExpiredToken = (decodedToken: JwtPayload) => {
  const ONE_SECOND_IN_MILLISECOND = 1000;
  const currentTime = new Date().getTime();
  const tokenExpiryTime = (decodedToken?.exp ?? 0) * ONE_SECOND_IN_MILLISECOND;
  return currentTime > tokenExpiryTime;
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
