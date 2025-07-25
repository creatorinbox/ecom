"use client";

// pages/macbook-service.js
import banner from "@assets/images/home-digital/macbook-repair-banner.png";
import HeadTitle from '@src/commonsections/HeadTitle'
import LayoutHeader8 from '@src/components/Headers/LayoutHeader8'
import TopBanner from '@src/components/Headers/TopBanner'
import FooterDigital from '@src/components/FooterDigital'
const MacBookServicePage = () => {
    // SVG Icons
    const Zap = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
    const Truck = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>;
    const Search = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>;
    const Keyboard = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2" ry="2"></rect><path d="M6 8h.01"></path><path d="M10 8h.01"></path><path d="M14 8h.01"></path><path d="M18 8h.01"></path><path d="M8 12h.01"></path><path d="M12 12h.01"></path><path d="M16 12h.01"></path><path d="M7 16h10"></path></svg>;
    const Square = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect></svg>;
    const Camera = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>;
    const Battery = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect><line x1="22" x2="22" y1="11" y2="13"></line></svg>;
    const Cpu = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path><path d="M2 9h2"></path><path d="M2 15h2"></path><path d="M20 9h2"></path><path d="M20 15h2"></path></svg>;

  return (
    <div className="macbook-service-page-container">
        <HeadTitle title="Home Digital" />
        <TopBanner topclass="navbar-digital" />
        <LayoutHeader8 />
      <style>{`
        .macbook-service-page-container {
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
        .repair-section {
            background-color: #f8f9fa;
        }
        .repair-card {
            background-color: #fff;
            border-radius: 0.5rem;
            padding: 2rem;
            text-align: center;
            border: 1px solid #e2e8f0;
        }
        .repair-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #eefcff;
            color: #56cfe1;
            margin-bottom: 1rem;
        }
        .repair-card h5 {
            font-weight: 600;
            font-size: 1.1rem;
            color: #2D3748;
        }
        .repair-card p {
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
        .model-list span {
            display: inline-block;
            background-color: #e2e8f0;
            color: #4A5568;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.9rem;
            margin: 0.25rem;
            font-weight: 500;
        }
      `}</style>

      {/* Banner Section */}
      <section
        className="position-relative hero-banner d-flex align-items-center justify-content-center text-center"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>
        <div className="position-relative text-white px-4" style={{ zIndex: 1 }}>
          <h1 className="display-4 fw-bold">MacBook Repair Service</h1>
          <p className="lead mt-2">High-quality repairs for your MacBook, Mac mini, and iMac.</p>
        </div>
      </section>

      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
                <h2 className="">Expert MacBook Service in Chennai</h2>
                <p className="mt-3 text-muted">
                    We, at MacBook Service center in Chennai offer you with high quality MacBook repairing services. We value the trust you have shown in us and our after-sale service is a token of honor for our customers. We repair both software and hardware glitches, offer a free pick-up & drop facility, as well as a free diagnosis service at your own comfort.
                </p>
                <div className="model-list mt-4">
                    <span>MacBook Pro</span>
                    <span>MacBook Pro Retina</span>
                    <span>MacBook Air</span>
                    <span>iMac</span>
                    <span>Mac mini</span>
                    <span>Mac Pro</span>
                </div>
            </div>
        </div>
      </div>

      <section className="py-5 repair-section">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="">Common MacBook Repairs</h2>
                <p className="text-muted mt-2">From keyboards to batteries, we handle all types of MacBook issues.</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6"><div className="repair-card h-100"><div className="repair-icon"><Keyboard/></div><h5 className="mb-2">Keyboard Replacement</h5><p>We offer budget-friendly keyboard replacement if yours turns out defective and stops functioning.</p></div></div>
                <div className="col-lg-4 col-md-6"><div className="repair-card h-100"><div className="repair-icon"><Square/></div><h5 className="mb-2">Front Glass Replacement</h5><p>Be it a simple crack or the glass coming out, our front glass replacement service is what you will find useful.</p></div></div>
                <div className="col-lg-4 col-md-6"><div className="repair-card h-100"><div className="repair-icon"><Square/></div><h5 className="mb-2">Trackpad Replacement</h5><p>Part away with your hesitation and enjoy reliable trackpad replacement service from our expert technicians.</p></div></div>
                <div className="col-lg-4 col-md-6"><div className="repair-card h-100"><div className="repair-icon"><Camera/></div><h5 className="mb-2">Front Camera Cable</h5><p>We understand the importance of your MacBook’s camera and can fix issues caused by a faulty cable.</p></div></div>
                <div className="col-lg-4 col-md-6"><div className="repair-card h-100"><div className="repair-icon"><Battery/></div><h5 className="mb-2">Battery Replacement</h5><p>Is your MacBook’s battery getting heated up abnormally or is not getting charged? Reach us for a solution.</p></div></div>
                <div className="col-lg-4 col-md-6"><div className="repair-card h-100"><div className="repair-icon"><Cpu/></div><h5 className="mb-2">Logic Board Repair</h5><p>We also bring to you graphic chip replacement, hard disk replacement, and logic board repairing services.</p></div></div>
            </div>
        </div>
      </section>

      <section className="py-5 testing-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h3>We always test your MacBook after repair</h3>
                    <p className="mt-3 text-muted">
                        Upon having any queries regarding the service, you can reach us by mail or call us to discuss the issue. Be it anytime of the day, our customer support professionals address all your problems patiently. For those whose devices are within warranty coverage, any after sale service is offered for free.
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

export default MacBookServicePage;
