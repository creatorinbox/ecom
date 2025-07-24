"use client";
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

import banner1 from "@assets/images/home-digital/grid-banner-1.jpg"
import banner2 from "@assets/images/home-digital/grid-banner-2.jpg"
import banner3 from "@assets/images/home-digital/grid-banner-3.jpg"
import banner4 from "@assets/images/home-digital/grid-banner-4.jpg"

const Banner = () => {
    return (
        <React.Fragment>
            <div className="banner-section position-relative py-4 my-2" dir="ltr">
                <Container>
                    <div className="row g-4">
                        <Col lg={6}>
                            <Link href="/shop" className="position-relative hover-zoom d-block">
                                <Image src={banner1} alt="Banner1Img" className="img-fluid hover-zoom-img" />
                                <div className="position-absolute start-0 start-0 end-0 top-0 bottom-0 d-flex align-items-center">
                                    <div className="m-3 m-sm-4 px-sm-3 text-body">
                                        <h4 className="fs-30">iPhone Essentials</h4>
                                        <h6 className="mb-4 fs-16">Save up to 25%</h6>
                                        <p className="btn text-dark fw-semibold border border-2 border-dark rounded-pill min-w-150">
                                            Buy Now</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <Link href="/shop" className="position-relative hover-zoom d-block">
                                <Image src={banner2} alt="Banner2Img" className="img-fluid hover-zoom-img" />
                                <div className="position-absolute start-0 start-0 end-0 top-0 bottom-0 d-flex align-items-center">
                                    <div className="m-3 m-sm-4 px-sm-3 text-body">
                                        <h4 className="fs-30" style={{ whiteSpace: "nowrap" }}>Apple Watch Accessories</h4>
                                        <h6 className="mb-4 fs-16">Save up to 35%</h6>
                                        <p className="btn text-dark fw-semibold border border-2 border-dark rounded-pill min-w-150">
                                            Buy Now</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <Link href="/shop" className="position-relative hover-zoom d-block">
                                <Image src={banner3} alt="Banner3Img" className="img-fluid hover-zoom-img" />
                                <div className="position-absolute start-0 start-0 end-0 top-0 bottom-0 d-flex align-items-center">
                                    <div className="m-3 m-sm-4 px-sm-3 text-body">
                                        <h4 className="fs-30">MacBook & iPad Gear</h4>
                                        <h6 className="mb-4 fs-16">Performance Meets Protection</h6>
                                        <p className="btn text-dark fw-semibold border border-2 border-dark rounded-pill min-w-150">
                                            Buy Now</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <Link href="/shop" className="position-relative hover-zoom d-block">
                                <Image src={banner4} alt="Banner4Img" className="img-fluid hover-zoom-img" />
                                <div className="position-absolute start-0 start-0 end-0 top-0 bottom-0 d-flex align-items-center">
                                    <div className="m-3 m-sm-4 px-sm-3 text-body">
                                        <h4 className="fs-30">Exclusive Offer</h4>
                                        <h6 className="mb-4 fs-16">Save More + Earn 2% Rewards</h6>
                                        <p className="btn text-dark fw-semibold border border-2 border-dark rounded-pill min-w-150">
                                            Buy Now</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Banner