// Write your code here
import './index.css'
import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const bgColor = isDarkTheme ? 'dark-theme' : 'light-theme'
      const textColor = isDarkTheme ? 'light-color' : 'dark-color'
      return (
        <div>
          <Navbar />
          <div className={`home-content-container ${bgColor}`}>
            <img alt="home" className="home-image" src={imgUrl} />
            <h1 className={textColor}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
