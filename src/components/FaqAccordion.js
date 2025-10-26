// components/FaqAccordion.js

import { Accordion, Col, Container, Row } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState, useMemo } from "react";
import Image from "next/image";

const FaqAccordion = ({ data, section, subCategory }) => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  // === Determine which FAQ data to show ===
  const faqItems = useMemo(() => {
    if (!data) return [];

    // Handle "services" section
    if (section === "services") {
      // Normalize subCategory key (in case of route or case mismatch)
      const normalizedSubCat = subCategory?.toLowerCase();

      if (normalizedSubCat && data.services?.[normalizedSubCat]) {
        return data.services[normalizedSubCat];
      }

      // fallback to main FAQs if no valid subcategory
      return data.services?.main || [];
    }

    // Handle other sections like about, portfolio, contact, etc.
    if (section && data[section]) {
      return data[section];
    }

    // Default empty
    return [];
  }, [data, section, subCategory]);

  // === If no FAQs, render nothing ===
  if (!faqItems || faqItems.length === 0) return null;

  return (
    <Container>
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
            {faqItems.map((item, idx) => {
              const key = String(idx);
              const isActive = activeKey === key;

              return (
                <Accordion.Item
                  eventKey={key}
                  key={item.id || key}
                  className="mb-3"
                >
                  <Accordion.Header
                    onClick={() => handleToggle(key)}
                    className="fw-semibold"
                  >
                    {isActive ? (
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
              );
            })}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FaqAccordion;
