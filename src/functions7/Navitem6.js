import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Style8.css';
//
import Main from './Main';

function Myfunc(){
    return(
        <div className='backfon'>
        <Container className='text'>
            <Row>
                <Col> <h3>Вы недавно смотрели</h3> </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col xl={3} lg={3} md={6} sm={6} xs={12}> <Main/> </Col>
                <Col xl={3} lg={3} md={6} sm={6} xs={12}> <Main/> </Col>
                <Col xl={3} lg={3} md={6} sm={6} xs={12}> <Main/> </Col>
                <Col xl={3} lg={3} md={6} sm={6} xs={12}> <Main/> </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Myfunc;