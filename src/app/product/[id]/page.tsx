// app/product/[id]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Row, Col } from "react-bootstrap";
import ProductDetailLayout01Tab from "./ProductDetailLayout01Tab";
import ProductSwiper from "./ProductSwiper";
import MobileAccordion from "./MobileAccordion";

import BreadCrumb from "@src/commonsections/BreadCrumb";
import ViewedProduct from "@src/commonsections/ViewedProducts";
import LikeProducts from "@src/commonsections/LikeProducts";
import FooterPage from "@src/components/Footer";
import BottomProduct from "@src/commonsections/Bottomproduct";
import TopBanner from "@src/components/Headers/TopBanner";
import Header from "@src/components/Headers/Header";
import PopupPage from "@src/components/Popup";
import ShoppingCardModal from "@src/commonsections/ShoppingCardModal";
import HeadTitle from "@src/commonsections/HeadTitle";

import des2 from "@assets/images/single-product/des-02.jpg";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [shoppingShow, setShoppingShow] = useState(false);
  const [product, setProduct] = useState<any>(null);

  const handleShoppingClose = () => setShoppingShow(false);
  const handleShoppingShow = () => setShoppingShow(true);

  // ✅ Fetch product data based on dynamic route param
  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product", err);
      }
    }

    if (id) fetchProduct();
  }, [id]);

  if (!product) return <div className="p-10 text-center text-gray-500">Loading product...</div>;

  return (
    <React.Fragment>
      <HeadTitle title={product.name || "Product Details"} />
      <TopBanner />
      <Header />

      <BreadCrumb title={product?.category || "Product"} subTitle={product.name} />

      {/* ✅ Pass product to dynamic components */}
      <ProductSwiper handleShoppingShow={handleShoppingShow} product={product} />
      <ProductDetailLayout01Tab product={product} />
      <MobileAccordion product={product} />

      <section className="pt-5 py-lg-5 mb-3">
        <div className="container">
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center mb-lg-4">
                <h3 className="pb-lg-2">You may also like</h3>
              </div>
            </Col>
          </Row>
          <LikeProducts />
        </div>
        {/* <div className="container">
          <Row className="justify-content-center mt-3 mt-lg-5 pt-2">
            <Col lg={7}>
              <div className="text-center mb-lg-4 pb-lg-2">
                <h3>Recently viewed products</h3>
              </div>
            </Col>
          </Row>
          <ViewedProduct />
        </div> */}
      </section>

      <FooterPage />
      <PopupPage />

      <BottomProduct
        img={des2}
        colorSize={product.colorSize || "Grey / S"}
        name={product.name}
        colorSize2={product.colorSize || "Grey / S"}
        price={`$${product.price}`}
        handleShoppingShow={handleShoppingShow}
      />
      <ShoppingCardModal
        shoppingShow={shoppingShow}
        handleShoppingClose={handleShoppingClose}
          product={product}
      />
    </React.Fragment>
  );
}

//export default ProductDetails