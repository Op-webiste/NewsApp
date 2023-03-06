import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${props.clr} fixed-top`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/NewsApp/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/NewsApp/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/NewsApp/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/NewsApp/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/NewsApp/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/NewsApp/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/NewsApp/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/NewsApp/technology">Technology</Link>
              </li>
            </ul>
            <div className={`form-check form-switch ${props.textclr} mx-3`}>
              <input className="form-check-input" onClick={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
