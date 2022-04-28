import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  )
}

export default App
