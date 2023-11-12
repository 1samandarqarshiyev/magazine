import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Style6.css';
import photo from './images/sms.png';
import Input from './Input';

function App(){
    return(
        <div className='item_1'>
        <Container>
            <Row className='items_2'>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <p className='item_2_x'>Получайте бонусы и подарки</p>
                    <p>Каждый месяц разыгрываем 10 000 рублей для наших клиентов</p>
                    <Input/>
                </Col>
                <Col className='image_sms' xl={6} lg={6} md={12} sm={12} xs={12}> <img className='img-fluid' src={photo}/> </Col>
            </Row>
        </Container>
        </div>
    )
}

export default App;