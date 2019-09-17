import React, { useEffect } from 'react';
import { Route, Switch,withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from '../components/layout/layout.css';
import Layout from '../components/layout/layout'
import Footer from '../components/footer/footer';
import asyncComponent from '../services/asyncComponent/asyncComponent';
import DailyFeed from '../containers/dailyfield/dailyfeed'


// const DailyFeed = asyncComponent( () => {
//   return import('../containers/dailyfeed');
// });

const App = props => {
  
   return (
     <React.Fragment>
      <Layout>
        
      <Switch>
      <Route path="/" exact component = {DailyFeed} />
      </Switch>
      </Layout>
      <Footer />
      </React.Fragment>
    );
  
}



export default App;
