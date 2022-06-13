import React from 'react';

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0);
    const taxPrice = itemsPrice * 0.21;
    const shippingPrice = itemsPrice > 50 ? 0 : 28;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>
            {cartItems.length === 0 && <div>Cart is Empty</div>}
        </div>
        {cartItems.map((item) => (
                    <div key={item.id} className="row basketproduct">
                        <div className="col-2">{item.name}</div>
                        <div className="col-2 addremove">
                        <button onClick={()=>onRemove(item)} className="remove">-</button>
                        <button onClick={()=>onAdd(item)} className="add">+</button>
                        </div>
                        <div className="col-2 text-right">
                            <span className="quantity">{item.qty} X</span><span className="price"> ${item.price.toFixed(2)}</span>
                        </div>
                    </div>
                ))}
                {cartItems.length !== 0 &&(
                    <>
                        <hr></hr>
                        <div className="row">
                            <div className="col-2">Items Price</div>
                            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Tax Price (21%)</div>
                            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2" title="Over $50 no shipping is charged">Shipping Price</div>
                            <div className="col-1 text-right" title="Over $50 no shipping is charged">${shippingPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2"><strong>Total Price</strong></div>
                            <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
                        </div>
                        <button className="checkout" onClick={()=>alert('This would bring you to a data form and a payment page')}>Check out</button>
                    </>
                )}
    </aside>;
}