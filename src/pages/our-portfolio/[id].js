import React from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import ContactForm from "@/components/ContactForm";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import faqData from "@/utils/json/faqData";
import FaqAccordion from "@/components/FaqAccordion";

function PortfolioDetail() {
  const router = useRouter();
  const { id } = router.query;

  // const portfolio = portfolioData.myportfolio.find((a) => a.slug === id);

  // if (!portfolio) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <Banner data={bannerData.portfolio[id]} />
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
      <section>
        <FaqAccordion data={faqData} section="portfolio" subCategory={id} />
      </section>
    </>
  );
}

export default PortfolioDetail;
