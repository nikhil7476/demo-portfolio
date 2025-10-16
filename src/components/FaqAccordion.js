// components/FaqAccordion.js

import { Accordion, Col, Container, Row } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

const FaqAccordion = ({ data, section, subCategory }) => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  // Determine which FAQ data to display
  let faqItems = [];

  if (section === "services") {
    // If "services" section and subcategory exists
    if (subCategory && data.services[subCategory]) {
      faqItems = data.services[subCategory];
    } else if (data.services.main) {
      // Default to main FAQs if subcategory not provided
      faqItems = data.services.main;
    }
  } else if (section && data[section]) {
    // For other sections like about, portfolio, contact, etc.
    faqItems = data[section];
  }

  // If no FAQs found, don't render anything
  if (!faqItems || faqItems.length === 0) return null;

  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col xl={5} lg={5} md={6} sm={12} xs={12} className="mb-3 text-center">
          <Image
            src="/assets/faqs.webp"
            alt="FAQs"
            title="FAQs"
            width={350}
            height={350}
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            priority
          />
        </Col>
        <Col xl={7} lg={7} md={6} sm={12} xs={12}>
          <span>FAQs</span>
          <h2>Frequently Asked Questions</h2>
          <hr />
          <Accordion activeKey={activeKey} flush>
            {faqItems.map((item, idx) => (
              <Accordion.Item
                eventKey={String(idx)}
                key={item.id || idx}
                className="mb-3"
              >
                <Accordion.Header
                  onClick={() => handleToggle(String(idx))}
                  className="fw-semibold"
                >
                  {activeKey === String(idx) ? (
                    <FaMinus className="me-2" />
                  ) : (
                    <FaPlus className="me-2" />
                  )}
                  {item.title}
                </Accordion.Header>
                <Accordion.Body className="text-muted">
                  {item.content}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FaqAccordion;
