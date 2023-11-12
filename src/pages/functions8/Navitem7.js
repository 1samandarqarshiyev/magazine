import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Style9.css';
//
import Main from './Main';

function Myfunc(){
    return(
        <Container fluid>
            <Container>
                <Row>
                    <Col className='blocks_1' xl={3} lg={3} md={3} sm={6} xs={12}> <Main/> </Col>
                    <Col className='blocks_1' xl={3} lg={3} md={3} sm={6} xs={12}> <Main/> </Col>
                    <Col className='blocks_1' xl={3} lg={3} md={3} sm={6} xs={12}> <Main/> </Col>
                    <Col className='blocks_1' xl={3} lg={3} md={3} sm={6} xs={12}> <Main/> </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Myfunc;