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
     const [navbarColor, setNavbarColor] = React.useState(classes.transparent);

     React.useEffect(() => {
        const updateNavbarColor = () => {
          if (
            document.documentElement.scrollTop > 299 ||
            document.body.scrollTop > 299
          ) {
            setNavbarColor(classes.Toolbar);
          } else if (
            document.documentElement.scrollTop < 300 ||
            document.body.scrollTop < 300
          ) {
            setNavbarColor(classes.transparent);
          }
        };
    
        window.addEventListener("scroll", updateNavbarColor);
    
        return function cleanup() {
          window.removeEventListener("scroll", updateNavbarColor);
        };
      });

  return(  <header className={navbarColor}>
        <Hamburgger menu ={navbarColor} clicked ={props.close} />
    <div onClick={()=>HandleUrl('/')} className={classes.Logo}>
{  navbarColor===classes.Toolbar? <SVG src={logo} /> : <div className={classes.pacifico}>CatFacts</div>}    
   </div>
        <nav className={classes.DesktopOnly}>
            <NavItem />
        </nav>
        
    </header>
    )
}

export default Toolbar;