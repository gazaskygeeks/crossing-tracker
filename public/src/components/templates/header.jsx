import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import signout from '../../actions/signout.js';
import UserType from '../../actions/userTypeActions.js';
import { hashHistory } from 'react-router';

const Header = (props) => {
  const userType = props.userType;
  {props.GetUserType()}
  if(props.path != '/' && props.path != '/signup' && props.path != '/success' && props.path != '/forgetPassword'  && props.path != '/reset/'){
    if(userType === 2){
      return (
        <header>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-4 logo'>
                <img src='/public/img/logo.png' />
              </div>
              <div className='col-xs-8 nav-wrp'>
                <nav className='navbar navbar-right navbar-default'>
                  <div className='navbar-header'>
                    <button
                      type='button'
                      className='navbar-toggle collapsed'
                      data-toggle='collapse'
                      data-target='#bs-example-navbar-collapse-1'
                      aria-expanded='false'
                      >
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                      </button>
                  </div>

                  <div
                    className='collapse navbar-collapse'
                    id='bs-example-navbar-collapse-1'
                    >
                    <ul className='nav navbar-nav'>
                      <li>
                        <Link to='/home' activeClassName='active'>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to='/trips' activeClassName='active'>
                          My trips
                        </Link>
                      </li>
                      <li>
                        <Link to='/createtrip' activeClassName='active'>
                          Create trips
                        </Link>
                      </li>
                      <li>
                        <Link to='/adminpage' activeClassName='active'>
                          Admin page
                        </Link>
                      </li>
                      <li>
                        <button
                          className="sign-out btn btn-link"
                          onClick={signout}
                          >
                          Signout
                        </button>
                        </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      );
    }else{
      return (
        <header>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-4 logo'>
                <img src='/public/img/logo.png' />
              </div>
              <div className='col-xs-8 nav-wrp'>
                <nav className='navbar navbar-right navbar-default'>
                  <div className='navbar-header'>
                    <button
                      type='button'
                      className='navbar-toggle collapsed'
                      data-toggle='collapse'
                      data-target='#bs-example-navbar-collapse-1'
                      aria-expanded='false'
                      >
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                      </button>
                  </div>

                  <div
                    className='collapse navbar-collapse'
                    id='bs-example-navbar-collapse-1'
                    >
                    <ul className='nav navbar-nav'>
                      <li>
                        <Link to='/home' activeClassName='active'>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to='/trips' activeClassName='active'>
                          My trips
                        </Link>
                      </li>
                      <li>
                        <Link to='/createtrip' activeClassName='active'>
                          Create trips
                        </Link>
                      </li>
                      <li>
                        <button
                          className="sign-out btn btn-link"
                          onClick={signout}
                          >
                          Signout
                        </button>
                        </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      );
    }
  }
  return <div></div>;
};
const mapStateToProps = (store) => {
  return {
    userType: store.userType
  }
}
const mapDispatchToProps = () => {
  return {
    GetUserType: () => {
      UserType();
    }
  }
}

const HeaderCon = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderCon;
