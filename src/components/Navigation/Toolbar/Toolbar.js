import React from 'react';
import classes from './Toolbar.css';
import NavItem from '../NavigationItems/NavItem';
import Hamburgger from '../../Hambugger/Hamburgger';
import classe from '../SideDrawer/SideDrawer.css';
import SVG from 'react-inlinesvg';
import logo from '../../../assets/icons/Cat Facts.svg';
import {HandleUrl} from '../../../helper/utility'

const Toolbar = (props)=>{

    let attachedSideDrawer = [classe.SideDrawer, classes.Closed]

     if(props.open){
        attachedSideDrawer = [classe.SideDrawer, classes.Open]
     }

  return(  <header className={classes.Toolbar}>
        <Hamburgger  clicked ={props.close} />
    <div onClick={()=>HandleUrl('/')} className={classes.Logo}>
        <SVG src={logo} />
       </div>
        <nav className={classes.DesktopOnly}>
            <NavItem />
        </nav>
        
    </header>
    )
}

export default Toolbar;