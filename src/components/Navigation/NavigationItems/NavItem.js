import React from 'react';
import NavList from './NavList/NavList'
import classes from './NavItem.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import Card from '../../card/card';



const NavItem = (props)=>(

    <ul className={classes.NavItem}> 
    <NavList link="/" exact> Home </NavList>
      <NavList link="/Catbreads" exact> Cat Breads </NavList>
    </ul>

);

export default withRouter(NavItem);
  