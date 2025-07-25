import { prisma } from "@src/lib/prisma";
import { NextResponse } from "next/server";;

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const order = await prisma.order.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        apartment: data.apartment,
        city: data.city,
        state: data.state,
        country: data.country,
        zipcode: data.zipcode,
        companyName: data.companyName,
        orderNotes: data.orderNotes,
        paymentMethod: 'razorpay',
        totalAmount: data.totalAmount,
        shipping:data.shipping,
        items: {
          create: data.items.map((item: any) => ({
            productId: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        },
      },
    });

    return NextResponse.json({ success: true, orderId: order.id });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "Failed to place order" }, { status: 500 });
  }
}
