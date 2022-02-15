import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = this.props
    this.state = {faqsList}
  }

  componentDidMount() {
    console.log('componentDidMount Called')
    const {faqsList} = this.props
    const updatedFaqsList = faqsList.map(eachItem => ({
      ...eachItem,
      clicked: false,
    }))
    this.setState({faqsList: updatedFaqsList})
  }

  changeClicked = id => {
    console.log(id)
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, clicked: !eachItem.clicked}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {faqsList} = this.state
    console.log('Render Called')
    console.log(faqsList)

    return (
      <div className="main-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-container">
          {faqsList.map(eachItem => (
            <FaqItem
              key={eachItem.id}
              itemDetails={eachItem}
              changeClicked={this.changeClicked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
