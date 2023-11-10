import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Style3.css';



export default function Myfunc(){
    return(
        <>
        <Container fluid>
            <hr/>
        </Container>
        <Container className='knopka1'>
            <Row>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a className="nav-link active knopka1" aria-current="page" href="#">Парикмахерская</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link active knopka1" aria-current="page" href="#">Барбершоп</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link active knopka1" aria-current="page" href="#">Маникюр</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link active knopka1" aria-current="page" href="#">Педикюр</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link active knopka1" aria-current="page" href="#">Массаж</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link active knopka1" aria-current="page" href="#">Мебель</a>
                </li>
            </ul>
            </Row>
        </Container>
        </>
    )
}