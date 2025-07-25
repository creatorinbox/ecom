"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
//import logo from "@assets/images/logo.png";

const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
};

const amountInWords = (amount: number) => {
  // Simple rupees formatter
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });
  return formatter.format(amount).replace("₹", "") + " Rupees";
};

const InvoicePage = () => {
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/order/invoice?id=${orderId}`)
      .then((res) => res.json())
      .then(setOrderData);
  }, [orderId]);

  if (!orderData)
    return <p className="text-center py-5">Loading invoice...</p>;

  return (
    <Container className="py-5 bg-white shadow border">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Image src="/assets/images/logo.png" alt="Logo" width={140} height={40} />
        <div className="text-end">
          <h4>Invoice #{orderId}</h4>
          <p>Date: {formatDate(orderData.createdAt)}</p>
        </div>
      </div>

      <hr />

      <h5 className="mb-3">Customer Details</h5>
      <Row>
        <Col md={6}>
          <p><strong>Name:</strong> {orderData.name}</p>
          <p><strong>Email:</strong> {orderData.email}</p>
          <p><strong>Phone:</strong> {orderData.phone}</p>
        </Col>
        <Col md={6}>
          <p><strong>Address:</strong> {orderData.address}</p>
          <p><strong>City:</strong> {orderData.city}</p>
          <p><strong>State:</strong> {orderData.state}</p>
          <p><strong>Zipcode:</strong> {orderData.zipcode}</p>
          <p><strong>Country:</strong> {orderData.country}</p>
        </Col>
      </Row>

      <hr />

      <h5 className="mb-3">Order Summary</h5>
      <Row className="fw-bold border-bottom py-2 text-muted">
        <Col>Item</Col>
        <Col className="text-center">Qty</Col>
        <Col className="text-end">Price</Col>
      </Row>
      {orderData.items.map((item: any, idx: number) => (
        <Row key={idx} className="border-bottom py-2 align-items-center">
          <Col>{item.name}</Col>
          <Col className="text-center">{item.quantity}</Col>
          <Col className="text-end">₹{item.price * item.quantity}</Col>
        </Row>
      ))}

      <Row className="pt-4">
        <Col className="text-end fw-bold text-muted">Subtotal:</Col>
        <Col className="text-end">₹{orderData.subtotal}</Col>
      </Row>
      <Row>
        <Col className="text-end fw-bold text-muted">Shipping:</Col>
        <Col className="text-end">₹{orderData.shipping}</Col>
      </Row>
      <Row>
        <Col className="text-end fw-bold text-muted">Total:</Col>
        <Col className="text-end">₹{orderData.totalAmount}</Col>
      </Row>

      <div className="mt-4">
        <p><strong>Amount in Words:</strong> {amountInWords(orderData.totalAmount)}</p>
        <p><strong>Order Notes:</strong> {orderData.orderNotes || "None"}</p>
      </div>

      <div className="text-end mt-4">
        <Button variant="success" className="rounded-pill px-4" onClick={() => window.print()}>
          Download / Print Invoice
        </Button>
      </div>
    </Container>
  );
};

export default InvoicePage;
