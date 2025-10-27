import React from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import productData from "@/utils/json/productData";
import ContactForm from "@/components/ContactForm";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import faqData from "@/utils/json/faqData";
import FaqAccordion from "@/components/FaqAccordion";
import Image from "next/image";
import Link from "next/link";
import ServiceMarquee from "@/components/ServiceMarquee";

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product = productData.myproducts.find((a) => a.slug === id);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Banner Section */}
      <Banner data={bannerData.products[id]} />

      {/* Section - 1 About Product Section */}
      <section>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-3">
              <Image
                src={product.section1.sectionImage}
                alt="ABout Product"
                title="About Product"
                width={1000}
                height={600}
                style={{ width: "100%", height: "auto" }}
                className="img-fluid rounded"
              />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-3">
              <span>{product.section1.subheading}</span>
              <h2>{product.section1.title}</h2>
              <hr />
              <p>{product.section1.description}</p>
              <Row>
                {product.section1.featuredPoints &&
                  product.section1.featuredPoints.length > 0 &&
                  product.section1.featuredPoints.map((point, index) => (
                    <Col
                      key={index}
                      xl={6}
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className="mb-3"
                    >
                      <span className="me-2">
                        <FaCheckCircle />
                      </span>{" "}
                      {point}
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Link
                href={product.section1.ctaLink}
                title={product.section1.ctaText}
                className="ctaButton"
              >
                {product.section1.ctaText} <FaArrowRightLong />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section - 2 Core Highlight Section */}
      <section>
        <Container>
          <Row>
            <Col>
              <span>{product.section2.subheading}</span>
              <h2>{product.section2.heading}</h2>
              <hr />
              <p>{product.section2.description}</p>
            </Col>
          </Row>
          <Row>
            {product.section2.iconBox &&
              product.section2.iconBox.length > 0 &&
              product.section2.iconBox.map((iconBox, index) => (
                <Col
                  key={index}
                  xl={4}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-3"
                >
                  <div className="h-100 d-flex gap-3">
                    <div>
                      <span className="fs-2">{iconBox.icon}</span>
                    </div>
                    <div>
                      <h3>{iconBox.title}</h3>
                      <p>{iconBox.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
          <Row>
            <Col className="text-center">
              <Link
                href={product.section2.ctaLink}
                title={product.section2.ctaText}
                className="ctaButton"
              >
                {product.section2.ctaText} <FaArrowRightLong />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Marquee Section */}
      <ServiceMarquee />

      {/* Testimonial & Contact Form Section */}
      <section>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <Testimonial data={testimonialData.products} />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQs Section */}
      <section>
        <FaqAccordion data={faqData} section="products" subCategory={id} />
      </section>
    </>
  );
}

export default ProductDetail;
