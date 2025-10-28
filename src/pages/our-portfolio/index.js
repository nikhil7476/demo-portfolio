import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import ContactForm from "@/components/ContactForm";
import ServiceMarquee from "@/components/ServiceMarquee";
import FaqAccordion from "@/components/FaqAccordion";
import faqData from "@/utils/json/faqData";
import PortfolioGallery from "@/components/PortfolioGallery";

function OurPortfolio() {
  return (
    <>
      {/* Banner Section */}
      <Banner data={bannerData.portfolio.main} />

      {/* POrtfolio Section */}
      <PortfolioGallery />

      {/* Testimonial & Contact Form Section */}
      <section>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <Testimonial data={testimonialData.portfolio} />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Marquee Section */}
      <ServiceMarquee />

      {/* FAQs Section */}
      <section>
        <FaqAccordion data={faqData} section="portfolio" />
      </section>
    </>
  );
}

export default OurPortfolio;
