import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import productData from "@/utils/json/productData";
import ServiceMarquee from "@/components/ServiceMarquee";
import PortfolioGallery from "@/components/PortfolioGallery";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/utils/json/testimonialData";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import faqData from "@/utils/json/faqData";

function OurProducts() {
  return (
    <>
      {/* Meta Head */}
      <MetaHead page="products" />

      {/* Banner Section */}
      <Banner data={bannerData.products.main} />

      {/* Featured Products Section */}
      {productData?.productMain && productData?.myproducts?.length > 0 && (
        <section>
          <Container>
            <Row>
              <Col>
                {productData.productMain.subheading && (
                  <span>{productData.productMain.subheading}</span>
                )}
                {productData.productMain.title && (
                  <h2>{productData.productMain.title}</h2>
                )}
                {(productData.productMain.subheading ||
                  productData.productMain.title) && <hr />}

                {productData.myproducts.map((product, index) => (
                  <Row
                    key={product.id || index}
                    className="p-3 my-4 mx-2 bg-dark shadow rounded"
                  >
                    {index % 2 === 0 ? (
                      <>
                        <Col
                          xl={5}
                          lg={5}
                          md={6}
                          sm={12}
                          xs={12}
                          className="mb-3"
                        >
                          {product.featuredImage && (
                            <Image
                              src={product.featuredImage}
                              alt={product.title || "Product Image"}
                              title={product.title || "Product Image"}
                              width={1000}
                              height={666}
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
                          className="mb-3"
                        >
                          {product.icon && (
                            <span className="fs-1">{product.icon}</span>
                          )}
                          {product.title && (
                            <h3 className="my-2">{product.title}</h3>
                          )}
                          {product.description && <p>{product.description}</p>}

                          {product.slug && (
                            <Row>
                              <Col className="text-center">
                                <Link
                                  href={`/our-products/${product.slug}`}
                                  title="View Product"
                                  className="ctaButton"
                                  target="_blank"
                                >
                                  View Product <FaArrowRightLong />
                                </Link>
                              </Col>
                            </Row>
                          )}
                        </Col>
                      </>
                    ) : (
                      <>
                        <Col
                          xl={7}
                          lg={7}
                          md={6}
                          sm={12}
                          xs={12}
                          className="mb-3"
                        >
                          {product.icon && (
                            <span className="fs-1">{product.icon}</span>
                          )}
                          {product.title && (
                            <h3 className="my-2">{product.title}</h3>
                          )}
                          {product.description && <p>{product.description}</p>}

                          {product.slug && (
                            <Row>
                              <Col className="text-center">
                                <Link
                                  href={`/our-products/${product.slug}`}
                                  title="View Product"
                                  className="ctaButton"
                                  target="_blank"
                                >
                                  View Product <FaArrowRightLong />
                                </Link>
                              </Col>
                            </Row>
                          )}
                        </Col>

                        <Col
                          xl={5}
                          lg={5}
                          md={6}
                          sm={12}
                          xs={12}
                          className="mb-3"
                        >
                          {product.featuredImage && (
                            <Image
                              src={product.featuredImage}
                              alt={product.title || "Product Image"}
                              title={product.title || "Product Image"}
                              width={1000}
                              height={666}
                              style={{ width: "100%", height: "auto" }}
                              className="img-fluid rounded"
                            />
                          )}
                        </Col>
                      </>
                    )}
                  </Row>
                ))}
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* Service Marquee Section */}
      <ServiceMarquee />

      {/* Portfolio Gallery Section */}
      <PortfolioGallery />

      {/* Testimonial & Contact Form Section */}
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

      {/* FAQs Section */}
      <section>
        <FaqAccordion data={faqData} section="products" />
      </section>
    </>
  );
}

export default OurProducts;
