import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
// import { login } from '../../store/session';
import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks
  if (sessionUser) {
    sessionLinks = (
      <div className="nav-logout__right">
        <LogoutButton user={sessionUser} className='logout-button' />
      </div>
    )
  } else {
    sessionLinks = (
      <div className="nav-login-sign-up__right">
        <NavLink to='/login' exact={true} activeClassName='active' className="nav-login">
          Login
        </NavLink>

        <NavLink to='/sign-up' exact={true} activeClassName='active' className="nav-sign-up">
          Sign Up
        </NavLink>
      </div>
    )
  }

  return (
    <nav>
      <div className="nav__outer-container">
        <NavLink to='/' exact={true} activeClassName='active' className="nav-itinerari__middle">
          itinerari
        </NavLink>
        <div className="nav-session__right">{sessionLinks}
        </div>
      </div>
    </nav >
  );
}

export default NavBar;
