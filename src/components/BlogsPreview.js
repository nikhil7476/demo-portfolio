import blogData from "@/utils/blogData";
import Link from "next/link";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

function BlogsPreview() {
  const latestBlogs = blogData.slice(-4).reverse();

  return (
    <>
      <Row className="d-flex flex-wrap justify-content-between">
        {latestBlogs.map((blog) => (
          <Col
            key={blog.id}
            xl={3}
            lg={3}
            md={6}
            sm={12}
            xs={12}
            className="mb-3"
          >
            <Link href={`/blog/${blog.slug}`} title={blog.title}>
              <div>
                <Image
                  src={blog.featuredImage}
                  alt={blog.title}
                  title={blog.title}
                  width={350}
                  height={350}
                  className="img-fluid rounded"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="m-2">{blog.title}</div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default BlogsPreview;
