import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Style10.css';


function Myfunc(){
    return(
        <Container>
            <Row>
                <Col className='button_adress_1' xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Button className='button_adress_2' variant="link">198555, Невский пр. 140, офис 140</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Myfunc;