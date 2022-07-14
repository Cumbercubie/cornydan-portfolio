import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ResumeSection from "./components/resume-section";
import TestAnimation from "./components/test-animation";
export default function Home() {
  const info = [
    {
      title: "Name",
      value: "Corny Dan",
    },
    {
      title: "Date of birth:",
      value: "January 01, 1987",
    },
    {
      title: "Address:",
      value: "San Francisco CA 97987 USA",
    },
    {
      title: "Name",
      value: "Corny Dan",
    },
    {
      title: "Name",
      value: "Corny Dan",
    },
  ];
  return (
    <Container className="mt-4">
      <section>
        <Row>
          <Col>
            <img src="https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg" />
          </Col>
          <Col>
            <span className="heading">About Me</span>

            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            {info.map(({ title, value }) => {
              return (
                <Row>
                  <Col xs={3}>
                    <b>{title}</b>
                  </Col>
                  <Col>
                    <span style={{ color: "#999999" }}>{value}</span>
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>
      </section>

      {/* <ResumeSection />
       */}
      <TestAnimation />
    </Container>
  );
}
