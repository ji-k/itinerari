import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
// import User from './components/User';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import ItineraryPage from './components/Itinerary';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  if (false && ItineraryPage) {
    return
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}
        <ProtectedRoute path='/dashboard' exact={true} >
          <Dashboard />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/itineraries/:userId' exact={false} >
          <ItineraryPage />
        </ProtectedRoute> */}
        <Route path='/' exact={true} >
          <LandingPage />
        </Route>
        {/* <Route path='*'>
          <NotFound />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
