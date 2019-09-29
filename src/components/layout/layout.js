import React, { Component, useState } from 'react';
import classes from '../../components/layout/layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'



const Layout  = props =>{

const [showSideDrawer, setshowSideDrawer ] = useState(false);
const sideDrawerToggleHandler = ()=>{
    setshowSideDrawer(!showSideDrawer)
}
return(
    <>
    <Toolbar close = {sideDrawerToggleHandler} />
{   showSideDrawer ? <SideDrawer open={showSideDrawer} close={sideDrawerToggleHandler}/>
:null
}    <main className={classes.Layout}>{props.children}</main>
    </>
    )
  
}

export default Layout