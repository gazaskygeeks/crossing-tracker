import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/homePage';
import TripsPage from './components/trips/tripsPage';
import SignupPage from './components/signup/signupPage';
import SigninPage from './components/signin/signinPage';
import CreateTrip from './components/createTrip/createTrip';
import TripDetails from './components/tripDetails/tripDetails';
import SuccessPage from './components/success/successPage';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={SigninPage} />
    <Route path="trips" component={TripsPage} />
    <Route path="signup" component={SignupPage} />
    <Route path="home" component={HomePage} />
    <Route path="createtirp" component={CreateTrip} />
    <Route path="tripDetails/:id" component={TripDetails} />
    <Route path="success" component={SuccessPage} />
  </Route>
);
