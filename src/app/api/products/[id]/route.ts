import { NextResponse } from "next/server";
import { prisma } from "@src/lib/prisma";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: Number(params.id) },
     include: {
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        images: true,
        attributes: {
          include: {
            attributeValue: {
              include: {
                attribute: true,
              },
            },
          },
        },
      },
  });

  if (!product) return NextResponse.json({ error: "Not Found" }, { status: 404 });

  return NextResponse.json(product);
}
