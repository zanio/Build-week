import React from 'react';
import classes from './feedTemplate.css';
import Spinner from '../../UI/Spinner/spinner';




const FeedTemplate  = props =>{

    if(props.data.length > 0){
        props.data.map(p => {
            text = (<div className={classes.Feed}>
                <p>{p}</p>
            </div>);
        })
    }

return(
    <React.Fragment>
        {}
    </React.Fragment>
    )
  
}

export default FeedTemplate