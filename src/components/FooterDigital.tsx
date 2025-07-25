"use client";
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

import award from "@assets/images/home-digital/footer-award.png"
import payment from "@assets/images/home-digital/footer-payment.png"
import ResponsiveFooter from '@src/components/ResponsiveFooter'

const FooterDigital = () => {
    const [open, setOpen] = useState(null)
    const year = new Date().getFullYear();

    const scrollToTop = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };



    const handleClick = (id: any) => {
        if (open === id) {
            setOpen(null)
        } else {
            setOpen(id)
        }
    }

    return (
        <React.Fragment>
            <footer className="footer bg-light">
                <div className="container">
                    <div className="row accordion" id="footer-accordion">
                        <div className="col-md-4 col-lg-3 mb-2 footer-accordion-item accordion-item">
                            <button className={`accordion-button footer-accordion-button  px-0 ${open === 1 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"  onClick={() => handleClick(1)}>
                                <h3> <i className="pegk pe-7s-headphones me-1 align-middle me-2"></i></h3>
                                <h5> Got Questions ?</h5>
                            </button>
                            <div id="collapseOne" className={`accordion-collapse collapse ${open === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">

                                <h5 className="fw-medium d-none d-md-flex text-uppercase mb-4 pb-2"><i className="pegk pe-7s-headphones fs-20 me-1 align-middle me-2"></i>
                                    GOT QUESTIONS ?</h5>
                                <div className="my-3">
                                    <div className="pb-3">
                                        <h4 className="fs-18">(+91) 86750 01122</h4>
                                    </div>
                                    <p className="d-flex align-items-start text-muted gap-2">
                                        <i className="pegk pe-7s-map-marker fs-24"></i>
                                        <span>Basement Floor, Doshi Gardens, <br /> <span className="pl__30">No – 174, NSK Salai, Vadapalani,</span><span className="pl__30">Chennai, Tamil Nadu – 600026</span></span>
                                    </p>
                                    <p className="d-flex align-items-start text-muted gap-2">
                                        <i className="pegk pe-7s-mail fs-24"></i>
                                        <Link href="mailto:support@icareservice.in" className="text-reset">support@icareservice.in</Link>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 mb-2 accordion-item footer-accordion-item">
                            <button className={`accordion-button footer-accordion-button px-0  ${open === 2 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  onClick={() => handleClick(2)}>
                                <h5>Categories</h5>
                            </button>
                            <h5 className="fw-medium d-none d-md-block fs-16">Categories</h5>
                            <div id="collapseTwo" className={`accordion-collapse collapse ${open === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                <div className="mt-md-4 pt-md-2">
                                    <ul className="menu list-unstyled">
                                        <li className="menu-item">
                                            <Link href="/repair-services/apple-iphone-service-center-in-chennai" className="text-muted">iPhone Service</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/repair-services/apple-ipad-service-center-in-chennai" className="text-muted">iPad Service</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/repair-services/macbook-service-center-in-chennai" className="text-muted">Macbook Service</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2 mb-2 accordion-item footer-accordion-item">
                            <button className={`accordion-button footer-accordion-button px-0  ${open === 3 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  onClick={() => handleClick(3)}>
                                <h5>Infomation</h5>
                            </button>
                            <h5 className="fw-medium d-none d-md-block fs-16">Infomation</h5>
                            <div id="collapseThree" className={`accordion-collapse collapse ${open === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                <div className="mt-md-4 pt-md-2">
                                    <ul className="menu list-unstyled">
                                        <li className="menu-item">
                                            <Link href="/about" className="text-muted">About Us</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/contact" className="text-muted">Contact Us</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/repair-services" className="text-muted">All Services</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/my-account" className="text-muted">My Account</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2 mb-2 accordion-item footer-accordion-item">
                            <button className={`accordion-button footer-accordion-button px-0  ${open === 4 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"  onClick={() => handleClick(4)}>
                                <h5>Useful links</h5>
                            </button>
                            <h5 className="fw-medium d-none d-md-block fs-16">Useful links</h5>
                            <div id="collapseFour" className={`accordion-collapse collapse ${open === 4 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                <div className="mt-md-4 pt-md-2">
                                    <ul className="menu list-unstyled">
                                        <li className="menu-item">
                                            <Link href="/terms-and-conditions" className="text-muted">Terms &amp; Conditions</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/return-exchange-policy" className="text-muted">Return Policy</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/shipping-policy" className="text-muted">Shipping Policy</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/privacy-policy" className="text-muted">Privacy Policy</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="/repair-service-terms-and-conditions" className="text-muted">Repair Service Terms</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-lg-3 mb-2 footer-accordion-item">
                            <button className={`accordion-button footer-accordion-button px-0  ${open === 5 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"  onClick={() => handleClick(5)}>
                                <h5 className="fw-medium"> <i className="pegk pe-7s-cash align-middle me-2 fs-20"></i>
                                    GOT QUESTIONS ? WE
                                    ARE USING SAFE PAYMENTS</h5>
                            </button>

                            <h5 className="fw-medium d-none d-md-block d-flex fs-16">
                                <span> <i className="pegk pe-7s-cash align-middle me-2 fs-20"></i></span> GOT QUESTIONS ? WE
                                ARE USING SAFE PAYMENTS
                            </h5>
                            <div id="collapseFive" className={`accordion-collapse collapse ${open === 5 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                <div className="mt-md-4">
                                    <div className="mt-lg-4 pt-2">
                                        <Image src={award} alt="AwardImg" className="img-fluid" />
                                        <p className="text-muted mt-4 mb-3 pt-1">Secured by:</p>
                                        <div className="me-5">
                                            <Image src={payment} alt="PaymentImg" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="footer-alt mb-5 mb-lg-0 py-4">
                <Container>
                    <Row>
                        <Col lg={6} className="text-muted text-start">
                            Copyright ©{" "}
                            {year}
                            <Link href="/" className="link-info"> ICare</Link> all
                            rights reserved. 
                        </Col>
                        <Col lg={6}>
                            <ul id="footer-menu" className="list-unstyled d-flex align-items-center mb-0 justify-content-lg-end">
                                <li className="menu-item ">
                                    <Link href="/shop-filter-sidebar" className="text-muted mx-2">Shop</Link>
                                </li>
                                <li className="menu-item ">
                                    <Link href="/about" className="text-muted mx-2">About Us</Link>
                                </li>
                                <li className="menu-item ">
                                    <Link href="/contact" className="text-muted mx-2">Contact</Link>
                                </li>
                                <li className="menu-item ">
                                    <Link href="/repair-services" className="text-muted mx-2">All Services</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* responsive */}

            {/* scroll to top */}
            <Link
                href="#"
                onClick={scrollToTop}
                className="position-fixed bg-white border rounded d-flex align-items-center justify-content-center shadow"
                id="nt_backtop"
            >
                <i className="pr pegk pe-7s-angle-up"></i>
            </Link>

      

            <div className="backdrop-shadow d-none"></div>
            <ResponsiveFooter />

        </React.Fragment>
    )
}

export default FooterDigital