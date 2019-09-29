import React from 'react';
import classes from './feedTemplate.css';
import Spinner from '../../UI/Spinner/spinner';
import {UncontrolledAlert } from 'reactstrap'




const FeedTemplate  = ({data, error, loading}) =>{
    let content = null;
    if(data){
       content = data.map(singleFeed=>(
            <div key = {singleFeed._id} className={ classes.Feed }>
                <p>{singleFeed.text}</p>
            </div>))
    }
    if(error){
        content = <UncontrolledAlert className="mt-3"  color="warning">{error.message}</UncontrolledAlert >
    }
    if(loading){
        content = <Spinner />
    }
return(
    <React.Fragment>
        { content }
    </React.Fragment>
    )
  
}

export default FeedTemplate