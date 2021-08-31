import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setValidationErrors(data)
      }
    }
    if (password !== confirmPassword) {
      setValidationErrors(['Passwords do not match.']);
      return;
    } else {
      return
    }
  };

  // TODO: Email Validation (form currently submits without '@')

  const login = () => {
    let path = `/login`;
    history.push(path);
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className='signup-form__outer-container'>
        <div className='signup-form__inner-container'>
          <div className="signup-form-itinerari">itinerari</div>
          <form onSubmit={onSignUp}>
            <div>
              {validationErrors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div>
              {/* <label>User Name</label> */}
              <input
                type='text'
                name='username'
                onChange={updateUsername}
                value={username}
                placeholder='Username'
                className="signup-form-input"
              ></input>
            </div>
            <div>
              {/* <label>Email</label> */}
              <input
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
                placeholder='Email'
                className="signup-form-input"
              ></input>
            </div>
            <div>
              {/* <label>Password</label> */}
              <input
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
                placeholder='Password'
                className="signup-form-input"
              ></input>
            </div>
            <div>
              {/* <label>Confirm Password</label> */}
              <input
                type='password'
                name='confirm_password'
                onChange={updateConfirmPassword}
                value={confirmPassword}
                required={true}
                placeholder='Confirm Password'
                className="signup-form-input"
              ></input>
            </div>
            <button type='submit' className="signup-form-signup-button">Sign Up</button>

            <div>
              <span className="signup-form-already">Already have an account?  </span><span className="account-prompt" onClick={login}>Login</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
