import React, { Component }  from 'react';
import classes from './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf} from '@fortawesome/free-solid-svg-icons';
import SVG from 'react-inlinesvg';
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'

class Footer extends Component{
    render(){
        return(
            <div className={classes.Layout}>
                <div>
            <p>Follow me on social media for more fun Application</p>
            
            {/* <div>
            <div><SVG src={facebook} /></div>
            <SVG src={twitter} />

            </div> */}
                </div>
                <div>
                    <p>All Rights reserved <FontAwesomeIcon className={classes.Font}
                 icon={faLeaf} color='13435F'
                 /></p>
                    <p>&copy; 2018 Aniefiok Akpan  </p>
                </div>
                </div>
        )
    }
}

export default Footer;
