import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import HomePage from './components/home/homePage.jsx';
import TripsPage from './components/trips/tripsPage.jsx';
import SignupPage from './components/signup/signupPage.jsx';
import SigninPage from './components/signin/signinPage.jsx';
import CreateTrip from './components/createTrip/createTrip.jsx';
import TripDetails from './components/tripDetails/tripDetails.jsx';
import SuccessPage from './components/success/successPage.jsx';
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
