import React from 'react';
import classes from './Hambugger.css';


const SidebarCancel =  (props)=>( 
    <div className={classes.cancel} onClick={props.clicked}>
            <span></span>
            <span></span>
        </div>
    );
export default SidebarCancel;