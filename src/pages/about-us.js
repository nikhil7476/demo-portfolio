import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import Industry from "@/components/Industry";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import ContactForm from "@/components/ContactForm";

function AboutUs() {
  return (
    <>
      <MetaHead page="about" />

      {/* Banner Section */}
      <Banner data={bannerData.about} />

      {/* Industry Section - Industry We Serve */}
      <Industry />

      {/* Section 6 - Testimonial & Contact */}
      <section>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-3">
              <Testimonial data={testimonialData.home} />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-3">
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutUs;
