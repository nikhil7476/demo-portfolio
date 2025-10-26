import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import serviceData from "@/utils/json/serviceData";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import faqData from "@/utils/json/faqData";
import ServiceMarquee from "@/components/ServiceMarquee";
import ServiceTab from "@/components/ServiceTab";

export default function OurServices() {
  return (
    <>
      {/* Meta Head */}
      <MetaHead page="service" />

      {/* Banner Section */}
      <Banner data={bannerData.services.main} />

      {/* Marquee Section */}
      <ServiceMarquee />

      {/* Section - 1 About Services Section */}
      <section>
        <Container>
          <Row>
            <Col>
              <span>{serviceData.serviceMain.section1.subheading}</span>
              <h2>{serviceData.serviceMain.section1.heading}</h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col xl={4} lg={4} md={6} sm={12} xs={12} className="mb-3">
              <Image
                src={serviceData.serviceMain.section1.sectionImage}
                alt="About Our Services"
                title="About Our Services"
                width={600}
                height={500}
                style={{ width: "100%", height: "auto" }}
                className="rounded img-fluid"
              />
            </Col>
            <Col xl={8} lg={8} md={6} sm={12} xs={12} className="mb-3">
              <p>{serviceData.serviceMain.section1.description}</p>
              <h3>{serviceData.serviceMain.section1.featuredHeading}</h3>
              <Row>
                {serviceData.serviceMain.section1.featuredPoints.map(
                  (point, index) => (
                    <Col
                      key={index}
                      xl={4}
                      lg={4}
                      md={6}
                      sm={12}
                      xs={12}
                      className="mb-3"
                    >
                      <FaCheckCircle /> {point}
                    </Col>
                  )
                )}
              </Row>
              <div className="text-center">
                <Link
                  href={serviceData.serviceMain.section1.ctaLink}
                  title={serviceData.serviceMain.section1.ctaText}
                  className="ctaButton"
                >
                  {serviceData.serviceMain.section1.ctaText}{" "}
                  <FaArrowRightLong />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section - 2 Our Services Section */}
      <section>
        <Container>
          <Row>
            <Col>
              <span>{serviceData.serviceMain.section2.subheading}</span>
              <h2>{serviceData.serviceMain.section2.heading}</h2>
              <hr />
            </Col>
          </Row>
          <ServiceTab />
          <Row>
            <Col className="text-center">
              <Link
                href={serviceData.serviceMain.section2.ctaLink}
                title={serviceData.serviceMain.section2.ctaText}
                className="ctaButton"
              >
                {serviceData.serviceMain.section2.ctaText} <FaArrowRightLong />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section - 3 Deserve The Best Section */}
      <section>
        <Container>
          <Row>
            <Col xl={7} lg={7} md={6} sm={12} xs={12} className="mb-3">
              <span>{serviceData.serviceMain.section3.subheading}</span>
              <h2>{serviceData.serviceMain.section3.heading}</h2>
              <hr />
              <Row>
                {serviceData.serviceMain.section3.iconBox.map(
                  (point, index) => (
                    <Col
                      key={index}
                      xl={6}
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className="mb-3"
                    >
                      <div className="p-2 border rounded align-content-center">
                        <span className="fs-3 me-2">{point.icon}</span>{" "}
                        {point.title}
                      </div>
                    </Col>
                  )
                )}
              </Row>
              <Row>
                <Col className="text-center">
                  <Link
                    href={serviceData.serviceMain.section3.ctaLink}
                    title={serviceData.serviceMain.section3.ctaText}
                    className="ctaButton"
                  >
                    {serviceData.serviceMain.section3.ctaText}{" "}
                    <FaArrowRightLong />
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col xl={5} lg={5} md={6} sm={12} xs={12} className="mb-3">
              <Image
                src={serviceData.serviceMain.section3.sectionImage}
                alt="Deserve The Best"
                title="Deserve The Best"
                width={700}
                height={700}
                style={{ width: "100%", height: "auto" }}
                className="rounded img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section - 4 More Services Section */}
      <section>
        <Container>
          <Row>
            <Col>
              <span>{serviceData.serviceMain.section4.subheading}</span>
              <h2>{serviceData.serviceMain.section4.heading}</h2>
              <hr />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial & Contact Form */}
      <section>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <Testimonial data={testimonialData.services} />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Marquee Section */}
      <ServiceMarquee />

      {/* FAQ Accordion */}
      <section>
        <FaqAccordion data={faqData} section="services" />
      </section>
    </>
  );
}
