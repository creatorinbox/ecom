"use client";
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import mainslide1 from "@assets/images/home-digital/slider-3.jpg"
import mainslide2 from "@assets/images/home-digital/slider-1.jpg"
import mainslide3 from "@assets/images/home-digital/slider-2.jpg"

import Link from 'next/link';

import 'flickity/css/flickity.css';


const MainSlide = () => {

    const flickityRef = useRef<Flickity | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Initialize Flickity
            const FlickityClass = require('flickity');
            flickityRef.current = new FlickityClass('.slideshow', {
                fade: false,
                cellAlign: 'center',
                imagesLoaded: false,
                lazyLoad: false,
                freeScroll: false,
                wrapAround: true,
                autoPlay: false,
                pauseAutoPlayOnHover: true,
                rightToLeft: false,
                prevNextButtons: false,
                pageDots: true,
                contain: true,
                adaptiveHeight: true,
                dragThreshold: 5,
                percentPosition: true,
            });

            // Initialize AOS (Animate On Scroll)
            // AOS.init();
        }

        // Cleanup Flickity on unmount
        return () => {
            if (flickityRef.current) {
                flickityRef.current.destroy();
            }
        };
    }, []);

    return (
        <React.Fragment>
            <section className="kalles-home-section type_slideshow type_carousel kalles-medical kalles-digital overflow-hidden" dir="ltr">
                <div className="slideshow" data-flickity='{ "fade":0,"cellAlign": "center","imagesLoaded": 0,"lazyLoad": 0,"freeScroll": 0,"wrapAround": true,"autoPlay" : 0,"pauseAutoPlayOnHover" : true, "rightToLeft": false, "prevNextButtons": false,"pageDots": true, "contain" : 1,"adaptiveHeight" : 1,"dragThreshold" : 5,"percentPosition": 1 }'>
                    <div className="slideshow__slide">
                        <Image src={mainslide1} alt="MainslideImg" className="d-none d-md-block position-absolute w-100 h-100 object-fit-cover" />
                        <div className="container position-relative">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="content text-center text-sm-start">
                                        <h5 className="fw-medium fs-18 mb-2">LIMITED TIME OFFER</h5>
                                        <h1 className="fs-55 lh-base mb-1">Up to 50% Off on Branded Accessories</h1>
                                        <h5 className="mb-4 fs-22">Shop top brands — cases, chargers, audio & more. Hurry, ends soon!</h5>
                                        <Link className="btn btn-dark text-white rounded-pill min-w-150 min-h-45 d-inline-flex align-items-center justify-content-center fw-semibold px-4" href="/shop">Explore Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="slideshow__slide">
                        <Image src={mainslide2} alt="MainslideImg" className="d-none d-md-block position-absolute w-100 h-100 object-fit-cover" />
                        <div className="container position-relative">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="content">
                                        <h5 className="fw-medium fs-18 mb-2">LATEST ARRIVALS</h5>
                                        <h1 className="fs-55 lh-base mb-1">Accessorize Your Galaxy & iPhone</h1>
                                        <h5 className="mb-4 fs-22">Cases, chargers, earbuds & more from trusted brands.</h5>
                                        <Link className="btn btn-dark text-white rounded-pill min-w-150 min-h-45 d-inline-flex align-items-center justify-content-center fw-semibold px-4" href="/shop">Explore Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slideshow__slide">
                        <Image src={mainslide3} alt="MainslideImg" className="d-none d-md-block position-absolute w-100 h-100 object-fit-cover" />
                        <div className="container position-relative">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="content">
                                        <h5 className="fw-medium fs-18 mb-2">TRENDING IN 2025</h5>
                                        <h1 className="fs-55 lh-base mb-1">Discover Premium Accessories</h1>
                                        <h5 className="mb-4 fs-22">Top brands. Latest styles. Everything your tech deserves.</h5>
                                        <Link className="btn btn-dark text-white rounded-pill min-w-150 min-h-45 d-inline-flex align-items-center justify-content-center fw-semibold px-4" href="/shop">Explore Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default MainSlide