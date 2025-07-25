import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const cartItems = await prisma.cartItem.findMany({
      include: { product: true },
    });

    return new Response(JSON.stringify(cartItems), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Error fetching cart" }), {
      status: 500,
    });
  }
}
