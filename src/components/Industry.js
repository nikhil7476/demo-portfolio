import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaBriefcaseMedical, FaBookReader } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { IoConstruct } from "react-icons/io5";
import { PiDesktopTowerFill } from "react-icons/pi";

function Industry() {
  const industries = [
    { name: "Healthcare", icon: <FaBriefcaseMedical /> },
    { name: "Finance", icon: <BiMoneyWithdraw /> },
    { name: "Education", icon: <FaBookReader /> },
    { name: "Retail", icon: <BsShop /> },
    { name: "Manufacturing", icon: <IoConstruct /> },
    { name: "Startups & SMEs", icon: <PiDesktopTowerFill /> },
  ];

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <span>Industries</span>
            <h2>Who We Work With</h2>
            <hr />
          </Col>
        </Row>
        <Row>
          {industries.map((item, index) => (
            <Col key={index} xl={4} lg={4} md={6} sm={12} className="mb-3">
              <div className="d-flex align-items-center gap-4 p-3 border rounded shadow-sm">
                <div className="fs-2">{item.icon}</div>
                <h3 className="m-0">{item.name}</h3>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="text-center">
            <Link href="/contact-us" title="Contact Us" className="ctaButton">
              Contact Us <FaArrowRightLong />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Industry;
