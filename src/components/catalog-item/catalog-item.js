import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchCatalogItem } from '../../store/actions/catalog'
import Loader from '../loader/loader'
import './catalog-item.scss'

const CatalogItem = () => {
  const { id } = useParams()

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetchCatalogItem(id, setProduct, setLoading)
  }, [id])

  if (loading) {
    return <Loader />
  }

  if (!product) {
    return (
      <>
        <h3>Product is not found</h3>
        <Link to={{ pathname: '/catalog' }} className="btn btn-warning">
          Back to Catalog
        </Link>
      </>
    )
  }

  return (
    <div className="catalog-item">
      <h1>{product.title}</h1>
      <div className="catalog-item__info">
        <img
          src={product.image}
          alt={product.title}
          className="catalog-item__image"
        />
        <div>
          <div className="catalog-item__category">
            <strong>Category:</strong> {product.category}
          </div>
          <div className="catalog-item__price">
            <strong>Price:</strong> $ {product.price}
          </div>
          <div className="catalog-item__description">
            <h4>Description</h4>
            {product.description}
          </div>
          <Link to={{ pathname: '/catalog' }} className="btn btn-info">
            Back to catalog
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CatalogItem
