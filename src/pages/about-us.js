import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { FaCheckSquare } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import aboutData from "@/utils/json/aboutData";
import Industry from "@/components/Industry";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

function AboutUs() {
  return (
    <>
      <MetaHead page="about" />

      {/* Banner Section */}
      <Banner data={bannerData.about} />

      {/* Section 1 - About MakersofCode */}
      <section>
        <Container>
          <Row>
            <Col xl={5} lg={5} md={6} sm={12} xs={12} className="mb-3">
              <Image
                src={aboutData.section1.sectionImage}
                alt="About Us"
                title="About Us"
                width={aboutData.section1.imageWidth}
                height={aboutData.section1.imageHeight}
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                priority
              />
            </Col>
            <Col xl={7} lg={7} md={6} sm={12} xs={12} className="mb-3">
              <span>{aboutData.section1.subheading}</span>
              <h2>{aboutData.section1.heading}</h2>
              <hr />
              <p>{aboutData.section1.description}</p>
              <Row as="ul" className="list-unstyled">
                {aboutData.section1.featuredList.map((item, index) => (
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    as="li"
                    key={index}
                    className="mb-2"
                  >
                    <FaCheckSquare /> {item}
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Link
                href={aboutData.section1.ctaLink}
                title={aboutData.section1.ctaText}
              >
                {aboutData.section1.ctaText} <FaArrowRightLong />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industry Section - Industry We Serve */}
      <Industry />

      {/* Testimonial & Contact Section */}
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
