import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Outlet, Link} from 'react-router-dom';
import './Style.css';

export default function Myfunc(){
    return(
        <>
        <Container fluid className='knopka_1'>
            <Row>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"> <Link className='knopka_3' to='delivery'>Доставка</Link> </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"> <Link className='knopka_3' to='payment'>Оплата</Link> </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"> <Link className='knopka_3' to='reviews'>Отзывы</Link> </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"> <Link className='knopka_3' to='questionanswer'>Вопрос - ответ</Link> </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"> <Link className='knopka_3' to='contacts'>Контакты</Link> </a>
                </li>
            </ul>
            </Row>
        </Container>

        <Outlet/>
        </>
    )
}