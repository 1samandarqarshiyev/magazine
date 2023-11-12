import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Style2.css';

function Myfunc() {
  return (
    <Form>
      <Row>
        <Col className='knopka4'>
            <Form.Control className='knopka5' placeholder="Search"/>
        </Col>
      </Row>
    </Form>
  );
}

export default Myfunc;