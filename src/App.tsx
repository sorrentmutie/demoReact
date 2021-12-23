import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Menu, MenuItem } from './components/Menu';
import './App.css';
import { HomePage } from './pages/Home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/About/AboutPage';
import { FeaturesPage } from './pages/Features/FeaturesPage';
import { PricingPage } from './pages/Pricing/PricingPage';

const  App = () =>  {
  const [items, setItems] = useState<MenuItem[]>([]);
  useEffect( () => {
    Axios.get<MenuItem[]>('http://localhost:4001/menuitems')
    .then( response => setItems(response.data))
  }, []);  
  const navigate = (url: string) => window.location.href = url;
  return (
    <>

      <Menu items={items} onItemClicked={navigate}></Menu>
      <header className="App-header">
        <h2>Benvenuti al corso React</h2>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/features" element={<FeaturesPage/>}/> 
          <Route path="/pricing" element={<PricingPage/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}




export default App;
