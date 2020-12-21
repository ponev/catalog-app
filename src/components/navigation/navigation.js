import { useDispatch } from 'react-redux'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { cleanFilter } from '../../store/actions/catalog'

import './navigation.scss'

const Navigation = () => {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()

  const catalogHandle = () => {
    dispatch(cleanFilter())
    history.push('/catalog')
  }

  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink exact to="/" className="btn btn-outline-info btn-sm">
            Home
          </NavLink>
        </li>
        <li>
          <button
            className={
              location.pathname.indexOf('/catalog') > -1
                ? 'btn btn-outline-info btn-sm active'
                : 'btn btn-outline-info btn-sm'
            }
            onClick={catalogHandle}
          >
            Catalog
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
