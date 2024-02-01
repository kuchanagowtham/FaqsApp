// Write your code here.
import './index.css'

const FaqItem = props => {
  const {istrue, changestate, faqList} = props
  const {questionText, answerText} = faqList

  const alttext = istrue ? 'minus' : 'plus'

  const buttonEl = istrue
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const onclickMinus = () => {
    changestate()
  }

  const ShowAnswer = () => (
    <div>
      <hr className="hr" />
      <p className="ans">{answerText}</p>
    </div>
  )

  return (
    <li className="li-component">
      <div className="q-button">
        <h1 className="question">{questionText}</h1>
        <button onClick={onclickMinus} className="plus-button" type="button">
          <img src={buttonEl} alt={alttext} />
        </button>
      </div>
      <div className="ans-container">{istrue && ShowAnswer()}</div>
    </li>
  )
}

export default FaqItem
