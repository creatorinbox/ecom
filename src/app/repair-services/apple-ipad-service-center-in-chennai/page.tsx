"use client";

// pages/ipad-service.js
import banner from "@assets/images/home-digital/ipad-repair-banner.png";
import HeadTitle from '@src/commonsections/HeadTitle'
import LayoutHeader8 from '@src/components/Headers/LayoutHeader8'
import TopBanner from '@src/components/Headers/TopBanner'
import FooterDigital from '@src/components/FooterDigital'
const IPadServicePage = () => {
    // SVG Icons
    const ShieldCheck = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>;
    const Truck = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>;
    const Cpu = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path><path d="M2 9h2"></path><path d="M2 15h2"></path><path d="M20 9h2"></path><path d="M20 15h2"></path></svg>;

  return (
    <div className="ipad-service-page-container">
        <HeadTitle title="Home Digital" />
        <TopBanner topclass="navbar-digital" />
        <LayoutHeader8 />
      <style>{`
        .ipad-service-page-container {
            font-family: 'Poppins', sans-serif;
            color: #4A5568; 
            line-height: 1.8;
            overflow-x: hidden;
        }
        .hero-banner {
          background-size: cover;
          background-position: center;
          min-height: 320px;
        }
        .hero-overlay {
          background-color: rgba(0, 0, 0, 0.5);
        }
        .feature-card {
            background-color: #fff;
            border-radius: 0.5rem;
            padding: 2rem;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0.5rem 1rem rgba(0,0,0,.1)!important;
        }
        .feature-icon {
            color: #56cfe1;
            margin-bottom: 1rem;
        }
        .feature-card h4 {
            font-weight: 600;
            font-size: 1.1rem;
            color: #2D3748;
        }
        .feature-card p {
            font-size: 0.9rem;
            color: #718096;
        }
        .testing-section a {
            color: #56cfe1;
            text-decoration: none;
            font-weight: 500;
        }
        .testing-section a:hover {
            text-decoration: underline;
        }
      `}</style>

      {/* Banner Section */}
      <section
        className="position-relative hero-banner d-flex align-items-center justify-content-center text-center"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>
        <div className="position-relative text-white px-4" style={{ zIndex: 1 }}>
          <h1 className="display-4 fw-bold">Apple iPad Repair Service</h1>
          <p className="lead mt-2">Premium, affordable, and reliable iPad repairs in Chennai.</p>
        </div>
      </section>

      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
                <h2 className="">Your One-Stop Solution for iPad Repairs</h2>
                <p className="mt-3 text-muted">
                    We, at iCare Service warmly welcome you to our website. If you are looking for a premium Apple iPad Service Center in Chennai, then we are your one-stop solution. We provide a complete service to our customers at affordable cost. Our service is matchless in the market. We are backed by experienced team of professionals who are always at the service of the customers.
                </p>
                 <p className="text-muted">
                    We are proficient in providing a wide range of services to our customers. If you are looking for a reliable iPad Service Center in Chennai with wide array of services, then iCare Service is the name that you can rely on.
                </p>
            </div>
        </div>

        <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6"><div className="feature-card h-100"><ShieldCheck className="feature-icon" size={40}/><h4 className="mb-2">Guaranteed Quality Service</h4><p>When you think of a reputed service center, think of us. After you get the repairing work done from us, you will get complete satisfaction.</p></div></div>
            <div className="col-lg-4 col-md-6"><div className="feature-card h-100"><Truck className="feature-icon" size={40}/><h4 className="mb-2">Pick-Up and Delivery</h4><p>Unable to walk into our store? Do not worry. We will visit your doorstep to collect the device and deliver it back once the repair is done.</p></div></div>
            <div className="col-lg-4 col-md-6"><div className="feature-card h-100"><Cpu className="feature-icon" size={40}/><h4 className="mb-2">Genuine Quality Service Parts</h4><p>We are the only iPad Service Center in Chennai that provides 100% genuine parts to our customers. We will surely stand up to your expectation level.</p></div></div>
        </div>
      </div>

      <section className="py-5 testing-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h3 className="">We always test your iPad after repair</h3>
                    <p className="mt-3 text-muted">
                        To repair your iPad, we need to disassemble it, replace the faulty part and assemble it back. This is a complicated process and to make sure everything is working fine, we need to test it. You can do it yourself while you are in our store but if the repair takes more time or if you send it for repair, we need your passcode, pattern lock or password. We won’t be able to test it without it. Your data stays safe for the whole process of testing and we don’t change anything in settings.
                    </p>
                    <p className="text-muted">
                        Our 1-year warranty does not apply to water damage repair services and software repairs. The warranty does not cover physical damage. <a href="/repair-service-terms-and-conditions">Read more about the warranty</a>.
                    </p>
                </div>
            </div>
        </div>
      </section>
      <FooterDigital />
    </div>
  );
};

export default IPadServicePage;
