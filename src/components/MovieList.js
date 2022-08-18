const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          key={index}
          className="image-container d-flex justify-content-start m-3"
        >
          <img src={movie.Poster} alt="movie" />
          <div className="overlay d-flex align-items-center justify-content-center"></div>
        </div>
      ))}
    </>
  )
}

export default MovieList
