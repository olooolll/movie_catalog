import React from 'react'
import {Link} from "react-router-dom";
import './NavLink.css'

export default function NavLink(props) {
    return (
        <nav className="nav-marquee justify-content-center">
            {props.pages.map((page, i) => (
                <Link to={page.path} key={i} className="text-decoration-none">
                    <button className="marquee-btn">
                        <span className="dot-light"></span>
                        {page.label}
                        <span className="dot-light"></span>
                    </button>
                </Link>
            ))}
        </nav>
    );
}