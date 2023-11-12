import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//
import photo from './images/impuls.png';
import './Style7.css';

function App(){
    return(
        <Container className='block_items'>
            <Row>
                <Col className='block_3' xl={12} lg={12} md={12} sm={12} xs={12}> <img src={photo} className='img-fluid' /> </Col>
            </Row>
        </Container>
    )
}

export default App;