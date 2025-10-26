import { Container } from "react-bootstrap";
import serviceData from "@/utils/json/serviceData";
import Link from "next/link";

export default function ServiceMarquee() {
  return (
    <section className="service-marquee-section">
      <Container fluid className="text-center">
        {/* Marquee Wrapper */}
        <div className="service-marquee-wrapper">
          <div className="service-marquee-track">
            {serviceData.myservices
              .concat(serviceData.myservices)
              .map((service, index) => (
                <Link
                  key={index}
                  href={`/our-services/${service.slug}`}
                  title={service.title}
                  className="service-marquee-item d-flex align-items-center justify-content-center"
                >
                  <span className="service-icon me-2">{service.icon}</span>
                  <span className="service-title">{service.title}</span>
                </Link>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
