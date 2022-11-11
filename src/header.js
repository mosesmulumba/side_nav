import React from "react";
import "./index.css";

export default function Header (){
    return(
        <div className="header--top">
            <img src="./cranecloud.jpeg" alt="logo" width="130" height="130" className="img--top" />
            <h2 className="title">Mos nav</h2>
        </div>
    );
}