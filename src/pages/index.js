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

      {/* Home Banner Section */}
      <HomeBanner />

      {/* Service Marquee Section */}
      <ServiceMarquee />

      {/* Section 1 - About Us */}
      {homeData?.section1 && (
        <section>
          <Container>
            <Row className="justify-content-between align-items-center">
              {/* Image Column */}
              {homeData.section1.image && (
                <Col
                  xl={5}
                  lg={5}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-3 align-content-center"
                >
                  <Image
                    src={homeData.section1.image}
                    alt={homeData.section1.imageAlt || ""}
                    title={homeData.section1.imageTitle || ""}
                    width={homeData.section1.imageWidth || 1000}
                    height={homeData.section1.imageHeight || 600}
                    className="img-fluid rounded"
                  />
                </Col>
              )}

              {/* Text Column */}
              {(homeData.section1.subheading ||
                homeData.section1.title ||
                homeData.section1.description ||
                homeData.section1.ctaLink) && (
                <Col
                  xl={7}
                  lg={7}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-3 align-content-center"
                >
                  {homeData.section1.subheading && (
                    <span>{homeData.section1.subheading}</span>
                  )}
                  {homeData.section1.title && (
                    <h2>{homeData.section1.title}</h2>
                  )}
                  <hr />
                  {homeData.section1.description && (
                    <p>{homeData.section1.description}</p>
                  )}
                  {homeData.section1.ctaLink && homeData.section1.ctaText && (
                    <Link
                      href={homeData.section1.ctaLink}
                      title={homeData.section1.ctaText}
                      className="ctaButton"
                    >
                      {homeData.section1.ctaText} <FaArrowRightLong />
                    </Link>
                  )}
                </Col>
              )}
            </Row>
          </Container>
        </section>
      )}

      {/* Section 2 - Stat Counters */}
      {homeData?.aboutStats && homeData.aboutStats.length > 0 && (
        <section>
          <Container>
            <Row>
              {homeData.aboutStats.map((stat) => (
                <Col
                  key={stat.id}
                  xl={4}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  className="mb-3 text-center align-content-center counter-container"
                >
                  {stat.description && (
                    <div className="counter mb-3">
                      <p className="m-0">{stat.description}</p>
                    </div>
                  )}

                  {typeof stat.value === "number" && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      suffix="+" // optional, can be customized per stat
                      className="statValue"
                      enableScrollSpy
                      scrollSpyOnce
                    >
                      {({ countUpRef }) => (
                        <span ref={countUpRef} className="statValue" />
                      )}
                    </CountUp>
                  )}

                  {stat.label && (
                    <div className="d-flex justify-content-center">
                      <p className="counter-label m-0">{stat.label}</p>
                    </div>
                  )}
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* Section 3 - Featured Products */}
      {productData?.myproducts && productData.myproducts.length > 0 && (
        <section>
          <Container>
            {/* Header Section */}
            <Row>
              <Col>
                <span>Our Featured Products</span>
                <h2>Customizable Web & App Products</h2>
                <hr />
              </Col>
            </Row>

            {/* Product Cards */}
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
                    className="p-4 align-content-end rounded product-card-container"
                    style={{
                      backgroundImage: product.featuredImage
                        ? `url(${product.featuredImage})`
                        : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center left",
                      minHeight: "350px",
                      backgroundColor: !product.featuredImage
                        ? "#222"
                        : "transparent",
                    }}
                  >
                    <div className="product-card">
                      {product.title && (
                        <h3 className="product-card-title">{product.title}</h3>
                      )}
                      {product.shortDescription && (
                        <p className="product-card-description">
                          {product.shortDescription}
                        </p>
                      )}
                      {product.slug && (
                        <Link
                          href={`/our-products/${product.slug}`}
                          title={`Learn more about ${
                            product.title || "this product"
                          }`}
                          className=" product-card-link"
                        >
                          Read More <FaArrowRightLong />
                        </Link>
                      )}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* CTA Button */}
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
      )}

      {/* Services Tab Section */}
      <section>
        <Container>
          <Row>
            <Col>
              <span>Our Services</span>
              <h2>Most Experienced Services</h2>
              <hr />
              <ServiceTab />
              <Row>
                <Col className="text-center">
                  <Link
                    href="/our-services"
                    title="Explore Our Services"
                    className="ctaButton"
                  >
                    Explore Our Services <FaArrowRightLong />
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Portfolio Gallery Section */}
      <PortfolioGallery />

      {/* Section 4 - Why Choose Us */}
      {homeData?.section2 && (
        <section>
          <Container>
            {/* Header */}
            {(homeData.section2.subheading ||
              homeData.section2.title ||
              homeData.section2.description) && (
              <Row>
                <Col>
                  {homeData.section2.subheading && (
                    <span>{homeData.section2.subheading}</span>
                  )}
                  {homeData.section2.title && (
                    <h2>{homeData.section2.title}</h2>
                  )}
                  <hr />
                  {homeData.section2.description && (
                    <p>{homeData.section2.description}</p>
                  )}
                </Col>
              </Row>
            )}

            {/* Icon Boxes + Image */}
            {(homeData.section2.iconBox?.length > 0 ||
              homeData.section2.image) && (
              <Row>
                {/* Icon Boxes */}
                {homeData.section2.iconBox?.length > 0 && (
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
                          <div>
                            {item.icon && (
                              <span className="fs-1">{item.icon}</span>
                            )}
                          </div>
                          <div>
                            {item.title && <h3>{item.title}</h3>}
                            {item.description && <p>{item.description}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Col>
                )}

                {/* Image */}
                {homeData.section2.image && (
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
                      alt={homeData.section2.imageAlt || ""}
                      title={homeData.section2.imageTitle || ""}
                      width={450}
                      height={410}
                      style={{ width: "100%", height: "auto" }}
                      className="img-fluid rounded"
                    />
                  </Col>
                )}
              </Row>
            )}

            {/* CTA Button */}
            {homeData.section2.ctaLink && homeData.section2.ctaText && (
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
            )}
          </Container>
        </section>
      )}

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

      {/* Articles Section */}
      <section>
        <Container>
          <Row>
            <Col>
              <span>{homeData.articleSection.subheading}</span>
              <h2>{homeData.articleSection.title}</h2>
              <hr />
            </Col>
          </Row>
          <BlogsPreview />
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
