import React from 'react'
import styles from './styles/movie.module.css'

export default function Movie({ movie }) {
  return (
    <>
      {movie && (
        <div className={styles.card}>
          <img
            className={styles.poster}
            src="https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_.jpg"
            alt="Movie poster"
          />
          <div className={styles.content}>
            <div className={styles.header}>
              <div>
                <div className={styles.title}>{movie.title}</div>
                <div className={styles.year}>{movie.year}</div>
              </div>
              <div>{movie.rating}</div>
            </div>
            <div className={styles.cast}><strong>Director:</strong> {movie.director}</div>
            <div className={styles.cast}><strong>Stars:</strong> {movie.topCast}</div>
            <div className={styles.link}><a href={movie.link}>View on Imdb</a></div>
          </div>
        </div>
      )}
    </>
  )
}
