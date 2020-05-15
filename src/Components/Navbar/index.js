import React from 'react'

const Navbar = () => {
    return (
            <div class="header sticky-top">
                <a href="/" class="logo">
                <img src={require("./../img/logo.png")} alt=""/>
                <h4>CAFFEIN</h4>
                </a>
                <div class="header-right">
                    <a href="/">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
    )
}

export default Navbar