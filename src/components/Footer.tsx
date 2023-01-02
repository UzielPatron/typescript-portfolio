import { Container, Row, Col } from 'react-bootstrap';
import { logo, navIcon1, navIcon2, navIcon3 } from '../assets/img';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Uziel Patron" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">
                <img src={navIcon1} alt="" />
              </a>
              <a href="">
                <img src={navIcon2} alt="" />
              </a>
              <a href="">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>CopyRight 2022. Todos los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
