import React from 'react';
import NavList from './NavList/NavList'
import classes from './NavItem.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



const NavItem = (props)=>(

    <ul className={classes.NavItem}> 
    <NavList link="/" exact> Daily Cat Feed </NavList>
      <NavList link="/morefacts" exact> More Facts </NavList>
      <NavList link="/breeds" exact> Cat Breads </NavList>
    </ul>

);

export default withRouter(NavItem);
  