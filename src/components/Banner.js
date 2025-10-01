// components/Banner.js

import { Col, Container, Row, Button } from "react-bootstrap";
import Breadcrumbs from "./Breadcrumbs";

const Banner = ({ data }) => {
  if (!data) return null;

  // Handle arrays (like home banners)
  const banners = Array.isArray(data) ? data : [data];

  return (
    <>
      {banners.map((banner) => (
        <div
          key={banner.id || banner.heading}
          className="banner d-flex align-items-center text-white"
          style={{
            backgroundImage: `url(${banner.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "450px",
          }}
        >
          <Container>
            <Row>
              <Col>
                {banner.subHeading && <span>{banner.subHeading}</span>}
                {banner.heading && (
                  <h1 className="fw-bold">{banner.heading}</h1>
                )}
                {banner.breadcrumb && <Breadcrumbs items={banner.breadcrumb} />}
                {banner.ctaText && banner.ctaLink && (
                  <div className="mt-3">
                    <Button href={banner.ctaLink} variant="primary">
                      {banner.ctaText}
                    </Button>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      ))}
    </>
  );
};

export default Banner;
