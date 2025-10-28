import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import portfolioData from "@/utils/json/portfolioData";
import ContactForm from "@/components/ContactForm";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import faqData from "@/utils/json/faqData";
import FaqAccordion from "@/components/FaqAccordion";
import ServiceMarquee from "@/components/ServiceMarquee";

function PortfolioDetail() {
  const router = useRouter();
  const { id } = router.query;

  const portfolio = portfolioData.myportfolio.find((a) => a.slug === id);

  if (!portfolio) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Banner Section */}
      <Banner data={bannerData.portfolio[id]} />

      {/* Section - 1 About Project Section */}
      {portfolio.section1 && (
        <section>
          <Container>
            <Row>
              <Col xl={5} lg={5} md={6} sm={12} xs={12} className="mb-3">
                {portfolio.section1.sectionImage && (
                  <Image
                    src={portfolio.section1.sectionImage}
                    alt="About portfolio"
                    title="About portfolio"
                    width={1000}
                    height={600}
                    style={{ width: "100%", height: "auto" }}
                    className="img-fluid rounded"
                  />
                )}
              </Col>
              <Col
                xl={7}
                lg={7}
                md={6}
                sm={12}
                xs={12}
                className="align-content-center mb-3"
              >
                {portfolio.section1.subheading && (
                  <span>{portfolio.section1.subheading}</span>
                )}
                {portfolio.section1.heading && (
                  <h2>{portfolio.section1.heading}</h2>
                )}
                {(portfolio.section1.subheading ||
                  portfolio.section1.heading) && <hr />}
                {portfolio.section1.description && (
                  <p>{portfolio.section1.description}</p>
                )}

                {portfolio.section1.featuredPoints?.length > 0 && (
                  <Row>
                    {portfolio.section1.featuredPoints.map((point, index) => (
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
                )}
                {portfolio.section1.ctaLink && portfolio.section1.ctaText && (
                  <Row>
                    <Col className="text-center">
                      <Link
                        href={portfolio.section1.ctaLink}
                        title={portfolio.section1.ctaText}
                        className="ctaButton"
                      >
                        {portfolio.section1.ctaText} <FaArrowRightLong />
                      </Link>
                    </Col>
                  </Row>
                )}
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* Section - 2 Core Highlight Section */}
      {portfolio.section2 && (
        <section>
          <Container>
            <Row>
              <Col>
                <span>{portfolio.section2.subheading}</span>
                <h2>{portfolio.section2.heading}</h2>
                <hr />
                <p>{portfolio.section2.description}</p>
              </Col>
            </Row>

            {portfolio.section2.iconBox?.length > 0 && (
              <Row>
                {portfolio.section2.iconBox.map((iconBox, index) => (
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
            )}

            {portfolio.section2.ctaLink && portfolio.section2.ctaText && (
              <Row>
                <Col className="text-center">
                  <Link
                    href={portfolio.section2.ctaLink}
                    title={portfolio.section2.ctaText}
                    className="ctaButton"
                  >
                    {portfolio.section2.ctaText} <FaArrowRightLong />
                  </Link>
                </Col>
              </Row>
            )}
          </Container>
        </section>
      )}

      {/* Section - 3 Project Gallery */}
      {portfolio.section3 && (
        <section>
          <Container>
            <Row>
              <Col>
                <span>{portfolio.section3.subheading}</span>
                <h2>{portfolio.section3.title}</h2>
                <hr />
              </Col>
            </Row>
            {portfolio.section3.gallery?.length > 0 && (
              <Row>
                {portfolio.section3.gallery.map((gallery, index) => (
                  <Col
                    key={index}
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className="mb-3"
                  >
                    <Image
                      src={gallery.image}
                      alt="Gallery Item"
                      title="Gallery Item"
                      width={350}
                      height={350}
                      style={{ width: "100%", height: "auto" }}
                      className="img-fluid rounded"
                    />
                  </Col>
                ))}
              </Row>
            )}
            {portfolio.section3.ctaLink && portfolio.section3.ctaText && (
              <Row>
                <Col className="text-center">
                  <Link
                    href={portfolio.section3.ctaLink}
                    title={portfolio.section3.ctaText}
                    className="ctaButton"
                  >
                    {portfolio.section3.ctaText} <FaArrowRightLong />
                  </Link>
                </Col>
              </Row>
            )}
          </Container>
        </section>
      )}

      {/* Marquee Section */}
      <ServiceMarquee />

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

      {/* FAQs Section */}
      <section>
        <FaqAccordion data={faqData} section="portfolio" subCategory={id} />
      </section>
    </>
  );
}

export default PortfolioDetail;
