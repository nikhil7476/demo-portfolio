// src/utils/json/portfolioData.js

import { FaCheckCircle } from "react-icons/fa";

const portfolioData = {
  portfolioMain: {
    subheading: "Our Portfolio",
    title: "Build your brand",
    description:
      "From the inception of a project to its completion, we employ a comprehensive and holistic approach that ensures all aspects and stages are thoughtfully and thoroughly addressed.",
  },
  myportfolio: [
    {
      id: 1,
      slug: "transport-logistic",
      subtitle: "Transport Logistics",
      title: "Transport Logistics",
      section1: {
        subheading: "About Transport & Logistic Website",
        heading: "Smart Transport & Logistic Solutions",
        description:
          "Our platform adapts to your growth—simplifying shipment management and boosting delivery speed, clarity, and confidence at every stage.",
        featuredPoints: [
          "Built for Growth",
          "Data-Driven Clarity",
          "Workflow Automation",
          "Tailored for You",
        ],
        sectionImage:
          "/assets/Portfolio/transport-logistics/transport-website-featured.webp",
        ctaLink: "https://frightservice.online/",
        ctaText: "Visit Website",
      },
      section2: {
        subheading: "Core Highlights",
        heading: "Intelligent Logistics for Every Stage of Your Supply Chain",
        description:
          "Whether you’re expanding your delivery network, optimizing dispatch, or analyzing performance—our all-in-one logistics solution helps you move smarter, respond faster, and operate more efficiently. It’s the intelligent transport backbone that keeps your operations organized, scalable, and always aligned with your service promise.",
        iconBox: [
          {
            id: 1,
            icon: <FaCheckCircle />,
            title: "Seamless Order Collection",
            description:
              "Bring delivery requests from all your sales channels into one streamlined system.",
          },
          {
            id: 2,
            icon: <FaCheckCircle />,
            title: "Smarter Delivery Timing",
            description:
              "Time every delivery perfectly with built-in tools that align routes to real-world.",
          },
          {
            id: 3,
            icon: <FaCheckCircle />,
            title: "Clean Delivery Records",
            description:
              "Every route, stop, and status—logged, organized, and ready when you need it.",
          },
          {
            id: 4,
            icon: <FaCheckCircle />,
            title: "Effortless Route Planning",
            description:
              "Automatically assign drivers, optimize routes, and keep schedules on track—without the manual mess.",
          },
          {
            id: 5,
            icon: <FaCheckCircle />,
            title: "Team Access, Your Way",
            description:
              "Give dispatchers, drivers, and partners the right level of access no more mix-ups or overreach.",
          },
          {
            id: 6,
            icon: <FaCheckCircle />,
            title: "Instant Operational Insights",
            description:
              "See what’s working and where to improve with live delivery data that actually makes sense.",
          },
        ],
      },
      section3: {
        subheading: "Product Gallery",
        heading: "Reliability That Moves With Every Mile",
        gallery: [
          {
            id: 1,
            image:
              "/assets/Portfolio/transport-logistics/transport-website-gallery-1.webp",
          },
          {
            id: 2,
            image:
              "/assets/Portfolio/transport-logistics/transport-website-gallery-2.webp",
          },
          {
            id: 3,
            image:
              "/assets/Portfolio/transport-logistics/transport-website-gallery-3.webp",
          },
          {
            id: 4,
            image:
              "/assets/Portfolio/transport-logistics/transport-website-gallery-4.webp",
          },
          {
            id: 5,
            image:
              "/assets/Portfolio/transport-logistics/transport-website-gallery-5.webp",
          },
          {
            id: 6,
            image:
              "/assets/Portfolio/transport-logistics/transport-website-gallery-6.webp",
          },
          {
            id: 7,
            image:
              "/assets/Portfolio/transport-logistics/transport-website-gallery-7.webp",
          },
          {
            id: 8,
            image:
              "/assets/Portfolio/transport-logistics/transport-website-gallery-8.webp",
          },
          {
            id: 9,
            image:
              "/assets/Portfolio/transport-logistics/transport-website-gallery-9.webp",
          },
        ],
        ctaLink: "/our-services",
        ctaText: "Discover Our Services",
      },
    },
    {
      id: 2,
      slug: "la-bellea",
      subtitle: "La Bellea",
      title: "La Ballea",
      metaDescription:
        "I create secure and scalable REST APIs with Node.js & MongoDB.",
      section1: {
        subheading: "About La Bellea Makeup",
        heading: "A Beauty Experience That Grows with You",
        description:
          "From beginners to beauty pros, La Bellea fits your style. Whether it’s everyday elegance or bold transformations, we make it easy to shine.",
        featuredPoints: [
          "Personalized Beauty",
          "Makeup Routines",
          "Glow-Up Progress",
          "Fully Custom Looks",
        ],
        sectionImage:
          "/assets/Portfolio/la-bellea/makeup-website-featured.webp",
        ctaLink: "https://labelleamakeup.store/",
        ctaText: "Visit Website",
      },
      section2: {
        subheading: "Core Highlights",
        heading: "Smart Beauty Tools for Every Step of Your Glam Journey",
        description:
          "From discovering your perfect foundation match to tracking your skincare progress, La Bellea gives you everything you need to glow with confidence. Whether you’re building a new look or refining your beauty routine, we keep it simple, personal, and always on point.",
        iconBox: [
          {
            id: 1,
            icon: <FaCheckCircle />,
            title: "Beauty Profile Builder",
            description:
              "Easily create your personal profile with skin tone, preferences, and favorite products — so every recommendation fits you perfectly.",
          },
          {
            id: 2,
            icon: <FaCheckCircle />,
            title: "Look Scheduler",
            description:
              "Plan your glam for every occasion with a visual scheduler — from workdays to weddings, never miss a beat.",
          },
          {
            id: 3,
            icon: <FaCheckCircle />,
            title: "Look History & Logs",
            description:
              "Track your past makeup styles, saved tutorials, and favorite products — always ready when you need a glow-up repeat.",
          },
          {
            id: 4,
            icon: <FaCheckCircle />,
            title: "Routine Planner",
            description:
              "Build your skincare or makeup routine with guided steps, timing, and seasonal suggestions tailored just for you.",
          },
          {
            id: 5,
            icon: <FaCheckCircle />,
            title: "Access for Pros & Enthusiasts",
            description:
              "Whether you're a beauty pro, influencer, or self-care enthusiast — manage your routines, looks, and recommendations all in one place.",
          },
          {
            id: 6,
            icon: <FaCheckCircle />,
            title: "Glow Insights",
            description:
              "See what’s working! Track skin improvements, product effectiveness, and your favorite looks over time.",
          },
        ],
      },
      section3: {
        subheading: "Product Gallery",
        heading: "Flawless Beauty Behind Every Look You Create",
        gallery: [
          {
            id: 1,
            image:
              "/assets/Portfolio/la-bellea/labellea-website-gallery-1.webp",
          },
          {
            id: 2,
            image:
              "/assets/Portfolio/la-bellea/labellea-website-gallery-2.webp",
          },
          {
            id: 3,
            image:
              "/assets/Portfolio/la-bellea/labellea-website-gallery-3.webp",
          },
          {
            id: 4,
            image:
              "/assets/Portfolio/la-bellea/labellea-website-gallery-4.webp",
          },
          {
            id: 5,
            image:
              "/assets/Portfolio/la-bellea/labellea-website-gallery-5.webp",
          },
          {
            id: 6,
            image:
              "/assets/Portfolio/la-bellea/labellea-website-gallery-6.webp",
          },
          {
            id: 7,
            image:
              "/assets/Portfolio/la-bellea/labellea-website-gallery-7.webp",
          },
          {
            id: 8,
            image:
              "/assets/Portfolio/la-bellea/labellea-website-gallery-8.webp",
          },
          {
            id: 9,
            image:
              "/assets/Portfolio/la-bellea/labellea-website-gallery-9.webp",
          },
        ],
        ctaLink: "/our-services",
        ctaText: "Discover Our Services",
      },
    },
    {
      id: 3,
      slug: "restaurant-cuisines",
      subtitle: "Restaurant & Cuisines",
      title: "Restaurant & Cuisines",
      metaDescription: "Cross-platform mobile apps built with React Native.",
      section1: {
        subheading: "Restaurant & Cuisines Website",
        heading: "Where Every Meal Matches Your Mood",
        description:
          "From first-time guests to loyal regulars, our service adapts to your cravings—whether it’s a quick bite or a special occasion, made to match your mood.",
        featuredPoints: [
          "Personalized Menu",
          "Order History",
          "Smart Reservation",
          "Custom Event Menus",
        ],
        sectionImage:
          "/assets/Portfolio/restaurant-and-cuisines/restaurant-website-featured.webp",
        ctaLink: "/contact-us/",
        ctaText: "Contact Us",
      },
      section2: {
        subheading: "Core Highlights",
        heading: "Smart Hospitality Tools for Every Dining Moment",
        description:
          "From discovering new dishes to booking tables and tracking favorites — our platform brings ease, flavor, and personality to your every visit.",
        iconBox: [
          {
            id: 1,
            icon: <FaCheckCircle />,
            title: "Guest Preferences Tracker",
            description:
              "Collect diner preferences from past visits, events, and online orders — all in one place.",
          },
          {
            id: 2,
            icon: <FaCheckCircle />,
            title: "Meal Scheduler",
            description:
              "Let guests plan meals ahead of time — for special days, diets, or just cravings.",
          },
          {
            id: 3,
            icon: <FaCheckCircle />,
            title: "Order Logs & Favorites",
            description:
              "Keep a detailed record of guest favorites, allergies, and past orders.",
          },
          {
            id: 4,
            icon: <FaCheckCircle />,
            title: "Automated Reservation Reminders",
            description:
              "Send friendly alerts to help guests never miss a reservation.",
          },
          {
            id: 5,
            icon: <FaCheckCircle />,
            title: "Staff & Kitchen Coordination",
            description:
              "Ensure seamless service with roles and permissions for chefs, waitstaff, and hosts.",
          },
          {
            id: 6,
            icon: <FaCheckCircle />,
            title: "Dining Insights",
            description:
              "Understand what guests love — track bestsellers, peak hours, and customer engagement.",
          },
        ],
      },
      section3: {
        subheading: "Product Gallery",
        heading: "Delicious Precision Behind Every Dish You Serve",
        gallery: [
          {
            id: 1,
            image:
              "/assets/Portfolio/restaurant-and-cuisines/restaurant-website-gallery-1.webp",
          },
          {
            id: 2,
            image:
              "/assets/Portfolio/restaurant-and-cuisines/restaurant-website-gallery-2.webp",
          },
          {
            id: 3,
            image:
              "/assets/Portfolio/restaurant-and-cuisines/restaurant-website-gallery-3.webp",
          },
          {
            id: 4,
            image:
              "/assets/Portfolio/restaurant-and-cuisines/restaurant-website-gallery-4.webp",
          },
          {
            id: 5,
            image:
              "/assets/Portfolio/restaurant-and-cuisines/restaurant-website-gallery-5.webp",
          },
          {
            id: 6,
            image:
              "/assets/Portfolio/restaurant-and-cuisines/restaurant-website-gallery-6.webp",
          },
          {
            id: 7,
            image:
              "/assets/Portfolio/restaurant-and-cuisines/restaurant-website-gallery-7.webp",
          },
          {
            id: 8,
            image:
              "/assets/Portfolio/restaurant-and-cuisines/restaurant-website-gallery-8.webp",
          },
          {
            id: 9,
            image:
              "/assets/Portfolio/restaurant-and-cuisines/restaurant-website-gallery-9.webp",
          },
        ],
        ctaLink: "/our-services",
        ctaText: "Discover Our Services",
      },
    },
    {
      id: 4,
      slug: "photography",
      subtitle: "Photography",
      title: "Photography",
      metaDescription: "Cross-platform mobile apps built with React Native.",
      section1: {
        subheading: "About Photography Website",
        heading: "Photography That Evolves With You",
        description:
          "From milestone moments to brand shoots, our photography evolves with you—framing every chapter with clarity, style, and meaning.",
        featuredPoints: [
          "Bespoke Shoot",
          "Style Guidance",
          "Session Packages",
          "Visual Narratives",
        ],
        sectionImage:
          "/assets/Portfolio/photography/photopixel-website-featured.webp",
        ctaLink: "https://photopixel.photography/",
        ctaText: "Visit Website",
      },
      section2: {
        subheading: "Core Highlights",
        heading: "Smart Photography Tools for Every Step of the Journey",
        description:
          "From capturing your vision to delivering your final gallery — our platform keeps the process creative, seamless, and fully personalized.",
        iconBox: [
          {
            id: 1,
            icon: <FaCheckCircle />,
            title: "Client Vision Boards",
            description:
              "Gather inspiration, themes, and visual preferences to shape each shoot with intention.",
          },
          {
            id: 2,
            icon: <FaCheckCircle />,
            title: "Photography Calendar",
            description:
              "Manage bookings, pre-shoot meetings, editing deadlines, and gallery releases.",
          },
          {
            id: 3,
            icon: <FaCheckCircle />,
            title: "Session History & Progress Logs",
            description:
              "Keep track of edits, retouching rounds, feedback, and delivery milestones.",
          },
          {
            id: 4,
            icon: <FaCheckCircle />,
            title: "Automated Shoot Scheduling",
            description:
              "Plan sessions, delivery timelines, and key touchpoints — all in one place.",
          },
          {
            id: 5,
            icon: <FaCheckCircle />,
            title: "Collaborative Access",
            description:
              "Invite team members, stylists, or clients to view, comment, or co-create with custom access.",
          },
          {
            id: 6,
            icon: <FaCheckCircle />,
            title: "Insights & Client Feedback",
            description:
              "Analyze preferences and reactions to refine your creative direction for future sessions.",
          },
        ],
      },
      section3: {
        subheading: "Product Gallery",
        heading: "Every Moment, Captured with Artistic Precision",
        gallery: [
          {
            id: 1,
            image:
              "/assets/Portfolio/photography/photography-website-gallery-1.webp",
          },
          {
            id: 2,
            image:
              "/assets/Portfolio/photography/photography-website-gallery-2.webp",
          },
          {
            id: 3,
            image:
              "/assets/Portfolio/photography/photography-website-gallery-3.webp",
          },
          {
            id: 4,
            image:
              "/assets/Portfolio/photography/photography-website-gallery-4.webp",
          },
          {
            id: 5,
            image:
              "/assets/Portfolio/photography/photography-website-gallery-5.webp",
          },
          {
            id: 6,
            image:
              "/assets/Portfolio/photography/photography-website-gallery-6.webp",
          },
          {
            id: 7,
            image:
              "/assets/Portfolio/photography/photography-website-gallery-7.webp",
          },
          {
            id: 8,
            image:
              "/assets/Portfolio/photography/photography-website-gallery-8.webp",
          },
          {
            id: 9,
            image:
              "/assets/Portfolio/photography/photography-website-gallery-9.webp",
          },
        ],
        ctaLink: "/our-services",
        ctaText: "Discover Our Services",
      },
    },
    {
      id: 5,
      slug: "opal-smiles",
      subtitle: "Opal Smiles",
      title: "Opal Smiles",
      metaDescription: "Cross-platform mobile apps built with React Native.",
      section1: {
        subheading: "About Dental Website",
        heading: "A Dental Experience That Grows with You",
        description:
          "From first visits to lifelong care, Opal Smiles supports every stage of your dental journey—with comfort, expertise, and lasting results.",
        featuredPoints: [
          "Personalized Patients",
          "Smart Appointments",
          "Treatment Tracking",
          "Customized Care Plans",
        ],
        sectionImage:
          "/assets/Portfolio/opal-smiles/dental-website-featured.webp",
        ctaLink: "https://opalsmile.shop/",
        ctaText: "Visit Website",
      },
      section2: {
        subheading: "Core Highlights",
        heading: "Smart Dental Tools for Every Stage of Your Oral Care",
        description:
          "From booking appointments to tracking treatments and maintaining healthy habits — Opal Smiles is built to make your dental care simple, efficient, and personalized.",
        iconBox: [
          {
            id: 1,
            icon: <FaCheckCircle />,
            title: "Easy Appointment Booking",
            description:
              "Schedule checkups, cleanings, or consultations — all in just a few clicks.",
          },
          {
            id: 2,
            icon: <FaCheckCircle />,
            title: "Visit Scheduler",
            description:
              "Plan upcoming visits and get reminders to stay on top of your oral health.",
          },
          {
            id: 3,
            icon: <FaCheckCircle />,
            title: "Treatment Logs & History",
            description:
              "View your past procedures, x-rays, prescriptions, and ongoing treatment plans.",
          },
          {
            id: 4,
            icon: <FaCheckCircle />,
            title: "Treatment Planner",
            description:
              "Follow customized care paths for braces, implants, cleanings, and more.",
          },
          {
            id: 5,
            icon: <FaCheckCircle />,
            title: "Families & Specialists Access",
            description:
              "Let family members or dental professionals manage care under one account.",
          },
          {
            id: 6,
            icon: <FaCheckCircle />,
            title: "Smile Insights",
            description:
              "Track improvements, monitor dental health, and celebrate milestones with confidence.",
          },
        ],
      },
      section3: {
        subheading: "Product Gallery",
        heading: "Excellence Behind Every Smile We Help You Achieve",
        gallery: [
          {
            id: 1,
            image:
              "/assets/Portfolio/opal-smiles/dental-website-gallery-1.webp",
          },
          {
            id: 2,
            image:
              "/assets/Portfolio/opal-smiles/dental-website-gallery-2.webp",
          },
          {
            id: 3,
            image:
              "/assets/Portfolio/opal-smiles/dental-website-gallery-3.webp",
          },
          {
            id: 4,
            image:
              "/assets/Portfolio/opal-smiles/dental-website-gallery-4.webp",
          },
          {
            id: 5,
            image:
              "/assets/Portfolio/opal-smiles/dental-website-gallery-5.webp",
          },
          {
            id: 6,
            image:
              "/assets/Portfolio/opal-smiles/dental-website-gallery-6.webp",
          },
          {
            id: 7,
            image:
              "/assets/Portfolio/opal-smiles/dental-website-gallery-7.webp",
          },
          {
            id: 8,
            image:
              "/assets/Portfolio/opal-smiles/dental-website-gallery-8.webp",
          },
          {
            id: 9,
            image:
              "/assets/Portfolio/opal-smiles/dental-website-gallery-9.webp",
          },
        ],
        ctaLink: "/our-services",
        ctaText: "Discover Our Services",
      },
    },
    {
      id: 6,
      slug: "crms-mobile-app",
      subtitle: "CRMS Mobile App",
      title: "CRMS Mobile App",
      metaDescription: "Cross-platform mobile apps built with React Native.",
      section1: {
        subheading: "About Custom CRMS Mobile App",
        heading: "A CRM That Grows With Your Business",
        description:
          "Whether you’re a solo professional or scaling a growing team, CRMS adapts to your workflow. Manage leads, track communications, and close deals — all from your phone.",
        featuredPoints: [
          "Unified Client Dashboard",
          "Lead & Sales Tracking",
          "Smart Contact Management",
          "Customizable Workflows",
        ],
        sectionImage:
          "/assets/Portfolio/crms-mobile-app/crms-app-featured.webp",
        ctaLink: "/contact-us",
        ctaText: "Contact Us",
      },
      section2: {
        subheading: "Core Highlights",
        heading: "Smart CRM Tools for Every Stage of the Customer Journey",
        description:
          "From capturing leads to closing deals and retaining clients — CRMS Mobile gives you the tools to stay ahead, stay connected, and stay productive wherever you go.",
        iconBox: [
          {
            id: 1,
            icon: <FaCheckCircle />,
            title: "Lead Capture",
            description:
              "Instantly collect new leads from forms, landing pages, or integrations — all in one place.",
          },
          {
            id: 2,
            icon: <FaCheckCircle />,
            title: "Order Scheduler",
            description:
              "Book calls or meetings with clients using a drag-and-drop mobile calendar.",
          },
          {
            id: 3,
            icon: <FaCheckCircle />,
            title: "Activity Logs & History",
            description:
              "Track every message, call, deal update, and workflow for clear visibility.",
          },
          {
            id: 4,
            icon: <FaCheckCircle />,
            title: "Workflow Automation",
            description:
              "Create follow-up sequences, reminders, and auto-responses with minimal effort.",
          },
          {
            id: 5,
            icon: <FaCheckCircle />,
            title: "User Roles & Team Access",
            description:
              "Assign permissions to sales reps, managers, or partners for smooth team collaboration.",
          },
          {
            id: 6,
            icon: <FaCheckCircle />,
            title: "Performance Insights",
            description:
              "Monitor KPIs like conversion rates, response times, and pipeline value in real time.",
          },
        ],
      },
    },
  ],
};

export default portfolioData;
