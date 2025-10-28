import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import ServiceMarquee from "@/components/ServiceMarquee";
import serviceData from "@/utils/json/serviceData";
import ServiceTab from "@/components/ServiceTab";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import faqData from "@/utils/json/faqData";

export default function OurServices() {
  const selectedIds = [6, 8, 9, 10];
  const filteredServices = serviceData.myservices.filter((service) =>
    selectedIds.includes(service.id)
  );

  return (
    <>
      {/* Meta Head */}
      <MetaHead page="services" />

      {/* Banner Section */}
      <Banner data={bannerData.services.main} />

      {/* Marquee Section */}
      <ServiceMarquee />

      {/* Section - 1 About Services Section */}
      {serviceData?.serviceMain?.section1 && (
        <section>
          <Container>
            <Row>
              <Col>
                {serviceData.serviceMain.section1.subheading && (
                  <span>{serviceData.serviceMain.section1.subheading}</span>
                )}
                {serviceData.serviceMain.section1.heading && (
                  <h2>{serviceData.serviceMain.section1.heading}</h2>
                )}
                {(serviceData.serviceMain.section1.subheading ||
                  serviceData.serviceMain.section1.heading) && <hr />}
              </Col>
            </Row>

            <Row>
              {serviceData.serviceMain.section1.sectionImage && (
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
              )}

              <Col xl={8} lg={8} md={6} sm={12} xs={12} className="mb-3">
                {serviceData.serviceMain.section1.description && (
                  <p>{serviceData.serviceMain.section1.description}</p>
                )}

                {serviceData.serviceMain.section1.featuredHeading && (
                  <h3>{serviceData.serviceMain.section1.featuredHeading}</h3>
                )}

                {serviceData.serviceMain.section1.featuredPoints?.length >
                  0 && (
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
                          <span className="me-2">
                            <FaCheckCircle />
                          </span>{" "}
                          {point}
                        </Col>
                      )
                    )}
                  </Row>
                )}

                {serviceData.serviceMain.section1.ctaLink &&
                  serviceData.serviceMain.section1.ctaText && (
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
                  )}
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* Section - 2 Our Services Section */}
      {serviceData?.serviceMain?.section2 && (
        <section>
          <Container>
            {(serviceData.serviceMain.section2.subheading ||
              serviceData.serviceMain.section2.heading) && (
              <Row>
                <Col>
                  {serviceData.serviceMain.section2.subheading && (
                    <span>{serviceData.serviceMain.section2.subheading}</span>
                  )}
                  {serviceData.serviceMain.section2.heading && (
                    <h2>{serviceData.serviceMain.section2.heading}</h2>
                  )}
                  <hr />
                </Col>
              </Row>
            )}

            {/* Render ServiceTab only if section2 exists */}
            <ServiceTab />

            {serviceData.serviceMain.section2.ctaLink &&
              serviceData.serviceMain.section2.ctaText && (
                <Row>
                  <Col className="text-center">
                    <Link
                      href={serviceData.serviceMain.section2.ctaLink}
                      title={serviceData.serviceMain.section2.ctaText}
                      className="ctaButton"
                    >
                      {serviceData.serviceMain.section2.ctaText}{" "}
                      <FaArrowRightLong />
                    </Link>
                  </Col>
                </Row>
              )}
          </Container>
        </section>
      )}

      {/* Section - 3 Deserve The Best Section */}
      {serviceData?.serviceMain?.section3 && (
        <section>
          <Container>
            <Row>
              <Col xl={7} lg={7} md={6} sm={12} xs={12} className="mb-3">
                {(serviceData.serviceMain.section3.subheading ||
                  serviceData.serviceMain.section3.heading) && (
                  <>
                    {serviceData.serviceMain.section3.subheading && (
                      <span>{serviceData.serviceMain.section3.subheading}</span>
                    )}
                    {serviceData.serviceMain.section3.heading && (
                      <h2>{serviceData.serviceMain.section3.heading}</h2>
                    )}
                    <hr />
                  </>
                )}

                {serviceData.serviceMain.section3.iconBox &&
                  serviceData.serviceMain.section3.iconBox.length > 0 && (
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
                              {point.icon && (
                                <span className="fs-3 me-2">{point.icon}</span>
                              )}
                              {point.title && <>{point.title}</>}
                            </div>
                          </Col>
                        )
                      )}
                    </Row>
                  )}

                {serviceData.serviceMain.section3.ctaLink &&
                  serviceData.serviceMain.section3.ctaText && (
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
                  )}
              </Col>

              {serviceData.serviceMain.section3.sectionImage && (
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
              )}
            </Row>
          </Container>
        </section>
      )}

      {/* Section - 4 More Services Section */}
      {serviceData?.serviceMain?.section4 && (
        <section>
          <Container>
            {(serviceData.serviceMain.section4.subheading ||
              serviceData.serviceMain.section4.heading) && (
              <Row>
                <Col>
                  {serviceData.serviceMain.section4.subheading && (
                    <span>{serviceData.serviceMain.section4.subheading}</span>
                  )}
                  {serviceData.serviceMain.section4.heading && (
                    <h2>{serviceData.serviceMain.section4.heading}</h2>
                  )}
                  <hr />
                </Col>
              </Row>
            )}

            {filteredServices && filteredServices.length > 0 && (
              <Row>
                {filteredServices.map((service) => (
                  <Col
                    key={service.id}
                    xl={3}
                    lg={3}
                    md={6}
                    sm={12}
                    xs={12}
                    className="mb-4"
                  >
                    <div
                      className="p-3 rounded align-content-end"
                      style={{
                        backgroundImage: service.featuredImage
                          ? `url(${service.featuredImage})`
                          : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "550px",
                        overflow: "hidden",
                      }}
                    >
                      <div className="bg-dark bg-opacity-75 h-100 text-white p-3 rounded">
                        {service.title && <h3>{service.title}</h3>}
                        {service.description && <p>{service.description}</p>}
                        {service.slug && (
                          <Link
                            href={`/our-services/${service.slug}`}
                            title={`Read more about ${
                              service.title || "service"
                            }`}
                            className="text-white"
                          >
                            Read More <FaArrowRightLong />
                          </Link>
                        )}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </Container>
        </section>
      )}

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
