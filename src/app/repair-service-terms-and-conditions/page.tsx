"use client";

// pages/repair-service-terms.js
import banner from "@assets/images/home-digital/repair-terms-banner.png";
import HeadTitle from '@src/commonsections/HeadTitle'
import LayoutHeader8 from '@src/components/Headers/LayoutHeader8'
import TopBanner from '@src/components/Headers/TopBanner'
import FooterDigital from '@src/components/FooterDigital'
const RepairServiceTermsPage = () => {
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
            font-weight: 500;
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
          <h1 className="display-4 fw-bold">Repair Service Terms</h1>
          <p className="lead mt-2">Conditions for our repair services.</p>
        </div>
      </section>

      <main className="container py-5">
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm content-section">
                    <h3>Repair Service Fulfillment</h3>
                    <p>
                        Cases in which your order for repair service(s) cannot be processed or delayed include but are not limited to: further contact required from you the customer from our fraud prevention department, as well as further contact required when a device has been sent to our facility without proper included paperwork filled out legibly and/or correctly.
                    </p>
                    <p>
                        Furthermore, we reserve the right to refuse services to anyone in the event the device is deemed beyond repairable condition upon initial diagnosis, the device received does not match the model specific repair service(s) purchased through our website, and/or payment for such services could not be fully captured.
                    </p>

                    <h3>Repair Service – Hours of Operation</h3>
                    <p>
                        Our regular business hours are Monday through Friday, 10 am to 6 pm IST. In the event your device is derived to our facilities on a Sunday or on a holiday our facilities are closed, services to your device will not start until the following business day.
                    </p>

                    <h3>Repair Service – In-Bound Shipping Liability Notice</h3>
                    <p>
                        <strong>Terms Defined:</strong> The term “in-bound” is defined as the initial process of you, the customer, shipping your device to us to complete repair services.
                    </p>
                    <p>
                        iCare Service is not liable for any loss or damages incurred during the in-bound shipment process of your device(s) from you the customer to us. Any damages or loss of your package incurred during the in-bound shipping process will be responsible by the shipping provider. All claims of damage or loss during in-bound shipping must be taken up with your chosen shipping provider. iCare Service strongly suggests that you obtain tracking information from the shipping service provider you choose to ship your device to us. We also STRONGLY suggest you obtain insurance on your package sent to us for service.
                    </p>
                    <p>
                        iCare Service may contact you if your package has been received damaged to the point of further unsuspected damage to your device. We may choose to provide pictures or video evidence of the damaged package and/or un-packing of the device to note further or suspected damage incurred during the in-bound shipment of your device to us.
                    </p>
                    <p>
                        iCare Service has the right to refuse repair services if further un-expected damage has occurred to the device during the in-bound shipment to us. We may also provide advice on how to take further action to resolve such issues incurred during the inbound shipment process of your device to us.
                    </p>
                    <p>
                        iCare Service kindly asks you to print and fill out our Repair Service Form and include it inside the package you choose to send your device to us for repair. If you do not include this form filled out inside your package we cannot guarantee that your repair can be expedited as quick as possible if further communication is required by you the customer.
                    </p>

                    <h3>Repair Service – Initial Inspection and Diagnosis of your device prior to Repair Service</h3>
                    <p>
                        iCare Service will perform an initial inspection and diagnosis of your device prior to performing requested repair services to ensure the reparability of your device to working condition. We will take proper steps and procedures to document the received condition of the device and note any cosmetic or physical damage, imperfections, broken or missing components, and other issues with the device to ensure and thorough diagnosis prior to the repair. We will also use this documented information to protect our liability during the possession and services rendered to your device or property. In the event that the initial purchased repair services will not fix the intended issues or damaged part(s) we may then contact you to provide details of initial diagnosis to suggest additional parts or repair services required to fix your device to working condition.
                    </p>
                    <p>
                        If additional parts or services are required to repair your device to a working condition we may then request payment authorization via telephone to cover additional charges necessary to complete the repair.
                    </p>

                    <h3>Repair Service – Water Damage</h3>
                    <p>
                        If your device is received and upon initial diagnosis we determine the presence of water or moisture induce damage we may then contact you to inform you of the presence of such damage and determine the reparability of your device. We may also attempt to clean up the affected areas of your device using various methods administered by professionals to resolve any presence of water damage. We will not provide a warranty or guarantee on the repair service in the instance your device has suspected water damage.
                    </p>

                    <h3>Repair Service – Privacy and Security</h3>
                    <p>
                        We may request any security codes or locking swipe patterns required to unlock your device to troubleshoot and record various issues during initial diagnosis and post repair inspection. If you choose not to provide such information required to unlock your device to complete a full diagnosis we may then note your decision and revoke coverage or liability on various components on your device including but not limited to buttons, cameras, keypads, keyboards, LCD screens, Touch Screen Digitizers, etc. We will never share or disclose any sensitive information collected during the process of your repair service order.
                    </p>

                    <h3>Repair Service – Sim-Cards, SD Cards & External Accessories</h3>
                    <p>
                        In many cases, if you have a screen protector or other protective film-like material on the outer surfaces of your device they may have to be removed to perform the necessary steps to install a new part to repair your device. iCare Service will not replace a removed screen protector unless otherwise purchased separately as an additional item/service.
                    </p>
                    <p>
                        Please remove any protective cases as well as your sim-card or any memory cards from your device prior to packing and shipping it to our facilities for repair. iCare Service is not liable to replace or protect any cases, sim cards, memory cards or other accessories included in your package with your device sent to us for repairs.
                    </p>

                    <h3>Repair Service – Pricing</h3>
                    <p>
                        iCare Service assigns prices to our repair services that include the cost of the part(s) and labor involved in the completion of the service. In the event during the initial diagnosis of your device we suggest additional parts or services to complete the repair, additional service charges may be requested. Labor charges / Service charges are estimated by the length of time and level of difficulty involved in the completion of the repair.
                    </p>

                    <h3>Repair Service – Return Shipping</h3>
                    <p>
                        During the checkout process, you will have to choose a shipping method to complete your purchase. These pre-calculated shipping services are the options you choose to have your device shipped back to you upon completion of the repair. We offer Blue Dart, FedEx, Delhivery and DTDC shipping for all of our repair services. Your package will be insured and tracking information will be provided via email.
                    </p>
                    <p>
                        If you choose a shipping service that does not require a signature for delivery you agree to take full responsibility for any packages that are left at your doorstep. When delivery confirmation from the selected shipping service has been verified no “lost” or “damage” package claims can be paid. If you choose a shipping method with a “signature required” you must be present at time of delivery and sign to receive your package.
                    </p>
                    <p>
                        iCare Service will take every precaution to ensure your device is delivered safely. Your device will always be shipped back in a box with protective packaging and a signature may be required.
                    </p>

                    <h3>Repair Service – Cosmetic Damage Caused from Repair Procedure – Disclosure</h3>
                    <p>
                        Due to the nature of most repair procedures, typically screen repairs – there is the possibility that certain tools may leave cosmetic imperfections on the exterior of your device. The Apple iPad for example, during the screen removal process it is common to leave minor cosmetic damage to the outer bezel due to the nature of the repair procedures. Our technicians will do their very best to limit the possibility of such damage while taking the necessary steps to complete the repair service. iCare Service is not liable to replace any part of your device that may have been cosmetically damaged due to the nature of the repair procedure.
                    </p>

                    <h3>Repair Service – Void of Warranty Disclosure</h3>
                    <p>
                        By performing a repair on your device you understand that your factory warranty, service provider warranty and/or other extended warranties may be voided. iCare Service offers no guarantees that our repair process will preserve any such warranty conditions.
                    </p>

                    <h3>Repair Service – “Jail broken”, Unlocked, or Hacked Devices</h3>
                    <p>
                        In the event, we receive your device and the factory software has been altered in any way we reserve the right to withhold any guarantee on our parts. If a problem may arise with the part installed in your device and our technicians suspect software related issues we may ask to perform a factory reset on your device either before sending your device back to you or you sending the device back to us for diagnosis.
                    </p>

                    <h3>Repair Service – Abandonment Policy</h3>
                    <p>
                        iCare Service cannot store a customer’s device or property for an extended period of time. There may be special circumstances when your device requires further contact from you the customer or additional payment may be required to complete the repair process. If we have failed to establish contact you with your provided information after 3 or more attempts or additional payment for services rendered cannot be fulfilled, after 10 days your device will be disposed of. iCare Service will not be responsible for any property or data on their device that has been abandoned after 10 days.
                    </p>

                    <h3>Repair Service – Quality of Parts</h3>
                    <p>
                        Unless otherwise described, iCare Service uses highest quality parts available in the market for most repairs. However we do carry factory spec parts for a variety of devices, but unless otherwise described the parts used for repairs are after-market and of the highest quality available from our suppliers.
                    </p>

                    <h3>Repair Service – Color Conversions</h3>
                    <p>
                        If you opt for one of our color conversion services you understand that all color conversions are high-quality after-market parts used to replace the original screen(s) on your device or other housing components. We will return original screens or other parts removed originally from the device if requested. iCare Service cannot guarantee the condition of your original parts as in many cases these parts can become damaged during the removal process.
                    </p>

                    <h3>Repair Service – Warranty and Returns</h3>
                    <p>
                        iCare Service offers a 10 days limited warranty on all of our repair services. Our warranty is effective on the date of delivery or the date of device is ready for collection and offers coverage on the part(s) used for the repair as well as the quality of service rendered. In the event you have an issue with your device after a repair, please contact us immediately so we can take the proper steps to resolve the situation. All warranty claims are handled on a case-by-case basis and will require contact and participation from you the customer to provide all of the information necessary to process your claim. In some cases, you may need to send your device back to our facility for re-work and diagnosis. This warranty only provides coverage on the parts used for the repair and does not cover physical damages caused by mishandling such as impact damage or damage caused by the elements (i.e. water, fire, etc.) This warranty only offers the guarantee that our parts will function correctly and the quality of service will meet industry standards.
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

export default RepairServiceTermsPage;
