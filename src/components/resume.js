import React from "react";
import { Col, Row } from "react-bootstrap";
import MyMilestone from "./my-milestone";

export default function Resume() {
  const resumeList = [
    {
      date: "2014-2015",
      position: "High-school student",
      workplace: "Nguyen Thuong Hien high-school",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia" +
        "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      date: "2014-2015",
      position: "High-school student",
      workplace: "Nguyen Thuong Hien high-school",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia" +
        "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      date: "2014-2015",
      position: "High-school student",
      workplace: "Nguyen Thuong Hien high-school",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia" +
        "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      date: "2014-2015",
      position: "High-school student",
      workplace: "Nguyen Thuong Hien high-school",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia" +
        "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      date: "2014-2015",
      position: "High-school student",
      workplace: "Nguyen Thuong Hien high-school",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia" +
        "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
  ];
  return (
    <section>
      <Row>
        {resumeList.map((i) => (
          <Col md={6}>
            <MyMilestone {...i} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
