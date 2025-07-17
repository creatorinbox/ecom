import { NextResponse } from "next/server";
import { prisma } from "@src/lib/prisma";

export async function GET() {
  try {
   // const products = await prisma.product.findMany();
    const products = await prisma.product.findMany({ where: { isFeatured: true } });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json({ error: "Error loading products" }, { status: 500 });
  }
}
