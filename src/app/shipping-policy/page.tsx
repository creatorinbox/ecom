"use client";

// pages/shipping-policy.js
import banner from "@assets/images/home-digital/shipping-policy-banner.png";
import HeadTitle from '@src/commonsections/HeadTitle'
import LayoutHeader8 from '@src/components/Headers/LayoutHeader8'
import TopBanner from '@src/components/Headers/TopBanner'
import FooterDigital from '@src/components/FooterDigital'
const ShippingPolicyPage = () => {
  return (
    <div className="policy-page-container">
        <HeadTitle title="Home Digital" />
                <TopBanner topclass="navbar-digital" />
                <LayoutHeader8 />
      <style>{`
        .policy-page-container {
            font-family: 'Poppins', sans-serif;
            color: #4A5568; 
            line-height: 1.8;
        }
        .hero-banner {
          background-size: cover;
          background-position: center;
          min-height: 320px;
        }
        .hero-overlay {
          background-color: rgba(0, 0, 0, 0.5);
        }
        .content-section h3 {
            font-weight: 600;
            color: #2D3748;
            font-size: 1.25rem;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
        }
        .content-section p, .content-section li {
            color: #718096;
            margin-bottom: 1rem;
        }
        .content-section ul {
            padding-left: 1.5rem;
            margin-bottom: 1rem;
        }
        .content-section li {
            margin-bottom: 0.5rem;
        }
      `}</style>

      {/* Banner Section */}
      <section
        className="position-relative hero-banner d-flex align-items-center justify-content-center text-center"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>
        <div className="position-relative text-white px-4" style={{ zIndex: 1 }}>
          <h1 className="display-4 fw-bold">Shipping Policy</h1>
          <p className="lead mt-2">Information about our shipping process and delivery times.</p>
        </div>
      </section>

      <main className="container py-5">
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm content-section">
                    <h3>What is the estimated delivery time?</h3>
                    <p>
                        Delivery times are influenced by product availability, geographic location of the product in inventory, your shipping destination and the courier partner’s time-to-deliver in your location. All products show an estimate date of delivery which is an estimate calculation and not the guaranteed date of delivery.
                    </p>

                    <h3>How much is the delivery cost / shipping fee?</h3>
                    <p>
                        Delivery charge varies with the product you are purchasing. Shipping within India is ₹99 the products purchases on icareservice.in and free shipping on purchases above ₹2,000.
                    </p>

                    <h3>When will the deliveries take place?</h3>
                    <p>
                        In general, our courier partner will try to deliver between 9:00 and 18:00. It can be challenging to stay at home for all these hours, especially on working days. If you cannot be there at a certain hour, try to see if someone else can be at the delivery address to accept the parcel on your behalf.
                    </p>

                    <h3>What if I was not able to receive the shipment?</h3>
                    <p>
                        The courier company usually makes 2-3 delivery attempts to deliver your shipment. If you are not available at your delivery address even then, the shipment is sent back to us and a RTO charge (Return to Origin Charge) is charged to us. In such cases, we charge a nominal fee for re-shipping the shipment again to your same or new address with the available shipping companies.
                    </p>

                    <h3>How will I be notified about my order?</h3>
                    <p>
                        If you have successfully placed an order with us, we will keep you notified at different stages of the journey of your order. An e-mail or SMS will be sent once you’ve successfully placed your order. We’ll also let you know as soon as the seller ships the item(s) to you along with the tracking number(s) for your shipment(s). You can track your orders from the “Track Order” section on our website. We’ll send another communication when your package is on its way to be delivered to your specified address.
                    </p>

                    <h3>How will the packaging look like in case of a door delivery?</h3>
                    <p>
                        We ensure highest standards of packaging norms and deliver all our products in highly standardized Carton Boxes which will enable there are no damages while handling your items.
                    </p>

                    <h3>What to do if my package shows as delivered but I can’t find it?</h3>
                    <p>
                        If your tracking information shows that your package was delivered, but you can’t find it:
                    </p>
                    <ul>
                        <li>See if someone else accepted the delivery.</li>
                        <li>Wait for a few minutes and check at your doorstep/office reception for the arrival of our delivery associates.</li>
                        <li>Wait until the end of the day-packages may show as delivered while still in transit.</li>
                    </ul>
                    <p>
                        If you are still unable to locate your item contact our Customer Service. Please note, we will only be able to support you if contacted within 24 hours of your package marked as Delivered.
                    </p>
                    <p>
                        Products are not shipped on Sundays and National holidays.
                    </p>
                </div>
            </div>
        </div>
      </main>

      {/* footer */}
                <FooterDigital />
    </div>
  );
};

export default ShippingPolicyPage;
