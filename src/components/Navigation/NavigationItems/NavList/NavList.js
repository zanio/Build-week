import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { NavLink, NavItem} from 'reactstrap'

import classes from './NavList.css'

const NavList = ({link, children, location, close})=>{
  return (
            <NavItem className={classes.NavList}>
              <NavLink to={link} tag={Link} onClick={close}
              className={link === location.pathname ? classes.active : ''}
              > {children} </NavLink>
            </NavItem>    
)};

export default withRouter(NavList);