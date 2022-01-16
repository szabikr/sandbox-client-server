import React, { useState, useEffect } from 'react'
import { fetchMovieSuggestion } from './services/api'

export default function MovieSuggestion() {
  const [movie, setMovie] = useState(null)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    async function doAsyncEffect() {
      const result = await fetchMovieSuggestion()
      if (result.hasError) {
        setError(result.errorMsg)
        return
      }

      const { data } = result
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
    }
    doAsyncEffect()
  }, [])

  return (
    <>
      <h1>Movie Suggestion For you</h1>
      {error && (
        <p>Error: {error}</p>
      )}
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
