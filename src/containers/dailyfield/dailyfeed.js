import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './dailyfeed.css';
import Feed from '../../components/feed/feed';
import * as actionCreator from '../../store/actions/index';
import Spinner from '../../UI/Spinner/spinner'



const DailyFeed = (props) => {
    
    useEffect(()=>{
        props.onGetDailyFeed();
        console.log(props)
      },[]);

    let content = null;

    if(props.loadingSpinner){
        content = <Spinner />
    }
    if(props.errorMessage){
        content = <p>{props.errorMessage}</p>
    }
    if(props.posts){
        content = <Feed  data= {props.posts}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(DailyFeed);