import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const cartItemId = parseInt(params.id, 10);

  if (isNaN(cartItemId)) {
    return new Response(JSON.stringify({ error: "Invalid cart item ID" }), {
      status: 400,
    });
  }

  try {
    await prisma.cartItem.delete({
      where: { id: cartItemId },
    });

    return new Response(JSON.stringify({ message: "Cart item deleted" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Error deleting cart item" }), {
      status: 500,
    });
  }
}
