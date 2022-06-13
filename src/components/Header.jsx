import React from 'react';

export default function Header(props) {
    return (
    <header className="row block center header">
            <div className="logo">WS</div>
        <div>
            <a href="#/">
                <h1>Your webstore</h1>
            </a>
        </div>
        <div>
            <a href="#/signin"> SignIn</a>

        </div>
    </header>
    )
}