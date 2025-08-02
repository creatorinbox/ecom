"use client";

import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HeadTitle from "@src/commonsections/HeadTitle";
import TopBanner from "@src/components/Headers/TopBanner";
import Header from "@src/components/Headers/Header";
import FooterPage from "@src/components/Footer";
//import PopupPage from "@src/components/Popup";
import { useCart } from "@src/context/CartContext";
import cartBanner from "@assets/images/shopping-cart/shopping-cart-head.jpg";
import { useRouter } from "next/navigation";
const Checkout = () => {
  const { items, clearCart } = useCart();
const router = useRouter();
const [showThankYou, setShowThankYou] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "India",
    address: "",
    apartment: "",
    city: "",
    state: "Tamil Nadu",
    zipcode: "",
    phone: "",
    email: "",
    orderNotes: "",
  });
const [cartItems, setCartItems] = useState<any[]>([]);

useEffect(() => {
  const fetchCartItems = async () => {
    try {
      const res = await fetch("/api/cart/items");
      const data = await res.json();
      setCartItems(data);
    } catch (err) {
      console.error("Error fetching cart items", err);
    }
  };

  fetchCartItems();
}, []);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // const shipping = 50;
  // const totalAmount = subtotal + shipping;
const subtotal = cartItems.reduce((sum, item) => {
  return sum + item.product.salePrice * item.quantity;
}, 0);

const shipping = 50;
const totalAmount = subtotal + shipping;
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const orderRes = await fetch("/api/order/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //body: JSON.stringify({ ...formData, items, totalAmount,shipping }),
      body: JSON.stringify({ ...formData, items: cartItems, totalAmount, shipping }),

    });

    const orderResponse = await orderRes.json();
    if (!orderRes.ok) return alert("❌ Failed to place order");

    const payRes = await fetch("/api/payments/razorpay-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalAmount, orderId: orderResponse.orderId }),
    });

    const { order } = await payRes.json();
    if (!order?.id) return alert("❌ Razorpay order error");

    // @ts-ignore
    const rzp = new Razorpay({
      key: 'rzp_test_8RId0V4Xf3nvQM',
      amount: order.amount,
      currency: "INR",
      name: "My Store",
      description: "Order Payment",
      order_id: order.id,
      handler: async function (response: any) {
        await fetch("/api/payments/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
            amount: order.amount / 100,
            orderId: orderResponse.orderId,
          }),
        });
        alert("✅ Payment successful");
        setOrderId(orderResponse.orderId);
        setShowThankYou(true);
       // router.push("/");

        clearCart();
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone,
      },
      theme: { color: "#0d6efd" },
    });

    rzp.open();
  };

  return (
    <>
      <HeadTitle title="Checkout" />
      <TopBanner />
      <Header />

      <div
        className="position-relative"
        style={{ backgroundImage: `url(${cartBanner.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="position-absolute w-100 h-100 bg-dark opacity-50" />
        <Container>
          <div className="py-5 text-white text-center position-relative">
            <h4>CHECKOUT</h4>
          </div>
        </Container>
      </div>

      <section>
        <Container className="my-5">
          <Row>
            <Col md={7}>
              <h3 className="border-bottom pb-3 mb-4">Billing Details</h3>
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control id="firstName" value={formData.firstName} onChange={handleChange} />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control id="lastName" value={formData.lastName} onChange={handleChange} />
                  </Col>
                  <Col md={12}>
                    <Form.Label>Company Name (optional)</Form.Label>
                    <Form.Control id="companyName" value={formData.companyName} onChange={handleChange} />
                  </Col>
                  <Col md={12}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control id="address" value={formData.address} onChange={handleChange} />
                    <Form.Control className="mt-2" id="apartment" placeholder="Apartment, suite, etc." value={formData.apartment} onChange={handleChange} />
                  </Col>
                  <Col md={6}>
                    <Form.Label>City</Form.Label>
                    <Form.Control id="city" value={formData.city} onChange={handleChange} />
                  </Col>
                  <Col md={6}>
                    <Form.Label>State</Form.Label>
                    <Form.Control id="state" value={formData.state} onChange={handleChange} />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Zipcode</Form.Label>
                    <Form.Control id="zipcode" value={formData.zipcode} onChange={handleChange} />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Country</Form.Label>
                    <Form.Control id="country" value={formData.country} onChange={handleChange} />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control id="phone" value={formData.phone} onChange={handleChange} />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control id="email" value={formData.email} onChange={handleChange} />
                  </Col>
                  <Col md={12}>
                    <Form.Label>Order Notes</Form.Label>
                    <Form.Control as="textarea" rows={4} id="orderNotes" value={formData.orderNotes} onChange={handleChange} />
                  </Col>
                  <Col md={12}>
                    <Form.Check type="checkbox" label="I agree to terms and conditions" />
                  </Col>
                  <Col md={12} className="mt-4">
                    <Button type="submit" className="w-100 btn-teal rounded-pill fw-semibold">
                      PROCEED TO PAY ₹{totalAmount}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>

            <Col md={5}>
              <h3 className="border-bottom pb-3 mb-4">Your Order</h3>
              {/* {items.map((item) => (
                <div key={item.id} className="d-flex justify-content-between border-bottom py-2">
                  <span>{item.name} × {item.quantity}</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))} */}
              {cartItems.map((item) => (
  <div key={item.id} className="d-flex justify-content-between border-bottom py-2">
    <span>{item.product.name} × {item.quantity}</span>
    <span>₹{item.product.salePrice * item.quantity}</span>
  </div>
))}

              <div className="d-flex justify-content-between border-bottom py-2 fw-bold">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2 fw-bold">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>
            </Col>
          </Row>
        </Container>
        
      </section>

      <FooterPage />
      {/* <PopupPage /> */}
   {showThankYou && orderId && (
  <Modal show centered onHide={() => setShowThankYou(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Thank You!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Your payment was successful. Your order ID is <strong>{orderId}</strong>.</p>
      <Button onClick={() => router.push(`/invoice/${orderId}`)} className="btn-teal rounded-pill mt-3">
        View Invoice
      </Button>
    </Modal.Body>
  </Modal>
)}
    </>
    
  );
};

export default Checkout;
