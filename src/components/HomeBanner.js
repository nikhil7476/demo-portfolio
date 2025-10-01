// components/HomeBanner.js

import Link from "next/link";
import bannerData from "@/utils/json/bannerData"; // updated import
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";

const HomeBanner = () => {
  const homeBanners = bannerData.home || [];

  return (
    <Carousel
      slide
      indicators={true}
      controls={false}
      interval={4000}
      className="homeBanner"
    >
      {homeBanners.map((slide) => (
        <Carousel.Item key={slide.id}>
          <div
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "500px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Container>
              <Row className="align-items-center">
                <Col className="text-white">
                  {slide.subHeading && <span>{slide.subHeading}</span>}
                  {slide.heading && (
                    <h1 className="fw-bold">{slide.heading}</h1>
                  )}
                  {slide.description && <p>{slide.description}</p>}
                  {slide.ctaText && slide.ctaLink && (
                    <Link
                      href={slide.ctaLink}
                      title={slide.ctaText}
                      className="ctaButton d-inline-flex align-items-center mt-2"
                    >
                      {slide.ctaText} <FaArrowRightLong className="ms-2" />
                    </Link>
                  )}
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeBanner;
