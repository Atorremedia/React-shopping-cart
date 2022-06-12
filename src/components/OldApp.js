import './App.css';

import Search from './components/Search';
import ListOfProducts from './components/List';
import Cart from './components/Cart';
import data from './data'


import { useEffect, useState } from 'react';

function App() {
  const {products} = data;
  // const [response, setResponse] = useState({});
  const [cartItems, setCartItems] = useState([]);
  // useEffect(()=>{
  //   fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then(res=>{
  //             setResponse(res);
  //             console.log('response: ' +response);
  //             setNumber(response.length)
  //           })
  //           .catch(err=>{
  //             if ( err.length !== 0 ){console.log(err)}
  //           })
  // },[]);
  
   const onAdd =(product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  console.log(products)
  return (
    <div  className="container">

        <header className="header">
          <img className="header__logo" src="url(./img/)" alt="Your Webstore logo"/>
          <p className="header__text">
          Your Webstore
          </p>
          <div className="header__shopicon">
          <span className="material-symbols-outlined">shopping_cart</span>
            <div className="header__shopicon__number">
              0
            </div>
          </div>
        </header>
        <main className="main">
          <div className="main__list">
            <div className="main__list__search">
              <Search/>
            </div>
            <div className="main__list__productlistbox">
              <ListOfProducts props={products} onAdd={onAdd}/>
            </div>
          </div>
          <div className="side">
            <Cart cartItems={cartItems} />
          </div>
        </main>
    </div>
  );
}

export default App;
