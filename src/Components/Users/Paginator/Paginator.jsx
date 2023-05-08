import React, { useState } from 'react';
import classes from "./Paginator.module.scss"

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
   
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let slicedPages;
    let curPage = props.currentPage
    if (curPage - 5 < 0) slicedPages = pages.slice(0,7)
    else slicedPages = pages.slice(curPage-4, curPage + 3)
    
    return ( 
        <div className = {classes.pageNums}>
           
            {slicedPages.map(page => 
                <span key = {page} onClick = {() => {props.onPageChanged(page)}} 
                      className = {page === props.currentPage ? classes.pageNumSelected : ""}> 
                      {page}
                </span>
            )}
          
        </div>
    );
}
 
export default Paginator;