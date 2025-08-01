"use client";

import "@assets/scss/bootstrap.scss";
import "@assets/scss/app.scss";
import "@assets/icons/font-icon.css";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CartProvider } from "@src/context/CartContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const [metaTitle, setMetaTitle] = useState("Kalles - Clean, Versatile, Responsive Bootstrap 5 & Nextjs Theme");
  const [metaDescription, setMetaDescription] = useState("Generated by Kalles — explore our modern product catalog.");

  useEffect(() => {
    const productRegex = /^\/product\/(\d+)$/;
    const match = pathname?.match(productRegex);
    const productId = match?.[1];

    if (productId) {
      fetch(`/api/products/${productId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.rank_math_title || data?.name) {
            setMetaTitle(data.rank_math_title || data.name);
          }
          if (data?.rank_math_description || data?.shortDescription) {
            setMetaDescription(data.rank_math_description || data.shortDescription);
          }
        })
        .catch(() => {
          setMetaTitle("Product Details | Kalles");
          setMetaDescription("Explore this product’s features and specifications.");
        });
    }
  }, [pathname]);

  return (
    <html lang="en">
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
