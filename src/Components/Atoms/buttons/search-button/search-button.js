import React from 'react';
import './search-button.scss';

const Search = () => {
    return (
        <button className="navigation__button--search">
            <img src={process.env.PUBLIC_URL + '/assets/icons/icon-search.svg'} alt="search icon" />
        </button>
    );
}

export default Search;