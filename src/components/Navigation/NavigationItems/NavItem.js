import React from 'react';
import NavList from './NavList/NavList'
import classes from './NavItem.css';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';



const NavItem = (props)=>(

    <ul className={classes.NavItem} > 
    <NavList close={props.close} link="/"> Daily Cat Feed </NavList>
      <NavList close={props.close} link="/morefacts"> More Facts </NavList>
      <NavList close={props.close} link="/breeds" > Cat Breads </NavList>
    </ul>

);

export default NavItem;
  