
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/session';
import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks
  if (sessionUser) {
    sessionLinks = (
      <LogoutButton user={sessionUser} className='logout-button' />
    )
  } else {
    sessionLinks = (
      <div>
        <NavLink to='/login' exact={true} activeClassName='active'>
          Login
        </NavLink>

        <NavLink to='/sign-up' exact={true} activeClassName='active'>
          Sign Up
        </NavLink>
      </div>
    )
  }

  return (
    <nav>

      <NavLink to='/' exact={true} activeClassName='active'>
        Home
      </NavLink>

      <div>{sessionLinks}</div>


    </nav >
  );
}

export default NavBar;
