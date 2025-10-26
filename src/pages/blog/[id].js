import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Container, Row, Col } from "react-bootstrap";
import { FaCalendarAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import blogData from "@/utils/json/blogData";
import BlogsPreview from "@/components/BlogsPreview";

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;

  const blogIndex = blogData.findIndex((a) => a.slug === id);
  const blog = blogData[blogIndex];

  if (!blog) {
    return (
      <Container className="py-5 text-center">
        <p className="text-muted">Loading blogs...</p>
      </Container>
    );
  }

  const prevBlog = blogIndex > 0 ? blogData[blogIndex - 1] : null;
  const nextBlog =
    blogIndex < blogData.length - 1 ? blogData[blogIndex + 1] : null;

  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}blog/`;
  const canonicalUrl = `${baseUrl}${blog.slug}`;

  return (
    <>
      <Head>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.keywords.join(", ")} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={blog.metaTitle} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:image" content={blog.featuredImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.metaTitle} />
        <meta name="twitter:description" content={blog.metaDescription} />
        <meta name="twitter:image" content={blog.featuredImage} />
      </Head>
      <div
        className="banner d-flex align-items-center text-white"
        style={{
          backgroundImage: `url(${blog.bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "450px",
        }}
      >
        <Container>
          <span>Blog & News</span>
          <h1 className="fw-bold">{blog.title}</h1>
          <ul className="breadcrumb d-flex align-items-center gap-2">
            <li>
              <Link href="/" title="Home">
                Home
              </Link>
            </li>
            <li>{"/"}</li>
            <li>
              <Link href="/blog" title="Blog">
                Blog
              </Link>
            </li>
            <li>{"/"}</li>
            <li>{blog.title}</li>
          </ul>
        </Container>
      </div>
      <section>
        <Container>
          <Row>
            <Col>
              <h2>{blog.title}</h2>
              <p>
                <FaCalendarAlt /> {blog.date} By MakersOfCode
              </p>
              <div>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {blog.blog}
                </ReactMarkdown>
              </div>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6} md={6} sm={6} xs={6} className="mb-3 text-start">
              {prevBlog && (
                <Link href={`/blog/${prevBlog.slug}`}>
                  <FaArrowLeft /> Previous Blog
                </Link>
              )}
            </Col>
            <Col xl={6} lg={6} md={6} sm={6} xs={6} className="mb-3 text-end">
              {nextBlog && (
                <Link href={`/blog/${nextBlog.slug}`}>
                  Next Blog <FaArrowRight />
                </Link>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <span>Read Latest</span>
              <h2>Read More News & Blogs</h2>
              <hr />
            </Col>
          </Row>
          <BlogsPreview />
        </Container>
      </section>
    </>
  );
}
