import React, {useEffect, useState} from 'react';
import { useCallback } from 'react';
import classes from './Search.module.scss'
import debounce from 'lodash.debounce'
import {AiOutlineSearch} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'

const Search = (props) => {

    const [currentPage, setCurrentPage] = useState(props.currentPage)

    const debouncedGetUsers = useCallback(  // тут нету => {} так как debounce сразу вызваться должен (функция обертка, вернет стрелочную функцию) 
        debounce((currentPage, pageSize, term) => {         
            props.getUsers(currentPage, pageSize, term)
        }, 400), 
    [])
           
    const onChangeHandler = (e) => {
        if (e.target.value === '') {
            setCurrentPage(1)
        }
        props.setTerm(e.target.value)
        debouncedGetUsers(currentPage, props.pageSize, e.target.value)
    }


    const onCrossClick = () => {
        props.setTerm('')
        props.setIsSearch(false)
        props.getUsers(1, props.pageSize, '')
    }

    return (
        <div className = 'searchBlock'>
            <AiOutlineSearch size = {"1.5rem"} className = {classes.magnifier}/>
            <input 
                value = {props.term} 
                onChange = {onChangeHandler}
                className = {classes.searchInput} 
                type = "text" 
                placeholder='Search user...'
            />
            {props.term && <RxCross2 onClick={onCrossClick} className= {classes.crossIcon} size = {'1.35em'}/> }
        </div>
    );
}
 


export default Search;