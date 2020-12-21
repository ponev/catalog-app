import { Link } from 'react-router-dom'
import './catalog-list-item.scss'

const CatalogListItem = ({ id, title, price, category, image }) => {
  return (
    <div className="catalog-list-item">
      <div className="catalog-list-item__category">{category}</div>
      <img src={image} alt={title} className="catalog-list-item__image" />
      <Link
        to={{ pathname: `/catalog/${id}` }}
        className="catalog-list-item__title"
      >
        {title}
      </Link>
      <div className="catalog-list-item__price">$ {price.toLocaleString()}</div>
    </div>
  )
}

export default CatalogListItem
