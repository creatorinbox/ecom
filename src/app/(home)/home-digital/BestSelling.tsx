"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductModal from "@src/commonsections/ProductModal";
import AddToCardModal from "@src/commonsections/AddToCardModal";
import Image from "next/image";
import Link from "next/link";
interface ProductImage {
  url: string;
}

interface CategoryRelation {
  category: {
    name: string;
  };
}

interface TagRelation {
  tag: {
    name: string;
  };
}

interface AttributeValueRelation {
  value: string;
  attribute: {
    name: string;
  };
}

interface ProductAttribute {
  attributeValue: AttributeValueRelation;
}

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  hoverImage: string;
  regularPrice?: number | null;
  salePrice: number;
  badge?: string | null;
  images?: ProductImage[];
  sku: string;
  shortDescription: string;
  description: string;
  weightKg: string;
  lengthCm: string;
  widthCm: string;
  heightCm: string;
  categories: CategoryRelation[];
  tags: TagRelation[];
  attributes: ProductAttribute[];
};


const BestSelling = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products/bestselling");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    }
    fetchProducts();
  }, []);

  const handleQuickView = (product: Product) => {
     //   alert('te');
       console.log("🔍 Quick view clicked for:", product?.name);
console.log('acive',product);
    setActiveProduct(product);
    setShowModal(true);
  };

  const handleQuickShop = (product: Product) => {
    //alert('te');
    setActiveProduct(product);
    setShowCartModal(true);
  };

  return (
    <section className="type_tab_collection kalles-glasses-tab-product pb-4">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-4">
              <h3 className="position-relative text-capitalize fs-24">
                {products.length > 0 && (
                  <div>
                                  <span>Best Selling</span>

 </div>
)}
              </h3>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {products.length === 0 ? (
            <p className="text-center">No products available.</p>
          ) : (
            products.map((product) => (
              <Col lg={3} md={4} className="col-6" key={product.id}>
                <div
                  className="topbar-product-card overlay-hover"
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                >
                  <div className="position-relative overflow-hidden main">
                    {product.badge && (
                      <span className="new-label bg-indigo text-white rounded-circle text-center">
                        {product.badge}
                      </span>
                    )}
                    <Image
                      src={product.hoverImage || product.imageUrl}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="img-fluid"
                    />

                    {/* Wishlist icons */}
                    <Link
                      href="#"
                      className="d-lg-none position-absolute"
                      style={{ zIndex: 1, top: "10px", left: "10px" }}
                      title="Add to Wishlist"
                    >
                      <i className="facl facl-heart-o text-white"></i>
                    </Link>
                    <Link
                      href="#"
                      className="wishlistadd d-none d-lg-flex position-absolute"
                      title="Add to Wishlist"
                    >
                      <i className="facl facl-heart-o text-white"></i>
                    </Link>

                    {/* Quick View & Quick Shop */}
<div className="product-button d-flex">
                      <button
                        className="btn rounded-pill fs-14"
                        onClick={() => handleQuickView(product)}
                      >
                        <span>Quick View</span> <i className="iccl iccl-eye"></i>
                      </button>
                      <button
                        type="button"
                        className="btn rounded-pill fs-14"
                        onClick={() => handleQuickShop(product)}
                      >
                        <span>Quick Shop</span> <i className="iccl iccl-cart"></i>
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mt-3">
                                  

                    <h6 className="mb-1 fw-semibold fs-14">
                      <Link href={`/product/${product.id}`} className="main_link_blue">
                        {product.name}
                      </Link>
                    </h6>

                    <p className="mb-0 fs-14 text-muted">
                      {product.regularPrice && <del>${product.regularPrice}</del>}{" "}
                      <span className="text-danger">${product.salePrice}</span>
                    </p>
                  </div>
                </div>
              </Col>
            ))
          )}
        </Row>

        {/* Modals */}
        {activeProduct && (
          <>
            <ProductModal
              show={showModal}
              handleClose={() => setShowModal(false)}
              product={activeProduct}
            />
            <AddToCardModal
              cardShow={showCartModal}
              handleAddToCardModalClose={() => setShowCartModal(false)}
                           product={activeProduct}

            />
          </>
        )}
      </Container>
    </section>
  );
};

export default BestSelling;
