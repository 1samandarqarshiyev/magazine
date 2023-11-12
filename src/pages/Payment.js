import Carousel from 'react-bootstrap/Carousel';
import photo1 from './images/photo1.jpg';
import photo2 from './images/photo9.jpg';
import photo3 from './images/photo13.jpg';
import photo4 from './images/photo14.jpg';
import photo5 from './images/photo2.jpg';
import './Style.css';


function IndividualIntervalsExample() {
  return (
    <Carousel data-bs-theme="dark">

        <Carousel.Item>
            <img src={photo1} className='img-fluid photo_image'/>
        </Carousel.Item>

        <Carousel.Item>
            <img src={photo2} className='img-fluid photo_image'/>
        </Carousel.Item>

        <Carousel.Item>
            <img src={photo3} className='img-fluid photo_image'/>   
        </Carousel.Item>

        <Carousel.Item>
            <img src={photo4} className='img-fluid photo_image'/>   
        </Carousel.Item>

        <Carousel.Item>
            <img src={photo5} className='img-fluid photo_image'/>   
        </Carousel.Item>

    </Carousel>
  );
}

export default IndividualIntervalsExample;