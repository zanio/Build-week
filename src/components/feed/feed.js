import React, { Component, useState } from 'react';
import classes from './feed.css';




const Feed  = props =>{

    const theDayFact = ()=>{
        const date = new Date().toLocaleDateString();
        return `Today's  Facts @ ${date}`
    }
return(
    <React.Fragment>
        <div className={classes.Feed}>
            <div className={classes.triangle}></div>
            <div className={classes.day}>{theDayFact()}</div>
            <p>{props.data ? props.data : props.error}</p>
        </div>
    </React.Fragment>
    )
  
}

export default Feed