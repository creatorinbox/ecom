"use client";
import React, { useState } from "react";
import { Row, Col, Nav, Tab, Modal, Card, CardBody, Dropdown } from 'react-bootstrap';
import Image from "next/image";
import Link from "next/link";

import thumbsticky from '@assets/images/single-product/layout-02/thumb-sticky.jpg'

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
  URL:string;
}
type Props = {
  product: Product;
};
const ProductDetailLayout01Tab = ({ product }:Props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [activeKey, setActiveKey] = useState('Description');
    const formattedDescription = (product?.description || '').replace(/\\n/g, '<br />');
//console.log('des',formattedDescription);
    const colorOptions = product?.attributes
  ?.filter(attr => attr.attributeValue?.attribute?.name?.toLowerCase() === "color")
  ?.map(attr => attr.attributeValue.value) ?? [];

const sizeOptions = product?.attributes
  ?.filter(attr => attr.attributeValue?.attribute?.name?.toLowerCase() === "size")
  ?.map(attr => attr.attributeValue.value) ?? [];

const categoryNames = product?.categories?.map(c => c.category.name) ?? [];
const tagNames = product?.tags?.map(t => t.tag.name) ?? [];
const imagesToShow =
  Array.isArray(product?.images) && product.images.length > 0
    ? product.images.map((img) => img.url)
    : [product?.imageUrl ?? "", product?.hoverImage ?? ""];
    return (
        <React.Fragment>

            <div className="mt-4 mb-5 py-5 d-none d-lg-block main-project-section ">
                <div className="container">
                    <Tab.Container id="left-tabs-example" activeKey={activeKey} onSelect={(k: any) => setActiveKey(k)}>
                        <Row className="nav tab_header justify-content-center">
                            <Col>
                                <Nav variant="pills" className="tab_header nav_tabs justify-content-center">
                                    <Nav.Item>
                                        <Nav.Link eventKey="Description" className="rounded-pill pill-border fw-medium custom-nav-link">
                                            Description
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Additionalinformation" className="rounded-pill pill-border fw-medium custom-nav-link" >Additional Information</Nav.Link>
                                    </Nav.Item>
                                  
                                    <Nav.Item>
                                        <Nav.Link eventKey="Reviews" className="rounded-pill pill-border fw-medium custom-nav-link" >Reviews</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Tab.Content className="mt-5">
                                    <Tab.Pane eventKey="Description">
                                      {/* <p className="text-black">{product.description}</p> */}

<div
  className="text-muted"
  dangerouslySetInnerHTML={{
    __html: formattedDescription,
  }}
></div>




                                           <Row className="my-5 g-3">
  {product.images?.slice(0, 3).map((img, idx) => (
    <Col md={4} key={idx}>
    <Image
  src={`/downloads${img.url}`}
  alt={`DescriptionImg${idx + 1}`}
  width={400}
  height={400}
  className="img-fluid"
/>


    </Col>
  ))}
</Row>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Additionalinformation">
                                        <table className="table table-bordered">
  <tbody>
    {product.attributes?.map((attr, idx) => (
      <tr key={idx}>
        <th className="bg-transparent" scope="row">{attr.attributeValue.attribute.name}</th>
        <td className="bg-transparent">{attr.attributeValue.value}</td>
      </tr>
    ))}
  </tbody>
</table>
                                    </Tab.Pane>
                                
                                    <Tab.Pane eventKey="Reviews">
                                        <Row className="mb-3">
                                            <Col md={2} className="text-center">
                                                <p className="mb-0">Average</p>
                                                <h2 className="fw-bold my-1">4.8</h2>
                                                <div className="kalles-rating-result">
                                                    <span className="kalles-rating-result__pipe ,b-1">
                                                        <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                        <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                        <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                        <span className="kalles-rating-result__start kalles-rating-result__start--big active me-1"></span>
                                                        <span className="text-muted kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                    </span>
                                                </div>
                                                <p className="text-muted">13 Review</p>
                                            </Col>
                                            <Col md={4}>
                                                <div className="d-flex align-items-center my-2">
                                                    <p className="mb-0 me-2 text-nowrap">Excellent</p>
                                                    <input type="range" min="1" max="12" defaultValue="12" className="slider slider1" id="myRange" />
                                                </div>
                                                <div className="d-flex align-items-center my-2">
                                                    <p className="mb-0 me-2 text-nowrap text-muted">Very Good </p>
                                                    <input type="range" min="1" max="12" defaultValue="0" className="slider slider1" id="myRange" />
                                                </div>
                                                <div className="d-flex align-items-center my-2">
                                                    <p className="mb-0 me-2 text-nowrap">Average</p>
                                                    <input type="range" min="1" max="12" defaultValue="1" className="slider slider1" id="myRange" />
                                                </div>
                                                <div className="d-flex align-items-center my-2">
                                                    <p className="mb-0 pe-2 me-4 text-nowrap text-muted">Poor</p>
                                                    <input type="range" min="1" max="12" defaultValue="0" className="slider slider1" id="myRange" />
                                                </div>
                                                <div className="d-flex align-items-center my-2">
                                                    <p className="mb-0 me-2 text-nowrap text-muted">Terrible</p>
                                                    <input type="range" min="1" max="12" defaultValue="0" className="slider slider1" id="myRange" />
                                                </div>
                                            </Col>
                                            <Col md={2}>
                                                <button type="button" className="btn btn-warning py-1 px-2" data-toggle="modal" data-target="#exampleModalLong" onClick={handleShow}>
                                                    <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="18.37" height="17.8" viewBox="0 0 21.682 21.602">
                                                        <g id="Symbol_32_2" data-name="Symbol 32 – 2" transform="translate(-961.98 -374.155)">
                                                            <path d="M0,0H4V11.2L1.937,14h0L0,11.2Z" transform="translate(979.891 381.756) rotate(40)" fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="1"></path>
                                                            <path d="M0,0H4" transform="translate(972.692 390.335) rotate(40)" fill="none" stroke="#ffffff" strokeWidth="1"></path>
                                                            <g transform="translate(981.126 380.964) rotate(40)" fill="none" stroke="#ffffff" strokeWidth="1">
                                                                <rect width="3.128" height="1.4" stroke="none"></rect>
                                                                <rect x="0.5" y="0.5" width="2.128" height="0.4" fill="none"></rect>
                                                            </g>
                                                            <path d="M2858.324,3384.6h7.412" transform="translate(-1891.1 -3003.987)" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                            <path d="M2858.324,3384.6h7.412" transform="translate(-1891.1 -2999.611)" fill="none" stroke="#ffffff" strokeLinecap="round" strokeWidth="1"></path>
                                                            <path d="M8.952,0H15a2,2,0,0,1,2,2V15a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V12.162" transform="translate(979.48 391.655) rotate(180)" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                        </g>
                                                    </svg>
                                                    Write a review
                                                </button>
                                            </Col>
                                        </Row>
                                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                            <p className="text-muted mb-0">Showing 1 - 6 of 13 reviews</p>
                                            <div className="d-flex mt-3 mt-sm-0">

                                                <Dropdown className="review-dropdown">
                                                    <Dropdown.Toggle
                                                        as="a"
                                                        className="dropdown-toggle text-muted me-2"
                                                        href="#!"
                                                        id="dropdown-custom-components"
                                                        aria-expanded="false"
                                                    >
                                                        Filter
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#!">ALL</Dropdown.Item>
                                                        <Dropdown.Item href="#!">Excellent</Dropdown.Item>
                                                        <Dropdown.Item href="#!">Very Good</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>

                                                <Dropdown className="review-dropdown">
                                                    <Dropdown.Toggle
                                                        as="a"
                                                        className="dropdown-toggle text-muted"
                                                        href="#!"
                                                        id="dropdown-custom-components"
                                                        aria-expanded="false"
                                                    >
                                                        Short by: Latest
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#!">Latest</Dropdown.Item>
                                                        <Dropdown.Item href="#!">Oldest</Dropdown.Item>
                                                        <Dropdown.Item href="#!">Images</Dropdown.Item>
                                                        <Dropdown.Item href="#!">Most like</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <Row className="g-3 review-container">
                                            <Col sm={6} md={4}>
                                                <Card>
                                                    <CardBody>
                                                        <div className="rounded-pill d-inline-block align-items-center p-1 bg-light">
                                                            <div className="d-flex align-items-center">
                                                                <p className="mb-0 rounded-pill  bg-warning text-white d-inline-block text-center d-flex justify-content-center align-items-center" style={{ width: "25px", height: "25px" }}>P</p>
                                                                <span className="fw-bold mx-2">Peter</span>
                                                            </div>
                                                        </div>
                                                        <div className="kalles-rating-result my-2">
                                                            <span className="kalles-rating-result__pipe ,b-1">
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big active me-1"></span>
                                                                <span className="text-muted kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                            </span>
                                                        </div>
                                                        <h6>Contrary to popular belief</h6>
                                                        <p className="text-muted mb-2">It is a long established fact that a reader will be
                                                            distracted
                                                            by the readable content of a page</p>
                                                        <p className="text-muted mb-2 opacity-75 fs-14">15 days ago
                                                        </p>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg role="button" fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.762 17.939" className="text-muted">
                                                                    <g transform="translate(-926.048 -414.43)">
                                                                        <path d="M0,14.842V6.033l.266.709S3.779,4.692,3.9,1.674s2.5-1.661,2.624.45-.095,2.192.517,3.909c1.392-.021,2.211-.013,2.59-.006H9.71q.06,0,.119,0l.056,0v0A1.532,1.532,0,0,1,10.923,8.5a1.533,1.533,0,0,1,.45,2.515,1.533,1.533,0,0,1-.387,2.485,1.859,1.859,0,0,1,.257.966c0,.847-.515,1.584-1.15,1.584L9.237,16c-.7.042-2.286.125-2.717.131H6.448A31.646,31.646,0,0,1,0,14.842Z" transform="translate(929.463 415.021)" className="cls-1"></path>
                                                                        <path d="M945.558,421.769v11.039l-2.9-.279V422.22Z" transform="translate(-16.112 -0.939)" className="cls-2"></path>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">12</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg role="button" fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.762 17.659" className="r--icon-dislike">
                                                                    <g transform="translate(956.922 435.325) rotate(180)">
                                                                        <path d="M0,14.842V6.033l.266.709S3.779,4.692,3.9,1.674s2.5-1.661,2.624.45-.095,2.192.517,3.909c1.392-.021,2.211-.013,2.59-.006H9.71q.06,0,.119,0l.056,0v0A1.532,1.532,0,0,1,10.923,8.5a1.533,1.533,0,0,1,.45,2.515,1.533,1.533,0,0,1-.387,2.485,1.859,1.859,0,0,1,.257.966c0,.847-.515,1.584-1.15,1.584L9.237,16c-.7.042-2.286.125-2.717.131H6.448A31.646,31.646,0,0,1,0,14.842Z" transform="translate(944.575 418.257)" className="cls-1"></path>
                                                                        <path d="M945.558,421.946v10.321l-2.9.261V421.777Z" transform="translate(-1 2.296)" className="cls-2"></path>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">08</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#commentModel" >
                                                                <svg role="button" fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.125 17.584" className="r--icon-reply">
                                                                    <defs>
                                                                        <clipPath>
                                                                            <rect width="14.094" height="3.924" className="cls-1"></rect>
                                                                        </clipPath>
                                                                    </defs>
                                                                    <g transform="translate(-784.909 -833.715)">
                                                                        <path d="M4.01,12.938H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H18.125a2,2,0,0,1,2,2v8.937a2,2,0,0,1-2,2H8.78l-.667.923L6.4,16.232Z" transform="translate(785.409 834.215)" className="cls-2"></path>
                                                                        <g transform="translate(788.554 839.127)" className="cls-3">
                                                                            <g transform="translate(-739 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                            <g transform="translate(-734 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                            <g transform="translate(-729 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">02</span>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col sm={6} md={4}>
                                                <Card>
                                                    <CardBody>
                                                        <div className="rounded-pill d-inline-block align-items-center p-1 bg-light">
                                                            <div className="d-flex align-items-center">
                                                                <p className="mb-0 rounded-pill  bg-danger text-white d-inline-block text-center d-flex justify-content-center align-items-center" style={{ width: "25px", height: "25px" }}>K</p>
                                                                <span className="fw-bold mx-2">Kodeman</span>
                                                            </div>
                                                        </div>
                                                        <div className="kalles-rating-result my-2">
                                                            <span className="kalles-rating-result__pipe ,b-1">
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big active me-1"></span>
                                                                <span className="text-muted kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                            </span>
                                                        </div>
                                                        <h6>Contrary to popular belief</h6>
                                                        <p className="text-muted mb-2">It is a long established fact that a reader will be
                                                            distracted
                                                            by the readable content of a page</p>
                                                        <p className="text-muted mb-2 opacity-75 fs-14">15 days ago
                                                        </p>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.762 17.939" className="text-muted">
                                                                    <g transform="translate(-926.048 -414.43)">
                                                                        <path d="M0,14.842V6.033l.266.709S3.779,4.692,3.9,1.674s2.5-1.661,2.624.45-.095,2.192.517,3.909c1.392-.021,2.211-.013,2.59-.006H9.71q.06,0,.119,0l.056,0v0A1.532,1.532,0,0,1,10.923,8.5a1.533,1.533,0,0,1,.45,2.515,1.533,1.533,0,0,1-.387,2.485,1.859,1.859,0,0,1,.257.966c0,.847-.515,1.584-1.15,1.584L9.237,16c-.7.042-2.286.125-2.717.131H6.448A31.646,31.646,0,0,1,0,14.842Z" transform="translate(929.463 415.021)" className="cls-1"></path>
                                                                        <path d="M945.558,421.769v11.039l-2.9-.279V422.22Z" transform="translate(-16.112 -0.939)" className="cls-2"></path>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">12</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.762 17.659" className="r--icon-dislike">
                                                                    <g transform="translate(956.922 435.325) rotate(180)">
                                                                        <path d="M0,14.842V6.033l.266.709S3.779,4.692,3.9,1.674s2.5-1.661,2.624.45-.095,2.192.517,3.909c1.392-.021,2.211-.013,2.59-.006H9.71q.06,0,.119,0l.056,0v0A1.532,1.532,0,0,1,10.923,8.5a1.533,1.533,0,0,1,.45,2.515,1.533,1.533,0,0,1-.387,2.485,1.859,1.859,0,0,1,.257.966c0,.847-.515,1.584-1.15,1.584L9.237,16c-.7.042-2.286.125-2.717.131H6.448A31.646,31.646,0,0,1,0,14.842Z" transform="translate(944.575 418.257)" className="cls-1"></path>
                                                                        <path d="M945.558,421.946v10.321l-2.9.261V421.777Z" transform="translate(-1 2.296)" className="cls-2"></path>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">08</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.125 17.584" className="r--icon-reply">
                                                                    <defs>
                                                                        <clipPath>
                                                                            <rect width="14.094" height="3.924" className="cls-1"></rect>
                                                                        </clipPath>
                                                                    </defs>
                                                                    <g transform="translate(-784.909 -833.715)">
                                                                        <path d="M4.01,12.938H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H18.125a2,2,0,0,1,2,2v8.937a2,2,0,0,1-2,2H8.78l-.667.923L6.4,16.232Z" transform="translate(785.409 834.215)" className="cls-2"></path>
                                                                        <g transform="translate(788.554 839.127)" className="cls-3">
                                                                            <g transform="translate(-739 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                            <g transform="translate(-734 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                            <g transform="translate(-729 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">02</span>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col sm={6} md={4}>
                                                <Card>
                                                    <CardBody>
                                                        <div className="rounded-pill d-inline-block align-items-center p-1 bg-light">
                                                            <div className="d-flex align-items-center">
                                                                <p className="mb-0 rounded-pill  bg-primary text-white d-inline-block text-center d-flex justify-content-center align-items-center" style={{ width: "25px", height: "25px" }}>G</p>
                                                                <span className="fw-bold mx-2">Glager</span>
                                                            </div>
                                                        </div>
                                                        <div className="kalles-rating-result my-2">
                                                            <span className="kalles-rating-result__pipe ,b-1">
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big active me-1"></span>
                                                                <span className="text-muted kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                            </span>
                                                        </div>
                                                        <h6>Contrary to popular belief</h6>
                                                        <p className="text-muted mb-2">It is a long established fact that a reader will be
                                                            distracted
                                                            by the readable content of a page</p>
                                                        <p className="text-muted mb-2 opacity-75 fs-14">15 days ago
                                                        </p>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.762 17.939" className="text-muted">
                                                                    <g transform="translate(-926.048 -414.43)">
                                                                        <path d="M0,14.842V6.033l.266.709S3.779,4.692,3.9,1.674s2.5-1.661,2.624.45-.095,2.192.517,3.909c1.392-.021,2.211-.013,2.59-.006H9.71q.06,0,.119,0l.056,0v0A1.532,1.532,0,0,1,10.923,8.5a1.533,1.533,0,0,1,.45,2.515,1.533,1.533,0,0,1-.387,2.485,1.859,1.859,0,0,1,.257.966c0,.847-.515,1.584-1.15,1.584L9.237,16c-.7.042-2.286.125-2.717.131H6.448A31.646,31.646,0,0,1,0,14.842Z" transform="translate(929.463 415.021)" className="cls-1"></path>
                                                                        <path d="M945.558,421.769v11.039l-2.9-.279V422.22Z" transform="translate(-16.112 -0.939)" className="cls-2"></path>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">12</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.762 17.659" className="r--icon-dislike">
                                                                    <g transform="translate(956.922 435.325) rotate(180)">
                                                                        <path d="M0,14.842V6.033l.266.709S3.779,4.692,3.9,1.674s2.5-1.661,2.624.45-.095,2.192.517,3.909c1.392-.021,2.211-.013,2.59-.006H9.71q.06,0,.119,0l.056,0v0A1.532,1.532,0,0,1,10.923,8.5a1.533,1.533,0,0,1,.45,2.515,1.533,1.533,0,0,1-.387,2.485,1.859,1.859,0,0,1,.257.966c0,.847-.515,1.584-1.15,1.584L9.237,16c-.7.042-2.286.125-2.717.131H6.448A31.646,31.646,0,0,1,0,14.842Z" transform="translate(944.575 418.257)" className="cls-1"></path>
                                                                        <path d="M945.558,421.946v10.321l-2.9.261V421.777Z" transform="translate(-1 2.296)" className="cls-2"></path>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">08</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.125 17.584" className="r--icon-reply">
                                                                    <defs>
                                                                        <clipPath>
                                                                            <rect width="14.094" height="3.924" className="cls-1"></rect>
                                                                        </clipPath>
                                                                    </defs>
                                                                    <g transform="translate(-784.909 -833.715)">
                                                                        <path d="M4.01,12.938H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H18.125a2,2,0,0,1,2,2v8.937a2,2,0,0,1-2,2H8.78l-.667.923L6.4,16.232Z" transform="translate(785.409 834.215)" className="cls-2"></path>
                                                                        <g transform="translate(788.554 839.127)" className="cls-3">
                                                                            <g transform="translate(-739 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                            <g transform="translate(-734 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                            <g transform="translate(-729 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">02</span>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col sm={6} md={4}>
                                                <Card >
                                                    <CardBody>
                                                        <div className="rounded-pill d-inline-block align-items-center p-1 bg-light">
                                                            <div className="d-flex align-items-center">
                                                                <p className="mb-0 rounded-pill  bg-info text-white d-inline-block text-center d-flex justify-content-center align-items-center" style={{ width: "25px", height: "25px" }}>C</p>
                                                                <span className="fw-bold mx-2">Chaos</span>
                                                            </div>
                                                        </div>
                                                        <div className="kalles-rating-result my-2">
                                                            <span className="kalles-rating-result__pipe ,b-1">
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big active me-1"></span>
                                                                <span className="text-muted kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                            </span>
                                                        </div>
                                                        <h6>Contrary to popular belief</h6>
                                                        <p className="text-muted mb-2">It is a long established fact that a reader will be
                                                            distracted
                                                            by the readable content of a page</p>
                                                        <p className="text-muted mb-2 opacity-75 fs-14">15 days ago
                                                        </p>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.762 17.939" className="text-muted">
                                                                    <g transform="translate(-926.048 -414.43)">
                                                                        <path d="M0,14.842V6.033l.266.709S3.779,4.692,3.9,1.674s2.5-1.661,2.624.45-.095,2.192.517,3.909c1.392-.021,2.211-.013,2.59-.006H9.71q.06,0,.119,0l.056,0v0A1.532,1.532,0,0,1,10.923,8.5a1.533,1.533,0,0,1,.45,2.515,1.533,1.533,0,0,1-.387,2.485,1.859,1.859,0,0,1,.257.966c0,.847-.515,1.584-1.15,1.584L9.237,16c-.7.042-2.286.125-2.717.131H6.448A31.646,31.646,0,0,1,0,14.842Z" transform="translate(929.463 415.021)" className="cls-1"></path>
                                                                        <path d="M945.558,421.769v11.039l-2.9-.279V422.22Z" transform="translate(-16.112 -0.939)" className="cls-2"></path>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">12</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.762 17.659" className="r--icon-dislike">
                                                                    <g transform="translate(956.922 435.325) rotate(180)">
                                                                        <path d="M0,14.842V6.033l.266.709S3.779,4.692,3.9,1.674s2.5-1.661,2.624.45-.095,2.192.517,3.909c1.392-.021,2.211-.013,2.59-.006H9.71q.06,0,.119,0l.056,0v0A1.532,1.532,0,0,1,10.923,8.5a1.533,1.533,0,0,1,.45,2.515,1.533,1.533,0,0,1-.387,2.485,1.859,1.859,0,0,1,.257.966c0,.847-.515,1.584-1.15,1.584L9.237,16c-.7.042-2.286.125-2.717.131H6.448A31.646,31.646,0,0,1,0,14.842Z" transform="translate(944.575 418.257)" className="cls-1"></path>
                                                                        <path d="M945.558,421.946v10.321l-2.9.261V421.777Z" transform="translate(-1 2.296)" className="cls-2"></path>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">08</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.125 17.584" className="r--icon-reply">
                                                                    <defs>
                                                                        <clipPath>
                                                                            <rect width="14.094" height="3.924" className="cls-1"></rect>
                                                                        </clipPath>
                                                                    </defs>
                                                                    <g transform="translate(-784.909 -833.715)">
                                                                        <path d="M4.01,12.938H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H18.125a2,2,0,0,1,2,2v8.937a2,2,0,0,1-2,2H8.78l-.667.923L6.4,16.232Z" transform="translate(785.409 834.215)" className="cls-2"></path>
                                                                        <g transform="translate(788.554 839.127)" className="cls-3">
                                                                            <g transform="translate(-739 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                            <g transform="translate(-734 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                            <g transform="translate(-729 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">02</span>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col sm={6} md={4}>
                                                <Card>
                                                    <CardBody>
                                                        <div className="rounded-pill d-inline-block align-items-center p-1 bg-light">
                                                            <div className="d-flex align-items-center">
                                                                <p className="mb-0 rounded-pill  bg-warning text-white d-inline-block text-center d-flex justify-content-center align-items-center" style={{ width: "25px", height: "25px" }}>S</p>
                                                                <span className="fw-bold mx-2">Sevenor</span>
                                                            </div>
                                                        </div>
                                                        <div className="kalles-rating-result my-2">
                                                            <span className="kalles-rating-result__pipe ,b-1">
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big active me-1"></span>
                                                                <span className="text-muted kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                            </span>
                                                        </div>
                                                        <h6>Contrary to popular belief</h6>
                                                        <p className="text-muted mb-2">It is a long established fact that a reader will be
                                                            distracted
                                                            by the readable content of a page</p>
                                                        <p className="text-muted mb-2 opacity-75 fs-14">15 days ago
                                                        </p>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.762 17.939" className="text-muted">
                                                                    <g transform="translate(-926.048 -414.43)">
                                                                        <path d="M0,14.842V6.033l.266.709S3.779,4.692,3.9,1.674s2.5-1.661,2.624.45-.095,2.192.517,3.909c1.392-.021,2.211-.013,2.59-.006H9.71q.06,0,.119,0l.056,0v0A1.532,1.532,0,0,1,10.923,8.5a1.533,1.533,0,0,1,.45,2.515,1.533,1.533,0,0,1-.387,2.485,1.859,1.859,0,0,1,.257.966c0,.847-.515,1.584-1.15,1.584L9.237,16c-.7.042-2.286.125-2.717.131H6.448A31.646,31.646,0,0,1,0,14.842Z" transform="translate(929.463 415.021)" className="cls-1"></path>
                                                                        <path d="M945.558,421.769v11.039l-2.9-.279V422.22Z" transform="translate(-16.112 -0.939)" className="cls-2"></path>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">12</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.762 17.659" className="r--icon-dislike">
                                                                    <g transform="translate(956.922 435.325) rotate(180)">
                                                                        <path d="M0,14.842V6.033l.266.709S3.779,4.692,3.9,1.674s2.5-1.661,2.624.45-.095,2.192.517,3.909c1.392-.021,2.211-.013,2.59-.006H9.71q.06,0,.119,0l.056,0v0A1.532,1.532,0,0,1,10.923,8.5a1.533,1.533,0,0,1,.45,2.515,1.533,1.533,0,0,1-.387,2.485,1.859,1.859,0,0,1,.257.966c0,.847-.515,1.584-1.15,1.584L9.237,16c-.7.042-2.286.125-2.717.131H6.448A31.646,31.646,0,0,1,0,14.842Z" transform="translate(944.575 418.257)" className="cls-1"></path>
                                                                        <path d="M945.558,421.946v10.321l-2.9.261V421.777Z" transform="translate(-1 2.296)" className="cls-2"></path>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">08</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.125 17.584" className="r--icon-reply">
                                                                    <defs>
                                                                        <clipPath>
                                                                            <rect width="14.094" height="3.924" className="cls-1"></rect>
                                                                        </clipPath>
                                                                    </defs>
                                                                    <g transform="translate(-784.909 -833.715)">
                                                                        <path d="M4.01,12.938H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H18.125a2,2,0,0,1,2,2v8.937a2,2,0,0,1-2,2H8.78l-.667.923L6.4,16.232Z" transform="translate(785.409 834.215)" className="cls-2"></path>
                                                                        <g transform="translate(788.554 839.127)" className="cls-3">
                                                                            <g transform="translate(-739 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                            <g transform="translate(-734 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                            <g transform="translate(-729 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">02</span>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col sm={6} md={4}>
                                                <Card>
                                                    <CardBody>
                                                        <div className="rounded-pill d-inline-block align-items-center p-1 bg-light">
                                                            <div className="d-flex align-items-center">
                                                                <p className="mb-0 rounded-pill  bg-danger text-white d-inline-block text-center d-flex justify-content-center align-items-center" style={{ width: "25px", height: "25px" }}>D</p>
                                                                <span className="fw-bold mx-2">Dranking</span>
                                                            </div>
                                                        </div>
                                                        <div className="kalles-rating-result my-2">
                                                            <span className="kalles-rating-result__pipe ,b-1">
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                                <span className="kalles-rating-result__start kalles-rating-result__start--big active me-1"></span>
                                                                <span className="text-muted kalles-rating-result__start kalles-rating-result__start--big me-1"></span>
                                                            </span>
                                                        </div>
                                                        <h6>Contrary to popular belief</h6>
                                                        <p className="text-muted mb-2">It is a long established fact that a reader will be
                                                            distracted
                                                            by the readable content of a page</p>
                                                        <p className="text-muted mb-2 opacity-75 fs-14">15 days ago
                                                        </p>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.762 17.939" className="text-muted">
                                                                    <g transform="translate(-926.048 -414.43)">
                                                                        <path d="M0,14.842V6.033l.266.709S3.779,4.692,3.9,1.674s2.5-1.661,2.624.45-.095,2.192.517,3.909c1.392-.021,2.211-.013,2.59-.006H9.71q.06,0,.119,0l.056,0v0A1.532,1.532,0,0,1,10.923,8.5a1.533,1.533,0,0,1,.45,2.515,1.533,1.533,0,0,1-.387,2.485,1.859,1.859,0,0,1,.257.966c0,.847-.515,1.584-1.15,1.584L9.237,16c-.7.042-2.286.125-2.717.131H6.448A31.646,31.646,0,0,1,0,14.842Z" transform="translate(929.463 415.021)" className="cls-1"></path>
                                                                        <path d="M945.558,421.769v11.039l-2.9-.279V422.22Z" transform="translate(-16.112 -0.939)" className="cls-2"></path>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">12</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.762 17.659" className="r--icon-dislike">
                                                                    <g transform="translate(956.922 435.325) rotate(180)">
                                                                        <path d="M0,14.842V6.033l.266.709S3.779,4.692,3.9,1.674s2.5-1.661,2.624.45-.095,2.192.517,3.909c1.392-.021,2.211-.013,2.59-.006H9.71q.06,0,.119,0l.056,0v0A1.532,1.532,0,0,1,10.923,8.5a1.533,1.533,0,0,1,.45,2.515,1.533,1.533,0,0,1-.387,2.485,1.859,1.859,0,0,1,.257.966c0,.847-.515,1.584-1.15,1.584L9.237,16c-.7.042-2.286.125-2.717.131H6.448A31.646,31.646,0,0,1,0,14.842Z" transform="translate(944.575 418.257)" className="cls-1"></path>
                                                                        <path d="M945.558,421.946v10.321l-2.9.261V421.777Z" transform="translate(-1 2.296)" className="cls-2"></path>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">08</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-1">
                                                                <svg fill="#878787" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.125 17.584" className="r--icon-reply">
                                                                    <defs>
                                                                        <clipPath>
                                                                            <rect width="14.094" height="3.924" className="cls-1"></rect>
                                                                        </clipPath>
                                                                    </defs>
                                                                    <g transform="translate(-784.909 -833.715)">
                                                                        <path d="M4.01,12.938H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H18.125a2,2,0,0,1,2,2v8.937a2,2,0,0,1-2,2H8.78l-.667.923L6.4,16.232Z" transform="translate(785.409 834.215)" className="cls-2"></path>
                                                                        <g transform="translate(788.554 839.127)" className="cls-3">
                                                                            <g transform="translate(-739 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                            <g transform="translate(-734 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                            <g transform="translate(-729 -839)">
                                                                                <g transform="translate(739 839)" className="cls-4">
                                                                                    <circle cx="1.75" cy="1.75" r="1.75" className="cls-5">
                                                                                    </circle>
                                                                                    <circle cx="1.75" cy="1.75" r="1.25" className="cls-1">
                                                                                    </circle>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                                <span className="text-muted">02</span>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <div className="d-flex justify-content-center mt-4">
                                            <div className="d-flex justify-content-center mt-4">
                                                <Link href="#" className="btn  text-center fw-semibold sub-gray">Load
                                                    more</Link>
                                            </div>
                                        </div>

                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Body className="p-4">
                            <a href="#!" data-bs-dismiss="modal" className="fs-35 close position-absolute top-0 end-0" aria-label="Close" onClick={handleClose}>
                                <i className="pe-7s-close pegk"></i>
                            </a>
                            <h2 className="fs-22 mb-3">Rate Us</h2>
                            <div className="border p-3 rounded-1">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <Image src={thumbsticky} alt="ThumbstickyImg" style={{ maxWidth: "65px", maxHeight: "75px", width: "auto", height: "auto", verticalAlign: "middle" }} />
                                    </div>
                                    <div className="ms-2 w-100">
                                        <h6 className="mb-1 fs-14 fw-bold">Striped Long Sleeve Top</h6>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="kalles-rating-result">
                                                <span className="kalles-rating-result__pipe ,b-1">
                                                    <span className="kalles-rating-result__start kalles-rating-result__start--big"></span>
                                                    <span className="kalles-rating-result__start kalles-rating-result__start--big"></span>
                                                    <span className="kalles-rating-result__start kalles-rating-result__start--big"></span>
                                                    <span className="kalles-rating-result__start kalles-rating-result__start--big active"></span>
                                                    <span className="text-muted kalles-rating-result__start kalles-rating-result__start--big"></span>
                                                </span>
                                            </div>
                                            <p className="text-muted mb-0">13 Review</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-4 mt-3">
                                <p className="text-muted mb-0 fw-bold">Quality</p>
                                <div className="kalles-rating-result">
                                    <span className="kalles-rating-result__pipe ,b-1">
                                        <span className="kalles-rating-result__start kalles-rating-result__start--lg kalles-rating-result__start--big"></span>
                                        <span className="kalles-rating-result__start kalles-rating-result__start--lg kalles-rating-result__start--big"></span>
                                        <span className="kalles-rating-result__start kalles-rating-result__start--lg kalles-rating-result__start--big"></span>
                                        <span className="kalles-rating-result__start kalles-rating-result__start--lg kalles-rating-result__start--big active"></span>
                                        <span className="text-muted kalles-rating-result__start kalles-rating-result__start--lg kalles-rating-result__start--big"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" role="button" className="fw-medium mb-2 text-muted">Your Name*</label>
                                <input id="name" className="form-control form-control-sm py-2 rounded-0" placeholder="John Smith" type="text" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" role="button" className="fw-medium mb-2 text-muted">Your Email*</label>
                                <input id="email" className="form-control form-control-sm py-2 rounded-0" placeholder="example@yourdomain.com" type="text" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" role="button" className="fw-medium mb-2 text-muted">Review Title</label>
                                <input id="title" className="form-control form-control-sm py-2 rounded-0" placeholder="Look great" type="text" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="review" role="button" className="fw-medium mb-2 text-muted">Review Content</label>
                                <textarea id="review" rows={9} className="form-control form-control-sm py-2 rounded-0" placeholder="Write something" ></textarea>
                            </div>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#rateUsModel012" className="btn btn-warning rounded-1 py-2 px-2 fw-semibold" onClick={handleClose}>
                                Submit Your Review
                            </button>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ProductDetailLayout01Tab