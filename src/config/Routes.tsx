import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { Catalog } from '../pages/Catalog'

const RoutesPage = () => {
  return (
    <Routes>
      <Route path='/:category/search/:keyword' element={<Catalog />} />
      <Route path='/:category/:id' element={<Detail />} />
      <Route path='/:category' element={<Catalog />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default RoutesPage
