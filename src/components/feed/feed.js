import React, { Component, useState } from 'react';
import {Alert} from 'reactstrap'

import classes from './feed.css';




const Feed  = props =>{

    const theDayFact = ()=>{
        const date = new Date().toLocaleDateString();
        return `Today's  Facts @ ${date}`
    }
return(
    <>
        <div className={classes.Feed}>
            <div className={classes.triangle}></div>
            <div className={classes.day}>{theDayFact()}</div>
            <p>{props.data ? props.data : <Alert className="mt-3" color="warning">{props.error}</Alert>}</p>
        </div>
    </>
    )
  
}

export default Feed