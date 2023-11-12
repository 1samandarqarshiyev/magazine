import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Style10.css';
//
import Mesengers from './Mesengers';
import Adress from './Adress';
import Tel from './Tel';
import Button from './Button';



function Myfunc(){
    return(
        <>
        <Container>
            <Row className='blocks_mesengers'>
                <Col xl={3} lg={3} md={6} sm={12} xs={12}> <Mesengers/> </Col>
                <Col xl={4} lg={4} md={6} sm={12} xs={12}> <Adress/> </Col>
                <Col xl={3} lg={3} md={6} sm={6} xs={12}> <Tel/> </Col>
                <Col xl={2} lg={2} md={6} sm={6} xs={12}> <Button/> </Col>
            </Row>
        </Container>

        <Container fluid className='footer_end'>
            <Row>
                <Col className='footer_text1' xl={8} lg={8} md={8} sm={12} xs={12}> 
                    <p>Лучший магазин (с) 2019 Все права защищены. Интернет-магазин оборудования для салонов красоты</p>
                </Col>
                <Col className='footer_text2' xl={4} lg={4} md={4} sm={12} xs={12}>
                    <p>Политика конфиденциальности</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Myfunc;