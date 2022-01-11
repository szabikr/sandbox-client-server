import React, { useState, useEffect } from 'react'

export default function MovieSuggestion() {
  const [movie, setMovie] = useState(null)

  const fetchMovieSuggestion = async () => {
    try {
      const response = await fetch('http://0.0.0.0:8000/movie-suggestion')
      const data = await response.json()
      const actorsList = data.actors_list
      const dirIndex = actorsList.search('(dir.)')
      setMovie({
        title: data.title,
        director: actorsList.slice(0, dirIndex - 2),
        topCast: actorsList.slice(dirIndex + 7, actorsList.length),
        link: `https://www.imdb.com${data.link}`,
        year: data.year.slice(1, data.year.length - 1),
        rating: Number.parseFloat(data.rating).toFixed(2),
      })
    } catch (error) {
      console.log('error is', error)
    }
  }

  useEffect(() => {
    fetchMovieSuggestion()
  }, [])

  return (
    <>
      <h1>Movie Suggestion For you</h1>
      {movie && (
        <>
          <p>title: {movie.title}</p>
          <p>director: {movie.director}</p>
          <p>topCast: {movie.topCast}</p>
          <p><a href={movie.link}>{movie.link}</a></p>
          <p>year: {movie.year}</p>
          <p>rating: {movie.rating}</p>
        </>
      )}
    </>
  )
}
