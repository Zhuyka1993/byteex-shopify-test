import './CustomizeButton.css'
import arrowRight from '../../assets/arrow-right.svg'

function CustomizeButton() {
  return (
    <a href="#" className="customize-button">
      <span>Customize Your Outfit</span>
      <img src={arrowRight} alt="" className="customize-button__arrow" />
    </a>
  )
}

export default CustomizeButton