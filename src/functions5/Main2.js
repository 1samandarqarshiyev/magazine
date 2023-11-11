import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Style6.css';
import photo from './images/furgon.png';
import Button from './Button';

function App(){
    return(
        <div className='item_1'>
        <Container>
            <Row className='items_2'>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <p className='item_2_x'>Заходите к нам</p>
                    <p>Более 300 магазинов по всей России</p>
                    <Button/>
                </Col>
                <Col className='image_furgon' xl={6} lg={6} md={12} sm={12} xs={12}> <img className='img-fluid' src={photo}/> </Col>
            </Row>
        </Container>
        </div>
    )
}

export default App;