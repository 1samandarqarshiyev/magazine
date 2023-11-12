import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Style10.css';


function Myfunc(){
    return (
        <Container> 
            <Row>
                <Col className="button_tel" xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Button variant="link" href='tel:+998901156515' className='knopka6'>+998 90-115-65-15</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Myfunc;