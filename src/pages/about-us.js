import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FaCheckSquare } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import aboutData from "@/utils/json/aboutData";
import ServiceMarquee from "@/components/ServiceMarquee";
import Industry from "@/components/Industry";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import faqData from "@/utils/json/faqData";
import Timeline from "@/components/Timeline";

function AboutUs() {
  return (
    <>
      <MetaHead page="about" />

      {/* Banner Section */}
      <Banner data={bannerData.about} />

      {/* Service Marquee Section */}
      <ServiceMarquee />

      {/* Section 1 - About MakersofCode */}
      {aboutData?.section1 && (
        <section>
          <Container>
            <Row>
              {/* Image Column */}
              {aboutData.section1.sectionImage && (
                <Col
                  xl={5}
                  lg={5}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-3 align-content-center"
                >
                  <Image
                    src={aboutData.section1.sectionImage}
                    alt={aboutData.section1.imageAlt || "About Us"}
                    title={aboutData.section1.imageTitle || "About Us"}
                    width={aboutData.section1.imageWidth || 600}
                    height={aboutData.section1.imageHeight || 600}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                    }}
                    priority
                    className="img-fluid rounded"
                  />
                </Col>
              )}

              {/* Content Column */}
              {(aboutData.section1.subheading ||
                aboutData.section1.heading ||
                aboutData.section1.description ||
                aboutData.section1.featuredList?.length > 0) && (
                <Col
                  xl={7}
                  lg={7}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-3 align-content-center"
                >
                  {aboutData.section1.subheading && (
                    <span>{aboutData.section1.subheading}</span>
                  )}
                  {aboutData.section1.heading && (
                    <h2>{aboutData.section1.heading}</h2>
                  )}
                  <hr />
                  {aboutData.section1.description && (
                    <p>{aboutData.section1.description}</p>
                  )}

                  {/* Feature List */}
                  {aboutData.section1.featuredList?.length > 0 && (
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
                          <span className="me-2">
                            <FaCheckSquare />
                          </span>
                          {item}
                        </Col>
                      ))}
                    </Row>
                  )}
                </Col>
              )}
            </Row>

            {/* CTA Button */}
            {aboutData.section1.ctaLink && aboutData.section1.ctaText && (
              <Row>
                <Col className="text-center">
                  <Link
                    href={aboutData.section1.ctaLink}
                    title={aboutData.section1.ctaText}
                    className="ctaButton"
                  >
                    {aboutData.section1.ctaText} <FaArrowRightLong />
                  </Link>
                </Col>
              </Row>
            )}
          </Container>
        </section>
      )}

      {/* Section 2 - Specialization */}
      {aboutData?.section2 && (
        <section>
          <Container>
            <Row className="justify-content-between">
              {/* Left Column */}
              {(aboutData.section2.subheading ||
                aboutData.section2.heading ||
                aboutData.section2.review) && (
                <Col
                  xl={5}
                  lg={5}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-3 align-content-center"
                >
                  {aboutData.section2.subheading && (
                    <span>{aboutData.section2.subheading}</span>
                  )}
                  {aboutData.section2.heading && (
                    <h2>{aboutData.section2.heading}</h2>
                  )}
                  <hr />

                  {/* Review Section */}
                  {aboutData.section2.review && (
                    <div className="d-flex align-items-center gap-3">
                      {aboutData.section2.review.image && (
                        <Image
                          src={aboutData.section2.review.image}
                          alt={aboutData.section2.review.title || "Review"}
                          title={aboutData.section2.review.title || "Review"}
                          width={aboutData.section2.review.imageWidth || 135}
                          height={aboutData.section2.review.imageHeight || 40}
                          className="img-fluid"
                        />
                      )}
                      {aboutData.section2.review.title && (
                        <p className="mb-0 fw-semibold">
                          {aboutData.section2.review.title}
                        </p>
                      )}
                    </div>
                  )}
                </Col>
              )}

              {/* Right Column */}
              {aboutData.section2.iconBox?.length > 0 && (
                <Col
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-3 align-content-center"
                >
                  {aboutData.section2.iconBox.map((item, index) => (
                    <div
                      key={item.id || index}
                      className={`d-flex align-items-center mb-3 ${
                        index % 2 === 1 ? "flex-row-reverse text-end" : ""
                      }`}
                    >
                      <div className="fs-1 mx-3 text-primary">{item.icon}</div>
                      <div>
                        {item.title && (
                          <h5 className="mb-1 fw-bold">{item.title}</h5>
                        )}
                        {item.description && (
                          <p className="mb-0">{item.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </Col>
              )}
            </Row>
          </Container>
        </section>
      )}

      {/* Section 3 - Timeline */}
      {aboutData?.section3 && (
        <section>
          <Container>
            {/* Section Heading */}
            {(aboutData.section3.subheading ||
              aboutData.section3.heading ||
              aboutData.section3.description) && (
              <Row>
                <Col>
                  {aboutData.section3.subheading && (
                    <span>{aboutData.section3.subheading}</span>
                  )}
                  {aboutData.section3.heading && (
                    <h2>{aboutData.section3.heading}</h2>
                  )}
                  <hr />
                  {aboutData.section3.description && (
                    <p>{aboutData.section3.description}</p>
                  )}
                  <Timeline />
                </Col>
              </Row>
            )}
            {/* CTA Button */}
            {aboutData.section3.ctaLink && aboutData.section3.ctaText && (
              <Row>
                <Col className="text-center">
                  <Link
                    href={aboutData.section3.ctaLink}
                    title={aboutData.section3.ctaText}
                    className="ctaButton"
                  >
                    {aboutData.section3.ctaText} <FaArrowRightLong />
                  </Link>
                </Col>
              </Row>
            )}
          </Container>
        </section>
      )}

      {/* Section 4 - Business */}
      {aboutData?.section4 && (
        <section>
          <Container>
            <Row>
              {/* Left Column (Image) */}
              {aboutData.section4.sectionImage && (
                <Col
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-3 align-content-center"
                >
                  <Image
                    src={aboutData.section4.sectionImage}
                    alt={aboutData.section4.imageAlt || "Our Business"}
                    title={aboutData.section4.imageTitle || "Our Business"}
                    width={aboutData.section4.imageWidth || 600}
                    height={aboutData.section4.imageHeight || 400}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                    }}
                    priority
                    className="img-fluid rounded"
                  />
                </Col>
              )}

              {/* Right Column (Content) */}
              {(aboutData.section4.subheading ||
                aboutData.section4.heading ||
                aboutData.section4.iconBox?.length > 0) && (
                <Col
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-3 align-content-center"
                >
                  {aboutData.section4.subheading && (
                    <span>{aboutData.section4.subheading}</span>
                  )}
                  {aboutData.section4.heading && (
                    <h2>{aboutData.section4.heading}</h2>
                  )}
                  <hr />

                  {/* Icon Boxes */}
                  {aboutData.section4.iconBox?.length > 0 && (
                    <Row>
                      {aboutData.section4.iconBox.map((item, index) => (
                        <Col
                          key={item.id || index}
                          xl={6}
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          className="mb-3"
                        >
                          <div className="h-100 bg-dark shadow p-3 rounded align-content-center">
                            {item.icon && (
                              <span className="fs-1">{item.icon}</span>
                            )}
                            {item.title && (
                              <h3 className="my-2">{item.title}</h3>
                            )}
                            {item.description && (
                              <p className="mb-0">{item.description}</p>
                            )}
                          </div>
                        </Col>
                      ))}
                    </Row>
                  )}
                </Col>
              )}
            </Row>
          </Container>
        </section>
      )}

      {/* Section 5 - Mission & Vission */}
      {aboutData?.section5 && (
        <section>
          <Container>
            <Row>
              {/* Left Column - Text Content */}
              {(aboutData.section5.subheading ||
                aboutData.section5.heading ||
                aboutData.section5.description) && (
                <Col
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-3 align-content-center"
                >
                  {aboutData.section5.subheading && (
                    <span>{aboutData.section5.subheading}</span>
                  )}
                  {aboutData.section5.heading && (
                    <h2>{aboutData.section5.heading}</h2>
                  )}
                  <hr />
                  {aboutData.section5.description && (
                    <p>{aboutData.section5.description}</p>
                  )}

                  {/* CTA Button */}
                  {aboutData.section5.ctaLink && aboutData.section5.ctaText && (
                    <div className="text-center">
                      <Link
                        href={aboutData.section5.ctaLink}
                        title={aboutData.section5.ctaText}
                        className="ctaButton"
                      >
                        {aboutData.section5.ctaText} <FaArrowRightLong />
                      </Link>
                    </div>
                  )}
                </Col>
              )}

              {/* Right Column - Icon Boxes */}
              {aboutData.section5.iconBox?.length > 0 && (
                <Col
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-3 align-content-center"
                >
                  <Row>
                    {aboutData.section5.iconBox.map((item, index) => (
                      <Col
                        key={item.id || index}
                        xl={6}
                        lg={6}
                        md={6}
                        sm={12}
                        xs={12}
                        className="mb-3"
                      >
                        <div className="h-100 bg-dark shadow p-3 rounded align-content-center">
                          {item.icon && (
                            <span className="fs-1">{item.icon}</span>
                          )}
                          {item.title && <h3 className="my-2">{item.title}</h3>}
                          {item.description && (
                            <p className="mb-0">{item.description}</p>
                          )}
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
              )}
            </Row>
          </Container>
        </section>
      )}

      {/* Service Marquee Section */}
      <ServiceMarquee />

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

      {/* FAQs Section */}
      <section>
        <FaqAccordion data={faqData} section="about" />
      </section>
    </>
  );
}

export default AboutUs;
