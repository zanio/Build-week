import React, { Component }  from 'react';
import classes from '../footer.css';


class SocialMedia extends Component{
    render(){
        return(
            <React.Fragment>
            <div>
            <p>Follow me on social media for more fun Application</p>
            <div>
            <span className={classes.icon}>
                <a href="https://web.facebook.com/akpan.aniefiok.90"><i class="fab fa-facebook-square"></i></a>
                <a href="https://twitter.com/NodeDeWeb"><i class="fab fa-twitter"></i></a>
                <a href="https://github.com/zanio"><i class="fab fa-github"></i></a>
                </span>
            </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default SocialMedia;
