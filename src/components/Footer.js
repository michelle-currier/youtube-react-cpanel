import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";

const Footer = () => (
  <footer>
    <Container fluid className="mt-5">
      <Row className="p-3">
        <Col>
          <Stack>
            <p>Built by m.currier designs</p>
            <p>
              <a href="mcurrierdesigns@gmail.com" target="_blank">
                mcurrierdesigns@gmail.com
              </a>
            </p>
          </Stack>
        </Col>
        <Col>
          <p className="text-end">© Services 2024</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
