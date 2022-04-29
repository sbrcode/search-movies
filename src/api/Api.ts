import { popUrl, apiKey, lang, searchUrl } from '../utils/Constants'

interface requestProps {
  search?: boolean
  movieInput?: string
  setPopMovies: (popMovies: never[]) => void
  setLoading: (loading: boolean) => void
  setError: (loading: boolean) => void
  page?: number
}

export const sendRequest = ({
  search,
  movieInput,
  setPopMovies,
  setLoading,
  setError,
  page,
}: requestProps) => {
  const urlBase = search ? searchUrl : popUrl
  const urlEnd = search ? `query=${movieInput?.toLowerCase()}` : `page=${page}`
  setLoading(true)
  fetch(`${urlBase}?api_key=${apiKey}&language=${lang}&${urlEnd}`)
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
      !search && setError(error)
    })
    .finally(() => {
      setLoading(false)
    })
}
