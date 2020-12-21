import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './navigation/navigation'

import HomePage from '../pages/home-page'
import CatalogPage from '../pages/catalog-page'
import CatalogItemPage from '../pages/catalog-item-page'

const App = () => {
  return (
    <Router>
      <header>
        <Navigation />
      </header>
      <div className="container mt-3 mb-3">
        <Switch>
          <Route path="/" exact children={<HomePage />} />
          <Route path="/catalog/:id" children={<CatalogItemPage />} />
          <Route path="/catalog" children={<CatalogPage />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
