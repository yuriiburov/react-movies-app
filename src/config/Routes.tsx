import { Route, Switch } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { Catalog } from '../pages/Catalog'

const RoutesPage = () => {
  return (
    <Switch>
      <Route path='/:category/search/:keyword' component={Catalog} />
      <Route path='/:category/:id' component={Detail} />
      <Route path='/:category' component={Catalog} />
      <Route path='/' exact component={Home} />
    </Switch>
  )
}

export { RoutesPage }
