"use client"; // This directive is needed for event handlers in Next.js App Router.

import { useState } from 'react';
import banner1 from "@assets/images/home-digital/contact-banner.png";
import HeadTitle from '@src/commonsections/HeadTitle'
import LayoutHeader8 from '@src/components/Headers/LayoutHeader8'
import TopBanner from '@src/components/Headers/TopBanner'
import FooterDigital from '@src/components/FooterDigital'
// pages/contact-us.js

const ContactUsPage = () => {
  // SVG components for icons
  const Mail = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
  );

  const Phone = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  );

  const MapPin = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
  );
  
  const User = ({ size = 20, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  );

  const Book = ({ size = 20, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
  );

  const MessageSquare = ({ size = 20, className = "", ...props }) => (
     <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
  );


  const [formStatus, setFormStatus] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [today, setToday] = useState(new Date().getDay());

  const businessHours = [
    { day: 'Sunday', hours: 'Holiday', dayIndex: 0 },
    { day: 'Mon', hours: '10 am–8 pm', dayIndex: 1 },
    { day: 'Tues', hours: '10 am–8 pm', dayIndex: 2 },
    { day: 'Wed', hours: '10 am–8 pm', dayIndex: 3 },
    { day: 'Thu', hours: '10 am–8 pm', dayIndex: 4 },
    { day: 'Fri', hours: '10 am–8 pm', dayIndex: 5 },
    { day: 'Sat', hours: '10 am–8 pm', dayIndex: 6 },
  ];
  // Reorder for display: Mon -> Sun
  const displayHours = [...businessHours.slice(1), businessHours[0]];


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
        setFormStatus('Please fill out all fields.');
        setTimeout(() => setFormStatus(''), 3000);
        return;
    }
    console.log('Form Submitted:', formData);
    setFormStatus('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <div className="contact-page-container">
<HeadTitle title="Home Digital" />
        <TopBanner topclass="navbar-digital" />
        <LayoutHeader8 />

      <style>{`
        .hero-banner {
          background-size: cover;
          background-position: center;
          min-height: 320px;
        }
        .hero-overlay {
          background-color: rgba(0, 0, 0, 0.5);
        }
        .btn-custom-accent {
          background-color: #56cfe1;
          border-color: #56cfe1;
          color: #fff;
          padding: 0.8rem 1.5rem;
          font-weight: 500;
          transition: background-color 0.3s ease;
          border-radius: 0.25rem;
        }
        .btn-custom-accent:hover {
          background-color: #48b9d0;
          border-color: #48b9d0;
          color: #fff;
        }
        .contact-icon {
          color: #56cfe1;
        }
        .form-control-icon {
          position: absolute;
          top: 50%;
          left: 1rem;
          transform: translateY(-50%);
          color: #A0AEC0;
        }
        .form-control.with-icon {
          padding-left: 3rem;
          background-color: #f8f9fa;
          border: none;
          border-bottom: 2px solid transparent;
          transition: border-color 0.3s ease;
        }
        .form-control.with-icon:focus {
            background-color: #fff;
            box-shadow: none;
            border-bottom-color: #56cfe1;
        }
        .hours-list .list-group-item {
          font-size: 0.95rem;
          color: #4A5568;
        }
        .hours-list .list-group-item.active-day {
          color: #56cfe1;
          font-weight: 600;
          background-color: #f8f9fa;
        }
        .map-container {
            height: 100%;
            min-height: 400px;
        }
      `}</style>

      {/* Banner Section */}
      <section
        className="position-relative hero-banner d-flex align-items-center justify-content-center text-center"
        style={{ backgroundImage: `url(${banner1.src})` }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>
        <div className="position-relative text-white px-4" style={{ zIndex: 1 }}>
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead mt-2">We'd love to hear from you. Here's how you can reach us.</p>
        </div>
      </section>

      <main className="container py-5">
        {/* Row 1: Form and Contact Info */}
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm h-100">
              <h2 className="fw-semibold mb-4 fs-4">Send us a Message</h2>
              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                    <div className="col-md-6 position-relative">
                        <User className="form-control-icon" />
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control with-icon py-2" placeholder="Your Name" required/>
                    </div>
                    <div className="col-md-6 position-relative">
                        <Mail size={20} className="form-control-icon" />
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control with-icon py-2" placeholder="Your Email" required/>
                    </div>
                    <div className="col-md-6 position-relative">
                        <Phone size={20} className="form-control-icon" />
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-control with-icon py-2" placeholder="Your Phone" required/>
                    </div>
                    <div className="col-md-6 position-relative">
                        <Book className="form-control-icon" />
                        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="form-control with-icon py-2" placeholder="Subject" required/>
                    </div>
                    <div className="col-12 position-relative mt-3">
                         <MessageSquare style={{position: 'absolute', top: '1rem', left: '1rem', color: '#6c757d'}}/>
                         <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="form-control with-icon" placeholder="Your Message" required></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-custom-accent w-100 mt-4">
                  Send Message
                </button>
                {formStatus && <p className="mt-3 text-center text-muted small">{formStatus}</p>}
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm h-100">
               <h3 className="fw-semibold mb-4 fs-4">Get In Touch</h3>
               <ul className="list-unstyled">
                  <li className="d-flex align-items-start mb-5">
                      <MapPin size={30} className="contact-icon me-3 mt-1 flex-shrink-0"/>
                      <div>
                          <h6 className="fw-bold mb-1">Our Address</h6>
                          <p className="text-muted mb-0 contact-info-text">Basement Floor, DOSHI GARDENS, D-3, NSK Salai Rd, Vadapalani, Chennai, Tamil Nadu 600026</p>
                      </div>
                  </li>
                   <li className="d-flex align-items-start mb-5">
                      <Phone size={30} className="contact-icon me-3 mt-1 flex-shrink-0"/>
                      <div>
                          <h6 className="fw-bold mb-1">Call Us</h6>
                          <p className="text-muted mb-0 contact-info-text">+91 86750 01122</p>
                      </div>
                  </li>
                   <li className="d-flex align-items-start">
                      <Mail size={30} className="contact-icon me-3 mt-1 flex-shrink-0"/>
                      <div>
                          <h6 className="fw-bold mb-1">Email Us</h6>
                          <p className="text-muted mb-0 contact-info-text">support@icareservice.in</p>
                      </div>
                  </li>
               </ul>
            </div>
          </div>
        </div>

        {/* Row 2: Business Hours and Map */}
        <div className="row g-5 mt-2">
            <div className="col-lg-5">
                <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm h-100">
                    <h3 className="fw-semibold mb-4 fs-4">Business Hours</h3>
                    <ul className="list-group list-group-flush hours-list">
                        {displayHours.map((item) => (
                        <li key={item.day} className={`list-group-item d-flex justify-content-between border-0 px-0 ${item.dayIndex === today ? 'active-day' : ''}`}>
                            <span>{item.day}</span>
                            <span className="text-muted">{item.hours}</span>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="map-container rounded-3 shadow-sm overflow-hidden">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.638421453243!2d80.2110489759235!3d13.058941013406734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e5f3a53c9d%3A0x86843f7f8b701e67!2siCare%20Service%20-%20Vadapalani!5e0!3m2!1sen!2sin!4v1721820154815!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
      </main>

      {/* footer */}
    <FooterDigital />
    </div>
  );
};

export default ContactUsPage;
