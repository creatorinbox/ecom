import { NextResponse } from "next/server";
import { prisma } from "@src/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: { isBestSelling: true },
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

    return NextResponse.json(products);
  } catch (error) {
    console.error("❌ Failed to fetch products:", error);
    return NextResponse.json({ error: "Error loading products" }, { status: 500 });
  }
}
