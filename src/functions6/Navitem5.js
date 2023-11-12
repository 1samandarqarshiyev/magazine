import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Style7.css';
import Main from './Main';

function App(){
    return(
        <div className='block_1'>
        <Container>
            <Row>
                <Col className='block_2' xl={3} lg={3} md={4} sm={6} xs={12}> <Main/> </Col>
                <Col className='block_2' xl={3} lg={3} md={4} sm={6} xs={12}> <Main/> </Col>
                <Col className='block_2' xl={3} lg={3} md={4} sm={6} xs={12}> <Main/> </Col>
                <Col className='block_2' xl={3} lg={3} md={4} sm={6} xs={12}> <Main/> </Col>
                <Col className='block_2' xl={3} lg={3} md={4} sm={6} xs={12}> <Main/> </Col>
                <Col className='block_2' xl={3} lg={3} md={4} sm={6} xs={12}> <Main/> </Col>
                <Col className='block_2' xl={3} lg={3} md={4} sm={6} xs={12}> <Main/> </Col>
                <Col className='block_2' xl={3} lg={3} md={4} sm={6} xs={12}> <Main/> </Col>
                <Col className='block_2' xl={3} lg={3} md={4} sm={6} xs={12}> <Main/> </Col>
                <Col className='block_2' xl={3} lg={3} md={4} sm={6} xs={12}> <Main/> </Col>
                <Col className='block_2' xl={3} lg={3} md={4} sm={6} xs={12}> <Main/> </Col>
                <Col className='block_2' xl={3} lg={3} md={4} sm={6} xs={12}> <Main/> </Col>
            </Row>
        </Container>
        </div>
    )
}

export default App;