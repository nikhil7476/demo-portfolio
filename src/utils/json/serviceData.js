// src/utils/serviceData.js

import { AiFillCode } from "react-icons/ai";
import {
  FaChartLine,
  FaQuidditch,
  FaRobot,
  FaFileAlt,
  FaUserCheck,
  FaLaptopCode,
  FaAmazonPay,
} from "react-icons/fa";
import { FaMobileRetro, FaCartShopping } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";
import {
  MdScreenSearchDesktop,
  MdSecurity,
  MdDeveloperMode,
  MdDesignServices,
  MdOutlineScreenSearchDesktop,
} from "react-icons/md";
import { SiTraefikproxy } from "react-icons/si";

const serviceData = {
  serviceMain: {
    subheading: "Our Services",
    title: "Build your brand",
    description:
      "From the inception of a project to its completion, we employ a comprehensive and holistic approach that ensures all aspects and stages are thoughtfully and thoroughly addressed.",
    section1: {
      subheading: "About MakersOfCode Services",
      heading: "Innovating through ideas, mentorship, & opportunity.",
      description:
        "Our team is a collective force of top talents, pros, experts, and visionaries from diverse fields. With a passion for excellence, our professionals bring a wealth of experience and knowledge to every project. At Slack, we are committed to delivering nothing short of excellence. From concept to implementation, we maintain the highest standards of quality and craftsmanship, leaving no room for compromise.",
      featuredHeading:
        "Turning ideas into action through innovation, mentorship, & opportunity.",
      featuredPoints: [
        "Managed Services",
        "Adaptable Products",
        "Competitive Advantage",
        "Strategic Partnerships",
        "Scalable Solutions",
        "Continuous Improvement",
      ],
      sectionImage: "/assets/Home/home-why-choose-us.webp",
      ctaText: "Contact Us",
      ctaLink: "/contact-us",
    },
    section2: {
      subheading: "Our Services",
      heading: "You won’t be disappointed with our services",
      ctaText: "Contact Us",
      ctaLink: "/contact-us",
    },
    section3: {
      subheading: "Deserve the best!",
      heading: "Comprehensive Digital Services to Grow Your Brand",
      iconBox: [
        {
          id: 1,
          title: "Search Engine Optimization",
          icon: <MdOutlineScreenSearchDesktop />,
        },
        {
          id: 2,
          title: "User-Centered Design",
          icon: <AiFillCode />,
        },
        {
          id: 3,
          title: "Pay-Per-Click Campaigns",
          icon: <FaAmazonPay />,
        },
        {
          id: 4,
          title: "Prototype & Wireframe",
          icon: <FaLaptopCode />,
        },
        {
          id: 5,
          title: "Social Media Marketing",
          icon: <IoShareSocialOutline />,
        },
        {
          id: 6,
          title: "Interactive User Testing",
          icon: <FaUserCheck />,
        },
        {
          id: 7,
          title: "Content Creation",
          icon: <FaFileAlt />,
        },
        {
          id: 8,
          title: "Visual Design Excellence",
          icon: <MdDesignServices />,
        },
      ],
      sectionImage: "/assets/Services/grow-your-brand.webp",
      ctaText: "Contact Us",
      ctaLink: "/contact-us",
    },
    section4: {
      subheading: "Our More Services",
      heading: "Going the Extra Mile: More Services You’ll Love",
    },
  },
  myservices: [
    {
      id: 1,
      icon: <GrCloudSoftware />,
      slug: "software-development",
      subtitle: "Software Development",
      title: "Software Development",
      description:
        "We create custom software tailored to your business needs - ensuring scalability, security, and performance to streamline operations and support growth.",
      featuredImage: "/assets/Services/software-development-tab-featured.webp",
      bannerImage:
        "/assets/Services/software-development/software-development-banner.webp",
      aboutImage:
        "/assets/Services/software-development/about-software-development.webp",
      futureImage:
        "/assets/Services/software-development/software-development-future.webp",
    },
    {
      id: 2,
      icon: <MdScreenSearchDesktop />,
      slug: "website-development",
      subtitle: "Website Development",
      title: "Website Development",
      description:
        "We build fast, secure, and SEO-friendly websites that look great on all devices—whether it's a simple site or a full web app.",
      featuredImage: "/assets/Services/website-development-tab-featured.webp",
      bannerImage:
        "/assets/Services/website-development/website-development-banner.webp",
      aboutImage:
        "/assets/Services/website-development/about-website-development.webp",
      futureImage:
        "/assets/Services/website-development/website-development-future.webp",
    },
    {
      id: 3,
      icon: <FaMobileRetro />,
      slug: "mobile-app-development",
      subtitle: "Mobile App Development",
      title: "Mobile App Development",
      description:
        "We develop high-performance iOS and Android apps focused on usability, scalability, and seamless user experiences.",
      metaDescription: "Cross-platform mobile apps built with React Native.",
      featuredImage:
        "/assets/Services/mobile-app-development-tab-featured.webp",
      bannerImage:
        "/assets/Services/mobile-app-development/mobile-app-development-banner.webp",
      aboutImage:
        "/assets/Services/mobile-app-development/about-mobile-app-development.webp",
      futureImage:
        "/assets/Services/mobile-app-development/mobile-app-development-future.webp",
    },
    {
      id: 4,
      icon: <FaChartLine />,
      slug: "digital-marketing",
      subtitle: "Digital Marketing",
      title: "Digital Marketing",
      description:
        "We drive online growth with SEO, social media, PPC, and content marketing—boosting visibility, engagement, and conversions.",
      featuredImage: "/assets/Services/digital-marketing-tab-featured.webp",
      bannerImage:
        "/assets/Services/digital-marketing/digital-marketing-banner.webp",
      aboutImage:
        "/assets/Services/digital-marketing/about-digital-marketing.webp",
      futureImage:
        "/assets/Services/digital-marketing/digital-marketing-future.webp",
    },
    {
      id: 5,
      icon: <FaQuidditch />,
      slug: "ui-ux-design",
      subtitle: "UI/UX Design",
      title: "UI/UX Design",
      description:
        "We design intuitive, engaging interfaces that enhance user experience—transforming complex ideas into clean, user-friendly digital products.",
      featuredImage: "/assets/Services/ui-ux-tab-featured.webp",
      bannerImage: "/assets/Services/ui-ux-design/ui-ux-banner.webp",
      aboutImage: "/assets/Services/ui-ux-design/about-ui-ux-design.webp",
      futureImage: "/assets/Services/ui-ux-design/ui-ux-design-future.webp",
    },
    {
      id: 6,
      icon: <FaCartShopping />,
      slug: "ecommerce-solutions",
      subtitle: "Ecommerce Solutions",
      title: "Ecommerce Solutions",
      description: "End-to-End Ecommerce Solutions",
      featuredImage: "/assets/Services/ecom-solutions-tab-featured.webp",
      bannerImage: "/assets/Services/ecommerce-solutions/ecommerce-banner.webp",
      aboutImage: "/assets/Services/ecommerce-solutions/about-e-commerce.webp",
      futureImage:
        "/assets/Services/ecommerce-solutions/e-commerce-solutions-future.webp",
    },
    {
      id: 7,
      icon: <MdSecurity />,
      slug: "cyber-security-solutions",
      subtitle: "Cyber Security Solutions",
      title: "Cyber Security Solutions",
      description:
        "We protect your business with proactive cybersecurity solutions—covering threat detection, network security, compliance, and risk management.",
      featuredImage: "/assets/Services/cybersecurity-tab-featured.webp",
      bannerImage:
        "/assets/Services/cyber-security-solutions/cybersecurity-banner.webp",
      aboutImage:
        "/assets/Services/cyber-security-solutions/about-cybersecurity.webp",
      futureImage:
        "/assets/Services/cyber-security-solutions/cybersecurity-future.webp",
    },
    {
      id: 8,
      icon: <FaRobot />,
      slug: "artificial-intelligence-solutions",
      subtitle: "Artificial Intelligence Solutions",
      title: "Artificial Intelligence Solutions",
      description: "Tailored AI Technologies & Solutions",
      featuredImage: "/assets/Services/ai-solution-services-tab-featured.webp",
      bannerImage: "/assets/Services/ai-solutions/ai-banner.webp",
      aboutImage: "/assets/Services/ai-solutions/about-ai-solution.webp",
      futureImage: "/assets/Services/ai-solutions/ai-solution-future.webp",
    },
    {
      id: 9,
      icon: <MdDeveloperMode />,
      slug: "hire-dedicated-devlopers",
      subtitle: "Hire Dedicated Developers",
      title: "Hire Dedicated Developers",
      description: "Expert & Dedicated Developers",
      featuredImage:
        "/assets/Services/hire-dedicated-developer-tab-featured.webp",
      bannerImage:
        "/assets/Services/hire-dedicated-developers/hire-dedicated-banner.webp",
      aboutImage:
        "/assets/Services/hire-dedicated-developers/about-dedicated-developers.webp",
      futureImage:
        "/assets/Services/hire-dedicated-developers/dedicated-developers-future.webp",
    },
    {
      id: 10,
      icon: <SiTraefikproxy />,
      slug: "hire-proxy-developers",
      subtitle: "Hire Proxy Developers",
      title: "Hire Proxy Developers",
      description: "Skilled Proxy Developers",
      featuredImage: "/assets/Services/hire-proxy-developer-tab-featured.webp",
      bannerImage:
        "/assets/Services/hire-proxy-developers/hire-proxy-banner.webp",
      aboutImage: "/assets/Services/hire-proxy-developers/about-proxy-dev.webp",
      futureImage:
        "/assets/Services/hire-proxy-developers/proxy-dev-future.webp",
    },
  ],
};

export default serviceData;
