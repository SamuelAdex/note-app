import React from 'react'
import search from '../search.ico'

const SearchBar = ({handleSearchText}) => {
    
    return (
        <div className="search">
            <img src={search} alt="" style={{width:"20px", marginRight:"5px"}} />
            <input type="text" name="" onChange={(e)=> handleSearchText(e.target.value)} id="" placeholder="Search Notes..." />
        </div>
    )
}

export default SearchBar
