"use client";

// pages/all-services.js
import banner from "@assets/images/home-digital/services-banner.png";
import service1 from "@assets/images/home-digital/mobile.png";
import service2 from "@assets/images/home-digital/tab.png";
import service3 from "@assets/images/home-digital/laptop.png";
import HeadTitle from '@src/commonsections/HeadTitle'
import LayoutHeader8 from '@src/components/Headers/LayoutHeader8'
import TopBanner from '@src/components/Headers/TopBanner'
import FooterDigital from '@src/components/FooterDigital'
const AllServicesPage = () => {
    // SVG Icons for services
    const Thermometer = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>;
    const Droplet = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C5 11.1 4 13 4 15a7 7 0 0 0 7 7z"></path></svg>;
    const WifiOff = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="1" x2="23" y1="1" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" x2="12.01" y1="20" y2="20"></line></svg>;
    const Smartphone = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><line x1="12" x2="12.01" y1="18" y2="18"></line></svg>;
    const Cpu = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path><path d="M2 9h2"></path><path d="M2 15h2"></path><path d="M20 9h2"></path><path d="M20 15h2"></path></svg>;
    const BatteryCharging = ({ className = "", size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"></path><path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"></path><path d="m11 7-3 5h4l-3 5"></path></svg>;

  return (
    <div className="services-page-container">
        <HeadTitle title="Home Digital" />
        <TopBanner topclass="navbar-digital" />
        <LayoutHeader8 />
      <style>{`
        .services-page-container {
            font-family: 'Poppins', sans-serif;
            color: #4A5568; 
            line-height: 1.8;
            overflow-x: hidden; /* Prevents horizontal scrolling */
        }
        .hero-banner {
          background-size: cover;
          background-position: center;
          min-height: 320px;
        }
        .hero-overlay {
          background-color: rgba(0, 0, 0, 0.5);
        }
        .section-title {
            font-weight: 600;
            color: #2D3748;
        }
        .service-card {
            background-color: #fff;
            border-radius: 0.5rem;
            padding: 2rem;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0.5rem 1rem rgba(0,0,0,.1)!important;
        }
        .service-icon {
            color: #56cfe1;
            margin-bottom: 1rem;
        }
        .service-card h4 {
            font-weight: 600;
            font-size: 1.1rem;
            color: #2D3748;
        }
        .service-card p {
            font-size: 0.9rem;
            color: #718096;
        }
        .redirect-section {
            background-color: #f8f9fa;
        }
        .redirect-image-card {
            position: relative;
            background-size: cover;
            background-position: center;
            border-radius: 0.5rem;
            overflow: hidden;
            text-decoration: none;
            display: block;
            height: 250px;
            transition: transform 0.3s ease;
        }
        .redirect-image-card:hover {
            transform: scale(1.03);
        }
        .redirect-card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1));
            display: flex;
            align-items: flex-end;
            padding: 1.5rem;
        }
        .redirect-image-card h5 {
            font-weight: 600;
            margin: 0;
            color: #fff;
        }
      `}</style>

      {/* Banner Section */}
      <section
        className="position-relative hero-banner d-flex align-items-center justify-content-center text-center"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>
        <div className="position-relative text-white px-4" style={{ zIndex: 1 }}>
          <h1 className="display-4 fw-bold">Our Services</h1>
          <p className="lead mt-2">Expert repairs for all your favorite devices.</p>
        </div>
      </section>

      <main className="py-5">
        <div className="container">
            <section className="text-center mb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="section-title">Chennai’s most trusted mobile repair service now at your Doorstep!</h2>
                        <p className="mt-3 text-muted">
                            Experience Chennai's most trusted mobile repair service right at your doorstep! Whether you need repairs for iPhones, iPads, Samsung, OnePlus, MI, Vivo, IQOO, Oppo, Realme, Motorola devices, Kindle Fire tablets, or laptops, our expert technicians come to you with top-quality service and convenience. Enjoy hassle-free, reliable repairs with transparent pricing and a commitment to excellence. Schedule your appointment today and let us handle your tech troubles without you ever having to leave home!
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6"><div className="service-card h-100"><Thermometer className="service-icon" size={40}/><h4 className="mb-2">Mobile Overheating</h4><p>Overheating can occur due to multiple reasons like old battery, power-hungry apps, and overcharging. Let our certified mobile repair experts serve you with the best solutions.</p></div></div>
                    <div className="col-lg-4 col-md-6"><div className="service-card h-100"><Droplet className="service-icon" size={40}/><h4 className="mb-2">Water Damage</h4><p>A single drop of water or full immersion can do great damage to charging ports, motherboards, and speakers. Our experts deal in water damaged smartphones and offer the best solutions.</p></div></div>
                    <div className="col-lg-4 col-md-6"><div className="service-card h-100"><WifiOff className="service-icon" size={40}/><h4 className="mb-2">Signal Issues</h4><p>If poor signal strength is a common problem, your device might be the culprit. Our technicians can help by optimizing signal receptors and resolving internal issues.</p></div></div>
                    <div className="col-lg-4 col-md-6"><div className="service-card h-100"><Smartphone className="service-icon" size={40}/><h4 className="mb-2">Cracked Screen</h4><p>Your smartphone is delicate. Devices without screen guards are susceptible to cracks. We cater to all screen issues with utmost care and perfection.</p></div></div>
                    <div className="col-lg-4 col-md-6"><div className="service-card h-100"><Cpu className="service-icon" size={40}/><h4 className="mb-2">Motherboard Problem</h4><p>The motherboard is the smartest part of your phone. Issues like short circuits or moisture penetration need quick expert supervision. Our experts can guide you well.</p></div></div>
                    <div className="col-lg-4 col-md-6"><div className="service-card h-100"><BatteryCharging className="service-icon" size={40}/><h4 className="mb-2">Battery Issues</h4><p>Does your battery drain quickly? It’s a serious problem that needs to be resolved by experts. Opt for our doorstep battery replacement or lab-repair service.</p></div></div>
                </div>
            </section>
        </div>
      </main>

      <section className="py-5 redirect-section">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="section-title">Find Your Repair Service</h2>
                <p className="text-muted mt-2">Select your device to get started.</p>
            </div>
            <div className="row g-4">
                <div className="col-md-4">
                    <a href="/iphone-repair" className="redirect-image-card shadow-sm" 
        style={{ backgroundImage: `url(${service1.src})` }}
                    >
                        <div className="redirect-card-overlay">
                            <h5>iPhone Repair Service</h5>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="/ipad-repair" className="redirect-image-card shadow-sm" 
        style={{ backgroundImage: `url(${service2.src})` }}
            >
    <div className="redirect-card-overlay">
                            <h5>Apple iPad Repair Service</h5>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="/macbook-repair" className="redirect-image-card shadow-sm" 
        style={{ backgroundImage: `url(${service3.src})` }}
            >
                            <div className="redirect-card-overlay">
                            <h5>MacBook Repair Service</h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
      </section>
      {/* footer */}
    <FooterDigital />
    </div>
  );
};

export default AllServicesPage;
