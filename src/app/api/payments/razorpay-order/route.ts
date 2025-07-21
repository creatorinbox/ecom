import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
    key_id: "rzp_test_8RId0V4Xf3nvQM",
 key_secret: "kfVhUIBTMccuFSx8mMHT5oRS",
  //key_id: process.env.RAZORPAY_KEY_ID!,
  //key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  const { amount, orderId } = await req.json();

  const options = {
    amount: Math.round(amount * 100), // 💸 In paise
    currency: "INR",
    receipt: `order_rcpt_${orderId}`,
    payment_capture: 1,
  };

  try {
    const order = await razorpay.orders.create(options);
    return NextResponse.json({ order });
  } catch (error) {
    console.error("Razorpay creation failed:", error);
    return NextResponse.json({ error: "Unable to create Razorpay order" }, { status: 500 });
  }
}
