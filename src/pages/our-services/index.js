import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import serviceData from "@/utils/json/serviceData";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import accordionData from "@/utils/json/faqData";

export default function OurServices() {
  return (
    <>
      <MetaHead page="service" />
      <Banner data={bannerData.services.main} />
      {/* Services Grid */}
      <section>
        <Container>
          <Row>
            <Col>
              <span>{serviceData.serviceMain.subheading}</span>
              <h2>{serviceData.serviceMain.title}</h2>
              <hr />
              <p>{serviceData.serviceMain.description}</p>
            </Col>
          </Row>
          <Row className="mb-3">
            {serviceData.myservices.map((service) => (
              <Col
                key={service.id}
                xl={4}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                className="mb-3"
              >
                <div>
                  <Link href={`/services/${service.slug}`}>
                    <Image
                      src={service.featuredImage}
                      alt={service.title}
                      title={service.title}
                      width={450}
                      height={450}
                      className="img-fluid rounded"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                </div>
                <div className="p-2 text-center">
                  <Link
                    href={`/services/${service.slug}`}
                    title={service.title}
                    className="text-light border-bottom"
                  >
                    {service.title} <FaArrowRight />
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
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
      <section>
        <FaqAccordion data={accordionData.services.main} />
      </section>
    </>
  );
}
