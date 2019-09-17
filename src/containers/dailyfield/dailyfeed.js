import React from 'react';
import classes from './dailyfeed.css'
import Feed from '../../components/feed/feed'



const DailyFeed = (props) => {

    return(
        <React.Fragment>
        <div className={classes.Body}>
            <p className={classes.facts}>Gets Dialy Facts About Cats. 
                Even if you don’t have a cat this facts would interest you to know!</p>
        <Feed />
        </div>
        </React.Fragment>
    )
};

export default DailyFeed;