import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import classes from './morefeed.css'
import FeedTemplates from '../../components/feedTemplate/feedTemplate'
import Pagination from '../../components/Pagination/pagination'
import paginate from '../../helper/paginate';
import * as actionCreator from '../../store/actions/index';


const Morefeed = ({ OnGetMoreFeed, Feeds,  Counts, errorMessage, loadingSpinner}) => {

    //  pageSize is the number of Item to be displayed on each page

    useEffect(()=>{
        OnGetMoreFeed();
      },[]);

    const [pageSize] = useState(30)
    const [currentPage, setCurrentPage] = useState(1)
    
    const pageFeed = paginate(Feeds, currentPage, pageSize);

    const handlePageChange = (page)=>{
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
        return setCurrentPage(page)
    }



    return(
        <React.Fragment>
        <div className="container">
        <FeedTemplates data = {pageFeed} error = {errorMessage}  loading = {loadingSpinner}/>
        <Pagination itemsCount = {Counts} pageSize = {pageSize}
        onPageChange = {handlePageChange} currentPage = {currentPage}
        />
        </div>
        
        </React.Fragment>
    )
};

const mapStateToProps = state =>{
    return {
        loadingSpinner: state.ManyFeedReducer.loading,
        errorMessage:state.ManyFeedReducer.error,
        Feeds:state.ManyFeedReducer.Feeds,
        Counts: state.ManyFeedReducer.counts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        OnGetMoreFeed: () => dispatch(actionCreator.FetchManyFeedAction() ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Morefeed);

