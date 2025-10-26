import { useRouter } from "next/router";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import serviceData from "@/utils/json/serviceData";
import ContactForm from "@/components/ContactForm";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import faqData from "@/utils/json/faqData";
import FaqAccordion from "@/components/FaqAccordion";
import Industry from "@/components/Industry";
import ServiceMarquee from "@/components/ServiceMarquee";
import Image from "next/image";

export default function ServicesDetail() {
  const router = useRouter();
  const { id } = router.query;

  const service = serviceData.myservices.find((a) => a.slug === id);

  if (!service) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Meta Head */}
      <MetaHead page="services" subPage={id} />

      {/* Banner Section */}
      <Banner data={bannerData.services[id]} />

      {/* Section - 1 Service About Section */}
      <section>
        <Container>
          <Row>
            <Col>
              <span>{service.section1.subheading}</span>
              <h2>{service.section1.heading}</h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col xl={5} lg={5} md={6} sm={12} xs={12} className="mb-3">
              <Image
                src={service.section1.sectionImage}
                alt={`About ${service.title}`}
                title={`About ${service.title}`}
                width={1000}
                height={666}
                style={{ width: "100%", height: "auto" }}
                className="rounded img-fluid"
              />
            </Col>
            <Col xl={7} lg={7} md={6} sm={12} xs={12} className="mb-3">
              <p>{service.section1.description}</p>
              <h3>{service.section1.featuredHeading}</h3>
              <Row>
                {service.section1.featuredPoints.map((point, index) => (
                  <Col
                    key={index}
                    xl={4}
                    lg={4}
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
              <p>{service.section1.featuredDescription}</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Link
                href={service.section1.ctaLink}
                title={service.section1.ctaText}
                className="ctaButton"
              >
                {service.section1.ctaText} <FaArrowRightLong />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section - 2 Features of Service Section */}
      <section>
        <Container>
          <Row>
            <Col>
              <span>{service.section2.subheading}</span>
              <h2>{service.section2.heading}</h2>
              <hr />
              <p>{service.section2.description}</p>
              <Row>
                {service.section2.featuredPoints.map((point, index) => (
                  <Col
                    key={index}
                    xl={4}
                    lg={4}
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
                href={service.section2.ctaLink}
                title={service.section2.ctaText}
                className="ctaButton"
              >
                {service.section2.ctaText} <FaArrowRightLong />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section - 3 Future of Service Section */}
      <section>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-3">
              <div className="bg-dark shadow p-4 rounded h-100 align-content-center">
                <Image
                  src={service.section3.sectionImage}
                  alt={`Future of ${service.title}`}
                  title={`Future of ${service.title}`}
                  width={1000}
                  height={666}
                  style={{ width: "100%", height: "auto" }}
                  className="rounded img-fluid"
                />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-3">
              <div className="bg-dark shadow p-4 rounded h-100 align-content-center">
                <span className="fs-1">{service.section3.icon}</span>
                <h2 className="mt-2">{service.section3.heading}</h2>
                <p>{service.section3.description}</p>
                <div className="text-center">
                  <Link
                    href={service.section3.ctaLink}
                    title={service.section3.ctaText}
                    className="ctaButton"
                  >
                    {service.section3.ctaText} <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section - 4 SUccess Solution Section */}
      <section>
        <Container>
          <Row>
            <Col>
              <span>{service.section4.subheading}</span>
              <h2>{service.section4.heading}</h2>
              <hr />
              <p>{service.section4.description}</p>
              <Row>
                {service.section4.iconBox.map((point, index) => (
                  <Col
                    key={index}
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="mb-3"
                  >
                    <div className="h-100 align-content-center">
                      <span className="fs-1 mb-2">{point.icon}</span>
                      <h3 className="my-2">{point.title}</h3>
                      <p>{point.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Link
                href={service.section4.ctaLink}
                title={service.section4.ctaText}
                className="ctaButton"
              >
                {service.section4.ctaText} <FaArrowRightLong />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Marquee Section */}
      <ServiceMarquee />

      {/*Industry Section */}
      <Industry />

      {/* Testimonial & Contact Form Section */}
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

      {/* FAQ Section */}
      <section>
        <FaqAccordion data={faqData} section="services" subCategory={id} />
      </section>
    </>
  );
}
