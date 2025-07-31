import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@src/lib/prisma";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
const slugword = `/product/${slug}/`;

  const product = await prisma.product.findFirst({
    where: { URL: slugword }, // Match against your URL column
    include: {
      categories: { include: { category: true } },
      tags: { include: { tag: true } },
      images: true,
      attributes: {
        include: {
          attributeValue: {
            include: { attribute: true },
          },
        },
      },
    },
  });

  if (!product) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
