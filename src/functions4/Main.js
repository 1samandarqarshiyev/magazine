import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Style5.css';
//
import photo from './images/minikreslo.png';
import Link from './Link';
import Button from './Button';

function Myfunc(){
    return(
        <Container className='kreslo'>
            <Row>
                <Col className='block2' xl={12} lg={12} md={12} sm={12} xs={12}> <img className='img-fluid' src={photo}/> </Col>
                <Col className='block2' xl={12} lg={12} md={12} sm={12} xs={12}> <p>Парикмахерское кресло «Норм» гидравлическое</p> </Col>
                <Col className='block2' xl={12} lg={12} md={12} sm={12} xs={12}> <Link/> </Col>
                <Col className='block2' xl={12} lg={12} md={12} sm={12} xs={12}> <Button/> </Col>
            </Row>
        </Container>
    )
}

export default Myfunc;