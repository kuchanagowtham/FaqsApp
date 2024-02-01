// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {istrue: false}

  changestate = () => {
    this.setState(prevState => ({istrue: !prevState.istrue}))
  }

  render() {
    const {istrue} = this.state
    const {faqsList} = this.props
    return (
      <div className="main-bg">
        <ul className="ul-component">
          <h1>FAQs</h1>
          {faqsList.map(each => (
            <FaqItem
              faqList={each}
              key={each.id}
              istrue={istrue}
              changestate={this.changestate}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
