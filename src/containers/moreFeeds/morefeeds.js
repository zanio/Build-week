import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './morefeed.css'
import FeedTemplates from '../../components/feedTemplate/feedTemplate'



const Morefeed = (props) => {

    useEffect(()=>{
        props.onGetDailyFeed();
      },[]);


    return(
        <React.Fragment>
        <div className={classes.Body}>
            <p className={classes.facts}>Gets Dialy Facts About Cats. 
                Even if you don’t have a cat this facts would interest you to know!</p>
        <FeedTemplates data = {props.feed} error = {props.errorMessage}  loading = {props.loadingSpinner}/>
        </div>
        </React.Fragment>
    )
};

const mapStateToProps = state =>{
    return {
        loadingSpinner: state.DailyFeedReducer.loading,
        errorMessage:state.DailyFeedReducer.error,
        posts:state.DailyFeedReducer.data,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetDailyFeed: () => dispatch(actionCreator.FetchDailyFeedAction() ),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Morefeed);

