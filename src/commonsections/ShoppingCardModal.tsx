"use client";

import React, { useEffect, useState } from 'react';
import { Offcanvas, Button, Form } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import trust from '@assets/images/trust_img2.png'
import AddToCardModal from '@src/commonsections/AddToCardModal';

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
  URL:string;
};
type Props = {
  shoppingShow: boolean;
  handleShoppingClose: () => void;
  product: Product | null; // 👈 allow null
};
const ShoppingCardModal = ({ shoppingShow, handleShoppingClose,product }: Props) => {
const [cartItems, setCartItems] = useState<any[]>([]); // or create a proper CartItem type
    const [quantity, setQuantity] = useState(1);
    const [quantity2, setQuantity2] = useState(1);
    const [quantity3, setQuantity3] = useState(1);
    const [cardShow, setCardShow] = useState(false);
    const [editingItem, setEditingItem] = useState<Product | null>(null);

const handleEdit = (item: Product) => {
  setEditingItem(item);
  handleAddToCardModalShow();
};

useEffect(() => {
  const fetchCart = async () => {
    try {
      const res = await fetch("/api/cart/items");
      const data = await res.json();
      setCartItems(data);
    } catch (err) {
      console.error("Error fetching cart items", err);
    }
  };

  if (shoppingShow) fetchCart(); // only fetch when modal is open
}, [shoppingShow]);
const handleDelete = async (id: number) => {
  try {
    const res = await fetch(`/api/cart/${id}`, { method: "DELETE" });
    if (res.ok) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    }
  } catch (err) {
    console.error("Failed to delete item", err);
  }
};
    const handleQuantityChange = (change: number) => {
        setQuantity((prev) => Math.max(0, prev + change));
    };
    const handleQuantityChange2 = (change: number) => {
        setQuantity2((prev) => Math.max(0, prev + change));
    };
    const handleQuantityChange3 = (change: number) => {
        setQuantity3((prev) => Math.max(0, prev + change));
    };
    const handleChange = (event: any) => {
        const value = Math.max(0, Math.min(100, Number(event.target.value)));
        setQuantity(value);
    };
    const handleChange2 = (event: any) => {
        const value = Math.max(0, Math.min(100, Number(event.target.value)));
        setQuantity2(value);
    };
    const handleChange3 = (event: any) => {
        const value = Math.max(0, Math.min(100, Number(event.target.value)));
        setQuantity3(value);
    };
    const handleAddToCardModalShow = () => setCardShow(true);
    const handleAddToCardModalClose = () => setCardShow(false);

    return (
        <React.Fragment>
            <Offcanvas show={shoppingShow} onHide={handleShoppingClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>SHOPPING CART</Offcanvas.Title>
                </Offcanvas.Header>
                <div className="p-20 border-bottom border-top shadow-2xl">
                    <h6 className="mb-0 fw-medium fs-13 lh-base">Almost there, add <span className="text-danger">$9.00</span> more to get
                        <span className="text-danger"> FREE SHIPPING!</span>
                    </h6>
                </div>
                <Offcanvas.Body className='p-0'>
{cartItems.map((item) => {
  const product = item.product;
  return (
    <div className="p-20 border-top" key={item.id}>
      <div className="row">
        <div className="col-lg-5">
          <img src={`/downloads${product.imageUrl}`} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-7">
          <h6 className="mb-1">
            <Link href="#!" className="product-title">{product.name}</Link>
          </h6>
          <p className="text-muted fs-12">{item.color} / {item.size}</p>
          <p className="fs-14 text-muted d-flex align-items-center gap-2">
            <del>${product.regularPrice}</del>
            <span className="text-danger">${product.salePrice}</span>
          </p>
          {/* Quantity controls (optional) */}
          <div className="quantity fs-14 position-relative">
            <Form.Control type="number" readOnly value={item.quantity} className="input-text text-center" />
          </div>
          <div className="d-flex align-items-center gap-3 mt-2">
            <Link href="#!" onClick={() => handleEdit(item)}>✏️</Link>
            <Link href="#!" onClick={() => handleDelete(item.id)}>🗑️</Link>
          </div>
        </div>
      </div>
    </div>
  );
})}

                    {/* <div className="p-20">
                        <div className="row">
                            <div className="col-5">
                                <img src={product?.imageUrl} alt="MiniCardImg" className="img-fluid" priority />
                            </div>
                            <div className="col-7">
                                <h6 className="mb-1"><Link href="#!" className="product-title">{product?.name}</Link></h6>
                                <p className="text-muted fs-12">Pink</p>
                                <p className="fs-14 text-muted d-flex align-items-center gap-2">
                                    <del>${product?.regularPrice}</del>
                                    <span className="text-danger">${product?.salePrice}</span>
                                </p>
                                <div className="quantity fs-14 position-relative">
                                    <Form.Control type="number" readOnly value={quantity} className="input-text text-center" onChange={handleChange} />
                                    <button type="button" className="minus position-absolute start-0 ps-3" onClick={() => handleQuantityChange(-1)}>
                                        <i className="facl facl-minus"></i>
                                    </button>
                                    <button type="button" className="plus position-absolute end-0 pe-3" onClick={() => handleQuantityChange(1)}>
                                        <i className="facl facl-plus"></i>
                                    </button>
                                </div>
                                <div className="d-flex align-items-center gap-3 mt-2">
                                    <Link href="#!" className="main_link" data-bs-toggle="modal" data-bs-target="#cardModal" data-bs-placement="top" data-bs-title="Edit this item" onClick={handleAddToCardModalShow}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="square-20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                        </svg>
                                    </Link>
                                    <Link href="#!" className="main_link" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Remove this item">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="square-20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                            </path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="p-20 border-top">
                        <div className="row">
                            <div className="col-lg-5">
                                <Image src={miniCard2} alt="MiniCard2Img" className="img-fluid" priority />
                            </div>
                            <div className="col-7">
                                <h6 className="mb-1"><Link href="#!" className="product-title">Blush Beanie</Link></h6>
                                <p className="text-muted fs-12">Grey / S</p>
                                <p className="fs-14 text-muted d-flex align-items-center gap-2">
                                    <span>$15.00</span>
                                </p>
                                <div className="quantity fs-14 position-relative">
                                    <Form.Control type="number" readOnly value={quantity2} className="input-text text-center" onChange={handleChange2} />
                                    <button type="button" className="minus position-absolute start-0 ps-3" onClick={() => handleQuantityChange2(-1)}>
                                        <i className="facl facl-minus"></i>
                                    </button>
                                    <button type="button" className="plus position-absolute end-0 pe-3" onClick={() => handleQuantityChange2(1)}>
                                        <i className="facl facl-plus"></i>
                                    </button>
                                </div>
                                <div className="d-flex align-items-center gap-3 mt-2">
                                    <Link href="#!" className="main_link" data-bs-toggle="modal" data-bs-target="#cardModal" data-bs-placement="top" data-bs-title="Edit this item" onClick={handleAddToCardModalShow}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="square-20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                        </svg>
                                    </Link>
                                    <Link href="#!" className="main_link" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Remove this item">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="square-20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                            </path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-20 border-top">
                        <div className="row">
                            <div className="col-lg-5">
                                <Image src={miniCard3} alt="MiniCard3Img" className="img-fluid" priority />
                            </div>
                            <div className="col-7">
                                <h6 className="mb-1"><Link href="#!" className="product-title">Ridley High Waist</Link></h6>
                                <p className="text-muted fs-12">S</p>
                                <p className="fs-14 text-muted d-flex align-items-center gap-2">
                                    <span>$36.00</span>
                                </p>
                                <div className="quantity fs-14 position-relative">
                                    <Form.Control type="number" readOnly value={quantity3} className="input-text text-center" onChange={handleChange3} />
                                    <button type="button" className="minus position-absolute start-0 ps-3" onClick={() => handleQuantityChange3(-1)}>
                                        <i className="facl facl-minus"></i>
                                    </button>
                                    <button type="button" className="plus position-absolute end-0 pe-3" onClick={() => handleQuantityChange3(1)}>
                                        <i className="facl facl-plus"></i>
                                    </button>
                                </div>
                                <div className="d-flex align-items-center gap-3 mt-2">
                                    <Link href="#!" className="main_link" data-bs-toggle="modal" data-bs-target="#cardModal" data-bs-placement="top" data-bs-title="Edit this item" onClick={handleAddToCardModalShow}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="square-20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                        </svg>
                                    </Link>
                                    <Link href="#!" className="main_link" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Remove this item">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="square-20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                            </path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="px-20 py-3">
                        <ul className="mini_cart_tool list-unstyled d-flex gap-3 justify-content-center mb-0">
                            <li>
                                <Link href="#!" className="square-sm rounded-circle fs-25 d-inline-flex text-reset align-items-center justify-content-center"><i className="lar la-clipboard"></i></Link>
                            </li>
                            <li>
                                <Link href="#!" className="square-sm rounded-circle fs-25 d-inline-flex text-reset align-items-center justify-content-center"><i className="las la-gift"></i></Link>
                            </li>
                            <li>
                                <Link href="#!" className="square-sm rounded-circle fs-25 d-inline-flex text-reset align-items-center justify-content-center"><i className="las la-truck-moving"></i></Link>
                            </li>
                            <li>
                                <Link href="#!" className="square-sm rounded-circle fs-25 d-inline-flex text-reset align-items-center justify-content-center"><i className="las la-tag"></i></Link>
                            </li>
                        </ul>
                    </div>
                </Offcanvas.Body>

                <div className="p-3 border-top">
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="mb-0 flex-grow-1 fs-18">Subtotal:</h5>
                        <Link href="#!" className="cart_tot_price fs-18 text-reset">${product?.salePrice}</Link>
                    </div>
                    <p className="text-muted fs-13 mb-2">Taxes, shipping and discounts codes calculated at checkout</p>
                    <Form.Check
                        type="checkbox"
                        id="cartAgreeInput"
                        label="I agree with the terms and conditions."
                        className="fs-13 text-muted"
                    />
                    <div className="mt-3 vstack gap-3">
                        <Link href="/shopping-cart">
                            <Button variant="light" className="w-100 rounded-pill text-uppercase fw-semibold" style={{ letterSpacing: '4px', fontSize: '11px' }}>
                                View cart
                            </Button>
                        </Link>
                        <Link href="/checkout">
                            <Button variant="info" className="w-100 rounded-pill text-uppercase fw-semibold" style={{ letterSpacing: '4px', fontSize: '11px' }}>
                                Check out
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-3">
                        <Image src={trust} alt="TrustImg" className="img-fluid" priority />
                    </div>
                </div>

            </Offcanvas>

<AddToCardModal cardShow={cardShow} handleAddToCardModalClose={handleAddToCardModalClose} product={product} />
        </React.Fragment>
    )
}
export default ShoppingCardModal