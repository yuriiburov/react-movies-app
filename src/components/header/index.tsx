import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './styles.scss'

type headerNavType = {
  display: string
  path: string
}

const headerNav: headerNavType[] = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Movies',
    path: '/movie',
  },
  {
    display: 'TV Series',
    path: '/tv',
  },
]

const Header = () => {
  const { pathname } = useLocation()
  const headerRef = useRef<null | HTMLElement>(null)

  const active = headerNav.findIndex(e => e.path === pathname)

  useEffect(() => {
    const headerShrink = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current?.classList.add('shrink')
      } else {
        headerRef.current?.classList.remove('shrink')
      }
    }
    window.addEventListener('scroll', headerShrink)

    return () => {
      window.removeEventListener('scroll', headerShrink)
    }
  })

  return (
    <header ref={headerRef} className='header'>
      <div className='header__wrap'>
        <div className='logo'>
          <Link to='/'>React Movies App</Link>
        </div>
        <ul className='header__nav'>
          {headerNav.map(({ display, path }, i) => (
            <li key={i} className={i === active ? 'active' : ''}>
              <Link to={path}>{display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export { Header }
