import React from 'react';
import classes from './Hambugger.css';


const SidebarCancel =  (props)=>( 
    <span className={classes.cancel} onClick={props.clicked}>
            <span></span>
            <span></span>
        </span>
    );
export default SidebarCancel;