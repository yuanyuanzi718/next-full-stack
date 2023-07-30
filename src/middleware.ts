import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // 进入管理后台
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // 且不是进登录页
    if (!request.nextUrl.pathname.startsWith("/admin/login")) {
      if (request.cookies.get("admin-token")) {
        // 已经登录了
      } else {
        // 跳转登录页
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }
    }
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }
