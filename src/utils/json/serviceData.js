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
          "Scalable Roadmaps",
          "Easy System Integration",
          "Smart Tech Insights",
          "Clean, Bold UI/UX",
          "Growth-Ready Backend",
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
        heading: "Our Custom Website Development Services",
        description:
          "Our web development services are built to streamline operations, enhance user experience, and implement cutting-edge design and functionality—strategically aligned with your business goals and tailored to the evolving needs of your digital presence.",
        featuredHeading: "Our Websites Stands Out",
        featuredPoints: [
          "Device Compatible",
          "Custom-Built",
          "Adaptable",
          "SEO-Optimized",
          "Fast-Loading",
          "Secure",
        ],
        featuredDescription:
          "Our websites are developed specifically for your needs—offering far more flexibility than template-based designs. Built for performance and scalability, they integrate seamlessly with your business tools and adapt effortlessly as your business evolves.",
        sectionImage:
          "/assets/Services/website-development/about-website-development.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our Web Development Services",
        description:
          "Strategic website development aligned with your business goals. We begin with thorough competitor and UX analysis to identify opportunities and create impactful, future-ready solutions. Every website we build is cleanly designed, fast, and scalable—with the user experience at the core.",
        featuredPoints: [
          "Branded Custom Websites",
          "Fast, Scalable Plans",
          "Smooth Tool Integration",
          "Insight-Driven Analysis",
          "Modern, Clean UI/UX",
          "Scalable Web Systems",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready Websites",
        description:
          "We build intelligent, scalable websites designed to grow with your business—no cookie-cutter templates or shortcuts. Our custom web solutions adapt to shifting goals, user behavior, and emerging tech trends. Built for performance and flexibility, they ensure long-term relevance and lasting impact. Every site we create is tailored to reflect your brand and support your future growth.",
        sectionImage:
          "/assets/Services/website-development/website-development-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in Web Success",
        description:
          "Our web development services go far beyond just coding—we deliver thoughtful, results-driven digital experiences tailored to your business. Backed by skilled designers, developers, and strategists, we focus on design precision, speed, performance, and future growth. Whether starting from scratch or revamping an outdated website, we help your brand stand out online.",
        iconBox: [
          {
            id: 1,
            title: "Tailored Website Development Strategies",
            description:
              "Custom website planning aligned with your business goals, user journeys, and technical requirements.",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Data-Driven Development",
            description:
              "Using analytics, user behavior tracking, and performance metrics, we continuously optimize your website for results.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End Web Solutions",
            description:
              "From planning and UI/UX design to development, testing, and maintenance—we manage the entire web lifecycle.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Transparent Progress & Reporting",
            description:
              "Clear communication, milestone updates, and regular reporting keep you in the loop at every stage.",
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
        heading: "Our Mobile Development Services",
        description:
          "Our Comprehensive Suite of Mobile App Development Services are designed to streamline operations, elevate user experience, and bring innovative features to life—strategically built to align with your business goals and the unique demands of your digital presence.",
        featuredHeading: "Our Mobile Apps Stand Out",
        featuredPoints: [
          "Adaptable",
          "Custom-Built",
          "Intuitive UI/UX",
          "High Performance",
          "Reliable",
          "Secure",
        ],
        featuredDescription:
          "Our custom mobile apps are crafted specifically for offering more flexibility than off-the-shelf solutions. Designed for scalability, they evolve with your growing needs and integrate seamlessly with your existing digital ecosystem—ensuring smooth performance & minimal disruption.",
        sectionImage:
          "/assets/Services/mobile-app-development/about-mobile-app-development.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our Mobile App Development Service",
        description:
          "Strategic mobile app development tailored to your business objectives. We begin with thorough market analysis and competitor benchmarking to uncover innovation opportunities. Our team creates development roadmaps that address immediate app requirements while planning for scalable, future-ready growth. Each app is designed with intuitive UX, seamless backend integration, and high-performance standards—ensuring your mobile solution is both functional and future-proof.",
        featuredPoints: [
          "Goal-Driven Mobile Apps",
          "Scalable Dev Roadmaps",
          "Seamless System Sync",
          "Growth-Focused Analysis",
          "Engaging, Clean UI/UX",
          "Growth-Ready Architecture",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready Mobile Apps",
        description:
          "We craft intelligent, scalable mobile apps aligned with your business goals—no generic templates, only custom-built solutions. Each app is designed to grow with your business and adapt to evolving user needs. We focus on performance, usability, and long-term value. Our solutions ensure seamless functionality and a great user experience across devices. Built for today, ready for tomorrow.",
        sectionImage:
          "/assets/Services/mobile-app-development/mobile-app-development-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in Mobile Success",
        description:
          "Our mobile app development services go beyond just building apps—we deliver innovative, user-centric, and scalable mobile solutions aligned with your business goals. Backed by a team of expert developers, designers, and strategists, we focus on usability, performance, and long-term value. Whether you’re launching a new app or modernizing an existing one, we help your business thrive in the mobile-first world.",
        iconBox: [
          {
            id: 1,
            title: "Tailored App Development Strategies",
            description:
              "Custom mobile app planning aligned with your business objectives, user expectations, and platform requirements.",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Data-Driven App Optimization",
            description:
              "Leverage real-time analytics, user behavior tracking, and performance metrics to continuously improve your app's features and functionality.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End App Development Solutions",
            description:
              "From concept and UI/UX design to development, testing, deployment, and support—we handle the entire mobile app lifecycle.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Transparent Communication & Reporting",
            description:
              "Stay informed at every stage with clear updates, milestone tracking, and detailed progress reports.",
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
        heading: "Our Digital Marketing Services",
        description:
          "A Complete Range of Digital Marketing Services designed to amplify your online presence, engage your target audience, and drive measurable growth—strategically aligned with your business objectives and the evolving dynamics of the digital landscape.",
        featuredHeading: "Our Marketing Makes an Impact",
        featuredPoints: [
          "Strategic",
          "Tailored",
          "Results-Driven",
          "Consistent",
          "Creative",
          "Multi-Channel",
        ],
        featuredDescription:
          "Our digital marketing solutions are customized to meet your unique brand goals, offering more precision and flexibility than generic approaches. Built for scalability, our campaigns grow with your business and integrate seamlessly with your current platforms—ensuring consistent branding, optimized performance, and maximum ROI.",
        sectionImage:
          "/assets/Services/digital-marketing/about-digital-marketing.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our Digital Marketing Service",
        description:
          "Strategic digital marketing crafted around your business goals. We begin with in-depth brand analysis and competitor benchmarking to identify high-impact opportunities. Our team creates data-driven marketing roadmaps that deliver immediate results while building long-term brand equity. Each campaign is designed with your audience in mind—ensuring optimized performance, seamless platform integration, and measurable growth.",
        featuredPoints: [
          "Custom Marketing Plans",
          "Scalable Campaign Paths",
          "Platform/Tool Integration",
          "Growth-Focused analysis",
          "Engaging, Smart Content",
          "ROI-Driven Performance",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready Marketing",
        description:
          "We craft intelligent, scalable marketing strategies tailored to your business goals. Forget one-size-fits-all campaigns—our solutions are data-driven, precise, and built for impact. Each strategy adapts to changing markets and audience behaviors, keeping your brand relevant and competitive. We focus on long-term growth, performance, and measurable results. With flexible, evolving plans, we ensure your marketing stays ahead of the curve.",
        sectionImage:
          "/assets/Services/digital-marketing/digital-marketing-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in Digital Growth",
        description:
          "Our digital marketing services go beyond ads and clicks—we deliver innovative, audience-focused, and results-driven strategies tailored to your business objectives. Backed by a team of skilled marketers, creatives, and analysts, we focus on impact, performance, and long-term brand success. Whether you’re launching a new campaign or optimizing existing efforts, we help your business thrive in the digital world.",
        iconBox: [
          {
            id: 1,
            title: "Tailored Marketing Strategies",
            description:
              "Custom marketing plans aligned with your business goals, audience needs, and market opportunities.",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Transparent Communication & Reporting",
            description:
              "Clear updates, performance dashboards, and in-depth reports keep you informed every step of the way.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End Campaign Management",
            description:
              "From strategy and content creation to execution, optimization, and reporting—we handle the full marketing lifecycle.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Data-Driven Marketing",
            description:
              "Real-time analytics, customer behavior insights, and performance metrics fuel continuous improvement and campaign refinement.",
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
        heading: "Our UI/UX Design Services",
        description:
          "Our UI/UX design services are focused on improving user journeys, simplifying interactions, and enhancing brand perception—strategically aligned with your business objectives and user expectations.",
        featuredHeading: "Our UI/UX Designs Stand Out",
        featuredPoints: [
          "User-Centric",
          "Adaptable",
          "Custom-Built",
          "Visually Engaging",
          "Conversion-Focused",
          "Tested & Refined",
        ],
        featuredDescription:
          "We don’t believe in one-size-fits-all interfaces. Our designs are crafted specifically for your target users and business goals. Built for consistency, scalability, and accessibility, our UI/UX solutions ensure seamless experiences across all screens and platforms.",
        sectionImage: "/assets/Services/ui-ux-design/about-ui-ux-design.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our UI/UX Design Services",
        description:
          "Our design process begins with deep research and analysis to understand your users, competition, and product goals. The result? Intuitive, attractive, and functional interfaces that deliver real impact.",
        featuredPoints: [
          "Custom UI/UX Design",
          "Scalable Design Plans",
          "Prototypes + Testing",
          "Insight-Driven Research",
          "Clean, Smooth Interfaces",
          "Design Systems & Libs",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready Digital Interfaces",
        description:
          "We design smart, scalable interfaces that grow with your product and user needs. Our UX solutions go beyond aesthetics to ensure every interaction feels natural, intuitive, and engaging. Accessibility and usability are at the core of our approach. We focus on creating seamless experiences that drive retention and conversion. With every design decision, we prioritize clarity, consistency, and user satisfaction.",
        sectionImage: "/assets/Services/ui-ux-design/ui-ux-design-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in UI/UX Success",
        description:
          "Our UI/UX design services go beyond visuals—we build meaningful user experiences rooted in strategy, research, and empathy. With a multidisciplinary team of designers, strategists, and researchers, we focus on creating designs that are not only visually impressive but also functional, accessible, and user-driven.",
        iconBox: [
          {
            id: 1,
            title: "Tailored Design Strategies",
            description:
              "Custom software planning aligned with your business goals, user needs, and technical requirements.",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Research-Driven Design",
            description:
              "Custom design approaches aligned with your brand, goals, and audience behavior.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End UI/UX Solutions",
            description:
              "We use user personas, journey mapping, A/B testing, and analytics to guide our design decisions.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Transparent Process & Collaboration",
            description:
              "You stay in the loop with regular feedback sessions, design presentations, and collaborative decision-making.",
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
        heading: "Our E-Commerce Solutions",
        description:
          "Our e-commerce solutions are designed to simplify operations, enhance user engagement, and drive conversions—strategically aligned with your business objectives and the evolving demands of digital commerce.",
        featuredHeading: "Our E-commerce Platforms Stand Out",
        featuredPoints: [
          "Adaptable",
          "Custom-Built",
          "Device Compatible",
          "User-Friendly",
          "Integrated",
          "Secure Checkout",
        ],
        featuredDescription:
          "We don’t believe in cookie-cutter online stores. Our e-commerce websites are tailored to your brand, offering unmatched flexibility and functionality. Built for scalability, our solutions grow with your business and integrate effortlessly with your inventory, payment gateways, CRMs, and third-party tools.",
        sectionImage:
          "/assets/Services/ecoomerce-solutions/about-e-coomerce.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our E-commerce Solutions",
        description:
          "We approach every e-commerce project with a deep understanding of your business, products, and customers. From user behavior insights to competitive benchmarking, we design future-ready platforms that convert.",
        featuredPoints: [
          "Custom E-Com Solutions",
          "Fast, Scalable Launch",
          "Full System Integration",
          "Growth-Focused Insights",
          "Conversion-Led UI/UX",
          "Traffic-Ready Backend",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready E-commerce Platforms",
        description:
          "We develop smart, scalable online stores tailored to your business growth. No templates or shortcuts—just custom, future-ready solutions that adapt to evolving customer needs. Our e-commerce platforms support new sales channels, improve user experience, and strengthen your digital brand. Built for performance and flexibility, they help you stay competitive in a dynamic market.",
        sectionImage:
          "/assets/Services/ecoomerce-solutions/e-coomerce-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in E-commerce Success",
        description:
          "Our e-commerce services go beyond development—we build conversion-focused, customer-first digital shopping experiences. With a skilled team of developers, designers, and digital strategists, we focus on long-term ROI, seamless operations, and brand consistency. Whether launching a new store or re-platforming an existing one, we’re here to power your e-commerce success.",
        iconBox: [
          {
            id: 1,
            title: "Tailored Store Strategies",
            description:
              "Custom planning aligned with your product type, customer behavior, and sales objectives.",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Data-Driven Optimization",
            description:
              "Leverage real-time analytics, conversion tracking, and user flow insights to optimize store performance and customer satisfaction.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End E-commerce Development",
            description:
              "From store design and product catalog setup to payment integration, deployment, and maintenance—we manage the complete lifecycle.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Transparent Progress & Reporting",
            description:
              "We provide clear communication, detailed updates, and regular performance reports so you always know where your store stands.",
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
        heading: "Smart Cyber Security Solutions",
        description:
          "Built with real-world threat intelligence and modern defense strategies, our cybersecurity solutions are aligned with your business goals. We secure your infrastructure, protect critical data, and enable safe digital growth—while adapting to today’s evolving threat landscape.",
        featuredHeading: "Our Cybersecurity Solutions Stand Out",
        featuredPoints: [
          "Detection",
          "Monitoring",
          "Protection",
          "Customization",
          "Scalability",
          "Compliance",
        ],
        featuredDescription:
          "No one-size-fits-all tools here. Our cybersecurity solutions are purpose-built to match your specific challenges. They evolve with your infrastructure, providing proactive defense, intelligent insights, and secure continuity for your operations.",
        sectionImage:
          "/assets/Services/cyber-security-solutions/about-cybersecurity.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section2: {
        subheading: "Core Features",
        heading: "Core Features of Our Cyber Security Solutions",
        description:
          "We begin by understanding your threat landscape, infrastructure, and business priorities. From there, we craft tailored cybersecurity strategies that deliver real protection—blending modern technology with practical implementation.",
        featuredPoints: [
          "Custom Protection",
          "Scalable Defense",
          "Seamless Integration",
          "Threat Analysis",
          "Secure Access",
          "Real-Time Monitoring",
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section3: {
        icon: <AiFillCode />,
        heading: "Future-Ready Cybersecurity Solutions",
        description:
          "We develop intelligent, scalable security systems that evolve with your business. From threat prediction and automated response to risk analytics and continuous monitoring, our solutions are built for long-term protection. Designed to adapt and learn over time, they strengthen your defense posture as threats grow more complex. With future-proof architecture and real-time threat intelligence, we ensure resilience, performance, and security at every layer.",
        sectionImage:
          "/assets/Services/cyber-security-solutions/cybersecurity-future.webp",
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
      section4: {
        subheading: "Success Solutions",
        heading: "Your Partner in Cybersecurity Excellence",
        description:
          "Our cybersecurity solutions go beyond firewalls—we deliver intelligent, responsible, and business-ready protection tailored to your infrastructure. Backed by security analysts, ethical hackers, and compliance experts, we focus on precision, performance, and adaptability. Whether securing your first digital assets or expanding enterprise-wide protection, we’re here to help you stay ahead in an increasingly connected world.",
        iconBox: [
          {
            id: 1,
            title: "Tailored Security Strategies",
            description:
              "Custom protection plans built around your industry, compliance needs, and risk landsc",
            icon: <AiFillCode />,
          },
          {
            id: 2,
            title: "Insight-Driven Protection",
            description:
              "Real-time analytics, threat intelligence, and behavioral analysis power proactive defense and faster response.",
            icon: <AiFillCode />,
          },
          {
            id: 3,
            title: "End-to-End Cyber Defense",
            description:
              "From risk assessment and solution deployment to monitoring and incident response—we cover the full security lifecycle.",
            icon: <AiFillCode />,
          },
          {
            id: 4,
            title: "Transparent Process & Collaboration",
            description:
              "Clear reporting, active communication, and full visibility keep you informed and empowered at every step.",
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
