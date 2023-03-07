import './index.css'

const BrowserItem = props => {
  const {historyList, deleteItem} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const onDeleteButton = () => {
    deleteItem(id)
  }
  return (
    <li className="destination-item">
      <div className="browser-start">
        <p className="browser-time">{timeAccessed}</p>
        <div className="browser-middle">
          <img src={logoUrl} alt="domain logo" className="destination-image" />
          <p className="browser-title">{title}</p>
          <p className="name">{domainUrl}</p>
        </div>
      </div>
      <div className="browser-end">
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteButton}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="browser-delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserItem
