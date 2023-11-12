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









// import logo from './logo.svg';
// import Carousel from 'react-bootstrap/Carousel';


//   const Home = () => {
//       return (
//         <Carousel data-bs-theme="dark">


//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={logo}
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h5>First slide label</h5>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>


//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={logo}
//             alt="Second slide"
//           />
//           <Carousel.Caption>
//             <h5>Second slide label</h5>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>


//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={logo}
//             alt="Third slide"
//           />
//           <Carousel.Caption>
//             <h5>Third slide label</h5>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>


//       </Carousel>
//         );;
//     };
    
//     export default Home;