import React from 'react';
import { Empty }from './components/Empty';
import { Products2 }  from './components/Products';
import './App.css';

const  App = () =>  {
  const products: number = 10;
  const gender: string = 'M';
  const wrapperClass: string = gender === 'M' ? 
    'App-male' : 'App-female'

  const renderMessage = () => {
    return products === 0 ? <Empty/> : <Products2 value={products} />;
  } 

  return (
    <>
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
