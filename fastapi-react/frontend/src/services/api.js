export async function fetchMovieSuggestion() {
  try {
    // api address should come from ENV file
    const url = 'http://0.0.0.0:8000/movie-suggestion'
    const response = await fetch(url)
    const data = await response.json()
    return {
      hasError: false,
      data,
    }
  } catch (error) {
    console.log('error is', error)
    return {
      hasError: true,
      errorMsg: 'Movie suggestion request failed.',
    }
  }
}
