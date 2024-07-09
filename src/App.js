import React from 'react'
import Homepage from './Homepage';
import About from './About';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contactus from './Contactus';
import Blogs from './Blogs';
import Gallery from './Gallery';
import Citybicycle from './Citybicycle';
import Foldingbicycle from './Foldingbicycle';
import Mountainbicycle from './Mountainbicycle';
import Racingbicycle from './Racingbicycle';
import Rangerbicycle from './Rangerbicycle';
import Client from './Client';
import Quote from './Quote';
import Blog1 from './Blog1'
import Blog2 from './Blog2';
import Faq from './Faq';
import AdminLogin from './AdminLogin';
import Dashboard from './Dashboard';
import SignUpPage from './SignupPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Homepage />}/>
          <Route path='/a' exact element={<SignUpPage />}/>
          <Route path='/home' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/bicycles' element={<Gallery />} />
          <Route path='/bicycles/City-Bicycle' element={<Citybicycle />} />
          <Route path='/bicycles/Folding-Bicycle' element={<Foldingbicycle />} />
          <Route path='/bicycles/Mountain-Bicycle' element={<Mountainbicycle />} />
          <Route path='/bicycles/Racing-Bicycle' element={<Racingbicycle />} />
          <Route path='/bicycles/Ranger-Bicycle' element={<Rangerbicycle/>} />
          <Route path='/clients' element={<Client /> } />
          <Route path="/get-a-quote" element={ <Quote /> } />
          <Route path="/Blog1" element={ <Blog1 /> } />
          <Route path="/Blog2" element={ <Blog2 /> } />
          <Route path='/Login' element={ <AdminLogin />} />
          <Route path="/faq" element={ <Faq /> } />
          <Route path='/dashboard' element={<Dashboard />} />
           

          <Route path='*' element={<h1> 404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
