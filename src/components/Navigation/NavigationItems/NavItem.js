import React from 'react';
import NavList from './NavList/NavList'
import classes from './NavItem.css';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';



const NavItem = ({close})=>(

    <ul className={classes.NavItem} > 
    <NavList close={close} link="/"> Daily Cat Feed </NavList>
      <NavList close={close} link="/morefacts"> More Facts </NavList>
      <NavList close={close} link="/breeds" > Cat Breads </NavList>
    </ul>

);

export default NavItem;
  