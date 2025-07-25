"use client";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

type CartItem = {
  id: number;
  quantity: number;
  product: {
    id: number;
    name: string;
    imageUrl: string;
    regularPrice: number;
  };
};

const CartDetail = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    fetch("/api/cart/items")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  const updateQty = (index: number, qty: number) => {
    setCart((prev) =>
      prev.map((item, i) => (i === index ? { ...item, quantity: qty } : item))
    );
  };

  return (
    <React.Fragment>
      <Row className="d-none d-lg-flex border-bottom">
        <Col md={6}><h6>PRODUCT</h6></Col>
        <Col md={2}><h6>PRICE</h6></Col>
        <Col md={2}><h6 className="text-center">QUANTITY</h6></Col>
        <Col md={2}><h6 className="text-end">TOTAL</h6></Col>
      </Row>

      {cart.map((item, index) => (
        <Row key={item.id} className="align-items-center py-3 border-bottom g-0">
          <Col md={6}>
            <div className="d-flex gap-3 align-items-center">
              <Image src={item.product.imageUrl} alt="Product" width={80} height={80} />
              <div>
                <h6 className="fs-16 mb-2">{item.product.name}</h6>
              </div>
            </div>
          </Col>

          <Col md={2}><p className="text-muted">₹{item.product.regularPrice}</p></Col>

          <Col md={2}>
            <div className="input-step border border-dark rounded-pill">
              <button onClick={() => updateQty(index, Math.max(item.quantity - 1, 1))}>–</button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQty(index, Number(e.target.value))}
              />
              <button onClick={() => updateQty(index, Math.min(item.quantity + 1, 100))}>+</button>
            </div>
          </Col>

          <Col md={2} className="text-end">
            ₹{item.quantity * item.product.regularPrice}
          </Col>
        </Row>
      ))}
    </React.Fragment>
  );
};

export default CartDetail;
