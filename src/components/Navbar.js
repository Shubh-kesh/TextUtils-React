// rfc react function based component
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) { 
  return (
    //backtick used for template literal
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} navbar-${props.redMode} bg-${props.mode} bg-${props.redMode}`}> 
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.aboutText}</Link>
                </li>
                </ul>
                <div className="d-flex">
                    {/* we can't call function on onClick therefore using arrow functio */}
                <div className="bg-primary rounded mx-2"     onClick={()=>{props.toggleMode("primary")}} style={{height:"30px", width:'30px', border:'1px solid red'}}></div>
                    <div className="bg-danger rounded mx-2"  onClick={()=>{props.toggleMode("danger")}}style={{height:"30px", width:'30px', border:'1px solid red'}}></div>
                    <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode("warning")}}style={{height:"30px", width:'30px', border:'1px solid red'}}></div>
                    <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode("success")}}style={{height:"30px", width:'30px', border:'1px solid red'}}></div>
                    <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode("dark")}}style={{height:"30px", width:'30px', border:'1px solid red'}}></div>
                    <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode("light")}}style={{height:"30px", width:'30px', border:'1px solid red'}}></div>
                    
                </div>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>
                </form>
                {/* <div className={`form-check form-switch text-${props.mode ==='dark'?'white':'black'}`}>
                    <input type="checkbox" onClick={()=>{props.toggleMode("null")}} className="form-check-input" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='dark'?'Light':'Dark'} Mode</label>
                </div>
                <div className={`form-check form-switch text-${props.redMode ==='dark'?'white':'black'}`}>
                    <input type="checkbox" onClick={props.toggleRed} className="form-check-input" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.redMode==='dark'?'Light':'Red'} Mode</label>
                </div> */}
                
            </div>
        </div>
    </nav>
  )
}

// prop validation (isRequired- title will be mandatory)
Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
}

//will use default if no props passed in the Navbar component
Navbar.defaultProps = {
    title:"Set Title here",
    aboutText:"About",
};


