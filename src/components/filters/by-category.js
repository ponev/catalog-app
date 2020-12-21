import { useDispatch, useSelector } from 'react-redux'
import { saveCategories } from '../../store/actions/catalog'
import { checkedCategories } from '../../utils/functions'
import './filters.scss'

const ByCategory = () => {
  const {
    categories,
    saveFilter: { categories: saveCats }
  } = useSelector(state => state.catalog)

  const dispatch = useDispatch()

  const changeHandler = ({ target }) => {
    const checked = checkedCategories(saveCats, target.value)

    dispatch(saveCategories(checked))
  }

  return (
    <>
      <h4>Filter by Category</h4>
      {categories &&
        categories.map(cat => {
          return (
            <div className="form-check" key={cat}>
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={cat}
                  onChange={event => changeHandler(event)}
                  checked={saveCats.indexOf(cat) > -1}
                />
                {cat}
              </label>
            </div>
          )
        })}
    </>
  )
}

export default ByCategory
