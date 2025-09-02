import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { allProjects, projectsNav ,finalYearProject,AICVProjects , subcategories} from "./ProjectsData";
import { meta, skills } from "../../content_option";
import outputvideo from "../../assets/photos/VideoV1.mp4";
import Project31 from "../../assets/photos/pll_layout_with_fillers.png";
import Project32 from "../../assets/photos/PLL.drawio (3).png";


const projects = [
  {
    image: Project31,
    title: "Analog Tapeout Design– a Fractional-N PLL with LC-VCO in SKY130",
    category: "Electronics & Telecommunication",
    subcategory: "Electronics Projects",
    Github: "",
  },
  {
    image: Project32,
    title: "PFD-CP Type-II Fractional-N PLL Clock Multiplier in IHP SG13G2",
    category: "Electronics & Telecommunication",
    subcategory: "Electronics Projects",
    Github: "https://github.com/SkillSurf/cmos-pll-ihp-sg13g2.git",
  },
];



export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

const filteredProjects = allProjects.filter((project) => {
  const categoryMatch =
    selectedCategory === "All" || project.category === selectedCategory;

  const subcategoryMatch =
    selectedCategory !== "Electronics & Telecommunication" ||
    selectedSubcategory === "ALL" ||
    project.subcategory === selectedSubcategory;

  return categoryMatch && subcategoryMatch;
});



 const filteredProject2 = finalYearProject.filter((project) => {
  const matchCategory =
    selectedCategory === "All" ||
    project.category?.toLowerCase() === selectedCategory.toLowerCase();

  const matchSubcategory =
    selectedSubcategory === "All" ||
    project.subcategory?.toLowerCase() === selectedSubcategory.toLowerCase();

  return matchCategory && matchSubcategory;
});


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const mediumUsername = "manimohan517";
        const rssUrl = `https://medium.com/feed/@${mediumUsername}`;
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
          rssUrl
        )}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === "ok") {
          setBlogPosts(data.items);
        } else {
          console.error("Failed to fetch blog posts:", data.message);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogs();
  }, []);

  const extractImage = (html) => {
    const match = html?.match(/<img.*?src=["'](.*?)["']/);
    return match ? match[1] : null;
  };

  const latestPosts = blogPosts.slice(0, 3); 

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>


         <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Skills</h3>
            {skills.map((data, i) => (
              <Row key={i} className="mb-3 align-items-start">
                <Col md="3" className="fw-bold">
                  {data.category}
                </Col>
                <Col md="9">
                  <ul className="list-unstyled d-flex flex-wrap gap-1">
                    {data.items.map((item, index) => (
                      <li
                        key={index}
                        className="badge bg-secondary text-light p-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Projects</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Filter Buttons */}
        <Row className="mb-3">
          <Col>
            <div className="d-flex flex-wrap gap-2">
              {projectsNav.map((nav, index) => (
                <Button
                  key={index}
                 variant={selectedCategory === nav.name ? "primary" : "secondary"}
                  onClick={() => setSelectedCategory(nav.name)}
                >
                  {nav.name}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

       {selectedCategory === "Electronics & Telecommunication" && (
          <Row className="mb-3">
            <Col>
              <p className="fw-bold mb-2">Select a Field:</p> {/* Added line */}
              <div className="d-flex flex-wrap gap-2">
                {subcategories.map((sub, index) => (
                  <Button
                    key={index}
                    variant={selectedSubcategory === sub ? "primary" : "secondary"}
                    onClick={() => setSelectedSubcategory(sub)}
                  >
                    {sub}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        )}



        <Row className="mb-4">
          {filteredProject2.map((project, idx) => (
          <Col>
            <Card className="h-100 shadow-sm card-light card-blue-text">
              <div className="ratio ratio-16x9">
                <video
                  src={outputvideo}
                  autoPlay
                  loop
                  controls
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">Multi-Lane Speed Measurement Edge Module with License Plate Recognition</Card.Title>
                <Card.Text className="text-muted text-white">
                  <li>This project aims to develop an edge module suitable for road speed enforcement in Sri Lanka. Existing systems tailored for large highways are not a good fit due to the lack of lane discipline on Sri Lankan roads, and the high quantity of small vehicles such as motorbikes and three-wheelers. </li>
                  <li>We are developing a low-cost speed enforcement module that addresses these concerns, and displays the speed and license plate of vehicles in real-time to provide a visual deterrent against overspeeding.</li>
                  <li>Real-time license plate recognition is achieved by implementing quantized neural networks on an FPGA using Xilinx FINN and Brevitas frameworks. </li>
                  <li>Speed estimation is done using a 77 GHz millimeter-wave radar sensor from Texas Instruments. The speed and license plate data are fused using a data fusion module implemented on the FPGA.</li>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          ))}</Row>

        <Row className="mb-4">
      {projects.map((project, idx) => (
        <Col key={idx}>
          <Card className="h-100 shadow-sm card-light card-blue-text">
            <div className="ratio ratio-16x9">
              <img
                src={project.image}
                autoPlay
                loop
                controls
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                }}
              />
            </div>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                {project.category} - {project.subcategory}
              </Card.Text>
               <Button
                    href={project.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-primary"
                    className="mt-auto"
                  >
                    View Project
                  </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

        {/* Projects Grid styled like cards */}
        <Row xs={1} md={2} lg={3} className="g-4 mb-5">
          {filteredProjects.map((project, idx) => (
            <Col key={idx}>
              <Card className="h-100 shadow-sm card-light card-blue-text">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold text-truncate">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="text-muted mb-2">{project.category}</Card.Text>

                  {project.description && (
          <Card.Text
            className="mb-3 small"
            style={{ whiteSpace: 'pre-line', color: '#fff' }}
          >
            {project.description}
          </Card.Text>
        )}
                  <Button
                    href={project.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-primary"
                    className="mt-auto"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Blog Posts Section */}
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">My Latest Blogs</h3>
            {latestPosts.length === 0 ? (
              <p>Loading blogs...</p>
            ) : (
              <Row xs={1} md={2} lg={3} className="g-3">
                {latestPosts.map((post, idx) => {
                  const imageUrl =
                    post.thumbnail ||
                    extractImage(post.content || post.description || "");

                  return (
                    <Col key={idx}>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        <Card className="h-100 shadow-sm card-light card-blue-text">
                          {imageUrl && (
                            <Card.Img
                              variant="top"
                              src={imageUrl}
                              alt={post.title}
                              style={{
                                height: "180px",
                                objectFit: "cover",
                                borderTopLeftRadius: "0.5rem",
                                borderTopRightRadius: "0.5rem",
                              }}
                            />
                          )}
                          <Card.Body className="d-flex flex-column">
                            <Card.Title className="fw-bold text-truncate">
                              {post.title}
                            </Card.Title>
                            <Card.Text className="mt-auto mb-1">
                              {new Date(post.pubDate).toLocaleDateString()}
                            </Card.Text>
                            <span className="text-muted">medium.com</span>
                          </Card.Body>
                        </Card>
                      </a>
                    </Col>
                  );
                })}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
