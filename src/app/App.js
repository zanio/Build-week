import React, { useEffect } from 'react';
import { Route, Switch,withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './app.css';

import classes from '../components/layout/layout.css';
import Layout from '../components/layout/layout'
import Footer from '../components/footer/footer';



const App = props => {
  
   return (
     <React.Fragment>
      <Layout>
        gfgfgf
      </Layout>
      <Footer />
      </React.Fragment>
    );
  
}



export default App;
