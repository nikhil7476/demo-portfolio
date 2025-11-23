"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col, NavDropdown } from "react-bootstrap";
import {
  FaWhatsapp,
  FaMicrosoft,
  FaAppStoreIos,
  FaDigitalOcean,
  FaShoppingCart,
  FaRobot,
} from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa6";
import {
  MdOutlineDesignServices,
  MdOutlineSecurity,
  MdDeveloperMode,
} from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { SiTraefikproxy } from "react-icons/si";
import { MdMenu } from "react-icons/md";

const menuCategories = [
  {
    links: [
      {
        icon: <FaMicrosoft />,
        name: "Software Development",
        description: "Softwares For Your Business.",
        href: "/our-services/software-development/",
      },
      {
        icon: <FaAppStoreIos />,
        name: "Mobile App Development",
        description: "Apps For Android & iOS.",
        href: "/our-services/mobile-app-development/",
      },
      {
        icon: <FaInternetExplorer />,
        name: "Website Development",
        description: "Modern Websites That Perform",
        href: "/our-services/website-development/",
      },
      {
        icon: <MdOutlineDesignServices />,
        name: "UI/UX Design",
        description: "Designs That User Loves",
        href: "/our-services/ui-ux-design/",
      },
    ],
  },
  {
    links: [
      {
        icon: <FaDigitalOcean />,
        name: "Digital Marketing",
        description: "Grow Fast With Smart Marketing",
        href: "/our-services/digital-marketing/",
      },
      {
        icon: <FaShoppingCart />,
        name: "Ecommerce Solutions",
        description: "Sell Better With Ecommerce",
        href: "/our-services/ecommerce-solutions/",
      },
      {
        icon: <MdOutlineSecurity />,
        name: "Cyber Security Solutions",
        description: "Smart Digital Threat Protection",
        href: "/our-services/cyber-security-solutions/",
      },
    ],
  },
  {
    links: [
      {
        icon: <FaRobot />,
        name: "AI Solutions",
        description: "AI Tools For Smarter Work",
        href: "/our-services/artificial-intelligence-solutions/",
      },
      {
        icon: <MdDeveloperMode />,
        name: "Hire Dedicated Developers",
        description: "Full Time Devs For Your Team",
        href: "/our-services/hire-dedicated-devlopers/",
      },
      {
        icon: <SiTraefikproxy />,
        name: "Hire Proxy Developers",
        description: "Experts For Interview Success",
        href: "/our-services/hire-proxy-developers/",
      },
    ],
  },
];

const MegaMenuContent = () => (
  <div className="mega-menu-panel shadow p-2">
    <Container fluid>
      <Row>
        <Col xl={9} lg={9} md={8} sm={12} xs={12} className="mb-3">
          <Row>
            {menuCategories.map((category, index) => (
              <Col
                xl={4}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                key={index}
                className="mb-3 mb-lg-0"
              >
                <ul className="list-unstyled h-100">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="py-1">
                      <Link
                        href={link.href}
                        title={link.name}
                        className="mega-menu-link"
                      >
                        <div className="d-flex gap-3">
                          <div>
                            <span className="fs-2 header-nav-icon">
                              {link.icon}
                            </span>
                          </div>
                          <div>
                            <span>{link.name}</span>
                            <p>{link.description}</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xl={3} lg={3} md={4} sm={12} xs={12} className="mb-3">
          <Image
            src="/assets/Header/mega-menu.webp"
            alt="Mega Menu"
            title="Mega Menu"
            width={350}
            height={350}
            className="img-fluid rounded w-100 h-auto"
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default function MegaMenu() {
  const [showServices, setShowServices] = useState(false);
  const [showWork, setShowWork] = useState(false);

  const handleShowServices = () => {
    setShowServices(true);
    setShowWork(false);
  };
  const handleHideServices = () => setShowServices(false);

  const handleShowWork = () => {
    setShowWork(true);
    setShowServices(false);
  };
  const handleHideWork = () => setShowWork(false);

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Container className="w-100">
        <Navbar.Brand href="/" title="MakersOfCode" className="header-logo">
          <Image
            src="/assets/Header/MOC-logo.png"
            width={902}
            height={276}
            alt="MakersOfCode Logo"
            title="MakersOfCode"
            className="brand-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <MdMenu />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="header-menu">
          <Nav className="me-auto header-nav text-center">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about-us">
              About Us
            </Nav.Link>

            {/* Desktop Mega Menu */}
            <div
              className="d-none d-lg-block mega-menu-dropdown"
              onMouseEnter={handleShowServices}
              onMouseLeave={handleHideServices}
            >
              <div className="d-flex align-items-center gap-1 nav-link">
                <Link
                  href="/our-services/"
                  className="text-white d-flex align-items-center gap-1"
                >
                  Our Services <IoIosArrowDown />
                </Link>
              </div>
              <div className={`dropdown-menu ${showServices ? "show" : ""}`}>
                <MegaMenuContent />
              </div>
            </div>

            {/* Mobile Mega Menu */}
            <NavDropdown
              title="Our Services"
              id="mobile-mega-menu-dropdown"
              className="d-lg-none"
            >
              <div className="p-3">
                <MegaMenuContent />
              </div>
            </NavDropdown>

            {/* Desktop Our Work */}
            <div
              className="d-none d-lg-block work-menu-dropdown"
              onMouseEnter={handleShowWork}
              onMouseLeave={handleHideWork}
            >
              <div className="d-flex align-items-center gap-1 nav-link">
                <Link
                  href="/our-work"
                  className="text-white d-flex align-items-center gap-1"
                >
                  Our Work <IoIosArrowDown />
                </Link>
              </div>
              <div className={`dropdown-menu ${showWork ? "show" : ""}`}>
                <div>
                  <Link href="/our-products" className="dropdown-item">
                    Our Products
                  </Link>
                  <Link href="/our-portfolio" className="dropdown-item">
                    Our Portfolio
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Our Work */}
            <NavDropdown
              title="Our Work"
              id="mobile-our-work-dropdown"
              className="d-lg-none"
            >
              <NavDropdown.Item as={Link} href="/our-products">
                Our Products
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/our-portfolio">
                Our Portfolio
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} href="/contact-us">
              Contact Us
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link
              href="https://wa.me/919084583845"
              title="Whatsapp Us"
              className="header-ctaButton"
            >
              <FaWhatsapp /> +91-9084583845
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
