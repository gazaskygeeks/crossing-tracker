import {signinReducer} from '../reducers/signinReducer.js';
import {createTripReducer} from '../reducers/createTripReducer.js';
import {createStore,combineReducers} from  'redux';
import {signupReducer} from '../reducers/signupReducer.js';
import {homeTripsReducer} from '../reducers/getTripsByDate.js';
const reducers = combineReducers({
  signin: signinReducer,
  createTrip: createTripReducer,
  signup: signupReducer,
  homeTrips:homeTripsReducer
});
var store = createStore(
  reducers,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
