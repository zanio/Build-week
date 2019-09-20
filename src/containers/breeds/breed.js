import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import classes from './breed.css'
import BreedTemplates from '../../components/breedTemplate/breedTemplate'
import Pagination from '../../components/Pagination/pagination'
import paginate from '../../helper/paginate';
import * as actionCreator from '../../store/actions/index';


const MoreBreed = (props) => {

    //  pageSize is the number of Item to be displayed on each page
    const { OnGetBreeds, Breeds,  breedCounts, errorMessage, loadingSpinner} = props


    useEffect(()=>{
        OnGetBreeds();
      },[]);

    const [pageSize] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    
    const pageBreeds = paginate(Breeds, currentPage, pageSize);

    const handlePageChange = (page)=>{
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        return setCurrentPage(page)
    }



    return(
        <React.Fragment>
        <div className="container mt-3">
        <BreedTemplates breeds = {pageBreeds} error = {errorMessage}  loading = {loadingSpinner}/>
        <Pagination itemsCount = {breedCounts ? parseInt(breedCounts):null} pageSize = {pageSize}
        onPageChange = {handlePageChange} currentPage = {currentPage}
        />
        </div>
        
        </React.Fragment>
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

