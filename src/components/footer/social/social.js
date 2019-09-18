import React, { Component }  from 'react';
import classes from '../footer.css';


const SocialMedia = () =>{
    const facebookUrl = 'https://web.facebook.com/akpan.aniefiok.90';
    const twitterUrl = 'https://twitter.com/NodeDeWeb';
    const githubUrl = 'https://twitter.com/NodeDeWeb';

    const  HandleUrl = (url)=>{
    return location.href = url
    }
        return(
            <React.Fragment>
            <div>
            <p>Follow me on social media for more fun Application</p>
            <div>
            <span className={classes.icon}>
                <i onClick = {()=>HandleUrl(facebookUrl)} className="fab fa-facebook-square"></i>
                <i onClick = {()=>HandleUrl(twitterUrl)} className="fab fa-twitter"></i>
                <i onClick = {()=>HandleUrl(githubUrl)} className="fab fa-github"></i>
                </span>
            </div>
                </div>
            </React.Fragment>
            
        )
}

export default SocialMedia;
