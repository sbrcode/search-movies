import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import styled from 'styled-components'

const SearchContainer = styled.div`
  padding: 5px;
  margin: auto 25%;
`

const SearchMovies = () => {
  const [searchMovie, setSearchMovie] = useState('')

  const onSearchChangeHandler = (e: { target: { value: any } }) => {
    const movieInput = e.target.value
    setSearchMovie(movieInput)
  }

  const onClearSearchHandler = () => {
    setSearchMovie('')
  }

  return (
    <SearchContainer>
      <input
        type="text"
        value={searchMovie}
        onChange={onSearchChangeHandler}
        placeholder="Search movies"
        style={{ width: '95%' }}
      />
      {searchMovie.length > 0 && (
        <CloseIcon sx={{ fontSize: 20 }} onClick={onClearSearchHandler} />
      )}
    </SearchContainer>
  )
}

export default SearchMovies
