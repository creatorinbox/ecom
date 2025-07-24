"use client";

// pages/privacy-policy.js
import banner from "@assets/images/home-digital/privacy-policy-banner.png";
import HeadTitle from '@src/commonsections/HeadTitle'
import LayoutHeader8 from '@src/components/Headers/LayoutHeader8'
import TopBanner from '@src/components/Headers/TopBanner'
import FooterDigital from '@src/components/FooterDigital'
const PrivacyPolicyPage = () => {
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
        .content-section p {
            color: #718096;
            margin-bottom: 1rem;
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
          <h1 className="display-4 fw-bold">Privacy Policy</h1>
          <p className="lead mt-2">How we collect and use your information.</p>
        </div>
      </section>

      <main className="container py-5">
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm content-section">
                    <p>
                        The following Privacy Policy details how information is collected and used on this site. By using this site (www.icareservice.in) you agree to the use of this privacy policy. The statements in this privacy policy may be changed or updated at any time and will be published on this page for your use and agreement.
                    </p>

                    <h3>Information Security</h3>
                    <p>
                        icareservice.in upholds strict privacy restrictions to insure our users/customers a safe and secure experience. Our restrictions include procedures to secure all private information for both electronic and physical records to prevent unauthorized access and disclosure of all sensitive information. Only employees of iCare Service with authorized access and site administration right may view any information provided by the user. All computers and servers which handle any information submitted by users/customers on the site to its administrators are housed in a secure environment and operate on closed networks with firewall protection.
                    </p>
                    <p>
                        Any and all personal information such as: name, shipping and billing addresses, credit card information, email addresses, etc. is voluntarily submitted by you the user/customer and may be used to complete a purchase, submitting a contact form, signing up for newsletters, etc.
                    </p>
                    <p>
                        Under no circumstances will information collected from our users/customers ever be sold or traded. Only trusted affiliates and third party companies which we partner with to conduct business related to this site may receive only necessary information to perform operations including: shipping, payment processing, or responding to a user/customer inquiry.
                    </p>

                    <h3>Placing an Order</h3>
                    <p>
                        To purchase items from this website you will need to provide personal information including: name, shipping & billing address, credit card / payment information (including card number, expiration date, ccv security code, etc.) All private information shared between the user and icareservice.in during checkout / payment processing uses a secure SSL encrypted channel with digital signatures to insure the protection of our customer’s sensitive data and uphold PCI compliance standards.
                    </p>

                    <h3>Usage of Cookies</h3>
                    <p>
                        This site may use “cookies” which are small pieces of data stored in a visitor’s web browser while on a website that can allow us to improve usability and restore login sessions for users who may have previously logged in a user account. Cookies do not store any personally identifiable information. Your web browser may provide you with options to disable cookies, but this may disable certain user functionality. This site uses Google Analytics to track usage statistics and traffic sources from visitors on the site allowing us to improve our offered services, product availability and catalog, as well as demographic and market research. To learn more information about cookie usage and Google Analytics you can read more at <a href="http://www.google.in/analytics" target="_blank" rel="noopener noreferrer">www.google.in/analytics</a>.
                    </p>

                    <h3>External Links</h3>
                    <p>
                        This site may contain links to external websites and content other than that which is on this site. iCare Service holds no responsibility for the privacy/security policies and practices these sites may deploy nor the misuse of information handled by those sites upon being directed from iCare Service. Please read the privacy policy of any site you visit especially if such site should handle sensitive information.
                    </p>

                    <div className="help-section">
                        <h3>Contact Us</h3>
                        <p>
                            If you are still uncertain about the information detailed above on how your information is used and stored on this site please feel free to email us at <a href="mailto:support@icareservice.in">support@icareservice.in</a>.
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

export default PrivacyPolicyPage;
