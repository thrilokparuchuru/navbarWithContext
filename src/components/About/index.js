// Write your code here
import './index.css'
import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const bgColor = isDarkTheme ? 'dark-theme' : 'light-theme'
      const textColor = isDarkTheme ? 'light-color' : 'dark-color'
      return (
        <div>
          <Navbar />
          <div className={`about-content-container ${bgColor}`}>
            <img alt="about" className="about-image" src={imgUrl} />
            <h1 className={textColor}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
