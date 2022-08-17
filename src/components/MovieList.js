const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index} className="d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie" />
        </div>
      ))}
    </>
  )
}

export default MovieList
