import React, { Component, useState } from 'react';
import classes from './feed.css';




const Feed  = props =>{

    const getDayTime = ()=>{
        return Date.getTime()
    }
return(
    <React.Fragment>
        <div className={classes.Feed}>
            <div className={classes.triangle}></div>
            <div className={classes.day}>Day 27th Facts in Sept, 2019</div>
            <p>{props.data ? props.data : props.error}</p>
        </div>
    </React.Fragment>
    )
  
}

export default Feed