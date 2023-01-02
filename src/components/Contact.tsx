import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { contactImg } from '../assets/img';

interface IFormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const formInitialDetails: IFormDetails = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

const Contact = () => {
  const [formDetails, setFormDetails] = useState<IFormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState<string>('Enviar');
  const [status, setStatus] = useState<any>({});

  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText('Enviando...');
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json;charset=utf-8',
      },
      body: JSON.stringify(formDetails),
    });

    let result = await response.json();
    setButtonText('Enviar');
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Mensaje enviado satisfactoriamente' });
    } else {
      setStatus({ success: false, message: 'Algo ha salido mal, por favor inténtelo nuevamente más tarde' });
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Primer Nombre"
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Apellido"
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Teléfono"
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    placeholder="Mensaje"
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
