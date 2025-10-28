import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import portfolioGalleryData from "@/utils/json/portfolioGalleryData";

function PortfolioGallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [lightboxTitle, setLightboxTitle] = useState("");

  // Filter logic
  const filteredProjects =
    filter === "All"
      ? portfolioGalleryData
      : portfolioGalleryData.filter((item) => item.category === filter);

  return (
    <section>
      <Container>
        <div className="mb-3">
          <span>Our Portfolio</span>
          <h2>Projects That Speak for Themselves</h2>
          <hr />
          <p>
            Each project in my portfolio reflects a blend of creativity,
            precision, and purpose. From idea to execution, these works showcase
            real-world solutions built with clean code, thoughtful design, and
            measurable impact — letting the results do the talking.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="text-center my-3">
          {["All", "Website Design", "Custom Software", "Mobile App"].map(
            (cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "dark" : "outline-dark"}
                className="mx-2 mb-2"
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Button>
            )
          )}
        </div>

        {/* Portfolio Grid */}
        <Row>
          {filteredProjects.map((item, index) => (
            <Col
              key={index}
              xl={4}
              lg={4}
              md={6}
              sm={12}
              className="mb-4 portfolio-item"
            >
              <div className="portfolio-card border rounded shadow-sm h-100 d-flex flex-column">
                <div
                  className="portfolio-image position-relative"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setLightboxImage(item.image);
                    setLightboxTitle(item.title);
                    setLightboxOpen(true);
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                    width={350}
                    height={350}
                    className="img-fluid rounded-top w-100"
                  />
                </div>
                <div className="p-3 flex-grow-1 d-flex flex-column text-center">
                  {item.link ? (
                    <Link
                      href={item.link}
                      title={item.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <h5 className="fw-semibold">{item.title}</h5>
                    </Link>
                  ) : (
                    <h5 className="fw-semibold">{item.title}</h5>
                  )}
                  <p className="flex-grow-1">{item.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* CTA Row */}
        <Row className="mt-3">
          <Col className="text-center">
            <Link
              href="/our-services"
              title="Discover Our Services"
              className="ctaButton"
            >
              Discover Our Services <FaArrowRightLong />
            </Link>
          </Col>
        </Row>

        {/* Lightbox Preview using Bootstrap Modal */}
        <Modal
          show={lightboxOpen}
          onHide={() => setLightboxOpen(false)}
          centered
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>{lightboxTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Image
              src={lightboxImage}
              alt={lightboxTitle}
              width={500}
              height={500}
              className="img-fluid rounded"
            />
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}

export default PortfolioGallery;
