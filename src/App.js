import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import { Container, Row, Col, Stack } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <header className="App-header px-3 py-2">
        <h2>
          AUTO DEPLOYMENT TO CPANEL USING GITHUB ACTIONS - YOUTUBE TUTORIAL
        </h2>
      </header>
      <Container fluid>
        <Row className="p-3">
          <Col>
            <img src={logo} className="App-logo" alt="logo" />
          </Col>
          <Col>
            <Stack>
              <h4>GITHUB ACTIONS, REACT JS AND CPANEL AUTO DEPLOYMENT</h4>
              <a
                className="App-link"
                href="https://www.youtube.com/watch?v=x_GZpOGyJpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                link to the TUTORIAL
              </a>
              <a
                href="https://github.com/michelle-currier/youtube-react-cpanel"
                target="_blank"
              >
                https://github.com/michelle-currier/youtube-react-cpanel
              </a>
            </Stack>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
