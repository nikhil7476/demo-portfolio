import React from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import ContactForm from "@/components/ContactForm";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import faqData from "@/utils/json/faqData";
import FaqAccordion from "@/components/FaqAccordion";

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  // const product = productData.myproducts.find((a) => a.slug === id);

  // if (!product) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <Banner data={bannerData.products[id]} />
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
      <section>
        <FaqAccordion data={faqData} section="products" subCategory={id} />
      </section>
    </>
  );
}

export default ProductDetail;
