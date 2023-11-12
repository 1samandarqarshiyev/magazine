import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Style9.css';

function Myfunc(){
    return(
        <Container className='blocks_2'>
            <Row>
                <Col className='blocks_3' xl={12} lg={12} md={12} sm={12} xs={12}>
                    <h4>Популярные категории</h4>
                    <hr/>
                    <Button variant="link">Насадки</Button> <br/>
                    <Button variant="link">Инструменты</Button> <br/>
                    <Button variant="link">Гель-лаки</Button> <br/>
                    <Button variant="link">Дизайн</Button> <br/>
                    <Button variant="link">Наращивание</Button> <br/>
                    <Button variant="link">Оборудование</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Myfunc;