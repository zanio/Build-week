import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import classes from './breed.css'
import BreedTemplates from '../../components/breedTemplate/breedTemplate'
import Pagination from '../../components/Pagination/pagination'
import paginate from '../../helper/paginate';
import * as actionCreator from '../../store/actions/index';


const MoreBreed = ({ OnGetBreeds, Breeds,  breedCounts, errorMessage, loadingSpinner}) => {

    //  pageSize is the number of Item to be displayed on each page
    const [pageSize] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(()=>{
        OnGetBreeds();
        return ()=>{
            console.log('unmounting the dom')
        }
      },[]);

    

    
    const pageBreeds = paginate(Breeds, currentPage, pageSize);

    const handlePageChange = (page)=>{
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        return setCurrentPage(page)
    }



    return(
        <>
        <div className={classes.Body}>
        <BreedTemplates breeds = {pageBreeds} error = {errorMessage}  loading = {loadingSpinner}/>
        <Pagination itemsCount = {breedCounts ? parseInt(breedCounts):null} pageSize = {pageSize}
        onPageChange = {handlePageChange} currentPage = {currentPage}
        />
        </div>
        
        </>
    )
};

const mapStateToProps = state =>{
    return {
        loadingSpinner: state.BreedReducers.loading,
        errorMessage:state.BreedReducers.error,
        Breeds:state.BreedReducers.breeds,
        breedCounts: state.BreedReducers.breedsCounts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        OnGetBreeds: () => dispatch(actionCreator.FetchManyBreed() ),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MoreBreed);

