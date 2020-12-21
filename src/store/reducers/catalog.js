import {
  LOADING_DATA,
  FETCH_DATA,
  FETCH_DATA_ERROR,
  SET_CURRENT_PAGE,
  SAVE_CATEGORIES,
  SAVE_SEARCH,
  CLEAN_FILTER
} from '../actions/action-types'

const initialState = {
  loading: false,
  error: null,
  data: [],

  perPage: 6,

  categories: [],

  saveFilter: {
    search: '',
    categories: [],
    currentPage: 1
  }
}

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
        categories: [...action.payload.cats]
      }
    case FETCH_DATA_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        saveFilter: {
          ...state.saveFilter,
          currentPage: action.payload
        }
      }
    case SAVE_CATEGORIES:
      return {
        ...state,
        saveFilter: {
          ...state.saveFilter,
          categories: [...action.payload],
          currentPage: 1
        }
      }
    case SAVE_SEARCH:
      return {
        ...state,
        saveFilter: {
          ...state.saveFilter,
          search: action.payload,
          currentPage: 1
        }
      }
    case CLEAN_FILTER:
      return {
        ...state,
        saveFilter: {
          search: '',
          categories: [],
          currentPage: 1
        }
      }
    default:
      return state
  }
}
