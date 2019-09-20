import React from 'react';
import Spinner from '../../UI/Spinner/spinner';




const BreedTemplate  = props =>{
    const {breeds, error, loading} = props;
    let content = null;
    if(breeds){
       content = breeds.map(singleBreed=>(
        <div key={singleBreed.id} className="card mb-3 mt-2">
        <div className="card-header">
        {singleBreed.name}
        </div>
        <div className="card-body">
          <p className="card-text">{singleBreed.description}</p>
          <a href={singleBreed.wikipedia_url} className="btn btn-primary">Read More</a>
        </div>
      </div>))
    }
    if(error){
        content = <p>error</p>
    }
    if(loading){
        content = <Spinner />
    }
return(
    <React.Fragment>
        { content }
    </React.Fragment>
    )
  
}

export default BreedTemplate