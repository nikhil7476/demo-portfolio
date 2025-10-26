import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/json/bannerData";
import blogData from "@/utils/json/blogData";

export default function BlogList() {
  const [search, setSearch] = useState("");

  const filteredBlogs = useMemo(() => {
    return blogData.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const recentBlogs = useMemo(() => {
    return [...blogData]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
  }, []);

  return (
    <>
      <MetaHead page="blogs" />
      <Banner data={bannerData.blogs} />
      <section>
        <Container>
          <Row>
            <Col xl={9} lg={9} md={8} sm={12} xs={12}>
              <Row>
                {filteredBlogs.map((blog) => (
                  <Col
                    key={blog.id}
                    xl={6}
                    lg={6}
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
                      <div className="m-2">
                        <h3>{blog.title}</h3>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xl={3} lg={3} md={4} sm={12} xs={12}>
              <h5>Search Blogs</h5>
              <Form.Control
                type="text"
                placeholder="Search Blogs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-3"
              />
              <h5>Recent Blogs</h5>
              <ul className="mb-3">
                {recentBlogs.map((blog) => (
                  <li key={blog.id} className="mb-2">
                    <Link href={`/blog/${blog.slug}`} title={blog.title}>
                      {blog.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Image
                src="/assets/Blog/blog-contact.webp"
                alt="Contact Us"
                title="Contact Us"
                width={350}
                height={450}
                style={{ width: "100%", height: "auto" }}
                className="img-fluid rounded mb-4"
              />
              <div className="text-center">
                <Link
                  href="/contact-us"
                  title="COntact Us"
                  className="ctaButton"
                >
                  Contact Us <FaArrowRightLong />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
