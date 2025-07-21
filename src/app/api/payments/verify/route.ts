import { prisma } from "@src/lib/prisma";

import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { razorpayOrderId, razorpayPaymentId, razorpaySignature, amount, orderId } = await req.json();

  const generatedSignature = crypto
    .createHmac("sha256", 'kfVhUIBTMccuFSx8mMHT5oRS')
    .update(`${razorpayOrderId}|${razorpayPaymentId}`)
    .digest("hex");

  const isValid = generatedSignature === razorpaySignature;

  if (!isValid) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  await prisma.payment.create({
    data: {
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      amount,
      status: "paid",
      method: "Razorpay",
      orderId,
    },
  });

  return NextResponse.json({ success: true });
}
