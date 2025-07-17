import { NextResponse } from "next/server";
import { prisma } from "@src/lib/prisma";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: Number(params.id) },
    include: { images: true }
  });

  if (!product) return NextResponse.json({ error: "Not Found" }, { status: 404 });

  return NextResponse.json(product);
}
