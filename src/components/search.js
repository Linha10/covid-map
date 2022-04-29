import React from "react";
import './search.scss';
const Search = () => {
    return (
        <div className="searchArea">
            <label className="searching">
               搜尋地區 <input type='text'/>               
            </label>
        </div>
    )
}

export default Search ;