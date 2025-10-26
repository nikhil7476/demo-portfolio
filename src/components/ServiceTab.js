import React from "react";
import Link from "next/link";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import serviceData from "@/utils/json/serviceData";
import Image from "next/image";

function ServiceTab() {
  const selectedServiceIds = [1, 2, 3, 4, 5, 7];
  const selectedServices = serviceData.myservices.filter((service) =>
    selectedServiceIds.includes(service.id)
  );

  return (
    <>
      <Row>
        <Col>
          <Tab.Container
            defaultActiveKey={selectedServices[0]?.slug}
            id="service-tab"
            className="mb-3"
          >
            <Row>
              <Col sm={3} className="align-content-center">
                <Nav variant="pills" className="flex-column">
                  {selectedServices.map((service) => (
                    <Nav.Item key={service.id} className="mb-2">
                      <Nav.Link eventKey={service.slug}>
                        {service.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col sm={9} className="align-content-center">
                <Tab.Content>
                  {selectedServices.map((service) => (
                    <Tab.Pane eventKey={service.slug} key={service.id}>
                      <Row>
                        <Col
                          xl={6}
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          className="mb-3"
                        >
                          <div className="bg-dark shadow p-4 rounded h-100 align-content-center">
                            <Image
                              src={service.featuredImage}
                              alt={service.title + " featured"}
                              title={service.title + " featured"}
                              width={1000}
                              height={666}
                              style={{ width: "100%", height: "auto" }}
                              className="rounded"
                            />
                          </div>
                        </Col>
                        <Col
                          xl={6}
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          className="mb-3"
                        >
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
                                <FaArrowRightLong />
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
        </Col>
      </Row>
    </>
  );
}

export default ServiceTab;
