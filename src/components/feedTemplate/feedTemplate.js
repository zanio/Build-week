import React from 'react';
import classes from './feedTemplate.css';




const FeedTemplate  = props =>{

    let text = null;
    if(props.data.length > 0){
        props.data.map(p => {
            text = (<div className={classes.Feed}>
                <p>{p}</p>
            </div>);
        })
    }

return(
    <React.Fragment>
        {text}
    </React.Fragment>
    )
  
}

export default FeedTemplate