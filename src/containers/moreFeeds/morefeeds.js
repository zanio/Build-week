import React from 'react';
import classes from './morefeed.css'
import FeedTemplates from '../../components/feedTemplate/feedTemplate'



const Morefeed = (props) => {

    return(
        <React.Fragment>
        <div className={classes.Body}>
            <p className={classes.facts}>Gets Dialy Facts About Cats. 
                Even if you don’t have a cat this facts would interest you to know!</p>
        <FeedTemplates data = {props.feed} />
        </div>
        </React.Fragment>
    )
};

export default Morefeed;