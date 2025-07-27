// File: /app/api/products/liked/route.ts
import { NextResponse } from 'next/server';
import { prisma } from "@src/lib/prisma";

export async function GET() {
  try {
    const likedProducts = await prisma.product.findMany({
      where: { liked: true },
      select: {
        id: true,
        name: true,
        imageUrl: true,
        salePrice: true,
        regularPrice: true,
      },
    });

    return NextResponse.json(likedProducts);
  } catch (error) {
    console.error('Error fetching liked products:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
