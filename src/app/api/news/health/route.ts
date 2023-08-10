import { prisma } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const data = await prisma.article.findMany({
    where: {
      newsType: "health",
    },
    orderBy: {
      createdAt: "desc", // 创建时间倒序排列
    },
  });

  return NextResponse.json({
    success: true,
    errorMessage: "",
    data: data,
  });
};
