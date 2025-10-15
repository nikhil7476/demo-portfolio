import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="mb-3 align-content-center"
            >
              <h2>Ready To Elevate Your Digital Presence? Contact Us Now!</h2>
            </Col>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="mb-3 align-content-center text-end"
            >
              <Link href="/contact-us" title="Contact Us" className="ctaButton">
                Contact Us <FaArrowRightLong />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="my-5">
            <Col xl={3} lg={3} md={6} sm={12} xs={12} className="mb-3">
              <Link href="/" title="MakersOfCode">
                <Image
                  src="/assets/Header/MOC-logo.png"
                  width={902}
                  height={276}
                  title="MakersOfCode"
                  alt="MakersOfCode Logo"
                  style={{ width: "100%", height: "auto" }}
                  className="mb-3"
                />
              </Link>
              <p>
                Empowering Innovation | Crafting Solutions | Portfolio - Where
                Technology Meets Excellence
              </p>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12} xs={12} className="mb-3">
              <h3>Our Company</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="/about-us" title="About Us">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/our-services" title="Our Services">
                    Our Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/our-portfolio" title="Our Portfolio">
                    Our Portfolio
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/our-products" title="Our Products">
                    Our Products
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/blog" title="Our Blogs">
                    Our Blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact-us" title="Contact Us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12} xs={12} className="mb-3">
              <h3>Our Services</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    href="/services/software-development"
                    title="Software Development"
                  >
                    Software Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/services/website-development"
                    title="Website Development"
                  >
                    Website Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/services/mobile-app-development"
                    title="Mobile App Development"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/services/ui-ux-design" title="UI/UX Design">
                    UI/UX Design
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/services/digital-marketing"
                    title="Digital Marketing"
                  >
                    Degital Marketing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/services/ecommerce-solutions"
                    title="E-Commerce Solutions"
                  >
                    E-Commerce Solutions
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12} xs={12} className="mb-3">
              <h3>Need Help?</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    href="tel:+91-1234567890"
                    title="Call Us"
                    className="text-decoration-none"
                  >
                    <FaPhoneAlt /> +91-(123)-456-7890
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="mailto:contact@gmail.com"
                    title="Mail Us"
                    className="text-decoration-none"
                  >
                    <FaEnvelope /> contact@gmail.com
                  </Link>
                </li>
              </ul>
              <h3>Follow Us</h3>
              <ul className="list-unstyled d-flex gap-3">
                <li className="mb-2">
                  <Link
                    href="https://www.instagram.com/mishra_nikhil01/"
                    title="Instagram: @makersofcode"
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://www.linkedin.com/in/nikhil-mishra-664672180/"
                    title="LinkedIn: MakersOfCode"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://x.com/mishranikhil01/"
                    title="Twitter: @makersofcode"
                    target="_blank"
                  >
                    <FaTwitter />
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="bg-light rounded p-2">
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="align-content-center"
            >
              <ul className="list-unstyled d-flex justify-content-evenly m-0">
                <li>
                  <Image
                    src="/assets/Footer/adobe.webp"
                    title="Adobe"
                    alt="Adobe Logo"
                    width={100}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="/assets/Footer/great-place-to-work.webp"
                    title="Great Place To Work"
                    alt="Great Place To Work Logo"
                    width={100}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="/assets/Footer/hubspot-agency.webp"
                    title="HubSpot Agency"
                    alt="HubSpot Agency Logo"
                    width={100}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="/assets/Footer/hubspot.webp"
                    title="HubSpot"
                    alt="HubSpot Logo"
                    width={100}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="/assets/Footer/iso-logo.webp"
                    title="ISO"
                    alt="ISO Logo"
                    width={125}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="/assets/Footer/pmp.webp"
                    title="PMP"
                    alt="PMP Logo"
                    width={100}
                    height={100}
                  />
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="align-content-center"
            >
              <p className="text-center m-0">
                &copy;{new Date().getFullYear()} Website is Proudly Designed &
                Developed by{" "}
                <Link
                  href="/"
                  title="MakersOfCode"
                  target="_blank"
                  className="text-decoration-none"
                >
                  MakersOfCode
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
