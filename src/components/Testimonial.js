// components/TestimonialCarousel.js

import Image from "next/image";
import { Carousel } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCarousel = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <>
      <span>Happy Clients</span>
      <h2>What Our Client Say,</h2>
      <hr />
      <Carousel interval={5000} indicators={true} controls={false}>
        {data.map((item) => (
          <Carousel.Item key={item.id}>
            <div className="d-flex flex-column align-items-center text-center p-4">
              <span>
                <FaQuoteLeft className="mb-3" size={40} />
              </span>
              <p className="mb-3 fst-italic">{item.message}</p>
              <Image
                src={item.image}
                alt={item.name}
                title={item.name}
                className="rounded-circle mb-3"
                width={80}
                height={80}
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <h5 className="mb-2">{item.name}</h5>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default TestimonialCarousel;
