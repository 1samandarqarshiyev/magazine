import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Style6.css';
// 
import Main from './Main';
import Main2 from './Main2';

function App(){
    return(
        <div className='background1'>
            <Container>
                <Row>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}> <Main/> </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}> <Main2/> </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App;