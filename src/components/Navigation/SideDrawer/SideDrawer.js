import React from 'react';

import classes from './SideDrawer.css';
// import Logo from '../../Logo/Logo';
import NavItem from '../NavigationItems/NavItem';
import Backdrop from '../../../UI/Backdrop/Backdrop';


const SideDrawer = (props)=>{

    let attachedSideDrawer = [classes.SideDrawer, classes.Closed]

     if(props.open){
        attachedSideDrawer = [classes.SideDrawer, classes.Open]
     }
    
   return( 
     
       <React.Fragment>
           
     <Backdrop open = {props.open} click={props.close}/> 
    
   <div className={attachedSideDrawer.join(' ')} onClick={props.close}>
   
        <div className = {classes.Logo}> 
           <div>Your Logo Goes</div>
        </div>
            <nav>
            <NavItem />
            </nav>
        </div>
        </React.Fragment>
);
}
export default SideDrawer;