// app/product/[id]/page.tsx
import ProductDetailsContent from "./ProductDetailsContent";
// app/product/[id]/page.tsx

// app/product/[id]/page.tsx
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/slug/${slug}`);

  if (!response.ok) {
    return {
      title: "Product Not Found - Kalles",
      description: "Sorry, the requested product could not be found.",
    };
  }

  const product = await response.json();

  return {
    title: product.rank_math_title || product.name,
    description: product.rank_math_description || product.shortDescription,
    keywords: product.rank_math_focus_keyword || "product, ecommerce",
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetailsContent slug={slug} />;
}

