import React from 'react';
import classes from './Backdrop.css'

const Backdrop = (props) => (
    props.open ? <div className={classes.Backdrop} onClick={props.click} ></div> : null
);

export default Backdrop ;