import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { detailsUrl, imgUrl, apiKey, lang } from '../utils/Constants'
import { fonts } from '../utils/Themes'
import { movieProps } from '../api/types'

const Container = styled.div`
  display: grid;
  margin: 25px 25%;
  gap: 25px;
  grid-template-areas: 'div img';
  font-family: ${fonts.primary};
`

const MovieDetails = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [detailsMovie, setDetailsMovie] = useState<movieProps | null>(null)
  const myParam = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(`${detailsUrl}/${myParam.movieId}?api_key=${apiKey}&language=${lang}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) => {
        setDetailsMovie(data)
      })
      .catch((error) => {
        console.error(error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [myParam.movieId])

  return (
    <Container>
      {loading && <p>Searching Movies...</p>}
      {error && <p>Sorry, fetching Movie datas does not work. Try later</p>}
      <div>
        <h3>{detailsMovie?.original_title}</h3>
        <p>{detailsMovie?.overview}</p>
        <p>{detailsMovie?.vote_average} / 10</p>
      </div>
      <img src={imgUrl + detailsMovie?.poster_path} alt="" />
    </Container>
  )
}

export default MovieDetails
