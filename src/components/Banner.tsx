import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { headerImg } from '../assets/img';

const Banner = () => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);

  const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bienvenido a mi Portafolio</span>
            <h1>
              {`Hola soy un `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus error commodi rem corrupti iste
              est consequuntur saepe similique, accusantium ut perspiciatis, quis qui iure praesentium mollitia
              molestiae doloribus facilis quae.
            </p>
            <button onClick={() => console.log('hola')}>
              Conectemos <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
