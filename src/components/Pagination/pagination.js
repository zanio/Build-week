import React from 'react';
import _  from 'lodash';

import PropeTypes from 'prop-types';
import {PaginationLink, PaginationItem, Pagination} from 'reactstrap'
import classes from './pagination.css'


const PaginationComponent = ({ itemsCount, pageSize, onPageChange, currentPage }) => {

const pagesCount = Math.ceil(itemsCount / pageSize) ;

if(pagesCount === 1) return null;

const pages = _.range(1, pagesCount + 1)

    return <nav>
        <Pagination className={classes.custom}>
    {pages.map(page => (
        <PaginationItem key = {page} className={page === currentPage ? "active":"page-item"}>
        <PaginationLink onClick = {()=> onPageChange(page)} className="page-link">{page}</PaginationLink>
    </PaginationItem>
    ))}
        </Pagination>
    </nav>;
    

}

export default PaginationComponent;

PaginationComponent.propTypes = { 
    itemsCount: PropeTypes.number, 
    pageSize: PropeTypes.number, 
    onPageChange: PropeTypes.func, 
    currentPage: PropeTypes.number
 }