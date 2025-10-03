import { IoMdCheckboxOutline } from "react-icons/io";
import { GiScooter } from "react-icons/gi";
import { FaTools } from "react-icons/fa";

const homeData = {
  section1: {
    subheading: "About Us",
    title: "Smart IT Solutions for Smarter Business Growth.",
    description:
      "At MakersOfCode, we’re a tight-knit team of passionate coders and digital marketing experts from around the globe. With over 50 talented individuals across 5 countries, we’re ready to tackle any challenge in the field of software development. Our diverse perspectives and deep experience ensure that your campaigns are crafted with precision and delivered with impact.",
    ctaText: "More About Us",
    ctaLink: "/about-us",
    image: "/assets/Home/home-about.webp",
    imageAlt: "About MakersOfCode",
    imageTitle: "About Us",
    imageWidth: 600,
    imageHeight: 700,
  },

  section2: {
    subheading: "Why Us",
    title: "Why Choose MakersOfCode",
    description:
      "At the heart of our success is a team of passionate developers and dedicated project managers who prioritize quality, speed, and value. We don’t just build software—we deliver reliable solutions that drive growth and efficiency. Here’s why businesses trust us:",
    ctaText: "Explore Our Services",
    ctaLink: "/our-services",
    image: "/assets/Home/home-why-choose-us.webp",
    imageAlt: "why-us",
    imageTitle: "Why Us",
    iconBox: [
      {
        icon: <IoMdCheckboxOutline />,
        title: "Quality First",
        description:
          "We deliver reliable, high-performing solutions with a focus on precision and best practices.",
      },
      {
        icon: <GiScooter />,
        title: "On-Time Delivery",
        description:
          "Your deadlines matter. We ensure timely delivery with clear, consistent updates.",
      },
      {
        icon: <FaTools />,
        title: "Scalable Solutions",
        description:
          "Our custom-built solutions grow with your business and adapt to your future needs.",
      },
    ],
  },

  articleSection: {
    subheading: "Articles",
    title: "See latest articles from our agency.",
    ctaText: "Read All Articles",
    ctaLink: "/blog",
  },
};

export default homeData;
