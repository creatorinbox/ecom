"use client";
import React, { useState, useEffect } from "react";
import { Modal, Button, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

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
const AddToCardModal = ({ cardShow, handleAddToCardModalClose, product }: Props) => {
    if (!product) return null;
    const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

const colorOptions = product?.attributes
  ?.filter(attr => attr.attributeValue?.attribute?.name?.toLowerCase() === "color")
  ?.map(attr => attr.attributeValue.value) ?? [];

const sizeOptions = product?.attributes
  ?.filter(attr => attr.attributeValue?.attribute?.name?.toLowerCase() === "size")
  ?.map(attr => attr.attributeValue.value) ?? [];


  useEffect(() => {
    if (colorOptions?.length) setColor(colorOptions[0]);
    if (sizeOptions?.length) setSize(sizeOptions[0]);
  }, [product]);

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Math.min(100, Number(event.target.value)));
    setQuantity(value);
  };

const imagesToShow = Array.isArray(product?.images) && product.images.length > 0
  ? product.images.map(img => img.url)
  : [product?.imageUrl ?? ""];

const categoryNames = Array.isArray(product?.categories)
  ? product.categories.map(c => c.category.name)
  : [];
const tagNames = Array.isArray(product?.tags)
  ? product.tags.map(t => t.tag.name)
  : [];

  return (
    <Modal show={cardShow} onHide={handleAddToCardModalClose} centered className="fade modal-overl mx-auto quickViewModall">
      <Modal.Body>
        <span className="fs-35 close position-absolute top-0 end-0" aria-label="Close" onClick={handleAddToCardModalClose}>
          <i className="pe-7s-close pegk"></i>
        </span>

        <Row>
          <div className="col-4">
            {imagesToShow.map((url, idx) => (
              <Image key={idx} src={url} alt={`Product Image ${idx}`} width={300} height={300} className="img-fluid mb-2" />
            ))}
          </div>
          <div className="col-8">
            <h6>
              <Link className="cd chp" href={`/product/${product.id}`}>
                {product?.name}
              </Link>
            </h6>
            <div className="d-flex mb-2 align-items-center">
              <div className="fs-16 me-1">
                {product?.regularPrice && <del className="text-muted">${product?.regularPrice}</del>}
                <span className="text-danger ms-2">${product?.salePrice}</span>
              </div>
              {product?.badge && <span className="bg-danger text-white p-1">{product.badge}</span>}
            </div>
          </div>

          <div className="text-center mt-4">
            {colorOptions?.length > 0 && (
              <>
                <h6 className="text-uppercase fw-bold mb-3">Color: <span>{color}</span></h6>
                <div className="product-color-list mt-2 gap-2 d-flex align-items-center justify-content-center">
                  {colorOptions.map((clr, idx) => (
                    <OverlayTrigger key={idx} placement="top" overlay={<Tooltip>{clr}</Tooltip>}>
                      <Link
                        href="#!"
                        className={`d-inline-block rounded-circle square-xs ${color === clr ? 'active' : ''}`}
                        style={{ backgroundColor: clr.toLowerCase(), border: '1px solid #ccc' }}
                        onClick={() => setColor(clr)}
                      ></Link>
                    </OverlayTrigger>
                  ))}
                </div>
              </>
            )}

            {sizeOptions?.length > 0 && (
              <>
                <h6 className="text-uppercase fw-bold mt-4">Size: <span>{size}</span></h6>
                <div className="product-color-list size mt-2 gap-2 d-flex align-items-center justify-content-center">
                  {sizeOptions.map((sz, idx) => (
                    <Link key={idx}
                      href="#!"
                      className={`d-inline-block rounded-circle square-xs d-flex align-items-center justify-content-center ${size === sz ? 'active' : ''}`}
                      onClick={() => setSize(sz)}
                    >
                      {sz}
                    </Link>
                  ))}
                </div>
              </>
            )}

            <div className="input-step border border-dark rounded-pill mt-4">
              <button type="button" className="minus material-shadow text-dark fw-bold" onClick={() => handleQuantityChange(-1)}>–</button>
              <input type="number" className="product-quantity fw-bold fs-6" value={quantity} onChange={handleChange} />
              <button type="button" className="plus material-shadow text-dark fw-bold" onClick={() => handleQuantityChange(1)}>+</button>
            </div>

            <div className="my-3">
              <Button
                variant="teal"
                className="text-uppercase rounded-pill min-w-150"
                onClick={async () => {
                  try {
                    const res = await fetch("/api/cart/add", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ productId: product?.id, quantity }),
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
            </div>

            <p className="text-muted mb-1"><span className="text-body">SKU:</span> {product?.sku}</p>

            <p className="text-muted mb-1">
              <span className="text-body">Categories:</span>{" "}
              {categoryNames.length > 0 ? categoryNames.join(", ") : "None"}
            </p>

            <p className="text-muted mb-1">
              <span className="text-body">Tags:</span>{" "}
              {tagNames.length > 0 ? tagNames.join(", ") : "None"}
            </p>

            <Link href={`/product/${product?.id}`} className="btn fs-16 fw-semibold detail_link mt-3">
              View full details <i className="facl facl-right ms-1"></i>
            </Link>
          </div>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default AddToCardModal;
