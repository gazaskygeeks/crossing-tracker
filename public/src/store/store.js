import {signinReducer} from '../reducers/signinReducer.js';
import {createTripReducer} from '../reducers/createTripReducer.js';
import {createStore,combineReducers} from  'redux';
import {signupReducer} from '../reducers/signupReducer.js';
import {homeTripsReducer} from '../reducers/getTripsByDate.js';
import {tripDetailsReducer} from '../reducers/tripDetailsReducer.js';
import {getOrgsReducer} from '../reducers/getOrgsReducer.js';
import {disApprovedUsers} from '../reducers/getDisApprovedUsers.js';
import {geLocationsReducer} from '../reducers/getLocationsReducer.js';
import {joinTripReducer} from '../reducers/joinTripReducers.js';
import {userTripsReducer} from '../reducers/myTripsReducer.js';
import {unjoinTripReducer} from '../reducers/unjoinTripReduce.js';
import {getAllTripsReducer} from '../reducers/getAllTripsReducer.js';
import {joinApproveReducer} from '../reducers/approveJoinReducer.js';
import {forgetPasswordReducer} from '../reducers/forgetPasswordReducer.js';
import {resetPasswordReducer} from '../reducers/resetPasswordReducer.js';
import {UserTypeReducer} from '../reducers/userTypeReducer.js';
import {updateTripsReducer} from '../reducers/updateTripReducer.js';

const reducers = combineReducers({
  signin: signinReducer,
  createTrip: createTripReducer,
  signup: signupReducer,
  homeTrips: homeTripsReducer,
  tripDetails: tripDetailsReducer,
  orgs: getOrgsReducer,
  disApproved: disApprovedUsers,
  organizations: getOrgsReducer,
  locations: geLocationsReducer,
  joinTrip: joinTripReducer,
  userTrips: userTripsReducer,
  unjoinTrip: unjoinTripReducer,
  allTrips : getAllTripsReducer,
  aprroveJoin : joinApproveReducer,
  forgetPassword : forgetPasswordReducer,
  resetPassword : resetPasswordReducer,
  userType: UserTypeReducer,
  updateTrip: updateTripsReducer
});
var store = createStore(
  reducers,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
