import React, { useEffect } from 'react';
import { Route, Switch,withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from '../components/layout/layout.css';
import Layout from '../components/layout/layout'
import Footer from '../components/footer/footer';
import DailyFeed from '../containers/dailyfield/dailyfeed'
import Morefeed from '../containers/moreFeeds/morefeeds'
import Breeds from '../containers/breeds/breed'
import * as actionCreator from '../store/actions/index'



const App = props => {  
  useEffect(()=>{
    props.onDeliverTodayFeed();
  },[]);  
  
  return (
     <React.Fragment>
      <Layout>   
      <Switch>
      <Route path="/breeds"  component = {Breeds} />
      <Route path="/morefacts"  component = {Morefeed} />
      <Route path="/" exact component = {DailyFeed} />
      </Switch>
      </Layout>
      <Footer />
      </React.Fragment>
    );
  
}

const mapStateToProps = state =>{
  return {
    todayFeed:state.DailyFeedReducer.data
  }
}

const mapDispatchToProps = dispatch => {
  return { 
      onDeliverTodayFeed: ()=> dispatch(actionCreator.feedCheckState()),
  };
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(App));
