import { NextResponse } from "next/server";

export function middleware(req) {
  console.log(req.nextUrl.pathname);

  if (!req.nextUrl.pathname.includes("userlist")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.json({ message: "Hello from middleware!" });
}

export const config = {
  matcher: ["/userlist/:path*"],
};
