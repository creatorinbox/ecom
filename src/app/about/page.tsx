"use client"; // This directive is needed for event handlers like onError in Next.js App Router.
import Image from 'next/image'
import mainslide1 from "@assets/images/home-digital/banner.png";
import HeadTitle from '@src/commonsections/HeadTitle'
import LayoutHeader8 from '@src/components/Headers/LayoutHeader8'
import TopBanner from '@src/components/Headers/TopBanner'
import FooterDigital from '@src/components/FooterDigital'
import aboutside from "@assets/images/home-digital/about-ng.png"
// pages/about-us.js

const AboutUsPage = () => {
  // SVG components for icons
  const ShieldCheck = ({ size = 28, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
  );

  const Users = ({ size = 28, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  );

  const Sparkles = ({ size = 28, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.9 4.8-4.8 1.9 4.8 1.9L12 21l1.9-4.8 4.8-1.9-4.8-1.9L12 3z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
  );
  return (
    <div className="">
        <HeadTitle title="Home Digital" />
        <TopBanner topclass="navbar-digital" />
        <LayoutHeader8 />

    
      <style>{`
        .team-img {
          width: 150px;
          height: 150px;
          object-fit: cover;
        }
        .hero-banner {
          background-size: cover;
          background-position: center;
          min-height: 320px;
        }
        .hero-overlay {
          background-color: rgba(0, 0, 0, 0.5);
        }
          .text-custom-accent {
          color: #56cfe1;
        }
        .bg-custom-accent {
          background-color: #56cfe1;
        }
        .team-img {
          width: 150px;
          height: 150px;
          object-fit: cover;
        }
        .feature-card {
            background-color: #fff;
            border-radius: 0.5rem;
            padding: 2.5rem;
            text-align: center;
        }
        .feature-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin-bottom: 1.5rem;
            color: #fff;
        }
      `}</style>

      {/* Banner/Hero Section */}
      <section
        className="position-relative hero-banner d-flex align-items-center justify-content-center text-center"
        style={{ backgroundImage: `url(${mainslide1.src})` }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>
        <div className="position-relative text-white px-4" style={{ zIndex: 1 }}>
          <h1 className="display-3 fw-bold">About iCare</h1>
          <p className="lead mt-3">Your trusted partner for iPhones and premium Apple accessories.</p>
        </div>
      </section>

      <main className="container py-5">
        {/* Our Story Section */}
        <section className="mb-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className=" mb-3">Our Passion for Your Apple Experience</h2>
              <p className="text-muted">
                iCare was born from a deep appreciation for Apple's design, innovation, and seamless ecosystem. We wanted to create a destination where fellow enthusiasts feel cared for, finding not only the latest iPhones but also a curated selection of accessories that protect and enhance their Apple experience.
              </p>
              <p className="text-muted">
                We believe that the right accessory is more than just functional—it's a form of expression and protection for a device you love. From durable cases to powerful chargers and stylish audio gear, every product in our collection is chosen to complement the quality and aesthetic of your Apple devices. Our mission is to provide authentic products with expert service you can trust.
              </p>
            </div>
            <div className="col-md-6">
              <Image src={aboutside} alt="A collection of iPhones and accessories" className="img-fluid rounded-3 shadow-md" />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="">
            <div className='container'>
                <div className="text-center mb-5">
                    <h2 className="">Why Shop With Us?</h2>
                </div>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="feature-card h-100">
                            <div className="feature-icon bg-custom-accent">
                                <ShieldCheck />
                            </div>
                            <h3 className="h5 fw-semibold">Guaranteed Authentic</h3>
                            <p className="text-muted ">We sell 100% genuine iPhones and Apple-certified accessories.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-card h-100">
                            <div className="feature-icon bg-custom-accent">
                                <Users />
                            </div>
                            <h3 className="h5 fw-semibold">Expert Support</h3>
                            <p className="text-muted ">Our team of Apple fans is ready to help you find the perfect product.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-card h-100">
                            <div className="feature-icon bg-custom-accent">
                                <Sparkles />
                            </div>
                            <h3 className="h5 fw-semibold">Curated Accessories</h3>
                            <p className="text-muted ">A handpicked selection of the best gear to elevate your Apple experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* footer */}
    <FooterDigital />
    
    </div>
  );
};

export default AboutUsPage;
