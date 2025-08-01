"use client";
import React, {useEffect, useState } from "react";
import { Modal, Button, Row,  Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import trust from '@assets/images/trust_img2.png'
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
  attributes?: ProductAttribute[];
    URL?:string;

};
type Props = {
  show: boolean;
  handleClose: () => void;
  product: Product | null; // 👈 allow null
};
const ProductModal = ({ show, handleClose,product }: Props) => {
      if (!product) return null;

    const [selectedColor, setSelectedColor] = useState('Pink');
    const [size, setSize] = useState("XS")
    const [quantity, setQuantity] = useState(1);
const categoryNames = Array.isArray(product?.categories)
  ? product.categories.map((c) => c.category.name)
  : [];

const tagNames = Array.isArray(product?.tags)
  ? product.tags.map((t) => t.tag.name)
  : [];

const colorOptions = Array.isArray(product?.attributes)
  ? product.attributes
      .filter((attr: ProductAttribute) =>
        attr?.attributeValue?.attribute?.name?.toLowerCase() === "color"
      )
      .map((attr) => attr.attributeValue.value)
  : [];

const sizeOptions = Array.isArray(product?.attributes)
  ? product.attributes
      .filter((attr: ProductAttribute) =>
        attr?.attributeValue?.attribute?.name?.toLowerCase() === "size"
      )
      .map((attr) => attr.attributeValue.value)
  : [];


// Inside your ProductModal component
useEffect(() => {
  if (product) {
    console.log("🧾 Product data:", product);
  }
}, [product]);

//     const colorOptions = product?.attributes
//   ?.filter(attr => attr.attribute.name.toLowerCase() === "color")
//   ?.map(attr => attr.value);

// const sizeOptions = product?.attributes
//   ?.filter(attr => attr.attribute.name.toLowerCase() === "size")
//   ?.map(attr => attr.value);

 const imagesToShow =
  Array.isArray(product?.images) && product.images.length > 0
    ? product.images.map((img) => img.url)
    : [product?.imageUrl ?? "", product?.hoverImage ?? ""];

    const handleColorClick = (color: string) => {
        setSelectedColor(color); // Update selected color
    };
    const handleSizeClick = (size: any) => {
        setSize(size); // Update selected color
    };

    // Handler for incrementing quantity
    const handleIncrements = () => {
        setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 100));
    };

    // Handler for decrementing quantity
    const handleDcrements = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
    };

    // Handler for manual input change
    const handleChange = (event: any) => {
        const value = Math.max(0, Math.min(100, Number(event.target.value)));
        setQuantity(value);
    };

    const swiperParamss = {
        loop: true, // Enable looping
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        spaceBetween: 30,
        slidesPerView: 1,
        pagination: {
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        fadeEffect: {
            crossFade: true,
        },
    }

    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Body className="p-0">
                    <button type="button" className="btn-close position-absolute end-0 top-0 m-2" style={{ zIndex: "99" }} data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                    <Row>
                        <Col md={7}>
                            <div className="images">
                               <Swiper loop spaceBetween={20} slidesPerView={1} autoplay={{ delay: 2500 }}>
              {imagesToShow.map((url, index) => (
                <SwiperSlide key={index}>
                  <div className="position-relative overflow-hidden">
                    {product?.badge && (
                      <span className="new-label bg-danger text-white rounded-circle">{product.badge}</span>
                    )}
                    <Image
                      src={`/downloads${url}`}
                      alt={`${product?.name}-${index}`}
                      width={500}
                      height={500}
                      className="product-view-img w-100 object-fit-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
                            </div>
                        </Col>


                        <Col md={5} className="overflow-y-auto overflow-x-hidden no-scroll" style={{ height: '624px'}} >
                            <div className="pt-30 ps-4 ps-md-0 pe-4">
                                <h6 className="fs-20 mb-2"><Link href={`/product/${product?.id}`} className="main_link">La Bohème
                                   {product?.name}</Link></h6>

                                <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
                                    <p className="mb-0 fs-16 text-muted flex-grow-1">
                                    <del>${product?.regularPrice}</del>&nbsp;
                                        <span className="text-danger">${product?.salePrice}</span>
                                    </p>
                                    <Link href="/product/{product?.id}" className="text-body flex-shrink-0">
                                        <div className="kalles-rating-result">
                                            <span className="kalles-rating-result__pipe">
                                                <span className="kalles-rating-result__start"></span>&nbsp;
                                                <span className="kalles-rating-result__start"></span>&nbsp;
                                                <span className="kalles-rating-result__start"></span>&nbsp;
                                                <span className="kalles-rating-result__start active"></span>&nbsp;
                                                <span className="kalles-rating-result__start de-active"></span>&nbsp;
                                            </span>
                                            <span className="kalles-rating-result__number">(12 reviews)</span>&nbsp;
                                        </div>
                                    </Link>
                                </div>
                                <div
  className="text-muted"
  dangerouslySetInnerHTML={{ __html: product?.shortDescription || '' }}
></div>

                                {/* <p className="text-muted">{product?.shortDescription}</p> */}

                                {/* <h6 className="text-uppercase mb-3">Color: <span>{selectedColor}</span></h6>
                                <div className="product-color-list mt-2 gap-2 d-flex align-items-center">
                                    <OverlayTrigger
                                        key="tooltip-pink"
                                        placement="top"
                                        overlay={<Tooltip id={`tooltip-pink`}>Pink</Tooltip>}
                                    >
                                        <Link
                                            href="#!"
                                            className={`d-inline-block bg_color_pink rounded-circle square-xs ${selectedColor === 'Pink' ? 'active' : ''}`}
                                            onClick={() => handleColorClick('Pink')}
                                        ></Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key="tooltip-black"
                                        placement="top"
                                        overlay={<Tooltip id="tooltip-black">Black</Tooltip>}
                                    >
                                        <Link
                                            href="#!"
                                            className={`d-inline-block bg-dark rounded-circle square-xs ${selectedColor === 'Black' ? 'active' : ''}`}
                                            onClick={() => handleColorClick('Black')}
                                        ></Link>
                                    </OverlayTrigger>
                                </div> */}
                              {colorOptions?.length > 0 && (
  <>
    <h6 className="text-uppercase mb-3">Color: <span>{selectedColor}</span></h6>
    <div className="product-color-list mt-2 gap-2 d-flex align-items-center">
      {colorOptions.map((color, idx) => (
        <OverlayTrigger
          key={idx}
          placement="top"
          overlay={<Tooltip id={`tooltip-${color}`}>{color}</Tooltip>}
        >
          <Link
            href="#!"
            className={`d-inline-block rounded-circle square-xs ${selectedColor === color ? 'active' : ''}`}
            style={{ backgroundColor: color.toLowerCase(), border: '1px solid #ccc' }}
            onClick={() => handleColorClick(color)}
          ></Link>
        </OverlayTrigger>
      ))}
    </div>
  </>
)}


                                <div className="mt-4 pt-2">
                                    {/* <h6 className="text-uppercase mb-3">Size: <span>{size}</span></h6>
                                    <div className="product-color-list size mt-2 gap-2 d-flex align-items-center">
                                        <Link href="#!"
                                            className={`d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ${size === "XS" ? 'active' : ""}`}
                                            onClick={() => handleSizeClick("XS")}
                                        >XS</Link>

                                        <Link href="#!"
                                            className={`d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ${size === "S" ? "active" : ""}`}
                                            onClick={() => handleSizeClick("S")}
                                        >S</Link>

                                        <Link href="#!"
                                            className={`d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ${size === "M" ? "active" : ""}`}
                                            onClick={() => handleSizeClick("M")}
                                        >M</Link>
                                    </div> */}
                                  {sizeOptions?.length > 0 && (
  <>
    <h6 className="text-uppercase mb-3">Size: <span>{size}</span></h6>
    <div className="product-color-list size mt-2 gap-2 d-flex align-items-center">
      {sizeOptions.map((sz, idx) => (
        <Link
          key={idx}
          href="#!"
          className={`d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ${size === sz ? 'active' : ''}`}
          onClick={() => handleSizeClick(sz)}
        >
          {sz}
        </Link>
      ))}
    </div>
  </>
)}

                                </div>

                                <div className="d-flex flex-wrap align-items-center gap-2 mt-4">
                                    <div className="input-step border border-dark rounded-pill">
                                        <button className="minus material-shadow text-dark fw-bold" onClick={handleDcrements}> <i className="facl facl-minus"></i> </button>
                                        <input type="number" className="product-quantity fw-bold fs-6" value={quantity} min="0" max="100" onChange={handleChange} />
                                        <button className="plus material-shadow text-dark fw-bold" onClick={handleIncrements}><i className="facl facl-plus"></i></button>
                                    </div>
                                    {/* <Button variant="teal" className="text-uppercase rounded-pill min-w-150">
                                        Add to Cart
                                    </Button> */}
                                    <Button
  variant="teal"
  className="text-uppercase rounded-pill min-w-150"
  onClick={async () => {
    try {
      const res = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product?.id,
          quantity,
        }),
      });

      if (!res.ok) throw new Error("Add to cart failed");

      alert("🛒 Product added to cart!");
    } catch (err) {
      alert("❌ Error adding to cart");
      console.error(err);
    }
  }}
>
  Add to Cart
</Button>

                                    <div className="product_wishlist square-40 rounded-circle border border-dark bg-transparent text-center" style={{ lineHeight: '40px' }}>
                                        <Link href="#"><i className="facl facl-heart-o"></i></Link>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Image src={trust} alt="TrustImg" className="img-fluid" />
                                </div>
                                <div className="mt-4">
                                    <p className="text-muted mb-1"><span className="text-body">SKU:</span> {product?.sku}</p>
                                   <p className="text-muted mb-1">
  <span className="text-body">Categories:</span>{" "}
 {categoryNames.map((cat, idx) => (
  <React.Fragment key={idx}>
    {idx > 0 && ", "}
    <Link href={`/category/${encodeURIComponent(cat)}`} className="main_link text-muted">
      {cat}
    </Link>
  </React.Fragment>
))}

</p>

<p className="text-muted mb-1">
  <span className="text-body">Tags:</span>{" "}
 {tagNames.map((tag, idx) => (
  <React.Fragment key={idx}>
    {idx > 0 && ", "}
    <Link href={`/tag/${encodeURIComponent(tag)}`} className="main_link text-muted">
      {tag}
    </Link>
  </React.Fragment>
))}
</p>


                                    {/* <p className="text-muted mb-1"><span className="text-body">Categories:</span> <Link href="#!" className="main_link text-muted">Accessories</Link>, <a href="#!" className="main_link text-muted">All</a>, <a href="#!" className="main_link text-muted">Best seller</a>, <a href="#!" className="main_link text-muted">New
                                        Arrival</a>, <Link href="#!" className="main_link text-muted">Sale</Link>, <Link href="#!" className="main_link text-muted">Watches</Link>, <a href="#!" className="main_link text-muted">Women</a></p>
                                    <p className="text-muted mb-1"><span className="text-body">Tags:</span> <Link href="#!" className="main_link text-muted">Color Black</Link>, <a href="#!" className="main_link text-muted">Color
                                        Pink</a>, <Link href="#!" className="main_link text-muted">Price $7-$50</Link>, <Link href="#!" className="main_link text-muted">Vendor Kalles</Link>, <a href="#!" className="main_link text-muted">Watch</a>,
                                        <Link href="#!" className="main_link text-muted">Women</Link>
                                    </p> */}
                                   

                                </div>
                                <div>
                                    <div className="social-share mt-4 mb-3">
                                        <Link href="https://www.facebook.com/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="at-icon at-icon-facebook">
                                                <g>
                                                    <path d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z" fillRule="evenodd"></path>
                                                </g>
                                            </svg>
                                        </Link>
                                        <Link href="https://twitter.com/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="at-icon at-icon-twitter">
                                                <g>
                                                    <path d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336" fillRule="evenodd"></path>
                                                </g>
                                            </svg>
                                        </Link>
                                        <Link href="https://www.google.com/gmail/about">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="at-icon at-icon-email kalles-social-media__btn">
                                                <g>
                                                    <g fillRule="evenodd"></g>
                                                    <path d="M27 22.757c0 1.24-.988 2.243-2.19 2.243H7.19C5.98 25 5 23.994 5 22.757V13.67c0-.556.39-.773.855-.496l8.78 5.238c.782.467 1.95.467 2.73 0l8.78-5.238c.472-.28.855-.063.855.495v9.087z">
                                                    </path>
                                                    <path d="M27 9.243C27 8.006 26.02 7 24.81 7H7.19C5.988 7 5 8.004 5 9.243v.465c0 .554.385 1.232.857 1.514l9.61 5.733c.267.16.8.16 1.067 0l9.61-5.733c.473-.283.856-.96.856-1.514v-.465z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </Link>
                                        <Link href="https://www.pinterest.com/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="at-icon at-icon-pinterest_share">
                                                <g>
                                                    <path d="M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z" fillRule="evenodd"></path>
                                                </g>
                                            </svg>
                                        </Link>
                                        <Link href="https://www.messenger.com">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="at-icon at-icon-messenger">
                                                <g>
                                                    <path d="M16 6C9.925 6 5 10.56 5 16.185c0 3.205 1.6 6.065 4.1 7.932V28l3.745-2.056c1 .277 2.058.426 3.155.426 6.075 0 11-4.56 11-10.185C27 10.56 22.075 6 16 6zm1.093 13.716l-2.8-2.988-5.467 2.988 6.013-6.383 2.868 2.988 5.398-2.987-6.013 6.383z" fillRule="evenodd"></path>
                                                </g>
                                            </svg>
                                        </Link>
                                    </div>
{product?.URL && (
  <Link href={product.URL} className="fw-medium detail_link">
    View full details<i className="facl facl-right ms-1"></i>
  </Link>
)}                                </div>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}
export default ProductModal