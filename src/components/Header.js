import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <Navbar expand="lg" className="navbar-transparent">
      <Container>
        {/* Brand */}
        <Navbar.Brand
          href="/"
          title="Nikhil Mishra"
          className="text-light fw-bold"
        >
          <Image
            src="/assets/Header/MOC-logo.png"
            width={902}
            height={276}
            title="MakersOfCode"
            alt="MakersOfCode Logo"
            style={{ width: "50%", height: "auto" }}
          />
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        {/* Offcanvas Menu */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="bg-dark fw-bold"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-light">
              <Link
                href="/"
                title="Nikhil Mishra"
                className="text-light fw-bold"
              >
                <Image
                  src="/nikhil-logo.jpeg"
                  width={50}
                  height={50}
                  title="Nikhil Mishra"
                  alt="Nikhil Mishra Logo"
                  className="img rounded"
                />{" "}
                NIKHIL MISHRA
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1">
              <Nav.Link href="/" title="Home" className="text-light mx-2">
                Home
              </Nav.Link>
              <Nav.Link
                href="/about-us"
                title="About Us"
                className="text-light mx-2"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="/our-services"
                title="Our Services"
                className="text-light mx-2"
              >
                Our Services
              </Nav.Link>
              <NavDropdown title="Our Work" id="basic-nav-dropdown">
                <NavDropdown.Item href="/our-products" title="Our Products">
                  Our Products
                </NavDropdown.Item>
                <NavDropdown.Item href="/our-portfolio" title="Our Portfolio">
                  Our Portfolio
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/blog" title="Blog" className="text-light mx-2">
                Blog
              </Nav.Link>
              <Nav.Link
                href="/contact-us"
                title="Contact Us"
                className="text-light mx-2"
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
