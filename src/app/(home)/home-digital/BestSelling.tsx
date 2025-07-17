"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductModal from "@src/commonsections/ProductModal";
import AddToCardModal from "@src/commonsections/AddToCardModal";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  hoverImage: string;
  oldPrice?: number;
  newPrice: number;
  badge?: string;
};

const ProductCard = ({
  imageUrl,
  hoverImageUrl,
  productName,
  oldPrice,
  newPrice,
  badge,
}: {
  imageUrl: string;
  hoverImageUrl: string;
  productName: string;
  oldPrice?: string | null;
  newPrice: string;
  badge?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState(false);
  const [cardShow, setCardShow] = useState(false);

  return (
    <React.Fragment>
      <Col lg={3} md={4} className="col-6">
        <div
          className="topbar-product-card overlay-hover"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="position-relative overflow-hidden main">
            {badge && (
              <span className="new-label bg-indigo text-white rounded-circle text-center">
                {badge}
              </span>
            )}
            <Image
              src={isHovered ? hoverImageUrl : imageUrl}
              alt="product"
              width={300}
              height={300}
              className="img-fluid"
            />

            {/* Wishlist buttons */}
            <Link
              href="#"
              className="d-lg-none position-absolute"
              style={{ zIndex: 1, top: "10px", left: "10px" }}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Add to Wishlist"
            >
              <i className="facl facl-heart-o text-white"></i>
            </Link>
            <Link
              href="#"
              className="wishlistadd d-none d-lg-flex position-absolute"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Add to Wishlist"
            >
              <i className="facl facl-heart-o text-white"></i>
            </Link>

            {/* Modal buttons */}
            <div className="product-button d-none d-lg-flex flex-column gap-2">
              <Link
                href="#exampleModal"
                className="btn rounded-pill fs-14"
                onClick={() => setShow(true)}
              >
                <span>Quick View</span> <i className="iccl iccl-eye"></i>
              </Link>
              <button
                type="button"
                className="btn rounded-pill fs-14"
                data-bs-target="#cardModal"
                onClick={() => setCardShow(true)}
              >
                <span>Quick Shop</span>
                <i className="iccl iccl-cart"></i>
              </button>
            </div>

            {/* Responsive modal */}
            <div
              className="position-absolute d-lg-none bottom-0 end-0 d-flex flex-column bg-white rounded-pill m-2"
              style={{ zIndex: 1, boxShadow: "1px 1px 1px rgba(0, 0, 0, .1)" }}
            >
              <Link
                href="#exampleModal"
                className="btn responsive-cart rounded-pill fs-14 p-2"
                style={{ width: "36px", height: "36px" }}
                onClick={() => setShow(true)}
              >
                <i className="iccl iccl-eye fw-semibold"></i>
              </Link>
              <button
                type="button"
                className="btn responsive-cart rounded-pill fs-14 p-2"
                style={{ width: "36px", height: "36px" }}
                data-bs-target="#cardModal"
                onClick={() => setCardShow(true)}
              >
                <i className="iccl iccl-cart fw-semibold"></i>
              </button>
            </div>
          </div>

          <div className="mt-3">
            <h6 className="mb-1 fw-semibold fs-14">
              <Link href="/product-detail-layout-01" className="main_link_blue">
                {productName}
              </Link>
            </h6>
            <p className="mb-0 fs-14 text-muted">
              {oldPrice && <del>{oldPrice}</del>}{" "}
              <span className="text-danger">{newPrice}</span>
            </p>
          </div>
        </div>
      </Col>

      <ProductModal show={show} handleClose={() => setShow(false)} />
      <AddToCardModal
        cardShow={cardShow}
        handleAddToCardModalClose={() => setCardShow(false)}
      />
    </React.Fragment>
  );
};

const BestSelling = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products/featuredcollection");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="type_tab_collection kalles-glasses-tab-product pb-4">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-4">
              <h3 className="position-relative text-capitalize fs-24">
                <span>Best Selling</span>
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          {products.length === 0 ? (
            <p className="text-center">No products available.</p>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
               //  imageUrl="/assets/images/home-digital/grid-banner-01.jpg"
                imageUrl={product.imageUrl}
                hoverImageUrl={product.hoverImage}
                productName={product.name}
                oldPrice={product.oldPrice ? `$${product.oldPrice}` : null}
                newPrice={`$${product.newPrice}`}
                badge={product.badge}
              />
            ))
          )}
        </Row>
      </Container>
    </section>
  );
};

export default BestSelling;
