// components/MetaHead.js

import Head from "next/head";
import { useRouter } from "next/router";
import metaData from "@/utils/json/metaData";

const MetaHead = ({ page, subPage }) => {
  const router = useRouter();

  // Get metadata safely
  let meta = metaData[page];

  if (!meta) {
    // Fallback meta
    meta = {
      metaTitle: "Nikhil Mishra | Full-Stack Developer",
      metaDescription: "Welcome to my portfolio.",
      keywords: ["Nikhil Mishra", "portfolio", "developer"],
      ogImage: "/nikhil-logo.jpeg",
    };
  } else {
    // Handle cases where meta is an array (like home, about, blogs, etc.)
    if (Array.isArray(meta)) {
      meta = meta[0];
    }
    // Handle nested objects (like services)
    else if (subPage && meta[subPage]) {
      meta = meta[subPage];
    }
  }

  const { metaTitle, metaDescription, keywords = [], ogImage } = meta;

  // Base URL
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

      {/* Open Graph (OG) Meta */}
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
