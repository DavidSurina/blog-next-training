import { NextResponse } from "next/server";

// CODE to run on any request on page
export function middleware(req) {
  return NextResponse.next();
}

// to filter requests that trigger the middleware
// more about middleware https://nextjs.org/docs/app/building-your-application/routing/middleware
export const config = {
  matcher: "/news",
};
