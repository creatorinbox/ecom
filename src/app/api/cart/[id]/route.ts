import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// 💡 This matches the Next.js App Router expectations perfectly
export async function DELETE(_: Request, { params }: { params: { id: string } }) {

  //const { id } = context.params;
 // const cartItemId = parseInt(id, 10);

  if (isNaN(Number(params.id))) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    await prisma.cartItem.delete({ where: { id: Number(params.id) } });

    return NextResponse.json({ success: true, message: "Item deleted" });
  } catch (err) {
    console.error("Delete error:", err);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
