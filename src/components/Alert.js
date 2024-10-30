import React from 'react'

export default function Alert(props) {
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  return (
    // height is added to avoid layout shift
    <div style={{height: '50px'}} >
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}</div>}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"> */}
    </div>
    )
}

//if props.alert is null then no further code execute other wise execute this happens because all the JSX will be converted to 
// JavaScript Calls
// since props.alerts was not under sometag therefore it kept under curly bracked