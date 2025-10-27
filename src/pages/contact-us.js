import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import contactData from "@/utils/json/contactData";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import faqData from "@/utils/json/faqData";

function Contact() {
  return (
    <>
      <MetaHead page="contact" />

      {/* Banner Section */}
      <Banner data={bannerData.contact} />

      {/* Contact Section */}
      {contactData && (
        <section>
          <Container>
            <Row>
              {/* Left Column: Contact Info */}
              {(contactData.subheading ||
                contactData.title ||
                contactData.description ||
                contactData.iconBox?.length > 0) && (
                <Col
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-3 align-content-center"
                >
                  {contactData.subheading && (
                    <span>{contactData.subheading}</span>
                  )}
                  {contactData.title && <h2>{contactData.title}</h2>}
                  <hr />
                  {contactData.description && <p>{contactData.description}</p>}

                  {contactData.iconBox?.length > 0 && (
                    <ul className="list-unstyled">
                      {contactData.iconBox.map((item, index) => {
                        const Icon = item.icon;
                        const description = item.description || "";
                        const isEmail = item.title?.toLowerCase() === "email";
                        const isPhone = item.title?.toLowerCase() === "phone";

                        return (
                          <li
                            key={item.id || index}
                            className="mb-3 p-3 border rounded shadow-sm d-flex align-items-center"
                          >
                            {Icon && (
                              <Icon className="fs-2 mx-2 text-primary" />
                            )}
                            <div>
                              {isEmail ? (
                                <Link
                                  href={`mailto:${description}`}
                                  title="Mail Us"
                                  className="text-decoration-none text-dark"
                                >
                                  {description}
                                </Link>
                              ) : isPhone ? (
                                <Link
                                  href={`tel:${description}`}
                                  title="Call Us"
                                  className="text-decoration-none text-dark"
                                >
                                  {description}
                                </Link>
                              ) : (
                                <span>{description}</span>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </Col>
              )}

              {/* Right Column: Contact Form */}
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="mb-3 align-content-center"
              >
                <ContactForm />
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* Map Section */}
      {contactData?.mapLink && (
        <section>
          <Container>
            <Row>
              <Col>
                <iframe
                  src={contactData.mapLink}
                  title="Our Location"
                  width="100%"
                  height="450"
                  className="rounded shadow-sm"
                  style={{
                    border: 0,
                    width: "100%",
                    minHeight: "350px",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* FAQs Section */}
      <section>
        <FaqAccordion data={faqData} section="contact" />
      </section>
    </>
  );
}

export default Contact;
