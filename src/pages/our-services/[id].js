import { useRouter } from "next/router";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import serviceData from "@/utils/json/serviceData";
import ContactForm from "@/components/ContactForm";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import faqData from "@/utils/json/faqData";
import FaqAccordion from "@/components/FaqAccordion";

export default function ServicesDetail() {
  const router = useRouter();
  const { id } = router.query;

  const service = serviceData.myservices.find((a) => a.slug === id);
  const serviceFaqs = faqData.services[id] || [];

  if (!service) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <MetaHead page="services" subPage={id} />
      <Banner data={bannerData.services[id]} />
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
        <FaqAccordion data={serviceFaqs} />
      </section>
    </>
  );
}
