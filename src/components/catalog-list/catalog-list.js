import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCatalog, setCurrentPage } from '../../store/actions/catalog'
import { setFiltersAndSearch } from '../../utils/functions'
import { createPages } from '../../utils/pages-creater'
import CatalogListItem from '../catalog-list-item/catalog-list-item'
import Loader from '../loader/loader'

import './catalog-list.scss'

const CatalogList = () => {
  const {
    loading,
    data,
    error,
    perPage,
    saveFilter: { categories: saveCats, search, currentPage }
  } = useSelector(state => state.catalog)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCatalog())
  }, [dispatch])

  const dataFilter = setFiltersAndSearch(data, saveCats, search)

  const pagesCount = Math.ceil(dataFilter.length / perPage)
  const pages = createPages(pagesCount, currentPage)

  const dataLimit = dataFilter.slice(
    (currentPage - 1) * perPage,
    perPage * currentPage
  )

  if (loading) {
    return <Loader />
  }
  if (error) {
    return (
      <div className="alert alert-danger">Error! Please, try again later.</div>
    )
  }

  if (!dataFilter.length) {
    return <div className="alert alert-warning">Products not found</div>
  }

  return (
    <>
      <div className="catalog-list">
        {dataLimit &&
          dataLimit.map(item => <CatalogListItem key={item.id} {...item} />)}
      </div>
      <ul className="pagination">
        {pages.map((page, idx) => {
          return (
            <li
              className={
                currentPage === page ? 'page-item active' : 'page-item'
              }
              key={idx}
            >
              <button
                className="page-link"
                disabled={currentPage === page}
                onClick={() => dispatch(setCurrentPage(page))}
              >
                {page}
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default CatalogList
