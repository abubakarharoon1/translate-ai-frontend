// middleware.ts (at project root)
import { NextRequest, NextResponse } from 'next/server';

function decode(token: string) {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(Buffer.from(payload.replace(/-/g,'+').replace(/_/g,'/'), 'base64').toString());
  } catch { return null; }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin')) {
    const token = req.cookies.get('access_token')?.value;
    const payload = token ? decode(token) : null;
    const role = payload?.role;

    if (role !== 'superadmin') {
      const url = new URL('/auth/login', req.url);
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
