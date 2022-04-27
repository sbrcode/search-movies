import React from 'react'

const SearchMovies = () => {
  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value
    // setSearchTerm(userInput);
  }

  const onClearSearchTermHandler = () => {
    // clearSearchTerm();
  }

  return (
    <div id="search-container">
      {/* <img id="search-icon" alt="" src={magnify} />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchTermChangeHandler}
        placeholder="Search recipes"
      />
      {searchTerm.length > 0 && (
      <button onClick={onClearSearchTermHandler} type="button" id="search-clear-button">
        <img src={close} alt="" />
      </button>
      )} */}
    </div>
  )
}

export default SearchMovies
