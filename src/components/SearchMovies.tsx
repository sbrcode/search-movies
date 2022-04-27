import { useState } from 'react'
// import { Search, Close } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const SearchMovies = () => {
  const [searchMovie, setSearchMovie] = useState('')

  const onSearchTermChangeHandler = (e: { target: { value: any } }) => {
    const movieInput = e.target.value
    setSearchMovie(movieInput)
  }

  const onClearSearchTermHandler = () => {
    setSearchMovie('')
  }

  return (
    <div>
      <SearchIcon sx={{ fontSize: 24 }} />
      <input
        id="search"
        type="text"
        value={searchMovie}
        onChange={onSearchTermChangeHandler}
        placeholder="Search movies"
      />
      {searchMovie.length > 0 && (
        <button onClick={onClearSearchTermHandler} type="button">
          <CloseIcon sx={{ fontSize: 12 }} />
        </button>
      )}
    </div>
  )
}

export default SearchMovies
