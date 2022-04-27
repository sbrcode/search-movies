import SearchMovies from './components/SearchMovies'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <main>
        <section>
          <SearchMovies />
        </section>
        <section>
          <Home />
        </section>
      </main>
    </div>
  )
}

export default App
