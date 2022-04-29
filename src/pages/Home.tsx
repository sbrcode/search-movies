import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { imgUrl } from '../utils/Constants'
import { sendRequest } from '../api/Api'
import closeIcon from '../assets/close.png'
import { movieProps } from '../api/types'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin: auto 25%;
`

const SearchContainer = styled.div`
  padding: 5px;
  margin: auto 25%;
`

const Poster = styled.img`
  &:hover {
    cursor: pointer;
    ${(props) => (props.title ? props.title : 'untitled')};
  }
`

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [popMovies, setPopMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState('')

  const page = 1

  useEffect(() => {
    sendRequest({ setPopMovies, setLoading, setError, page })
  }, [])

  return (
    <div>
      <SearchContainer>
        <input
          type="text"
          value={searchMovie}
          onChange={(e) => {
            setSearchMovie(e.target.value)
            sendRequest({
              search: true,
              movieInput: e.target.value,
              setPopMovies,
              setLoading,
              setError,
              page,
            })
          }}
          placeholder="Search movies"
          style={{ width: '95%' }}
        />
        {searchMovie.length > 0 && (
          <img
            src={closeIcon}
            alt=""
            onClick={() => {
              setSearchMovie('')
              sendRequest({ setPopMovies, setLoading, setError, page })
            }}
            width={20}
            style={{ marginLeft: 5 }}
          />
        )}
      </SearchContainer>
      <Wrapper>
        {loading && <p>Searching Movies...</p>}
        {error && <p>Sorry, fetching Movies DB does not work. Try later</p>}
        {popMovies.map((popMovie: movieProps) => (
          <Link to={`/${popMovie.id}`} key={popMovie.id}>
            <Poster
              title={popMovie.original_title}
              src={imgUrl + popMovie.poster_path}
              alt={popMovie.original_title}
              width={'100%'}
            />
          </Link>
        ))}
      </Wrapper>
    </div>
  )
}

export default Home
