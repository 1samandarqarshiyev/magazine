import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Outlet, Link} from 'react-router-dom';
import './Style.css';

export default function Myfunc(){
    return(
        <>
        <Container fluid className='knopka_1'>
            <Row>
                <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>

                <Col className='knopka_2' xl={2} lg={2} md={4} sm={4} xs={6}> <Link className='knopka_3' to='delivery'>Доставка</Link> </Col>
                <Col className='knopka_2' xl={2} lg={2} md={4} sm={4} xs={6}> <Link className='knopka_3' to='payment'>Оплата</Link> </Col>
                <Col className='knopka_2' xl={2} lg={2} md={4} sm={4} xs={6}> <Link className='knopka_3' to='reviews'>Отзывы</Link> </Col>
                <Col className='knopka_2' xl={2} lg={2} md={6} sm={6} xs={6}> <Link className='knopka_3' to='questionanswer'>Вопрос - ответ</Link> </Col>
                <Col className='knopka_2' xl={2} lg={2} md={6} sm={6} xs={12}> <Link className='knopka_3' to='contacts'>Контакты</Link> </Col>
                
                <Col xl={1} lg={1} md={0} sm={0} xs={0}></Col>
            </Row>
        </Container>

        <Outlet/>
        </>
    )
}