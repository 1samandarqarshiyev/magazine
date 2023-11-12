import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Style2.css';
import photo1 from './images/BEAUTYlogo.png';
import Main2 from './Main2';
import Main3 from './Main3';
import Main4 from './Main4';


export default function Myfunc(){
    return(
        <Container className='knopka1'>
            <Row>
                <Col className='knopka2' xl={3} lg={3} md={4} sm={6} xs={12}> <img className='img-fluid' src={photo1}/> </Col>
                <Col className='knopka2' xl={3} lg={3} md={4} sm={6} xs={12}> <Main2/> </Col>
                <Col className='knopka2' xl={3} lg={3} md={4} sm={6} xs={12}> <Main3/> </Col>
                <Col className='knopka2' xl={3} lg={3} md={4} sm={6} xs={12}> <Main4/> </Col>
            </Row>
        </Container>
    )
}