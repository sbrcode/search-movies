import NavBar from './components/Navbar'
import SearchMovies from './components/SearchMovies'
import Home from './pages/Home'

const App = () => {
  return (
    <main>
      <NavBar />
      <section>
        <SearchMovies />
      </section>
      <section>
        <Home />
      </section>
    </main>
  )
}

export default App
