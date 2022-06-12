import React from 'react';

export default function Product(props) {
  const {product, onAdd} = props;
    return (
    <div className="product">
        <img className="small" src={product.image} alt={product.title}></img>
        <h3>{product.title}</h3>
        <div>${product.price}</div>
        <div>
            <button onClick={()=>onAdd(product)}>Add To Cart</button>
        </div>
    </div>
  );
}

