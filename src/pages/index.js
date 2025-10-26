import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import CountUp from "react-countup";
import MetaHead from "@/components/MetaHead";
import homeData from "@/utils/json/homeData";
import HomeBanner from "@/components/HomeBanner";
import productData from "@/utils/json/productData";
import ServiceTab from "@/components/ServiceTab";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import ContactForm from "@/components/ContactForm";
import BlogsPreview from "@/components/BlogsPreview";
import PortfolioGallery from "@/components/PortfolioGallery";
import ServiceMarquee from "@/components/ServiceMarquee";

function Home() {
  return (
    <>
      <MetaHead page="home" />
      <HomeBanner />
      <ServiceMarquee />

      {/* Section 1 - About Us */}
      <section>
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col
              xl={5}
              lg={5}
              md={6}
              sm={12}
              xs={12}
              className="mb-3 align-content-center"
            >
              {homeData.section1.image && (
                <Image
                  src={homeData.section1.image}
                  alt={homeData.section1.imageAlt || ""}
                  title={homeData.section1.imageTitle || ""}
                  width={homeData.section1.imageWidth}
                  height={homeData.section1.imageHeight}
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
              className="mb-3 align-content-center"
            >
              <span>{homeData.section1.subheading}</span>
              <h2>{homeData.section1.title}</h2>
              <hr />
              <p>{homeData.section1.description}</p>
              {homeData.section1.ctaLink && (
                <Link
                  href={homeData.section1.ctaLink}
                  title={homeData.section1.ctaText}
                  className="ctaButton"
                >
                  {homeData.section1.ctaText} <FaArrowRightLong />
                </Link>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 2 - Stat Counters */}
      <section>
        <Container>
          <Row>
            {homeData.aboutStats.map((stat) => (
              <Col
                key={stat.id}
                xl={4}
                lg={4}
                md={6}
                sm={6}
                xs={6}
                className="mb-3 text-center align-content-center"
              >
                <div>
                  <p>{stat.description}</p>
                </div>
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2}
                  suffix="+"
                  className="statValue"
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className="statValue" />
                  )}
                </CountUp>
                <p className="bg-light text-dark rounded">{stat.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Section 3 - Featured Products */}
      <section>
        <Container>
          <Row>
            <Col>
              <span>Our Featured Products</span>
              <h2>Customizable Web & App Products</h2>
              <hr />
            </Col>
          </Row>
          <Row>
            {productData.myproducts.map((product) => (
              <Col
                key={product.id}
                xl={4}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                className="mb-3"
              >
                <div
                  className="p-4 align-content-end rounded"
                  style={{
                    backgroundImage: `url(${product.featuredImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "350px",
                  }}
                >
                  <div className="bg-dark text-white p-3 rounded">
                    <h3>{product.title}</h3>
                    <p>{product.shortDescription}</p>
                    <Link
                      href={`/products/${product.slug}`}
                      title={`Learn more about ${product.title}`}
                    >
                      Read More <FaArrowRightLong />
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="text-center">
              <Link
                href="/our-products"
                title="View All Products"
                className="ctaButton"
              >
                Discover More Products <FaArrowRightLong />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 4 - Services Tab */}
      <ServiceTab />

      {/* Section 5 - Portfolio Gallery */}
      <PortfolioGallery />

      {/* Section 6 - Why Choose Us */}
      <section>
        <Container>
          <Row>
            <Col>
              <span>{homeData.section2.subheading}</span>
              <h2>{homeData.section2.title}</h2>
              <hr />
              <p>{homeData.section2.description}</p>
            </Col>
          </Row>
          <Row>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="mb-3 align-content-center"
            >
              <div>
                {homeData.section2.iconBox.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-start gap-3 mb-3"
                  >
                    <div className="fs-6">{item.icon}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="mb-3 align-content-center"
            >
              <Image
                src={homeData.section2.image}
                alt={homeData.section2.imageAlt}
                title={homeData.section2.imageTitle}
                width={450}
                height={410}
                style={{ width: "100%", height: "auto" }}
                className="img-fluid rounded"
              />
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Link
                href={homeData.section2.ctaLink}
                title={homeData.section2.ctaText}
                className="ctaButton"
              >
                {homeData.section2.ctaText} <FaArrowRightLong />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 7 - Testimonial & Contact */}
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

      {/* Section 8 - Articles */}
      <section>
        <Container>
          <Row>
            <Col>
              <span>{homeData.articleSection.subheading}</span>
              <h2>{homeData.articleSection.title}</h2>
              <hr />
              <BlogsPreview />
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              {homeData.articleSection.ctaLink && (
                <Link
                  href={homeData.articleSection.ctaLink}
                  title={homeData.articleSection.ctaText}
                  className="ctaButton"
                >
                  {homeData.articleSection.ctaText} <FaArrowRightLong />
                </Link>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
