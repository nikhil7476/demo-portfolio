// src/utils/productData.js

import { FaGraduationCap, FaMailBulk } from "react-icons/fa";
import { TbDeviceDesktopDollar } from "react-icons/tb";

const productData = {
  productMain: {
    subheading: "Our Products",
    title: "Customizable Web & App Products",
  },
  myproducts: [
    {
      id: 1,
      slug: "custom-school-erp",
      icon: <FaGraduationCap />,
      subtitle: "School ERP System",
      title: "School ERP System",
      shortDescription:
        "Streamlines students, attendance, timetables, performance, & communication for schools in a unified platform.",
      description:
        "A complete, all-in-one School ERP solution tailored to streamline academic and administrative operations. From student admissions, attendance tracking, timetable scheduling, and performance reports to communication tools — this platform is designed to simplify school management for educators, students, and parents alike. Scalable and customizable, it adapts to institutions of any size.",
      featuredImage:
        "/assets/Products/custom-school-erp/school-erp-featured.webp",
      section1: {
        subheading: "About Custom School ERP System",
        title: "Custom School ERP Tailored to Your Institution",
        description:
          "Our Custom School ERP is a full-stack solution built with Node.js, Next.js, MySQL, and MongoDB. It streamlines core school functions like admissions, student management, fees, transport, exams, and more — all through a responsive, user-friendly interface. Designed for schools of all sizes, it automates daily tasks, improves communication, and centralizes operations. Staff, students, and administrators can manage everything efficiently from one smart, connected platform.",
        sectionImage:
          "/assets/Products/custom-school-erp/school-erp-featured.webp",
        ctaText: "Contact Us",
        ctaLink: "contact-us",
      },
      section2: {
        subheading: "Core Highlights",
        heading: "Powerful Features of Your School’s Journey",
        description:
          "A complete School ERP to simplify operations, automate tasks, manage staff, track performance, and streamline student activities — all in one smart system.",
        iconBox: [
          {
            id: 1,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Master Entry",
            description:
              "Configure classes, subjects, sessions, exams, and other base data.",
          },
          {
            id: 2,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Students",
            description:
              "Manage student profiles, admissions, attendance, & academic records.",
          },
          {
            id: 3,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Fees",
            description:
              "Create structures, collect payments, track dues, and generate receipts.",
          },
          {
            id: 4,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Transport",
            description:
              "Assign routes, manage vehicles, stops, drivers, and transport fees.",
          },
          {
            id: 5,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Exam",
            description:
              "Schedule exams, enter marks, generate results, and report cards.",
          },
          {
            id: 6,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Account",
            description:
              "Track income, expenses, salaries, ledgers, and financial reports.",
          },
          {
            id: 7,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "User Management",
            description:
              "Create users, assign roles, manage access and login security.",
          },
          {
            id: 8,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Stock",
            description:
              "Track inventory, manage items, purchases, issues, and stock reports.",
          },
        ],
        ctaText: "Get A Quote",
        ctaLink: "/contact-us",
      },
      section3: {
        subheading: "Technologies Used",
        title: "Built with Modern Technologies",
        gallery: [
          {
            id: 1,
            image:
              "/assets/Products/custom-school-erp/school-erp-gallery-1.webp",
          },
          {
            id: 2,
            image:
              "/assets/Products/custom-school-erp/school-erp-gallery-2.webp",
          },
          {
            id: 3,
            image:
              "/assets/Products/custom-school-erp/school-erp-gallery-3.webp",
          },
          {
            id: 4,
            image:
              "/assets/Products/custom-school-erp/school-erp-gallery-4.webp",
          },
          {
            id: 5,
            image:
              "/assets/Products/custom-school-erp/school-erp-gallery-5.webp",
          },
          {
            id: 6,
            image:
              "/assets/Products/custom-school-erp/school-erp-gallery-6.webp",
          },
          {
            id: 7,
            image:
              "/assets/Products/custom-school-erp/school-erp-gallery-7.webp",
          },
          {
            id: 8,
            image:
              "/assets/Products/custom-school-erp/school-erp-gallery-8.webp",
          },
          {
            id: 9,
            image:
              "/assets/Products/custom-school-erp/school-erp-gallery-9.webp",
          },
          {
            id: 10,
            image:
              "/assets/Products/custom-school-erp/school-erp-gallery-10.webp",
          },
          {
            id: 11,
            image:
              "/assets/Products/custom-school-erp/school-erp-gallery-11.webp",
          },
          {
            id: 12,
            image:
              "/assets/Products/custom-school-erp/school-erp-gallery-12.webp",
          },
        ],
        ctaText: "Discover Our Services",
        ctaLink: "/our-services",
      },
    },
    {
      id: 2,
      slug: "custom-crms",
      icon: <TbDeviceDesktopDollar />,
      subtitle: "Custom CRMS",
      title: "Custom CRMS",
      shortDescription:
        "Flexible CRM solutions to manage leads, interactions, and workflows tailored to educational or business needs.",
      description:
        "Our Custom CRMS is built to help you manage leads, sales pipelines, and customer interactions with ease. Designed for flexibility, it enables you to automate tasks, track customer journeys, manage support tickets, and generate insights that drive growth. Whether you're in B2B or B2C, this tool can be shaped around your business needs.",
      featuredImage: "/assets/Products/custom-crms/custom-crms-featured.webp",
      section1: {
        subheading: "About CRMS",
        title: "Tailored CRM That Works the Way Your Business Works",
        description:
          "Simplify how you manage leads, clients, and workflows with Custom CRMS — a fully tailored and scalable solution built to fit your business needs. From startups to growing enterprises, our CRM adapts to your process, automates your tasks, and boosts team efficiency.",
        featuredPoints: [
          "Centralized Dashboard",
          "Smart Automation & Reminders",
          "Real-Time Analytics & Reports",
          "Custom Modules & Integrations",
        ],
        sectionImage: "/assets/Products/custom-crms/custom-crms-featured.webp",
        ctaText: "Contact Us",
        ctaLink: "contact-us",
      },
      section2: {
        subheading: "Core Highlights",
        heading:
          "Powerful Features to Streamline Every Step of Your Sales Journey",
        description:
          "Our Custom CRMS is built to simplify, organize, and supercharge your sales and customer relationship processes. From capturing leads to managing communications, automating tasks, and analyzing performance — it’s all designed to help you sell smarter and grow faster.",
        iconBox: [
          {
            id: 1,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Lead Tracking",
            description: "Auto-capture from forms, chat, ads.",
          },
          {
            id: 2,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Sales Pipeline",
            description: "Custom stages, drag-drop movement",
          },
          {
            id: 3,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Communication",
            description: "Log calls, emails, WhatsApp & meetings",
          },
          {
            id: 4,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Task Automation",
            description: "Reminders, triggers, follow-ups",
          },
          {
            id: 5,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Team Access",
            description: "Role-based dashboards",
          },
          {
            id: 6,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Analytics",
            description: "Revenue, deals, win/loss, rep metrics",
          },
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
    },
    {
      id: 3,
      slug: "email-marketing-tool",
      icon: <FaMailBulk />,
      subtitle: "Email Marketing Tool",
      title: "Email Marketing Tool",
      shortDescription:
        "Create, schedule, and track targeted email campaigns for promotions, newsletters, and important announcements.",
      description:
        "Reach your audience effectively with our powerful Email Marketing Tool. It lets you create visually engaging email campaigns, automate follow-ups, track open/click rates, and manage subscriber lists with ease. Designed for both beginners and marketers, it helps boost engagement and drive conversions — all from one intuitive dashboard.",
      featuredImage:
        "/assets/Products/email-marketing-tool/email-marketing-tool-featured.webp",
      section1: {
        subheading: "About Email Marketing Tool",
        title: "An Email Marketing Platform That Adapts to You",
        description:
          "From startups to growing enterprises, our email marketing tool scales effortlessly with your goals. Whether you’re managing a small list or thousands of subscribers, you’ll have the power to run smarter, more impactful campaigns. Built to simplify your workflow, automate the busywork, and bring clarity to your results.",
        featuredPoints: [
          "Campaign Dashboard",
          "Performance Tracking",
          "Fully Customizable",
          "Intelligent Workflows",
        ],
        sectionImage:
          "/assets/Products/email-marketing-tool/email-marketing-tool-featured.webp",
        ctaText: "Contact Us",
        ctaLink: "contact-us",
      },
      section2: {
        subheading: "Core Highlights",
        heading: "Smart Tools to Power Every Stage of Your Email Strategy",
        description:
          "From growing your subscriber list to automating campaigns and tracking results — everything is designed to help you connect better, convert faster, and market smarter. It’s the all-in-one platform that keeps your outreach organized, efficient, and always on-brand.",
        iconBox: [
          {
            id: 1,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Subscriber Capture",
            description:
              "Seamlessly collect leads from forms, landing pages, popups, and third-party tools all in one place",
          },
          {
            id: 2,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Send Scheduler",
            description:
              "Plan and automate emails at the perfect time with an intuitive drag-and-drop scheduler.",
          },
          {
            id: 3,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Message Logs & History",
            description:
              "Keep track of every email, delivery status, bounce, reply, and automation path clean and organized.",
          },
          {
            id: 4,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Campaign Automation",
            description:
              "Set up smart flows for welcome emails, re-engagement, follow-ups, and more.",
          },
          {
            id: 5,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "User & Role Management",
            description:
              "Create separate access for marketers, managers, or clients, each with their own controls & permissions.",
          },
          {
            id: 6,
            icon: "/assets/Products/custom-school-erp/icons/admissions-icon.webp",
            title: "Campaign Insights",
            description:
              "Track opens, clicks, conversions, and engagement metrics in real time to improve performance.",
          },
        ],
        ctaText: "Contact Us",
        ctaLink: "/contact-us",
      },
    },
  ],
};

export default productData;
