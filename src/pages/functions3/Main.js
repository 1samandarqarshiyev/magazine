import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Style4.css';
// 
import Button from './Button';

export default function Myfunc(){
    return(
        <Container className='item' fluid>
            <Row>
                <Col className='block' xl={12} lg={12} md={12} sm={12} xs={12}> <h1>Супер кресло</h1> </Col>
                <Col className='block' xl={12} lg={12} md={12} sm={12} xs={12}> <p>Текст акции всегда отражает суть, а не просто болтовню, поэтому внимательнее</p> </Col>
                <Col className='block' xl={12} lg={12} md={12} sm={12} xs={12}> <Button/> </Col>
            </Row>
        </Container>
    )
}