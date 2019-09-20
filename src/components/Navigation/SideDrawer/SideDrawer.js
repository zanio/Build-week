import React from 'react';

import classes from './SideDrawer.css';
// import Logo from '../../Logo/Logo';
import NavItem from '../NavigationItems/NavItem';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import SVG from 'react-inlinesvg';
import logo from '../../../assets/icons/Cat Facts.svg';


const SideDrawer = (props)=>{

    let attachedSideDrawer = [classes.SideDrawer, classes.Closed]

     if(props.open){
        attachedSideDrawer = [classes.SideDrawer, classes.Open]
     }
    
   return( 
     
       <React.Fragment>
           
           <Backdrop content = {true} open = {props.open} click={props.close}>
       <p className={classes.float}><i className="far fa-times-circle"></i></p></Backdrop>
    
   <div className={attachedSideDrawer.join(' ')} onClick={props.close}>
   
        <div className = {classes.Logo}> 
        <SVG src={logo} />
        </div>
            <nav>
            <NavItem />
            </nav>
        </div>
        
        </React.Fragment>
);
}
export default SideDrawer;