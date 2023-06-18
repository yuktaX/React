import React from "react";

export default function Navbar() {
    return (
        <nav>
            <img className="nav-logo" src={require(`../images/Logo.png`)} />
            <h2 className="nav-title">Meme Generator</h2>
            <p className="nav-desc">React Course - Project 3</p>
        </nav>
    )
}