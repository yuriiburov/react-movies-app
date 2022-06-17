import 'swiper/scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/header'
import { Footer } from './components/footer'
import { AnimatedBackground } from './components/animatedBackground'

import RoutesPage from './config/Routes'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <Routes />
              <Footer />
            </>
          }
        />
      </Routes>
      <AnimatedBackground />
    </BrowserRouter>
  )
}

export { App }
