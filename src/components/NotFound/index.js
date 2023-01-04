// Write your code here
import './index.css'
import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? 'dark-theme' : 'light-theme'
      const textColor = isDarkTheme ? 'light-color' : 'dark-color'
      return (
        <div>
          <Navbar />
          <div className={`not-found-content-container ${bgColor}`}>
            <img
              alt="not found"
              className="not-found-image"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            />
            <h1 className={textColor}>Lost Your Way?</h1>
            <p className={textColor}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
