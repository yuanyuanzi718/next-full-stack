import { prisma } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest, { params }: any) => {
  const { id } = params;
  const data = await req.json();
  await prisma.article.update({
    where: { id },
    data,
  });
  return NextResponse.json({
    success: true,
    errorMessage: "修改成功",
  });
};

export const DELETE = async (req: NextRequest, { params }: any) => {
  const { id } = params;
  await prisma.article.delete({
    where: { id },
  });
  return NextResponse.json({
    success: true,
    errorMessage: "删除成功",
  });
};

export const GET = async (req: NextRequest, { params }: any) => {
  const { id } = params;
  const data = await prisma.article.findMany({
    where: {
      id: id,
    },
  });
  return NextResponse.json({
    success: true,
    errorMessage: "",
    data: data[0],
  });
};
