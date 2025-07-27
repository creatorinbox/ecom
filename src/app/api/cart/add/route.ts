import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { productId, quantity = 1 } = body;

  if (!productId) {
    return new Response(JSON.stringify({ error: "Missing productId" }), {
      status: 400,
    });
  }

  try {
    const cartItem = await prisma.cartItem.create({
      data: {
        productId: Number(productId),
        quantity: Number(quantity),
      },
    });

    return new Response(JSON.stringify({ cartItem }), { status: 200 });
  } catch (err) {
    console.error("❌ Add to cart error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
