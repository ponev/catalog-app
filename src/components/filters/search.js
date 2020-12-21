import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveSearch } from '../../store/actions/catalog'
import './filters.scss'

const Search = () => {
  const {
    saveFilter: { search }
  } = useSelector(state => state.catalog)
  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(search)
  }, [search])

  const changeHandler = ({ target }) => {
    setValue(target.value)
  }

  const searchHandler = () => {
    dispatch(saveSearch(value))
  }

  return (
    <div className="filters">
      <h4>Search</h4>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          value={value}
          onChange={event => changeHandler(event)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" onClick={searchHandler}>
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search
