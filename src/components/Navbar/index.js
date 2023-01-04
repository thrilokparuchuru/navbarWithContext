// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const bgColor = isDarkTheme ? 'dark-theme' : 'light-theme'
      const textColor = isDarkTheme ? 'light' : 'dark'
      const theme = isDarkTheme ? 'dark' : 'light'
      const changeTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={`navbar ${bgColor}`}>
          <img
            src={`https://assets.ccbp.in/frontend/react-js/website-logo-${theme}-theme-img.png`}
            alt="website logo"
            className="website-logo"
          />
          <ul>
            <li>
              <Link to="/" className={`home-link ${textColor}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`about-link ${textColor}`}>
                About
              </Link>
            </li>
          </ul>

          <button type="button" data-testid="theme" onClick={changeTheme}>
            <img
              alt="theme"
              src={`https://assets.ccbp.in/frontend/react-js/${textColor}-theme-img.png`}
              className="theme-image"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
