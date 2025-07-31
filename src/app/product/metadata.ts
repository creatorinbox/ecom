// 🔸 This file must NOT have "use client"
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  console.log("🧠 generateMetadata is running for product ID:", params.id);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/${params.id}`);
  const product = await res.json();
console.log("metadata",product);
  return {
    title: product.rank_math_title || product.name,
    description: product.rank_math_description || product.shortDescription || "Explore this item",
    keywords: product.rank_math_focus_keyword || "ecommerce, product",
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.imageUrl }],
    },
  };
}
