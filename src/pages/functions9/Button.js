import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Style10.css';

function Myfunc(){
    return(
        <Container>
            <Row>
                <Col className="blocks_button" xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Button className='blocks_button_2' as="input" type="submit" value="Обратный звонок" />
                </Col>
            </Row>
        </Container>
    )
}

export default Myfunc;