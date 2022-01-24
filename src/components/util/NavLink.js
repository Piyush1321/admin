import React from 'react';
import { Link } from 'react-router-dom'

function NavLink(props) {
  return (
    <Link to={props.route} className={props.class}>
        <div>
            <i className={props.icon}></i>
        </div>
        <div>{props.description}</div>
    </Link>
  );
}

export default NavLink;
