import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// 
import Qolib from './pages/Layout';
import Dastavka from './pages/Delivery';
import Tulov from './pages/Payment';
import Sharhlar from './pages/Reviews';
import Savoljavob from './pages/Questionanswer';
import Kontakt from './pages/Contacts';
// 
import Facemenu from './functions/Main';
import Facemenu2 from './functions2/Navitem';
import Facemenu3 from './functions3/Navitem2';
import Facemenu4 from './functions4/Navitem3';
import Facemenu5 from './functions5/Navitem4';
import Facemenu6 from './functions6/Navitem5';
import Facemenu7 from './functions7/Navitem6';
import Facemenu8 from './functions8/Navitem7';
import Facemenu9 from './functions9/Navitem8';


function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Qolib/>}>
          <Route path='delivery' element={<Dastavka/>}/>
          <Route path='payment' element={<Tulov/>}/>
          <Route path='reviews' element={<Sharhlar/>}/>
          <Route path='questionanswer' element={<Savoljavob/>}/>
          <Route path='contacts' element={<Kontakt/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    <Facemenu/>
    <Facemenu2/>
    <Facemenu3/>
    <Facemenu4/>
    <Facemenu5/>
    <Facemenu6/>
    <Facemenu7/>
    <Facemenu8/>
    <hr/>
    <Facemenu9/>

    </>
  )
}

export default App;
