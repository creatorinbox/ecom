"use client";
import React, { useEffect, useState } from "react";
import { Container, Nav, Row, Tab } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import ProductModal from "@src/commonsections/ProductModal";
import AddToCardModal from "@src/commonsections/AddToCardModal";

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


const FeaturedCard = ({ item }: { item: Product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState(false);
  const [cardShow, setCardShow] = useState(false);

  return (
    <div className="col">
      <div
        className="topbar-product-card overlay-hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="position-relative overflow-hidden main">
          {item.badge && (
            <span className="new-label bg-indigo text-white rounded-circle text-center">
              {item.badge}
            </span>
          )}
          <Image
            src={isHovered ? item.hoverImage : item.imageUrl}
            alt={item.name}
            width={300}
            height={300}
            className="img-fluid"
          />
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
              onClick={() => setCardShow(true)}
            >
              <span>Quick Shop</span> <i className="iccl iccl-cart"></i>
            </button>
          </div>
        </div>
        <div className="mt-3">
          <h6 className="mb-1 fw-semibold fs-14">
            <Link href="/product-detail-layout-01" className="main_link_blue">
              {item.name}
            </Link>
          </h6>
          <p className="mb-0 fs-14 text-muted">
            {item.regularPrice && <del>${item.regularPrice}</del>}{" "}
            <span className="text-danger">${item.salePrice}</span>
          </p>
        </div>
      </div>
      <ProductModal show={show} handleClose={() => setShow(false)}   product={item}/>
      <AddToCardModal
        cardShow={cardShow}
        product={item}
        handleAddToCardModalClose={() => setCardShow(false)}
      />
    </div>
  );
};

const FeaturedCollection = () => {
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
    <section className="type_tab_collection kalles-glasses-tab-product">
      <Container>
        <Row className="justify-content-center">
          <div className="col-lg-7">
            <div className="text-center mb-3">
              <h3 className="position-relative flex fw-semibold">
                <span>Featured Collection</span>
              </h3>
            </div>
          </div>
        </Row>
        <Tab.Container id="custom-tabs-example" defaultActiveKey="accessories-tab">
          <Nav className="tab_header gap-lg-4 justify-content-center mt-4 mb-0">
            <Nav.Item><Nav.Link eventKey="accessories-tab" className="rounded-pill">Accessories</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="smart-tv-tab" className="rounded-pill">Smart TV</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="camera-tab" className="rounded-pill">Camera</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="digital-tab" className="rounded-pill">Digital</Nav.Link></Nav.Item>
          </Nav>
          <Tab.Content className="mt-4">
            {["accessories-tab", "smart-tv-tab", "camera-tab", "digital-tab"].map((tabKey) => (
              <Tab.Pane eventKey={tabKey} key={tabKey}>
                <div className="row g-4 row-cols-2 row-cols-sm-3 row-cols-lg-4">
                  {products.map((item) => (
                    <FeaturedCard key={item.id} item={item} />
                  ))}
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default FeaturedCollection;
