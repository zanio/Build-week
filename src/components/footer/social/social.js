import React, { Component }  from 'react';
import classes from '../footer.css';

import SVG from 'react-inlinesvg';
import facebook from '../../../assets/icons/facebook.svg'
import twitter from '../../../assets/icons/twitter.svg'

class SocialMedia extends Component{
    render(){
        return(
            <React.Fragment>
            <div>
            <p>Follow me on social media for more fun Application</p>
            <div className={classes.responsive}>
            <span><SVG src={facebook} /> <SVG src={twitter} /></span>
            </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default SocialMedia;
