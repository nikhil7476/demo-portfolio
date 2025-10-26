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
      <section>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-3">
              <span>{contactData.subheading}</span>
              <h2>{contactData.title}</h2>
              <hr />
              <p>{contactData.description}</p>
              <ul className="list-unstyled">
                {contactData.iconBox.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.id}
                      className="mb-3 p-3 border rounded shadow-sm"
                    >
                      {item.title === "Email" ? (
                        <Link
                          href={`mailto:${item.description}`}
                          title="Mail Us"
                        >
                          <span>
                            <Icon className="fs-2 mx-2" />
                          </span>{" "}
                          {item.description}
                        </Link>
                      ) : item.title === "Phone" ? (
                        <Link href={`tel:${item.description}`} title="Call Us">
                          <span>
                            <Icon className="fs-2 mx-2" />
                          </span>{" "}
                          {item.description}
                        </Link>
                      ) : (
                        <>
                          <span>
                            <Icon className="fs-2 mx-2" />
                          </span>{" "}
                          {item.description}
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-3">
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section>
        <Container>
          <Row>
            <Col>
              <iframe
                src={contactData.mapLink}
                width="1000"
                height="450"
                className="rounded"
                style={{ border: "0", width: "100%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section>
        <FaqAccordion data={faqData} section="contact" />
      </section>
    </>
  );
}

export default Contact;
