import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) return new Response(JSON.stringify({ error: "Missing order ID" }), { status: 400 });

  const order = await prisma.order.findUnique({
    where: { id: Number(id) },
    include: { items: true }
  });

  if (!order) return new Response(JSON.stringify({ error: "Order not found" }), { status: 404 });

  return new Response(JSON.stringify(order), { status: 200 });
}
