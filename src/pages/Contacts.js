import { Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Style.css';

function FormFloatingTextareaExample() {
  return (
    <>
    <Container className='coments'>

    <FloatingLabel controlId="floatingTextarea" label="Комментарии" className="mb-3" >
        <Form.Control as="textarea" placeholder="Оставьте комментарий здесь" />
    </FloatingLabel>

    <FloatingLabel controlId="floatingTextarea2" label="Комментарии">
        <Form.Control as="textarea" placeholder="Оставьте комментарий здесь" style={{ height: '100px' }} />
    </FloatingLabel>  

    </Container>
    </>
  );
}

export default FormFloatingTextareaExample;