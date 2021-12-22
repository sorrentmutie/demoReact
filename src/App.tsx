import React from 'react';
import { Empty }from './Empty';
import './App.css';

const  App = () =>  {
  const products: number = 10;


  // const renderEmpty = () => {
  //   return <h3>Carrello vuoto</h3>
  // }

  const renderProducts = () => {
    return <h3>{products} prodotti</h3>
  }

  const renderMessage = () => {
    return products === 0 ? <Empty/> : <Products value={products} data="123"/>;
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

interface ProductsProps {
  value: number,
  data: string
}
export const Products = (props: ProductsProps) =>  <h3>{props.value} {props.data }prodotti</h3>

export default App;
