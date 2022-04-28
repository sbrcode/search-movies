import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { popUrl, imgUrl, apiKey, lang, searchUrl } from '../utils/Constants'
import closeIcon from '../assets/close.png'

interface popMovie {
  id: number
  poster_path?: string
  original_title?: string
}

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

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [popMovies, setPopMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState('')

  const page = 1

  useEffect(() => {
    setLoading(true)
    fetch(`${popUrl}?api_key=${apiKey}&language=${lang}&page=${page}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) => {
        setPopMovies(data.results)
      })
      .catch((error) => {
        console.error(error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const onSearchChangeHandler = (e: { target: { value: string } }) => {
    setLoading(true)
    const movieInput = e.target.value
    fetch(
      `${searchUrl}?api_key=${apiKey}&language=${lang}&query=${movieInput.toLowerCase()}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) => {
        setPopMovies(data.results)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setSearchMovie(movieInput)
        setLoading(false)
      })
  }

  return (
    <div>
      <SearchContainer>
        <input
          type="text"
          value={searchMovie}
          onChange={onSearchChangeHandler}
          placeholder="Search movies"
          style={{ width: '95%' }}
        />
        {searchMovie.length > 0 && (
          <img
            src={closeIcon}
            alt=""
            onClick={() => setSearchMovie('')}
            width={20}
            style={{ marginLeft: 5 }}
          />
        )}
      </SearchContainer>
      <Wrapper>
        <>
          {loading && <p>Searching Movies...</p>}
          {error && <p>Sorry, fetching Movies DB does not work. Try later</p>}
          {popMovies.map((popMovie: popMovie) => (
            <img
              key={popMovie.id}
              src={imgUrl + popMovie.poster_path}
              alt={popMovie.poster_path}
              width={'100%'}
            />
          ))}
        </>
      </Wrapper>
    </div>
  )
}

export default Home
