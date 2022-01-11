import requests
from bs4 import BeautifulSoup

URL = 'http://www.imdb.com/chart/top'

def getImdbTopMovies():
  response = requests.get(URL)

  soup = BeautifulSoup(response.text, 'html.parser')

  movietags = soup.select('td.titleColumn')
  inner_movietags = soup.select('td.titleColumn a')
  ratingtags = soup.select('td.posterColumn span[name=ir]')
  

  def get_year(movie_tag):
    moviesplit = movie_tag.text.split()
    year = moviesplit[-1]
    return year

  years = [get_year(tag) for tag in movietags]
  actors_list =[tag['title'] for tag in inner_movietags]
  links = [tag['href'] for tag in inner_movietags]
  titles = [tag.text for tag in inner_movietags]
  ratings = [float(tag['data-value']) for tag in ratingtags]

  return ( years, actors_list, links, titles, ratings )
