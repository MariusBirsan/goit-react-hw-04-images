import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './Searchbar.css';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
    // console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return alert('Please enter something :)');
    }
    onSubmit(searchQuery);
    searchQuery('');
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchButton">
          <span>
            <FiSearch size={25} stroke="#fff" />
          </span>
        </button>

        <input
          className="SearchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
