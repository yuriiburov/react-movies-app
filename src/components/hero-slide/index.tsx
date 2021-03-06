import { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from '../buttons/button'
import { OutlineButton } from '../buttons/outlineButton'

import tmdbApi, { category, movieType } from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'

import './styles.scss'

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([])
  SwiperCore.use([Autoplay])

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

  return (
    <div className='hero-slide'>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}>
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => <HeroSlideItem item={item} className={isActive ? 'active' : ''} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

interface HeroSlideItemProps {
  item: { [key: string]: string }
  className: string
}

const HeroSlideItem: FC<HeroSlideItemProps> = ({ item, className }) => {
  const history = useHistory()
  const { title, overview, id, poster_path, backdrop_path } = item

  const background = apiConfig.originalImage(backdrop_path ? backdrop_path : poster_path)

  return (
    <div
      className={`hero-slide__item ${className}`}
      style={{ backgroundImage: `url(${background})` }}>
      <div className='hero-slide__item__content'>
        <div className='hero-slide__item__content__info'>
          <h2 className='title'>{title}</h2>
          <div className='overview'>{overview}</div>
          <div className='btns'>
            <Button className='' onClick={() => history.push(`/movie/${id}`)}>
              Watch now
            </Button>
            <OutlineButton className='' onClick={() => console.log('trailer')}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className='hero-slide__item__content__poster'>
          <img src={apiConfig.w500Image(poster_path)} alt='film poster that popular now' />
        </div>
      </div>
    </div>
  )
}

export { HeroSlide }
