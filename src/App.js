import { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import MovieList from "./components/MovieList"
import MovieListHeading from "./components/MovieListHeading"

import "./App.css"
import SearchBox from "./components/SearchBox"

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const getMovieRequests = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ed238a5d`
    const response = await fetch(url)

    const responsJson = await response.json()

    if (responsJson.Search) {
      setMovies(responsJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequests(searchValue)
  }, [searchValue])
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  )
}

export default App
