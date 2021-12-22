import React from 'react';
import './App.css';

interface Person {
  name: string,
  surname: string,
  age: number
}


const  App = () =>  {
  const products: number = 10;


  const renderEmpty = () => {
    return <h3>Carrello vuoto</h3>
  }

  const renderProducts = () => {
    return <h3>{products} prodotti</h3>
  }

  const renderMessage = () => {
    return products === 0 ? renderEmpty() : renderProducts();
  } 

  return (
    <>
      <header className="App-header">
        <h2>Benvenuti al corso React</h2>
        <h3>{renderMessage()}</h3>
      </header>
    </>
  );
}

export default App;
