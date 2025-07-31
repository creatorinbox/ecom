import { NextResponse } from 'next/server';
import { prisma } from "@src/lib/prisma";

// GET: Fetch top 10 products
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      take: 10, // limit to 10
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
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
