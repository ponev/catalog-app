import './loader.scss'

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div
        className="spinner-border text-info"
        style={{ width: '7rem', height: '7rem' }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
export default Loader
