"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import ProductModal from "./ProductModal";
import AddToCardModal from "./AddToCardModal";

import "flickity/css/flickity.css";
interface ProductImage {
  url: string;
}
interface TagRelation {
  tag: { name: string };
}
interface CategoryRelation {
  category: { name: string };
}
interface AttributeValue {
  value: string;
  attribute: {
    name: string;
  };
}
interface ProductAttribute {
  attributeValue: AttributeValue;
}

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  hoverImage: string;
  regularPrice?: number | null;
  salePrice: number;
  badge?: string | null;
  images?: ProductImage[];
  sku: string;
  tags: TagRelation[];
  categories: CategoryRelation[];
  shortDescription: string;
  description: string;
  weightKg: string;
  lengthCm: string;
  widthCm: string;
  heightCm: string;
  attributes?: ProductAttribute[];
}
type Props = {
  cardShow: boolean;
  handleAddToCardModalClose: () => void;
  product: Product | null; // 👈 allow null
};

const LikeProducts = () => {
  const flickityRef = useRef<Flickity | null>(null);
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showQuickView, setShowQuickView] = useState(false);
  const [showQuickShop, setShowQuickShop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const FlickityClass = require("flickity");
      flickityRef.current = new FlickityClass(".slideshow", {
        contain: true,
        wrapAround: true,
        groupCells: "100%",
        pageDots: false,
        prevNextButtons: false,
        autoPlay: false,
      });
    }

    return () => {
      if (flickityRef.current) {
        flickityRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const fetchLikedProducts = async () => {
      try {
        const res = await fetch("/api/products/liked");
        const data = await res.json();
        setLikedProducts(data);
      } catch (err) {
        console.error("Failed to fetch liked products", err);
      }
    };

    fetchLikedProducts();
  }, []);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setShowQuickView(true);
  };

  const handleQuickShop = (product: Product) => {
    setSelectedProduct(product);
    setShowQuickShop(true);
  };

  return (
    <React.Fragment>
      <Row className="mt-4 my-sm-4 pt-2 py-sm-2 slideshow">
        {likedProducts.map((product) => (
          <Col md={3} className="col-6 px-lg-12 px-2" key={product.id}>
            <div className="topbar-product-card pb-3">
              <div className="position-relative overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="img-fluid"
                  width={500}
                  height={500}
                />
                <div className="product-button d-none d-lg-flex flex-column gap-2">
                  <Button onClick={() => handleQuickView(product)}>Quick View</Button>
                  <Button onClick={() => handleQuickShop(product)}>Quick Shop</Button>
                </div>
              </div>
              <Link href={`/product/${product.id}`} className="mt-3 d-block">
                <h6 className="mb-1">{product.name}</h6>
                <p className="mb-0 fs-14 text-muted">
                  <span>${product.salePrice}</span>
                </p>
              </Link>
            </div>
          </Col>
        ))}
      </Row>

      <ProductModal
        product={selectedProduct}
        show={showQuickView}
        handleClose={() => setShowQuickView(false)}
      />
      {selectedProduct && (<AddToCardModal
        product={selectedProduct}
        cardShow={showQuickShop}
        handleAddToCardModalClose={() => setShowQuickShop(false)}
      />)}
    </React.Fragment>
  );
};

export default LikeProducts;
