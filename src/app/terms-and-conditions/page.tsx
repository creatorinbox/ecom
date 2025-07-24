"use client";

// pages/terms-and-conditions.js
import banner from "@assets/images/home-digital/terms-and-conditions-banner.png";
import HeadTitle from '@src/commonsections/HeadTitle'
import LayoutHeader8 from '@src/components/Headers/LayoutHeader8'
import TopBanner from '@src/components/Headers/TopBanner'
import FooterDigital from '@src/components/FooterDigital'
const TermsAndConditionsPage = () => {
  return (
    <div className="terms-page-container">
        <HeadTitle title="Home Digital" />
                <TopBanner topclass="navbar-digital" />
                <LayoutHeader8 />
      <style>{`
        .terms-page-container {
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
        .section-title {
            font-weight: 600;
            color: #2D3748;
        }
        .content-section h3 {
            font-weight: 600;
            color: #2D3748;
            font-size: 1.25rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        .content-section p {
            color: #718096;
            margin-bottom: 1rem;
        }
        .content-section ul {
            padding-left: 1.5rem;
            color: #718096;
        }
        .content-section li {
            margin-bottom: 0.5rem;
        }
        .content-section a {
            color: #56cfe1;
            text-decoration: none;
        }
        .content-section a:hover {
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
          <h1 className="display-4 fw-bold">Terms and Conditions</h1>
          <p className="lead mt-2">Please read our terms carefully before using our service.</p>
        </div>
      </section>

      <main className="container py-5">
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm content-section">
                    <p className="text-muted">Last updated: July 25, 2024</p>
                    
                    <h3>In General</h3>
                    <p>
                        This document governs your relationship with www.icareservice.in (“Website”). Access to and use of this Website and the products and services available through this Website (collectively, the “Services”) are subject to the following terms, conditions and notices (the “Terms of Service”). By using the Services, you are agreeing to all of the Terms of Service, as may be updated by us from time to time. You should check this page regularly to take notice of any changes we may have made to the Terms of Service.
                    </p>
                    <p>
                        Access to this Website is permitted on a temporary basis, and we reserve the right to withdraw or amend the Services without notice. We will not be liable if for any reason this Website is unavailable at any time or for any period. From time to time, we may restrict access to some parts or this entire Website.
                    </p>
                    <p>
                        This Website may contain links to other websites (the “Linked Sites”), which are not operated by icareservice.in. iCare Service has no control over the Linked Sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them. Your use of the Linked Sites will be subject to the terms of use and service contained within each such site.
                    </p>

                    <h3>TRADEMARKS</h3>
                    <p>
                        All product and company names are trademarks of their respective holders. iPhone, iPad, iPod, iPod touch, Mac and iMac are registered trademarks and property of Apple, Inc. And same is applicable for all the mentioned brands. iCare Service is not affiliated with Apple or any other brand listed on our website. We use these trademarks only to the extent necessary for our customers to identify whether certain repair or replacement parts are compatible with the products owned by our customers.
                    </p>

                    <h3>Privacy Policy</h3>
                    <p>
                        Our privacy policy, which sets out how we will use your information, can be found at <a href="https://icareservice.in/privacy-policy" target="_blank" rel="noopener noreferrer">https://icareservice.in/privacy-policy</a>. By using this Website, you consent to the processing described therein and warrant that all data provided by you is accurate.
                    </p>

                    <h3>Shipping Policy</h3>
                    <p>
                        Please read our shipping policy at <a href="https://icareservice.in/shipping-policy" target="_blank" rel="noopener noreferrer">https://icareservice.in/shipping-policy</a>.
                    </p>

                    <h3>Prohibitions</h3>
                    <p>
                        You must not misuse this Website. You will not: commit or encourage a criminal offense; transmit or distribute a virus, trojan, worm, logic bomb or any other material which is malicious, technologically harmful, in breach of confidence or in any way offensive or obscene; hack into any aspect of the Service; corrupt data; cause annoyance to other users; infringe upon the rights of any other person’s proprietary rights; send any unsolicited advertising or promotional material, commonly referred to as “spam”; or attempt to affect the performance or functionality of any computer facilities of or accessed through this Website. Breaching this provision would constitute a criminal offense and icareservice.in will report any such breach to the relevant law enforcement authorities and disclose your identity to them.
                    </p>
                    <p>
                        We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of this Website or to your downloading of any material posted on it, or on any website linked to it.
                    </p>

                    <h3>Intellectual Property, Software and Content</h3>
                    <p>
                        The intellectual property rights in all software and content (including photographic images) made available to you on or through this Website remains the property of icareservice.in or its licensors and are protected by copyright laws and treaties around the world. All such rights are reserved by icareservice.in and its licensors. You may store, print and display the content supplied solely for your own personal use. You are not permitted to publish, manipulate, distribute or otherwise reproduce, in any format, any of the content or copies of the content supplied to you or which appears on this Website nor may you use any such content in connection with any business or commercial enterprise.
                    </p>

                    <h3>Terms of Sale</h3>
                    <p>
                        By placing an order you are offering to purchase a product on and subject to the following terms and conditions. All orders are subject to availability and confirmation of the order price. Dispatch times may vary according to availability and subject to any delays resulting from postal delays or force majeure for which we will not be responsible.
                    </p>
                    <p>
                        In order to contract with icareservice.in you must be over 18 years of age and possess a valid credit or debit card issued by a bank acceptable to us. Icareservice.in retains the right to refuse any request made by you. If your order is accepted we will inform you by email and we will confirm the identity of the party which you have contracted with. This will usually be icareservice.in or may in some cases be a third party. Where a contract is made with a third party icareservice.in is not acting as either agent or principal and the contract is made between yourself and that third party and will be subject to the terms of sale which they supply you. When placing an order you undertake that all details you provide to us are true and accurate, that you are an authorized user of the credit or debit card used to place your order and that there are sufficient funds to cover the cost of the goods. The cost of foreign products and services may fluctuate. All prices advertised are subject to such changes.
                    </p>
                    <p><strong>(a) Our Contract</strong><br/>
                        When you place an order, you will receive an acknowledgement e-mail confirming receipt of your order: this email will only be an acknowledgement and will not constitute acceptance of your order. A contract between us will not be formed until we send you confirmation by e-mail that the goods which you ordered have been dispatched to you. Only those goods listed in the confirmation e-mail sent at the time of dispatch will be included in the contract formed.
                    </p>
                    <p><strong>(b) Pricing and Availability</strong><br/>
                        Whilst we try and ensure that all details, descriptions and prices which appear on this Website are accurate, errors may occur. If we discover an error in the price of any goods which you have ordered we will inform you of this as soon as possible and give you the option of reconfirming your order at the correct price or cancelling it. If we are unable to contact you we will treat the order as cancelled. If you cancel and you have already paid for the goods, you will receive a full refund on your request. Delivery costs will be charged in addition; such additional charges are clearly displayed where applicable and included in the ‘Total Cost’.
                    </p>
                    <p><strong>(c) Payment</strong><br/>
                        Upon receiving your order we carry out a standard authorization check on your payment card to ensure there are sufficient funds to fulfill the transaction. Your card will be debited upon authorization being received. The monies received upon the debiting of your card shall be treated as a deposit against the value of the goods you wish to purchase. Once the goods have been dispatched and you have been sent a confirmation email the monies paid as a deposit shall be used as consideration for the value of goods you have purchased as listed in the confirmation email.
                    </p>

                    <h3>Disclaimer of Liability</h3>
                    <p>
                        The material displayed on this Website is provided without any guarantees, conditions or warranties as to its accuracy. Unless expressly stated to the contrary to the fullest extent permitted by law icareservice.in and its suppliers, content providers and advertisers hereby expressly exclude all conditions, warranties and other terms which might otherwise be implied by statute, common law or the law of equity and shall not be liable for any damages whatsoever, including but without limitation to any direct, indirect, special, consequential, punitive or incidental damages, or damages for loss of use, profits, data or other intangibles, damage to goodwill or reputation, or the cost of procurement of substitute goods and services, arising out of or related to the use, inability to use, performance or failures of this Website or the Linked Sites and any materials posted thereon, irrespective of whether such damages were foreseeable or arise in contract, tort, equity, restitution, by statute, at common law or otherwise. This does not affect icareservice.in’s liability for death or personal injury arising from its negligence, fraudulent misrepresentation, misrepresentation as to a fundamental matter or any other liability which cannot be excluded or limited under applicable law.
                    </p>

                    <h3>Linking to this Website</h3>
                    <p>
                        You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists. You must not establish a link from any website that is not owned by you. This Website must not be framed on any other site, nor may you create a link to any part of this Website other than the home page. We reserve the right to withdraw linking permission without notice.
                    </p>

                    <h3>Disclaimer as to ownership of trademarks, images of personalities and third party copyright</h3>
                    <p>
                        Except where expressly stated to the contrary all persons (including their names and images), third party trademarks and content, services and/or locations featured on this Website are in no way associated, linked or affiliated with Icareservice.in and you should not rely on the existence of such a connection or affiliation. Any trademarks/names featured on this Website are owned by the respective trade mark owners. Where a trade mark or brand name is referred to it is used solely to describe or identify the products and services and is in no way an assertion that such products or services are endorsed by or connected to icareservice.in.
                    </p>

                    <h3>Indemnity</h3>
                    <p>
                        You agree to indemnify, defend and hold harmless icareservice.in, its directors, officers, employees, consultants, agents, and affiliates, from any and all third party claims, liability, damages and/or costs (including, but not limited to, legal fees) arising from your use this Website or your breach of the Terms of Service.
                    </p>

                    <h3>Variation</h3>
                    <p>
                        Icareservice.in shall have the right in its absolute discretion at any time and without notice to amend, remove or vary the Services and/or any page of this Website.
                    </p>

                    <h3>Invalidity</h3>
                    <p>
                        If any part of the Terms of Service is unenforceable (including any provision in which we exclude our liability to you) the enforceability of any other part of the Terms of Service will not be affected all other clauses remaining in full force and effect. So far as possible where any clause/sub-clause or part of a clause/sub-clause can be severed to render the remaining part valid, the clause shall be interpreted accordingly. Alternatively, you agree that the clause shall be rectified and interpreted in such a way that closely resembles the original meaning of the clause /sub-clause as is permitted by law.
                    </p>

                    <h3>Complaints</h3>
                    <p>
                        We operate a complaints handling procedure which we will use to try to resolve disputes when they first arise, please let us know if you have any complaints or comments.
                    </p>

                    <h3>Waiver</h3>
                    <p>
                        If you breach these conditions and we take no action, we will still be entitled to use our rights and remedies in any other situation where you breach these conditions.
                    </p>

                    <h3>Entire Agreement</h3>
                    <p>
                        The above Terms of Service constitute the entire agreement of the parties and supersede any and all preceding and contemporaneous agreements between you and icareservice.in. Any waiver of any provision of the Terms of Service will be effective only if in writing and signed by a Director of icareservice.in.
                    </p>

                    <h3>Order Cancellations</h3>
                    <p>
                        If you have placed an order and need to cancel it for any reason, please contact us immediately so we can stop the order from being processed and dispatched. All cancellations will incur a 10% or ₹100 cancellation fee, whichever is greater, to cover transaction fees. Orders already shipped cannot be canceled. Please contact customer service for an RMA request if the order you wished to cancel was dispatched.
                    </p>

                    <h3>Return Policy</h3>
                    <p>
                        Please read our return policy at <a href="https://icareservice.in/return-exchange-policy/" target="_blank" rel="noopener noreferrer">https://icareservice.in/return-exchange-policy/</a>.
                    </p>

                    <h3>Repair Service Terms</h3>
                    <p>
                        Please read our repair service terms at <a href="https://icareservice.in/repair-service-terms-and-conditions" target="_blank" rel="noopener noreferrer">https://icareservice.in/repair-service-terms-and-conditions</a>.
                    </p>

                    <h3>Warranty Terms & Conditions</h3>
                    <p>
                        Please read our warranty terms & conditions here: <a href="http://www.icareservice.in/warranty-terms" target="_blank" rel="noopener noreferrer">http://www.icareservice.in/warranty-terms</a>.
                    </p>

                    <h3>Governing Law</h3>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of India. The Courts at Chennai (Tamil Nadu) shall have exclusive jurisdiction in any proceedings arising out of this agreement. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
                    </p>

                    <h3>Changes</h3>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 15 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
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

export default TermsAndConditionsPage;
