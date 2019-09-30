import React from 'react';
import classes from './Hambugger.css';


const Hamburgger = (props)=>{
    return (
<div className={props.menu === "J0sD2P53-6Phuj5R_reRh" ? classes.Humbugger : classes.Humbuggerwhite } onClick={props.clicked}>
        <span></span>
        <span></span>
        <span></span>
    </div>
)}

export default Hamburgger;