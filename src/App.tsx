import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Empty }from './components/Empty';
import { Products2 }  from './components/Products';
import { Menu, MenuItem } from './components/Menu';
import './App.css';
import { HomePage } from './pages/HomePage';

const  App = () =>  {

  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect( () => {
    console.log("useEffects");
    Axios.get<MenuItem[]>('http://localhost:4001/menuitems')
    .then( response => setItems(response.data))
  }, []);

  const products: number = 10;
  const gender: string = 'M';
  const wrapperClass: string = gender === 'M' ? 
    'App-male' : 'App-female'

  
  
  const navigate = (url: string) => window.open(url);

  const renderMessage = () => {
    return products === 0 ? <Empty/> : <Products2 value={products} />;
  } 

  return (
    <>

      <Menu items={items} onItemClicked={navigate}></Menu>
      <header className="App-header">
        <h2>Benvenuti al corso React</h2>
        <div className="badge bg-primary">Ciao</div>

         <div className={wrapperClass}>
           You are {gender === 'M' ? 'male' : 'female'}
         </div>
        
        
        <div style={ { color: 'red'}}>Prova</div>
        <h3>{renderMessage()}</h3>
      </header>
    </>
  );
}




export default App;
