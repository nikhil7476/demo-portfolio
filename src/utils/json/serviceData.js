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
      aboutImage:
        "/assets/Services/software-development/about-software-development.webp",
      futureImage:
        "/assets/Services/software-development/software-development-future.webp",
      section1: {
        subheading: "Why Choose?",
        heading: "Our Custom Software Development Services",
        description:
          "A comprehensive suite of software development services designed to streamline operations, enhance user experience, and implement innovative technology solutions—strategically crafted to align with your business goals and meet the unique demands of your digital products.",
        featuredHeading: "Our Software Stands Out",
        featuredPoints: [
          "Adaptable",
          "Custom",
          "Compatible",
          "Scalable",
          "User-Friendly",
          "Secure",
        ],
        featuredDescription:
          "Our custom software is tailored to your business goals, offering more flexibility than off-the-shelf solutions. Built for scalability, it grows with your needs while integrating smoothly with your existing systems for minimal disruption and maximum efficiency.",
        sectionImage:
          "/assets/Services/software-development/about-software-development.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our Software Development Service",
        description:
          "Strategic software development tailored to your business objectives. We begin with in-depth system analysis and competitor benchmarking to uncover opportunities for innovation. Our team builds development roadmaps that address immediate technical needs while planning for scalable, future-ready solutions. Each product is crafted with user-centric design, seamless integration, and performance in mind—ensuring your software is as functional as it is forward-thinking.",
        featuredPoints: [
          "Custom-Fit Software",
          "Scalable roadmaps",
          "Easy system integration",
          "Smart tech insights",
          "Clean, bold UI/UX",
          "Growth-ready backend",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready Software",
        description:
          "We craft intelligent, scalable software tailored to your unique business goals—no generic templates, just smart, purpose-built solutions. Our software evolves with your needs, adapting effortlessly as your operations grow. Designed for performance, flexibility, and long-term value, it supports continuous innovation. We ensure every line of code adds clarity, capability, and impact.",
        sectionImage:
          "/assets/Services/software-development/software-development-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in Digital Success",
        description:
          "Our software development services go beyond writing code—we deliver innovative, user-focused, and scalable digital solutions tailored to your business objectives. Backed by a team of skilled developers and strategists, we focus on precision, performance, and long-term value. Whether you’re building from scratch or modernizing legacy systems, we help your business thrive in the digital landscape.",
        iconBox: [
          {
            id: 1,
            title: "Tailored Development Strategies",
            description:
              "Custom software planning aligned with your business goals, user needs, and technical requirements.",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Data-Driven Development",
            description:
              "Real-time analytics, user behavior tracking, and performance metrics guide ongoing improvements and feature planning.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End Development Solutions",
            description:
              "From concept and design to development, testing, deployment, and maintenance—we manage the full software lifecycle.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Transparent Progress & Reporting",
            description:
              "Clear communication, milestone updates, and detailed technical reports keep you informed throughout the development process.",
            icon: <AiFillCode />,
          },
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
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
      section1: {
        subheading: "Why Choose?",
        heading: "Our Custom Software Development Services",
        description:
          "A comprehensive suite of software development services designed to streamline operations, enhance user experience, and implement innovative technology solutions—strategically crafted to align with your business goals and meet the unique demands of your digital products.",
        featuredHeading: "Our Software Stands Out",
        featuredPoints: [
          "Adaptable",
          "Custom",
          "Compatible",
          "Scalable",
          "User-Friendly",
          "Secure",
        ],
        featuredDescription:
          "Our custom software is tailored to your business goals, offering more flexibility than off-the-shelf solutions. Built for scalability, it grows with your needs while integrating smoothly with your existing systems for minimal disruption and maximum efficiency.",
        sectionImage:
          "/assets/Services/website-development/about-website-development.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our Software Development Service",
        description:
          "Strategic software development tailored to your business objectives. We begin with in-depth system analysis and competitor benchmarking to uncover opportunities for innovation. Our team builds development roadmaps that address immediate technical needs while planning for scalable, future-ready solutions. Each product is crafted with user-centric design, seamless integration, and performance in mind—ensuring your software is as functional as it is forward-thinking.",
        featuredPoints: [
          "Custom-Fit Software",
          "Scalable roadmaps",
          "Easy system integration",
          "Smart tech insights",
          "Clean, bold UI/UX",
          "Growth-ready backend",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready Software",
        description:
          "We craft intelligent, scalable software tailored to your unique business goals—no generic templates, just smart, purpose-built solutions. Our software evolves with your needs, adapting effortlessly as your operations grow. Designed for performance, flexibility, and long-term value, it supports continuous innovation. We ensure every line of code adds clarity, capability, and impact.",
        sectionImage:
          "/assets/Services/website-development/website-development-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in Digital Success",
        description:
          "Our software development services go beyond writing code—we deliver innovative, user-focused, and scalable digital solutions tailored to your business objectives. Backed by a team of skilled developers and strategists, we focus on precision, performance, and long-term value. Whether you’re building from scratch or modernizing legacy systems, we help your business thrive in the digital landscape.",
        iconBox: [
          {
            id: 1,
            title: "Tailored Development Strategies",
            description:
              "Custom software planning aligned with your business goals, user needs, and technical requirements.",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Data-Driven Development",
            description:
              "Real-time analytics, user behavior tracking, and performance metrics guide ongoing improvements and feature planning.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End Development Solutions",
            description:
              "From concept and design to development, testing, deployment, and maintenance—we manage the full software lifecycle.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Transparent Progress & Reporting",
            description:
              "Clear communication, milestone updates, and detailed technical reports keep you informed throughout the development process.",
            icon: <AiFillCode />,
          },
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
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
      section1: {
        subheading: "Why Choose?",
        heading: "Our Custom Software Development Services",
        description:
          "A comprehensive suite of software development services designed to streamline operations, enhance user experience, and implement innovative technology solutions—strategically crafted to align with your business goals and meet the unique demands of your digital products.",
        featuredHeading: "Our Software Stands Out",
        featuredPoints: [
          "Adaptable",
          "Custom",
          "Compatible",
          "Scalable",
          "User-Friendly",
          "Secure",
        ],
        featuredDescription:
          "Our custom software is tailored to your business goals, offering more flexibility than off-the-shelf solutions. Built for scalability, it grows with your needs while integrating smoothly with your existing systems for minimal disruption and maximum efficiency.",
        sectionImage:
          "/assets/Services/mobile-app-development/about-mobile-app-development.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our Software Development Service",
        description:
          "Strategic software development tailored to your business objectives. We begin with in-depth system analysis and competitor benchmarking to uncover opportunities for innovation. Our team builds development roadmaps that address immediate technical needs while planning for scalable, future-ready solutions. Each product is crafted with user-centric design, seamless integration, and performance in mind—ensuring your software is as functional as it is forward-thinking.",
        featuredPoints: [
          "Custom-Fit Software",
          "Scalable roadmaps",
          "Easy system integration",
          "Smart tech insights",
          "Clean, bold UI/UX",
          "Growth-ready backend",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready Software",
        description:
          "We craft intelligent, scalable software tailored to your unique business goals—no generic templates, just smart, purpose-built solutions. Our software evolves with your needs, adapting effortlessly as your operations grow. Designed for performance, flexibility, and long-term value, it supports continuous innovation. We ensure every line of code adds clarity, capability, and impact.",
        sectionImage:
          "/assets/Services/mobile-app-development/mobile-app-development-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in Digital Success",
        description:
          "Our software development services go beyond writing code—we deliver innovative, user-focused, and scalable digital solutions tailored to your business objectives. Backed by a team of skilled developers and strategists, we focus on precision, performance, and long-term value. Whether you’re building from scratch or modernizing legacy systems, we help your business thrive in the digital landscape.",
        iconBox: [
          {
            id: 1,
            title: "Tailored Development Strategies",
            description:
              "Custom software planning aligned with your business goals, user needs, and technical requirements.",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Data-Driven Development",
            description:
              "Real-time analytics, user behavior tracking, and performance metrics guide ongoing improvements and feature planning.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End Development Solutions",
            description:
              "From concept and design to development, testing, deployment, and maintenance—we manage the full software lifecycle.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Transparent Progress & Reporting",
            description:
              "Clear communication, milestone updates, and detailed technical reports keep you informed throughout the development process.",
            icon: <AiFillCode />,
          },
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
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
      section1: {
        subheading: "Why Choose?",
        heading: "Our Custom Software Development Services",
        description:
          "A comprehensive suite of software development services designed to streamline operations, enhance user experience, and implement innovative technology solutions—strategically crafted to align with your business goals and meet the unique demands of your digital products.",
        featuredHeading: "Our Software Stands Out",
        featuredPoints: [
          "Adaptable",
          "Custom",
          "Compatible",
          "Scalable",
          "User-Friendly",
          "Secure",
        ],
        featuredDescription:
          "Our custom software is tailored to your business goals, offering more flexibility than off-the-shelf solutions. Built for scalability, it grows with your needs while integrating smoothly with your existing systems for minimal disruption and maximum efficiency.",
        sectionImage:
          "/assets/Services/digital-marketing/about-digital-marketing.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our Software Development Service",
        description:
          "Strategic software development tailored to your business objectives. We begin with in-depth system analysis and competitor benchmarking to uncover opportunities for innovation. Our team builds development roadmaps that address immediate technical needs while planning for scalable, future-ready solutions. Each product is crafted with user-centric design, seamless integration, and performance in mind—ensuring your software is as functional as it is forward-thinking.",
        featuredPoints: [
          "Custom-Fit Software",
          "Scalable roadmaps",
          "Easy system integration",
          "Smart tech insights",
          "Clean, bold UI/UX",
          "Growth-ready backend",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready Software",
        description:
          "We craft intelligent, scalable software tailored to your unique business goals—no generic templates, just smart, purpose-built solutions. Our software evolves with your needs, adapting effortlessly as your operations grow. Designed for performance, flexibility, and long-term value, it supports continuous innovation. We ensure every line of code adds clarity, capability, and impact.",
        sectionImage:
          "/assets/Services/digital-marketing/digital-marketing-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in Digital Success",
        description:
          "Our software development services go beyond writing code—we deliver innovative, user-focused, and scalable digital solutions tailored to your business objectives. Backed by a team of skilled developers and strategists, we focus on precision, performance, and long-term value. Whether you’re building from scratch or modernizing legacy systems, we help your business thrive in the digital landscape.",
        iconBox: [
          {
            id: 1,
            title: "Tailored Development Strategies",
            description:
              "Custom software planning aligned with your business goals, user needs, and technical requirements.",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Data-Driven Development",
            description:
              "Real-time analytics, user behavior tracking, and performance metrics guide ongoing improvements and feature planning.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End Development Solutions",
            description:
              "From concept and design to development, testing, deployment, and maintenance—we manage the full software lifecycle.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Transparent Progress & Reporting",
            description:
              "Clear communication, milestone updates, and detailed technical reports keep you informed throughout the development process.",
            icon: <AiFillCode />,
          },
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
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
      section1: {
        subheading: "Why Choose?",
        heading: "Our Custom Software Development Services",
        description:
          "A comprehensive suite of software development services designed to streamline operations, enhance user experience, and implement innovative technology solutions—strategically crafted to align with your business goals and meet the unique demands of your digital products.",
        featuredHeading: "Our Software Stands Out",
        featuredPoints: [
          "Adaptable",
          "Custom",
          "Compatible",
          "Scalable",
          "User-Friendly",
          "Secure",
        ],
        featuredDescription:
          "Our custom software is tailored to your business goals, offering more flexibility than off-the-shelf solutions. Built for scalability, it grows with your needs while integrating smoothly with your existing systems for minimal disruption and maximum efficiency.",
        sectionImage: "/assets/Services/ui-ux-design/about-ui-ux-design.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our Software Development Service",
        description:
          "Strategic software development tailored to your business objectives. We begin with in-depth system analysis and competitor benchmarking to uncover opportunities for innovation. Our team builds development roadmaps that address immediate technical needs while planning for scalable, future-ready solutions. Each product is crafted with user-centric design, seamless integration, and performance in mind—ensuring your software is as functional as it is forward-thinking.",
        featuredPoints: [
          "Custom-Fit Software",
          "Scalable roadmaps",
          "Easy system integration",
          "Smart tech insights",
          "Clean, bold UI/UX",
          "Growth-ready backend",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready Software",
        description:
          "We craft intelligent, scalable software tailored to your unique business goals—no generic templates, just smart, purpose-built solutions. Our software evolves with your needs, adapting effortlessly as your operations grow. Designed for performance, flexibility, and long-term value, it supports continuous innovation. We ensure every line of code adds clarity, capability, and impact.",
        sectionImage: "/assets/Services/ui-ux-design/ui-ux-design-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in Digital Success",
        description:
          "Our software development services go beyond writing code—we deliver innovative, user-focused, and scalable digital solutions tailored to your business objectives. Backed by a team of skilled developers and strategists, we focus on precision, performance, and long-term value. Whether you’re building from scratch or modernizing legacy systems, we help your business thrive in the digital landscape.",
        iconBox: [
          {
            id: 1,
            title: "Tailored Development Strategies",
            description:
              "Custom software planning aligned with your business goals, user needs, and technical requirements.",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Data-Driven Development",
            description:
              "Real-time analytics, user behavior tracking, and performance metrics guide ongoing improvements and feature planning.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End Development Solutions",
            description:
              "From concept and design to development, testing, deployment, and maintenance—we manage the full software lifecycle.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Transparent Progress & Reporting",
            description:
              "Clear communication, milestone updates, and detailed technical reports keep you informed throughout the development process.",
            icon: <AiFillCode />,
          },
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
    },
    {
      id: 6,
      icon: <FaCartShopping />,
      slug: "ecommerce-solutions",
      subtitle: "Ecommerce Solutions",
      title: "Ecommerce Solutions",
      description: "End-to-End Ecommerce Solutions",
      featuredImage: "/assets/Services/ecom-solutions-tab-featured.webp",
      section1: {
        subheading: "Why Choose?",
        heading: "Our Custom Software Development Services",
        description:
          "A comprehensive suite of software development services designed to streamline operations, enhance user experience, and implement innovative technology solutions—strategically crafted to align with your business goals and meet the unique demands of your digital products.",
        featuredHeading: "Our Software Stands Out",
        featuredPoints: [
          "Adaptable",
          "Custom",
          "Compatible",
          "Scalable",
          "User-Friendly",
          "Secure",
        ],
        featuredDescription:
          "Our custom software is tailored to your business goals, offering more flexibility than off-the-shelf solutions. Built for scalability, it grows with your needs while integrating smoothly with your existing systems for minimal disruption and maximum efficiency.",
        sectionImage:
          "/assets/Services/ecoomerce-solutions/about-e-coomerce.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our Software Development Service",
        description:
          "Strategic software development tailored to your business objectives. We begin with in-depth system analysis and competitor benchmarking to uncover opportunities for innovation. Our team builds development roadmaps that address immediate technical needs while planning for scalable, future-ready solutions. Each product is crafted with user-centric design, seamless integration, and performance in mind—ensuring your software is as functional as it is forward-thinking.",
        featuredPoints: [
          "Custom-Fit Software",
          "Scalable roadmaps",
          "Easy system integration",
          "Smart tech insights",
          "Clean, bold UI/UX",
          "Growth-ready backend",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready Software",
        description:
          "We craft intelligent, scalable software tailored to your unique business goals—no generic templates, just smart, purpose-built solutions. Our software evolves with your needs, adapting effortlessly as your operations grow. Designed for performance, flexibility, and long-term value, it supports continuous innovation. We ensure every line of code adds clarity, capability, and impact.",
        sectionImage:
          "/assets/Services/ecoomerce-solutions/e-coomerce-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in Digital Success",
        description:
          "Our software development services go beyond writing code—we deliver innovative, user-focused, and scalable digital solutions tailored to your business objectives. Backed by a team of skilled developers and strategists, we focus on precision, performance, and long-term value. Whether you’re building from scratch or modernizing legacy systems, we help your business thrive in the digital landscape.",
        iconBox: [
          {
            id: 1,
            title: "Tailored Development Strategies",
            description:
              "Custom software planning aligned with your business goals, user needs, and technical requirements.",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Data-Driven Development",
            description:
              "Real-time analytics, user behavior tracking, and performance metrics guide ongoing improvements and feature planning.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End Development Solutions",
            description:
              "From concept and design to development, testing, deployment, and maintenance—we manage the full software lifecycle.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Transparent Progress & Reporting",
            description:
              "Clear communication, milestone updates, and detailed technical reports keep you informed throughout the development process.",
            icon: <AiFillCode />,
          },
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
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
      section1: {
        subheading: "Why Choose?",
        heading: "Our Custom Software Development Services",
        description:
          "A comprehensive suite of software development services designed to streamline operations, enhance user experience, and implement innovative technology solutions—strategically crafted to align with your business goals and meet the unique demands of your digital products.",
        featuredHeading: "Our Software Stands Out",
        featuredPoints: [
          "Adaptable",
          "Custom",
          "Compatible",
          "Scalable",
          "User-Friendly",
          "Secure",
        ],
        featuredDescription:
          "Our custom software is tailored to your business goals, offering more flexibility than off-the-shelf solutions. Built for scalability, it grows with your needs while integrating smoothly with your existing systems for minimal disruption and maximum efficiency.",
        sectionImage:
          "/assets/Services/cyber-security-solutions/about-cybersecurity.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our Software Development Service",
        description:
          "Strategic software development tailored to your business objectives. We begin with in-depth system analysis and competitor benchmarking to uncover opportunities for innovation. Our team builds development roadmaps that address immediate technical needs while planning for scalable, future-ready solutions. Each product is crafted with user-centric design, seamless integration, and performance in mind—ensuring your software is as functional as it is forward-thinking.",
        featuredPoints: [
          "Custom-Fit Software",
          "Scalable roadmaps",
          "Easy system integration",
          "Smart tech insights",
          "Clean, bold UI/UX",
          "Growth-ready backend",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready Software",
        description:
          "We craft intelligent, scalable software tailored to your unique business goals—no generic templates, just smart, purpose-built solutions. Our software evolves with your needs, adapting effortlessly as your operations grow. Designed for performance, flexibility, and long-term value, it supports continuous innovation. We ensure every line of code adds clarity, capability, and impact.",
        sectionImage:
          "/assets/Services/cyber-security-solutions/cybersecurity-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in Digital Success",
        description:
          "Our software development services go beyond writing code—we deliver innovative, user-focused, and scalable digital solutions tailored to your business objectives. Backed by a team of skilled developers and strategists, we focus on precision, performance, and long-term value. Whether you’re building from scratch or modernizing legacy systems, we help your business thrive in the digital landscape.",
        iconBox: [
          {
            id: 1,
            title: "Tailored Development Strategies",
            description:
              "Custom software planning aligned with your business goals, user needs, and technical requirements.",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Data-Driven Development",
            description:
              "Real-time analytics, user behavior tracking, and performance metrics guide ongoing improvements and feature planning.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End Development Solutions",
            description:
              "From concept and design to development, testing, deployment, and maintenance—we manage the full software lifecycle.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Transparent Progress & Reporting",
            description:
              "Clear communication, milestone updates, and detailed technical reports keep you informed throughout the development process.",
            icon: <AiFillCode />,
          },
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
    },
    {
      id: 8,
      icon: <FaRobot />,
      slug: "artificial-intelligence-solutions",
      subtitle: "Artificial Intelligence Solutions",
      title: "Artificial Intelligence Solutions",
      description: "Tailored AI Technologies & Solutions",
      featuredImage: "/assets/Services/ai-solution-services-tab-featured.webp",
      section1: {
        subheading: "Why Choose?",
        heading: "Our Custom Software Development Services",
        description:
          "A comprehensive suite of software development services designed to streamline operations, enhance user experience, and implement innovative technology solutions—strategically crafted to align with your business goals and meet the unique demands of your digital products.",
        featuredHeading: "Our Software Stands Out",
        featuredPoints: [
          "Adaptable",
          "Custom",
          "Compatible",
          "Scalable",
          "User-Friendly",
          "Secure",
        ],
        featuredDescription:
          "Our custom software is tailored to your business goals, offering more flexibility than off-the-shelf solutions. Built for scalability, it grows with your needs while integrating smoothly with your existing systems for minimal disruption and maximum efficiency.",
        sectionImage: "/assets/Services/ai-solutions/about-ai-solution.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our Software Development Service",
        description:
          "Strategic software development tailored to your business objectives. We begin with in-depth system analysis and competitor benchmarking to uncover opportunities for innovation. Our team builds development roadmaps that address immediate technical needs while planning for scalable, future-ready solutions. Each product is crafted with user-centric design, seamless integration, and performance in mind—ensuring your software is as functional as it is forward-thinking.",
        featuredPoints: [
          "Custom-Fit Software",
          "Scalable roadmaps",
          "Easy system integration",
          "Smart tech insights",
          "Clean, bold UI/UX",
          "Growth-ready backend",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready Software",
        description:
          "We craft intelligent, scalable software tailored to your unique business goals—no generic templates, just smart, purpose-built solutions. Our software evolves with your needs, adapting effortlessly as your operations grow. Designed for performance, flexibility, and long-term value, it supports continuous innovation. We ensure every line of code adds clarity, capability, and impact.",
        sectionImage: "/assets/Services/ai-solutions/ai-solution-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in Digital Success",
        description:
          "Our software development services go beyond writing code—we deliver innovative, user-focused, and scalable digital solutions tailored to your business objectives. Backed by a team of skilled developers and strategists, we focus on precision, performance, and long-term value. Whether you’re building from scratch or modernizing legacy systems, we help your business thrive in the digital landscape.",
        iconBox: [
          {
            id: 1,
            title: "Tailored Development Strategies",
            description:
              "Custom software planning aligned with your business goals, user needs, and technical requirements.",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Data-Driven Development",
            description:
              "Real-time analytics, user behavior tracking, and performance metrics guide ongoing improvements and feature planning.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End Development Solutions",
            description:
              "From concept and design to development, testing, deployment, and maintenance—we manage the full software lifecycle.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Transparent Progress & Reporting",
            description:
              "Clear communication, milestone updates, and detailed technical reports keep you informed throughout the development process.",
            icon: <AiFillCode />,
          },
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
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
      section1: {
        subheading: "Why Choose?",
        heading: "Our Custom Software Development Services",
        description:
          "A comprehensive suite of software development services designed to streamline operations, enhance user experience, and implement innovative technology solutions—strategically crafted to align with your business goals and meet the unique demands of your digital products.",
        featuredHeading: "Our Software Stands Out",
        featuredPoints: [
          "Adaptable",
          "Custom",
          "Compatible",
          "Scalable",
          "User-Friendly",
          "Secure",
        ],
        featuredDescription:
          "Our custom software is tailored to your business goals, offering more flexibility than off-the-shelf solutions. Built for scalability, it grows with your needs while integrating smoothly with your existing systems for minimal disruption and maximum efficiency.",
        sectionImage:
          "/assets/Services/hire-dedicated-devlopers/about-dedicated-devlopers.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our Software Development Service",
        description:
          "Strategic software development tailored to your business objectives. We begin with in-depth system analysis and competitor benchmarking to uncover opportunities for innovation. Our team builds development roadmaps that address immediate technical needs while planning for scalable, future-ready solutions. Each product is crafted with user-centric design, seamless integration, and performance in mind—ensuring your software is as functional as it is forward-thinking.",
        featuredPoints: [
          "Custom-Fit Software",
          "Scalable roadmaps",
          "Easy system integration",
          "Smart tech insights",
          "Clean, bold UI/UX",
          "Growth-ready backend",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready Software",
        description:
          "We craft intelligent, scalable software tailored to your unique business goals—no generic templates, just smart, purpose-built solutions. Our software evolves with your needs, adapting effortlessly as your operations grow. Designed for performance, flexibility, and long-term value, it supports continuous innovation. We ensure every line of code adds clarity, capability, and impact.",
        sectionImage:
          "/assets/Services/hire-dedicated-devlopers/dedicated-devlopers-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in Digital Success",
        description:
          "Our software development services go beyond writing code—we deliver innovative, user-focused, and scalable digital solutions tailored to your business objectives. Backed by a team of skilled developers and strategists, we focus on precision, performance, and long-term value. Whether you’re building from scratch or modernizing legacy systems, we help your business thrive in the digital landscape.",
        iconBox: [
          {
            id: 1,
            title: "Tailored Development Strategies",
            description:
              "Custom software planning aligned with your business goals, user needs, and technical requirements.",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Data-Driven Development",
            description:
              "Real-time analytics, user behavior tracking, and performance metrics guide ongoing improvements and feature planning.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End Development Solutions",
            description:
              "From concept and design to development, testing, deployment, and maintenance—we manage the full software lifecycle.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Transparent Progress & Reporting",
            description:
              "Clear communication, milestone updates, and detailed technical reports keep you informed throughout the development process.",
            icon: <AiFillCode />,
          },
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
    },
    {
      id: 10,
      icon: <SiTraefikproxy />,
      slug: "hire-proxy-developers",
      subtitle: "Hire Proxy Developers",
      title: "Hire Proxy Developers",
      description: "Skilled Proxy Developers",
      featuredImage: "/assets/Services/hire-proxy-developer-tab-featured.webp",
      section1: {
        subheading: "Why Choose?",
        heading: "Our Custom Software Development Services",
        description:
          "A comprehensive suite of software development services designed to streamline operations, enhance user experience, and implement innovative technology solutions—strategically crafted to align with your business goals and meet the unique demands of your digital products.",
        featuredHeading: "Our Software Stands Out",
        featuredPoints: [
          "Adaptable",
          "Custom",
          "Compatible",
          "Scalable",
          "User-Friendly",
          "Secure",
        ],
        featuredDescription:
          "Our custom software is tailored to your business goals, offering more flexibility than off-the-shelf solutions. Built for scalability, it grows with your needs while integrating smoothly with your existing systems for minimal disruption and maximum efficiency.",
        sectionImage:
          "/assets/Services/hire-proxy-developers/about-proxy-dev.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our Software Development Service",
        description:
          "Strategic software development tailored to your business objectives. We begin with in-depth system analysis and competitor benchmarking to uncover opportunities for innovation. Our team builds development roadmaps that address immediate technical needs while planning for scalable, future-ready solutions. Each product is crafted with user-centric design, seamless integration, and performance in mind—ensuring your software is as functional as it is forward-thinking.",
        featuredPoints: [
          "Custom-Fit Software",
          "Scalable roadmaps",
          "Easy system integration",
          "Smart tech insights",
          "Clean, bold UI/UX",
          "Growth-ready backend",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready Software",
        description:
          "We craft intelligent, scalable software tailored to your unique business goals—no generic templates, just smart, purpose-built solutions. Our software evolves with your needs, adapting effortlessly as your operations grow. Designed for performance, flexibility, and long-term value, it supports continuous innovation. We ensure every line of code adds clarity, capability, and impact.",
        sectionImage:
          "/assets/Services/hire-proxy-developers/proxy-dev-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in Digital Success",
        description:
          "Our software development services go beyond writing code—we deliver innovative, user-focused, and scalable digital solutions tailored to your business objectives. Backed by a team of skilled developers and strategists, we focus on precision, performance, and long-term value. Whether you’re building from scratch or modernizing legacy systems, we help your business thrive in the digital landscape.",
        iconBox: [
          {
            id: 1,
            title: "Tailored Development Strategies",
            description:
              "Custom software planning aligned with your business goals, user needs, and technical requirements.",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Data-Driven Development",
            description:
              "Real-time analytics, user behavior tracking, and performance metrics guide ongoing improvements and feature planning.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End Development Solutions",
            description:
              "From concept and design to development, testing, deployment, and maintenance—we manage the full software lifecycle.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Transparent Progress & Reporting",
            description:
              "Clear communication, milestone updates, and detailed technical reports keep you informed throughout the development process.",
            icon: <AiFillCode />,
          },
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
    },
  ],
};

export default serviceData;
