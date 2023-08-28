import { NextRequest, NextResponse } from "next/server";
import md5 from "md5";
const userModel = [
  {
    id: 1,
    username: "admin",
    password: md5("admin"),
  },
];

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const isThereAny = userModel.some((item) => item.username === data.username && item.password === md5(data.password));
  if (isThereAny) {
    return NextResponse.json(
      {
        success: true,
        mes: "登录成功",
        data: null,
      },
      {
        headers: {
          "Set-Cookie": "admin-token=123;Path=/",
        },
      }
    );
  } else {
    return NextResponse.json(
      {
        success: false,
        mes: "找不到帐号或密码",
        data: null,
      },
      { status: 500 }
    );
  }
};
