import { NextResponse,NextRequest } from "next/server";
import { prisma } from "@src/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
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
