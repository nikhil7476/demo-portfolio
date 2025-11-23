// import React from "react";
// import Link from "next/link";
// import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
// import { FaArrowRightLong } from "react-icons/fa6";
// import serviceData from "@/utils/json/serviceData";
// import Image from "next/image";

// function ServiceTab() {
//   const selectedServiceIds = [1, 2, 3, 4, 5, 7];
//   const selectedServices = serviceData.myservices.filter((service) =>
//     selectedServiceIds.includes(service.id)
//   );

//   return (
//     <>
//       <Row>
//         <Col>
//           <Tab.Container
//             defaultActiveKey={selectedServices[0]?.slug}
//             id="service-tab"
//             className="mb-3"
//           >
//             <Row>
//               <Col sm={3} className="align-content-center">
//                 <Nav variant="pills" className="flex-column">
//                   {selectedServices.map((service) => (
//                     <Nav.Item key={service.id} className="mb-2">
//                       <Nav.Link eventKey={service.slug}>
//                         {service.title}
//                       </Nav.Link>
//                     </Nav.Item>
//                   ))}
//                 </Nav>
//               </Col>
//               <Col sm={9} className="align-content-center">
//                 <Tab.Content>
//                   {selectedServices.map((service) => (
//                     <Tab.Pane eventKey={service.slug} key={service.id}>
//                       <Row>
//                         <Col
//                           xl={6}
//                           lg={6}
//                           md={6}
//                           sm={12}
//                           xs={12}
//                           className="mb-3"
//                         >
//                           <div className="bg-dark shadow p-4 rounded h-100 align-content-center">
//                             <Image
//                               src={service.featuredImage}
//                               alt={service.title + " featured"}
//                               title={service.title + " featured"}
//                               width={1000}
//                               height={666}
//                               style={{ width: "100%", height: "auto" }}
//                               className="rounded"
//                             />
//                           </div>
//                         </Col>
//                         <Col
//                           xl={6}
//                           lg={6}
//                           md={6}
//                           sm={12}
//                           xs={12}
//                           className="mb-3"
//                         >
//                           <div className="bg-dark shadow p-4 rounded h-100 align-content-center">
//                             <span className="fs-1">{service.icon}</span>
//                             <h3 className="my-3">{service.title}</h3>
//                             <p>{service.description}</p>
//                             <div className="text-end">
//                               <Link
//                                 href={`/our-services/${service.slug}`}
//                                 title={service.title}
//                                 target="_blank"
//                                 className="ctaButton"
//                               >
//                                 <FaArrowRightLong />
//                               </Link>
//                             </div>
//                           </div>
//                         </Col>
//                       </Row>
//                     </Tab.Pane>
//                   ))}
//                 </Tab.Content>
//               </Col>
//             </Row>
//           </Tab.Container>
//         </Col>
//       </Row>
//     </>
//   );
// }

// export default ServiceTab;

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Col, Row, Tab, Nav, Button } from "react-bootstrap";
import {
  FaArrowRightLong,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import serviceData from "@/utils/json/serviceData";
import Image from "next/image";

function ServiceTab() {
  const allServices = serviceData.myservices;
  const scrollRef = useRef(null);
  const [visibleTabs, setVisibleTabs] = useState(4);

  // Adjust visible tabs count based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleTabs(1);
      else if (window.innerWidth < 1200) setVisibleTabs(3);
      else setVisibleTabs(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      const scrollAmount = containerWidth / visibleTabs;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Tab.Container
        defaultActiveKey={allServices[0]?.slug}
        id="service-tab"
        className="mb-3 service-tab-container"
      >
        <Row className="align-items-center">
          {/* Scroll arrows + horizontal nav */}
          <Col xs={12} className="position-relative">
            <div className="d-flex align-items-center mb-3">
              {/* Left arrow */}
              <Button
                variant="dark"
                size="sm"
                className="service-nav-arrow me-2"
                onClick={() => scroll("left")}
                style={{ zIndex: 2 }}
              >
                <FaChevronLeft />
              </Button>

              {/* Scrollable nav container */}
              <div
                ref={scrollRef}
                className="d-flex overflow-hidden flex-nowrap flex-grow-1"
                style={{
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <Nav
                  variant="pills"
                  className="flex-row w-100"
                  style={{
                    flexWrap: "nowrap",
                    whiteSpace: "nowrap",
                    width: "100%",
                  }}
                >
                  {allServices.map((service) => (
                    <Nav.Item
                      key={service.id}
                      style={{
                        flex: `0 0 calc(100% / ${visibleTabs})`,
                        textAlign: "center",
                        padding: "0 5px",
                      }}
                    >
                      <Nav.Link
                        eventKey={service.slug}
                        className="text-nowrap service-tab-title"
                      >
                        {service.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>

              {/* Right arrow */}
              <Button
                variant="dark"
                size="sm"
                className="service-nav-arrow ms-2"
                onClick={() => scroll("right")}
                style={{ zIndex: 2 }}
              >
                <FaChevronRight />
              </Button>
            </div>
          </Col>

          {/* Service content */}
          <Col xs={12}>
            <Tab.Content>
              {allServices.map((service) => (
                <Tab.Pane eventKey={service.slug} key={service.id}>
                  <Row>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-3">
                      <div className="bg-dark shadow p-4 rounded h-100 align-content-center">
                        <Image
                          src={service.featuredImage}
                          alt={`${service.title} featured`}
                          title={`${service.title} featured`}
                          width={1000}
                          height={666}
                          style={{ width: "100%", height: "auto" }}
                          className="rounded"
                        />
                      </div>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-3">
                      <div className="bg-dark shadow p-4 rounded h-100 align-content-center">
                        <span className="fs-1">{service.icon}</span>
                        <h3 className="my-3">{service.title}</h3>
                        <p>{service.description}</p>
                        <div className="text-end">
                          <Link
                            href={`/our-services/${service.slug}`}
                            title={service.title}
                            target="_blank"
                            className="ctaButton"
                          >
                            Explore More <FaArrowRightLong />
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      {/* Hide scrollbar in all browsers */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}

export default ServiceTab;
