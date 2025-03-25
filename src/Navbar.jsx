import { Link } from 'react-router-dom';
import {UserAuth} from './AuthContext';

const Navbar = () => {

  const{user} = UserAuth()
  
  return (
    <nav className="navbar">
      <img src= "https://static.wikia.nocookie.net/logopedia/images/2/2f/MiHoYo_2012.svg"/>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/characters">Characters</Link>
        {user?.displayName ? <Link to="/account">Account</Link> : <Link to="/signin">Sign in</Link>}
      </div>
    </nav>
  );
}
 
export default Navbar;