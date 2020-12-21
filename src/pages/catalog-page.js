import CatalogList from '../components/catalog-list/catalog-list'
import ByCategory from '../components/filters/by-category'
import Search from '../components/filters/search'

const CatalogPage = () => {
  return (
    <div className="row">
      <div className="col-sm-3 mt-3">
        <Search />
        <ByCategory />
      </div>
      <div className="col-sm-9">
        <CatalogList />
      </div>
    </div>
  )
}

export default CatalogPage
