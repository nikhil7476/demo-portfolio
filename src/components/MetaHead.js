// components/MetaHead.js

import Head from "next/head";
import { useRouter } from "next/router";
import metaData from "@/utils/json/metaData";

const MetaHead = ({ page, subPage }) => {
  const router = useRouter();

  let meta;

  // Step 1: Find the meta object for the page
  const pageMeta = metaData[page];

  if (!pageMeta) {
    // Default fallback meta
    meta = {
      metaTitle: "MakersOfCode | Where Technology Meets Excellence",
      metaDescription:
        "Welcome to MakersOfCode — your partner for modern, scalable, and innovative digital solutions.",
      keywords: [
        "MakersOfCode",
        "web development",
        "software company",
        "Next.js",
        "React",
        "development services",
      ],
      ogImage: "/assets/Header/MOC-logo.png",
    };
  } else {
    // Step 2: Handle array-based pages (home, about, blogs, contact, etc.)
    if (Array.isArray(pageMeta)) {
      meta = pageMeta[0];
    }

    // Step 3: Handle object-based pages (services, portfolio, products)
    else if (typeof pageMeta === "object") {
      if (subPage && pageMeta[subPage]) {
        // Subpage found
        meta = pageMeta[subPage];
      } else if (pageMeta.main && Array.isArray(pageMeta.main)) {
        // Main index page (like /services)
        meta = pageMeta.main[0];
      } else {
        // Directly use the object if no main array exists
        meta = pageMeta;
      }
    }
  }

  const { metaTitle, metaDescription, keywords = [], ogImage } = meta;

  // Step 4: Canonical URL setup
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const canonicalUrl = `${baseUrl}${router.asPath}`;

  return (
    <Head>
      {/* Basic Meta */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
    </Head>
  );
};

export default MetaHead;
