import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  educationtimeline,
  worktimeline,
  skills,
} from "../../content_option";

export const About = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Example theme state

  useEffect(() => {
    const themeTimeout = setTimeout(() => setIsDarkTheme(false), 1000);
    return () => clearTimeout(themeTimeout);
  }, []);

  return (
    <HelmetProvider>
      <div className="about-background">
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-2 mt-3 pt-md-1">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          {/* <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col> */}
          <Col lg="15" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec mb-4">Education</h3>
          </Col>
          <Col lg="15">
            <table className="table caption-top">
              <tbody>
                {educationtimeline.map((data, i) => (
                  <tr key={i}>
                    <th scope="row">{data.jobtitle}</th>
                    <td>{data.where}</td>
                    <td>{data.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Experiences</h3>
          </Col>
          <Col lg="20">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => (
                  <tr key={i}>
                    <th scope="row">{data.jobtitle}</th>
                    <td>{data.where}</td>
                    <td>{data.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>

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


      </Container>
       </div>
    </HelmetProvider>
   
  );
};
