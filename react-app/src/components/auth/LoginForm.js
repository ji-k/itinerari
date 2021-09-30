import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    await dispatch(login('jikyung@gmail.com', 'hire_me'));

    let path = `/dashboard`;
    history.push(path);
  }

  const signUp = () => {
    let path = `/sign-up`;
    history.push(path);
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <div className="login-form__outer-container">
        <div className="login-form__inner-container">
          <div className="login-form-itinerari">itinerari</div>
          <form onSubmit={onLogin}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div>
              {/* <label htmlFor='email'>Email</label> */}
              <input
                name='email'
                type='text'
                placeholder='xyz@gmail.com'
                value={email}
                onChange={updateEmail}
                className="login-form-input"
              />
            </div>
            <div>
              {/* <label htmlFor='password'>Password</label> */}
              <input
                name='password'
                type='password'
                placeholder='password'
                value={password}
                onChange={updatePassword}
                className="login-form-input"
              />
              <div>
                <button type='submit' className='login-form-login-button'>Login</button>
              </div>

              <div className="login-form-flex-me">
                <a className="demo-login-page" onClick={demoLogin}>Demo User</a>

                <a className="account-prompt" onClick={signUp}>Sign Up</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
