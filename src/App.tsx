import SearchMovies from './components/SearchMovies'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <main>
        <section>
          <SearchMovies />
        </section>
        <hr />
        <section>
          <h2>Popular Movies</h2>
          <Home />
        </section>
      </main>
    </div>
  )
}

export default App

