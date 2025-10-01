import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import homeData from "@/utils/json/homeData";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import ContactForm from "@/components/ContactForm";
import BlogsPreview from "@/components/BlogsPreview";
import HomeBanner from "@/components/HomeBanner";

function Home() {
  return (
    <>
      <HomeBanner />
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
      <section>
        <Container>
          <Row>
            <Col>
              <span>{homeData.articleSection.subheading}</span>
              <h2>{homeData.articleSection.title}</h2>
              <hr />
              <BlogsPreview />
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Link
                href={homeData.articleSection.ctaLink}
                title={homeData.articleSection.ctaText}
                className="ctaButton"
              >
                {homeData.articleSection.ctaText} <FaArrowRightLong />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
