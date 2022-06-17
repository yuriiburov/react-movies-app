import 'swiper/scss'
import { BrowserRouter, Route } from 'react-router-dom'

import { Header } from './components/header'
import { Footer } from './components/footer'
import { AnimatedBackground } from './components/animatedBackground'

import { RoutesPage } from './config/Routes'

const App = () => {
  return (
    <BrowserRouter>
      <Route
        render={() => (
          <>
            <Header />
            <RoutesPage />
            <Footer />
          </>
        )}
      />
      <AnimatedBackground />
    </BrowserRouter>
  )
}

export { App }
