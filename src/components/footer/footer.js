import React, { Component }  from 'react';
import classes from './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf} from '@fortawesome/free-solid-svg-icons';
import SVG from 'react-inlinesvg';
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'
import SocialMedia from './social/social'

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <div className={classes.Layout}>
                <SocialMedia />
                <div>
                    <p>All Rights reserved <FontAwesomeIcon className={classes.Font}
                 icon={faLeaf} color='13435F'
                 /></p>
                    <p>&copy; 2018 Aniefiok Akpan  </p>
                </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default Footer;
