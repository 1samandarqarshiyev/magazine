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

    </>
  )
}

export default App;
