import React, { Component }  from 'react';
import classes from '../footer.css';
import {HandleUrl} from '../../../helper/utility';


const SocialMedia = () =>{
    const facebookUrl = 'https://web.facebook.com/akpan.aniefiok.90';
    const twitterUrl = 'https://twitter.com/NodeDeWeb';
    const githubUrl = 'https://twitter.com/NodeDeWeb';
        return(
            <>
            <div>
            <p>Follow me to get more update</p>
            <div>
            <span className={classes.icon}>
                <i onClick = {()=>HandleUrl(facebookUrl)} className="fab fa-facebook-square"></i>
                <i onClick = {()=>HandleUrl(twitterUrl)} className="fab fa-twitter"></i>
                <i onClick = {()=>HandleUrl(githubUrl)} className="fab fa-github"></i>
                </span>
            </div>
                </div>
            </>
            
        )
}

export default SocialMedia;
