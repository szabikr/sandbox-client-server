import random
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from algo.get_movies import getImdbTopMovies

app = FastAPI()

origins = [
  'http://localhost:8080',
  'localhost:8080'
]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=['*'],
  allow_headers=['*']
)

@app.get('/', tags=['root'])
async def read_root() -> dict:
  return { 'message': 'Welcome to your todo list.' }

@app.get("/movie-suggestion")
def movie_suggestion():
  years, actors_list, links, titles, ratings = getImdbTopMovies()
  index = random.randrange(0, len(titles))
  return {
    "year": years[index],
    "actors_list": actors_list[index],
    "link": links[index],
    "title": titles[index],
    "rating": ratings[index],
  }
