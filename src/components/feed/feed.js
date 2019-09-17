import React, { Component, useState } from 'react';
import classes from './feed.css';




const DailyFeed  = props =>{

    const getDayTime = ()=>{
        return Date.now()
    }
console.log(getDayTime())
return(
    <React.Fragment>
        <div className={classes.Feed}>
            <div>Day 27th Facts in Sept, 2019</div>
            <p>In relation to their body size, cats have the largest eyes of any mammal</p>
        </div>
    </React.Fragment>
    )
  
}

export default DailyFeed