import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './dailyfeed.css';
import Feed from '../../components/feed/feed';
import Spinner from '../../UI/Spinner/spinner'



const DailyFeed = (props) => {

    let content = null;

   const { loadingSpinner, errorMessage, posts } = props
    if(loadingSpinner){
        content = <Spinner/>
    }
    if(errorMessage){
        content = <Feed  error = {props.errorMessage.message}/>
    }
    if(posts){
        content = <Feed  data= {props.posts[0].text}/>
    }
    return(
        <React.Fragment>
        <div className={classes.Body}>
            <p className={classes.facts}>Gets Dialy Facts About Cats.
                Even if you don’t have a cat this facts would interest you to know!</p>
        {content}
 </div>
        </React.Fragment>
    )
};

const mapStateToProps = state =>{
    return {
        loadingSpinner:state.DailyFeedReducer.loading,
        errorMessage:state.DailyFeedReducer.error,
        posts:state.DailyFeedReducer.data,
    }
}


export default connect(mapStateToProps,null)(DailyFeed);