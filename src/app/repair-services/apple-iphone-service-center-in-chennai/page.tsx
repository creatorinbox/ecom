"use client";

// pages/iphone-service.js
import banner from "@assets/images/home-digital/iphone-repair-banner.png";
import HeadTitle from '@src/commonsections/HeadTitle'
import LayoutHeader8 from '@src/components/Headers/LayoutHeader8'
import TopBanner from '@src/components/Headers/TopBanner'
import FooterDigital from '@src/components/FooterDigital'
const IPhoneServicePage = () => {
    // SVG Icons
    const CheckCircle = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
    const Droplet = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C5 11.1 4 13 4 15a7 7 0 0 0 7 7z"></path></svg>;
    const Camera = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>;
    const Smartphone = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><line x1="12" x2="12.01" y1="18" y2="18"></line></svg>;
    const BatteryCharging = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"></path><path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"></path><path d="m11 7-3 5h4l-3 5"></path></svg>;
    const CreditCard = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>;
    const PhoneCall = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81 .7A2 2 0 0 1 22 16.92z"></path></svg>;

  return (
    <div className="iphone-service-page-container">
        <HeadTitle title="Home Digital" />
        <TopBanner topclass="navbar-digital" />
        <LayoutHeader8 />
      <style>{`
        .iphone-service-page-container {
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

      <section
        className="position-relative hero-banner d-flex align-items-center justify-content-center text-center"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>
        <div className="position-relative text-white px-4" style={{ zIndex: 1 }}>
          <h1 className="display-4 fw-bold">iPhone Repair Service</h1>
          <p className="lead mt-2">Fast, reliable, and precise repairs for your iPhone.</p>
        </div>
      </section>

      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
                <h2 className="">Your One-Stop Solution for iPhone Repairs</h2>
                <p className="mt-3 text-muted">
                    With the emergence of advanced gadgets, life has become simpler. But it's unpredictable when they might become non-functional. If your iPhone stops working, we are here to provide immediate assistance. As the best iPhone Service Center in Chennai, iCare Service is your one-stop solution for all repair needs, handled by our experienced team of professionals.
                </p>
            </div>
        </div>

        <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6"><div className="feature-card h-100"><CheckCircle className="feature-icon" size={40}/><h4 className="mb-2">Real Factory Parts Provided</h4><p>We value our customers and ensure all their needs are met. We provide genuine parts and our repairing service is done with utmost precision.</p></div></div>
            <div className="col-lg-4 col-md-6"><div className="feature-card h-100"><CreditCard className="feature-icon" size={40}/><h4 className="mb-2">Services at Affordable Price</h4><p>We provide the best service at affordable prices. Our services are matchless in the market, ensuring your device functions properly after repair.</p></div></div>
            <div className="col-lg-4 col-md-6"><div className="feature-card h-100"><PhoneCall className="feature-icon" size={40}/><h4 className="mb-2">We Are Just a Call Away</h4><p>Whenever you need assistance, remember iCare Service. We provide fast and remarkable service within 24 hours at a nominal price.</p></div></div>
        </div>
      </div>

      <section className="py-5 repair-section">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="">Common iPhone Repairs</h2>
                <p className="text-muted mt-2">We fix a wide range of issues to get your iPhone back in perfect condition.</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6"><div className="repair-card h-100"><div className="repair-icon"><Droplet/></div><h5 className="mb-2">Water Damage Repair</h5><p>We have a strong track record of successfully repairing liquid-damaged iPhones. You only pay if we succeed!</p></div></div>
                <div className="col-lg-4 col-md-6"><div className="repair-card h-100"><div className="repair-icon"><Camera/></div><h5 className="mb-2">Camera and Lens Repair</h5><p>Broken lens or autofocus problems? We can repair your iPhone’s back camera in under an hour.</p></div></div>
                <div className="col-lg-4 col-md-6"><div className="repair-card h-100"><div className="repair-icon"><Smartphone/></div><h5 className="mb-2">Broken Screen Repair</h5><p>We fix broken front glass, touchscreen issues, vertical lines, and blank screens—all within an hour.</p></div></div>
                <div className="col-lg-4 col-md-6"><div className="repair-card h-100"><div className="repair-icon"><Smartphone/></div><h5 className="mb-2">Back Panel Replacement</h5><p>Bent frames, non-functioning buttons, or scratches? We can replace the back panel frame perfectly.</p></div></div>
                <div className="col-lg-4 col-md-6"><div className="repair-card h-100"><div className="repair-icon"><CreditCard/></div><h5 className="mb-2">Charging Port Repair</h5><p>We’ll quickly diagnose any issues with your charging port and replace it if needed, usually within 30 minutes.</p></div></div>
                <div className="col-lg-4 col-md-6"><div className="repair-card h-100"><div className="repair-icon"><BatteryCharging/></div><h5 className="mb-2">Battery Replacement</h5><p>If your iPhone doesn’t hold a charge, a new battery might be needed. This service takes just 30 minutes.</p></div></div>
            </div>
        </div>
      </section>

      <section className="py-5 testing-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h3>We always test your iPhone after repair</h3>
                    <p className="mt-3 text-muted">
                        To repair your phone, we will disassemble it, replace the faulty parts, and then reassemble it. This intricate process requires thorough testing to ensure everything functions correctly. You’re welcome to test the device yourself in our store. However, for longer repairs, we’ll need your passcode to complete testing. Rest assured, your data remains secure.
                    </p>
                    <p className="text-muted">
                        Please note that our 1-year warranty does not cover water damage or software repairs, nor does it apply to physical damage. For more details, please read our <a href="/repair-service-terms-and-conditions">warranty policy</a>.
                    </p>
                </div>
            </div>
        </div>
      </section>
      <FooterDigital />
    </div>
  );
};

export default IPhoneServicePage;
