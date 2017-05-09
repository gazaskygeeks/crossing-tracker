import React from 'react';
import PropTypes from 'prop-types';
import register from '../../actions/signupActions';
import {connect} from 'react-redux';
import getOrgs from '../../actions/getOrgsAction';
import SelectOrgs from './selectOrgs.jsx';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      phone: '',
      org_id: ''
    };
  }

  componentDidMount() {
    this.props.myorgs();
  }

  changeName(ev) {
    this.setState({username: ev.target.value});
  }

  changeEmail(ev) {
    this.setState({email: ev.target.value});
  }

  changePassword(ev) {
    this.setState({password: ev.target.value});
  }

  changePhone(ev) {
    this.setState({phone: ev.target.value});
  }

  changeOrg(ev) {
    this.setState({org_id: ev.target.value});
  }

  valid() {
    this.props.sginup(this.state);
    this.setState(
      {
        username: '',
        email: '',
        password: '',
        phone: '',
        org_id: ''
      }
    );
  }

  render() {
    var message ='';
    if(this.props.signup.statusCode === 409){
      message=  'User already registered';
    }
    else if (this.props.signup.statusCode === 400){
      message = 'Invalid inputs';
    }
    return (
      <section className='form-wrp signup'>
        <div className='container'>
          <div className='row'>
            <div className='
              col-sm-offset-3
              col-sm-6
              col-md-offset-4
              col-md-4
              wrapper'>
              <h1>Sign up</h1>
              <div className='form'>
                <div className='form-group'>
                  <input type='text'
                    className='form-control'
                    placeholder='Full Name'
                    value={this.state.username}
                    onChange={this.changeName.bind(this)}
                    />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={this.changeEmail.bind(this)}
                    />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.changePassword.bind(this)}
                    />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Phone Number'
                    value={this.state.phone}
                    onChange={this.changePhone.bind(this)}
                    />
                </div>
                <SelectOrgs
                  options={this.props.orgs}
                  value={this.state.org_id}
                  change={this.changeOrg.bind(this)}
                  />
                <p className='error'>{message}</p>
                <button
                  type='submit'
                  className='btn btn-primary'
                  onClick={this.valid.bind(this)}
                  >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


const mapStateToProps = (store) => {
  return {orgs: store.organizations,
    signup: store.signup}
}

const mapDispatchToProps = () => {
  return {
    myorgs: () => {
      getOrgs();
    },
    sginup: (data) => {
      register(data);
    }
  }
}

const Sginup = connect(mapStateToProps, mapDispatchToProps)(SignupPage)

export  {Sginup,SignupPage};
