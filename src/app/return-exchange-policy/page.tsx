"use client";

// pages/return-exchange-policy.js
import banner from "@assets/images/home-digital/return-policy-banner.png";
import HeadTitle from '@src/commonsections/HeadTitle'
import LayoutHeader8 from '@src/components/Headers/LayoutHeader8'
import TopBanner from '@src/components/Headers/TopBanner'
import FooterDigital from '@src/components/FooterDigital'
const ReturnExchangePolicyPage = () => {
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
        .content-section a {
            color: #56cfe1;
            text-decoration: none;
            font-weight: 500;
        }
        .content-section a:hover {
            text-decoration: underline;
        }
        .help-section {
            border-top: 1px solid #e2e8f0;
            margin-top: 2.5rem;
            padding-top: 2rem;
        }
      `}</style>

      {/* Banner Section */}
      <section
        className="position-relative hero-banner d-flex align-items-center justify-content-center text-center"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>
        <div className="position-relative text-white px-4" style={{ zIndex: 1 }}>
          <h1 className="display-4 fw-bold">Return & Exchange Policy</h1>
          <p className="lead mt-2">Information about our return procedures.</p>
        </div>
      </section>

      <main className="container py-5">
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm content-section">
                    <p>
                        We have a 7-days replacement policy, which means you have 7 days after receiving your item to request a replacement, if the received product is defective or damaged.
                    </p>
                    <p>
                        To be eligible for a replacement, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
                    </p>
                    <p>
                        Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases, Screen guard, Housing, Flex Cable, Repair Tools of any kind including: Screwdrivers, Pry Tools, ESD Safe Tools, and Adhesive & Other Tools as categorized and listed on the site.
                    </p>
                    
                    <h3>Additional non-returnable items:</h3>
                    <ul>
                        <li>Gift cards</li>
                        <li>Services</li>
                        <li>Downloadable software products</li>
                    </ul>
                    <p>
                        To complete your return, we require a receipt or proof of purchase. Please do not send your purchase back to the manufacturer.
                    </p>
                    <p>
                        There are certain situations where only partial refunds are granted:
                    </p>
                    <ul>
                        <li>Any item not in its original condition, damaged or missing parts for reasons not due to our error.</li>
                        <li>Any item that is returned more than 7 days after delivery</li>
                    </ul>

                    <h3>Terms and Conditions for Returns</h3>
                    <p>
                        iCare Service will not be responsible for any incorrect fund transfer/voucher issuance against returns arising due to erroneous input by the customers. The customer takes the complete responsibility of the accuracy of the information provided.
                    </p>
                    <ul>
                        <li>You can return either complete order or some items from the same order.</li>
                        <li>Please pack the products properly and paste/write the return ID on the packet.</li>
                        <li>Please make sure you seal the packet completely before handing over to courier partners.</li>
                        <li>Please use separate packets for items from separate orders.</li>
                        <li>iCare Service follows a 7 days return policy. You can return the product within 7 days of delivery.</li>
                    </ul>
                    <p>
                        We don’t allow anyone to misuse the return policy. Several customers want to abuse the return policy by sending their old broken items back to us. To avoid such issues, you will need to send a photo or video of the actual problem depending on the situation before we authorize the return. You can send a mail to <a href="mailto:support@icareservice.in">support@icareservice.in</a>. Any genuine customer having a valid reason will never have any issues with this policy. This policy is to curb customers who try to cheat us using different tactics.
                    </p>
                    <p>
                        Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your replacement. If you are approved, then your replacement request will be processed and the replacement will be sent you back.
                    </p>

                    <h3>Late or missing refunds</h3>
                    <p>
                        If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted. Next contact your bank. There is often some processing time before a refund is posted. If you’ve done all of this and you still have not received your refund yet, please contact us at <a href="mailto:support@icareservice.in">support@icareservice.in</a>.
                    </p>
                    
                    <h3>Sale items</h3>
                    <p>
                        Only regular priced items may be refunded. Sale items cannot be refunded. We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at <a href="mailto:support@icareservice.in">support@icareservice.in</a> and send your item to: D-7, Basement Floor, Doshi Gardens, No -174, NSK Salai, Vadapalani, Chennai – 600026.
                    </p>
                    <p>
                        If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.
                    </p>
                    <p>
                        If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to them to give to you later, we will send a refund to the gift giver and they will find out about your return.
                    </p>
                    <p>
                        To return your product, you should mail your product to: D-7, Basement Floor, Doshi Gardens, No -174, NSK Salai, Vadapalani, Chennai – 600026. You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                    </p>
                    <p>
                        Depending on where you live, the time it may take for your exchanged product to reach you may vary. If you are returning more expensive items, you may consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.
                    </p>

                    <h3>Cash on Delivery Orders</h3>
                    <p>
                        The advance amount paid by the customer at the time of placing the order cannot be refunded to cover the shipping and handling chargers, any cash on delivery orders returned to origin for any reason. If you have placed an order and need to cancel it for any reason, please contact us immediately so we can stop the order from being processed and dispatched. All cancellations will incur a 10% or Rs 100/- cancellation fee, whichever is greater, to cover transaction fees. Orders already shipped cannot be canceled. Please contact customer service for an RMA request if the order you wished to cancel was dispatched.
                    </p>
                    
                    <div className="help-section">
                        <h3>Need help?</h3>
                        <p>
                            Contact us at <a href="mailto:support@icareservice.in">support@icareservice.in</a> for questions related to refunds and returns.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </main>

      {/* footer */}
          <FooterDigital />
    </div>
  );
};

export default ReturnExchangePolicyPage;
