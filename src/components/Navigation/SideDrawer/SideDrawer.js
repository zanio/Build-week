import React, {useEffect} from 'react';

import classes from './SideDrawer.css';
// import Logo from '../../Logo/Logo';
import NavItem from '../NavigationItems/NavItem';
import SidebarCancel from '../../Hambugger/times';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import SVG from 'react-inlinesvg';
import logo from '../../../assets/icons/Cat Facts.svg';
import { tsPropertySignature } from '@babel/types';


const SideDrawer = ({open, close})=>{

    let attachedSideDrawer = [classes.SideDrawer, classes.Closed]
     if(open){
        attachedSideDrawer = [classes.SideDrawer, classes.Open]
        
     }

    
   return( 
     
       <> 
        <Backdrop content = {true} open = {open}>
       <p className={classes.float}><SidebarCancel clicked = {close}/></p></Backdrop>
    
   <div id="remove" className={attachedSideDrawer.join(' ')} >
   
        <div className = {classes.Logo}> 
        <SVG src={logo} />
        </div>
            <nav>
            <NavItem close={close}/>
            </nav>
        </div>
        
        </>
);
}
export default SideDrawer;