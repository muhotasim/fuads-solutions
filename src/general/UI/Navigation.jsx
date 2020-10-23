import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Navigation = props => {
  return (<>
    <nav id="top-nav-bar" className="navbar navbar-expand-sm navbar-dark" style={{ borderBottom: "3px solid #04c2c9", backgroundColor: "#1b242f" }}>
      <ul className="navbar-nav">
        {props.menus.map((v, i) => {
          return (<li className="nav-item active" key={i}>
            <a rel="noreferrer" style={{ cursor: "pointer" }} onClick={e => {
              e.preventDefault();
              const id = e.target.dataset.id;
              document.getElementById(id).scrollIntoView({ behavior: "smooth", inline: "nearest" });
            }} className="nav-link" data-id={v.link}>{v.label}</a>
          </li>)
        })}
      </ul>
    </nav>
  </>);
}
export default Navigation;