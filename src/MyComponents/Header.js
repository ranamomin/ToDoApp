import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Header(props) {
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to="about" >About</Link>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input
              type="checkbox"
              className="form-check-input"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </nav>
    );
}
Header.defaultProps= {
    title: "Your Title Here",
    searchBar: true
}
Header.prototype = {
    title: PropTypes.string,
    searchBar: PropTypes.bool
}