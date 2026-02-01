// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // only handle root landing "/"
  if (pathname !== "/") return NextResponse.next();

  const ua = req.headers.get("user-agent") || "";
  const isMobile =
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(ua);

  // Mobile -> go straight to homepage
  if (isMobile) {
    const url = req.nextUrl.clone();
    url.pathname = "/site/home";
    return NextResponse.redirect(url);
  }

  // Desktop/laptop -> keep landing
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
