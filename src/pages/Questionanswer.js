import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './Style.css';


function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className='info'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Выглядит неплохо!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Выглядит неплохо!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Имя пользователя</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Имя пользователя"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
            Пожалуйста, выберите имя пользователя.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Город</Form.Label>
          <Form.Control type="text" placeholder="Город" required />
          <Form.Control.Feedback type="invalid">
          Укажите действительный город.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Состояние</Form.Label>
          <Form.Control type="text" placeholder="Состояние" required />
          <Form.Control.Feedback type="invalid">
          Укажите допустимое состояние.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Почтовый индекс</Form.Label>
          <Form.Control type="text" placeholder="Почтовый индекс" required />
          <Form.Control.Feedback type="invalid">
          Пожалуйста, предоставьте действительный почтовый индекс.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check required label="Согласен с условиями" feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button className='button_navbar' type="submit">Представить форму</Button>
    </Form>
    </Container>
  );
}

export default FormExample;