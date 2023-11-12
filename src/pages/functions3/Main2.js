import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import photo from './images/kreslo.png';
import './Style4.css';

function Myfunc(){
    return(
        <Container>
            <Row>
                <Col>
                    <img src={photo} className='img-fluid'/>
                </Col>
            </Row>
        </Container>
    )
}

export default Myfunc;