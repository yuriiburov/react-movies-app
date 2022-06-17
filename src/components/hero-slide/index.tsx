import { useEffect, useState } from 'react'
import tmdbApi, { category, movieType } from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 }
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, { params })
        setMovieItems(response.results.slice(0, 4))
        console.log(response)
      } catch (err) {
        console.log('error')
      }
    }
    getMovies()
  }, [])

  return <div className='hero-slide'>Hero Slide</div>
}

export { HeroSlide }
