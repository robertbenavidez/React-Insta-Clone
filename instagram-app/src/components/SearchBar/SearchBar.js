import React from 'react';

const SearchBar = () =>  {
    return (
        <div className='search-bar-wrapper'>
            <div>
                <p>IG</p>
            </div>
            <div>
            <input type="text" placeholder="Search"/>
            </div>
            <div>
                <i></i>
            </div>
        </div>
    )
}

export default SearchBar;