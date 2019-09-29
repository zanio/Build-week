import React from 'react';

import classes from './SideDrawer.css';
// import Logo from '../../Logo/Logo';
import NavItem from '../NavigationItems/NavItem';
import SidebarCancel from '../../Hambugger/times';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import SVG from 'react-inlinesvg';
import logo from '../../../assets/icons/Cat Facts.svg';


const SideDrawer = (props)=>{

    let attachedSideDrawer = [classes.SideDrawer, classes.Closed]

     if(props.open){
        attachedSideDrawer = [classes.SideDrawer, classes.Open]
     }
    
   return( 
     
       <>
           
           <Backdrop content = {true} open = {props.open}>
       <p className={classes.float}><SidebarCancel clicked = {props.close}/></p></Backdrop>
    
   <div className={attachedSideDrawer.join(' ')} >
   
        <div className = {classes.Logo}> 
        <SVG src={logo} />
        </div>
            <nav>
            <NavItem close={props.close}/>
            </nav>
        </div>
        
        </>
);
}
export default SideDrawer;