// utils/bannerData.js
const bannerData = {
  home: [
    {
      id: "1",
      subHeading: "Transforming",
      heading: "Ideas into Impact: Software Solutions for Every Stage",
      description:
        "We’re not just coders; we’re your strategic partners. Together, we’ll understand your goals, analyze your needs, and create custom software solutions that elevate your business and drive results.",
      bgImage: "/assets/Home/banner-slide-1.webp",
      ctaText: "Contact Us",
      ctaLink: "/contact-us",
    },
    {
      id: "2",
      subHeading: "Results-Driven AI Development",
      heading: "Shape the Future with Confidence",
      description:
        "In a world driven by digital transformation, we equip you to lead—with AI-powered, secure, and scalable software solutions tailored to your industry. Stay ahead of the curve with innovation that delivers measurable impact and lasting value.",
      bgImage: "/assets/Home/banner-slide-2.webp",
      ctaText: "Contact Us",
      ctaLink: "/contact-us",
    },
    {
      id: "3",
      subHeading: "Results-Focused",
      heading: "Digital Marketing Company",
      description:
        "We specialize in crafting and executing effective digital marketing strategies that drive measurable results and help businesses achieve their goals.",
      bgImage: "/assets/Home/banner-slide-3.webp",
      ctaText: "Contact Us",
      ctaLink: "/contact-us",
    },
  ],
  about: {
    subHeading: "About Us",
    heading: "Empowering Businesses Through Smart Digital Solutions",
    bgImage: "/assets/About/about-us-banner.webp",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
    ],
  },
  services: {
    main: [
      {
        subHeading: "What We Do",
        heading: "Crafting Digital Experiences",
        bgImage: "/assets/Services/service-banner.webp",
        breadcrumb: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/our-services" },
        ],
      },
    ],
    "software-development": {
      subHeading: "What I Do",
      heading: "Crafting Digital Experiences",
      bgImage:
        "/assets/Services/software-development/software-development-banner.webp",
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/our-services" },
        { label: "Software Development", href: "/software-development" },
      ],
    },
  },
  portfolio: {
    subHeading: "My Work",
    heading: "Showcasing Creativity & Impact",
    bgImage: "/assets/portfolio/portfolio-banner.jpg",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Portfolio", href: "/our-portfolio" },
    ],
  },
  products: {
    subHeading: "Tech Stack",
    heading: "Powering Ideas with Innovation",
    bgImage: "/assets/products/products-banner.jpg",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
    ],
  },
  blogs: {
    subHeading: "Blog & News",
    heading: "Insights That Inspire: Explore Our Latest Articles",
    bgImage: "/assets/Blog/blog-banner.webp",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
    ],
  },
  contact: {
    subHeading: "Contact Us",
    heading: "Get in Touch with Us for Expert Solutions & Personalized Support",
    bgImage: "/assets/Contact/contact-banner.webp",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
};

export default bannerData;
