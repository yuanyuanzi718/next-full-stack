import { prisma } from "@/db";
import { NextRequest, NextResponse } from "next/server";

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
