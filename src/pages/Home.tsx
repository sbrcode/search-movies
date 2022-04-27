import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { popUrl, imgUrl, apiKey, lang } from '../utils/Constants'

export interface popMovie {
  id: number
  poster_path?: string
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin: auto 25%;
`

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [popMovies, setPopMovies] = useState([])

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

  if (loading) return <p>Searching Movies...</p>
  if (error) return <p>Sorry, fetching Movies DB does not work. Try later</p>

  return (
    <Wrapper>
      {popMovies.map((popMovie: popMovie) => (
        <img
          key={popMovie.id}
          src={imgUrl + popMovie.poster_path}
          alt={popMovie.poster_path}
          width={'100%'}
        />
      ))}
    </Wrapper>
  )
}

export default Home
