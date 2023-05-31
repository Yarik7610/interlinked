import React from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import { getUsers, setTerm, setIsSearch } from '../../../Redux/users-reducer';

const SearchContainer = (props) => {
    return <Search {...props}/>
}
 
const mapStateToProps = (state) => ({
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    term: state.usersPage.term,
})

export default connect(mapStateToProps, {getUsers, setTerm, setIsSearch})(SearchContainer);