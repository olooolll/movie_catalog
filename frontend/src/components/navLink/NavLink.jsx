import React from 'react'
import {Link} from "react-router-dom";

export default function NavLink(props) {
    return(
        <nav>
            {props.pages.map((page, i) => (
                    <Link to={page.path} key={i}>
                        <button>{page.label}</button>
                    </Link>
                ))}
        </nav>
    )
}