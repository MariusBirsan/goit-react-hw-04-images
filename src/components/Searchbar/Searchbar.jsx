import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './Searchbar.css';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    // const { name, value } = e.currentTarget;
    // this.setState({ [name]: value });
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return alert('Please enter something :)');
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
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
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
