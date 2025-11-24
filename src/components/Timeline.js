// components/Timeline.js
import { Container, Card } from "react-bootstrap";
import { FaFlag, FaPaperPlane, FaQuestion, FaCheck } from "react-icons/fa";

export default function Timeline() {
  const steps = [
    {
      title: "Discovery & Planning",
      desc: "We work with you to define project goals, understand your audience, and create a clear roadmap for success.",
      step: "STEP 1",
      icon: <FaFlag />,
      side: "left",
    },
    {
      title: "Design & Development",
      desc: "Our team transforms ideas into intuitive designs and builds scalable solutions tailored to your needs.",
      step: "STEP 2",
      icon: <FaPaperPlane />,
      side: "right",
    },
    {
      title: "Testing & Quality Assurance",
      desc: "We rigorously test every feature to ensure performance, reliability, and a seamless user experience.",
      step: "STEP 3",
      icon: <FaQuestion />,
      side: "left",
    },
    {
      title: "Deployment & Maintenance",
      desc: "We launch your product with care and provide ongoing support to keep it running smoothly and efficiently.",
      step: "STEP 4",
      icon: <FaCheck />,
      side: "right",
    },
  ];

  return (
    <div className="timeline-wrapper">
      <Container>
        <div className="timeline-line"></div>

        {steps.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              item.side === "left" ? "left" : "right"
            }`}
          >
            <div className="timeline-icon">{item.icon}</div>

            <span className="timeline-step">{item.step}</span>

            <Card className="timeline-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Card>
          </div>
        ))}
      </Container>
    </div>
  );
}
