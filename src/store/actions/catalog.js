import {
  LOADING_DATA,
  FETCH_DATA,
  FETCH_DATA_ERROR,
  SET_CURRENT_PAGE,
  SAVE_CATEGORIES,
  SAVE_SEARCH,
  CLEAN_FILTER
} from './action-types'

const loadingData = () => ({ type: LOADING_DATA })

const fetchData = payload => ({ type: FETCH_DATA, payload })

const fetchDataError = error => ({ type: FETCH_DATA_ERROR, payload: error })

export const fetchCatalog = () => {
  return dispatch => {
    dispatch(loadingData())

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const payload = {}
        const cats = new Set()

        data.forEach(({ category }) => {
          cats.add(category)
        })

        payload.data = data
        payload.cats = cats

        dispatch(fetchData(payload))
      })
      .catch(err => dispatch(fetchDataError(err.message)))
  }
}

export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  payload: page
})

export const fetchCatalogItem = (productId, setProduct, setLoading) => {
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(data => setProduct(data))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
}

export const saveCategories = payload => ({
  type: SAVE_CATEGORIES,
  payload
})

export const saveSearch = payload => ({
  type: SAVE_SEARCH,
  payload
})

export const cleanFilter = () => ({ type: CLEAN_FILTER })
