import './index.css'

const FaqItem = props => {
  const {itemDetails, changeClicked} = props
  const {id, questionText, answerText, clicked} = itemDetails

  const sendClickedChange = () => {
    changeClicked(id)
  }

  const displayButton = !clicked ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
      className="image"
      alt="plus"
    />
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
      className="image"
      alt="minus"
    />
  )

  return (
    <li className="faq-item-container">
      <div className="heading-container">
        <h1 className="heading1">{questionText}</h1>
        <button className="button" type="button" onClick={sendClickedChange}>
          {displayButton}
        </button>
      </div>
      <hr />
      {clicked ? <p className="para">{answerText}</p> : null}
    </li>
  )
}

export default FaqItem
