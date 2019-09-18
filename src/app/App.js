import React, { useEffect } from 'react';
import { Route, Switch,withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from '../components/layout/layout.css';
import Layout from '../components/layout/layout'
import Footer from '../components/footer/footer';
import asyncComponent from '../services/asyncComponent/asyncComponent';
import DailyFeed from '../containers/dailyfield/dailyfeed'
import Morefeed from '../containers/morefeeds/morefeeds'



const App = props => {
  
   return (
     <React.Fragment>
      <Layout>
        
      <Switch>
      <Route path="/morefacts"  component = {Morefeed} />
      <Route path="/" exact component = {DailyFeed} />
      </Switch>
      </Layout>
      <Footer />
      </React.Fragment>
    );
  
}



export default App;
