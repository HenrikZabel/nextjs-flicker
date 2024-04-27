import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // // const accessToken = cookies().get("accessToken");
  // const accessToken = request.cookies.get("accessToken");
  // const isAuthorized = accessToken?.value;
  // const nextUrl = request.nextUrl;
  // if (!isAuthorized && nextUrl.pathname === "/signup") {
  //   // return NextResponse.redirect(new URL("/signup", request.url));
  //   return NextResponse.next();
  // } else if (!isAuthorized && nextUrl.pathname !== "/login") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // } else if (
  //   isAuthorized &&
  //   (nextUrl.pathname === "/login" || nextUrl.pathname === "/signup")
  // ) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  // return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
