

import "./Header.css"
import NetflixLogo from "../../assets/Images/NetflixLogo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Header = () => {
  return (
    <>
      <div className="header-outer-container">
        <div className="header-Container">
          <div className="leftSide-Container">
            <ul>
              <li>
                <img
                  className="logoimage"
                  src={NetflixLogo} alt="Netflix Logo" />
              </li>
              <li>Home</li>
              <li>TVShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Brows by Language</li>
            </ul>
          </div>

          <div className="RightSide-Container">
            <ul>
              <li><SearchIcon /></li>
              <li><NotificationsIcon /></li>
              <li><AccountCircleIcon /></li>
              <li><KeyboardArrowDownIcon /></li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header