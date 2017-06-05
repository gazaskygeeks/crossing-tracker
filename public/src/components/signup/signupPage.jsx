import React from 'react';
import PropTypes from 'prop-types';
import register from '../../actions/signupActions';
import {connect} from 'react-redux';
import getOrgs from '../../actions/getOrgsAction';
import SelectOrgs from './selectOrgs.jsx';
import Status from '../loading/loading.jsx'
let type='';
let message ='';
let blue = '#1569ef';
let nameMsg = '';
let emailMsg = '';
let passMsg = '';
let phoneMsg = '';
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
    const status = ev.target.value.trim();
    if(status.length < 5){
      nameMsg = 'Username should be more than 4 characters';
      type ='';
    }else if (status.length > 25) {
      nameMsg = 'Username should be less than 25 characters';
      type ='';
    }else{
      nameMsg = '';
      type ='';
    }
  }

  changeEmail(ev) {
    this.setState({email: ev.target.value});
    const status = ev.target.value.trim();
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(status) != true){
      emailMsg = 'Email is not valid';
      type ='';
    }else{
      emailMsg = '';
      type ='';
    }
  }
  changePassword(ev) {
    this.setState({password: ev.target.value});
    const status = ev.target.value.trim();
    if(status.length < 6){
      passMsg = 'Password should be more than 5 characters';
      type ='';
    }else{
      passMsg = '';
      type ='';
    }
  }

  changePhone(ev) {
    this.setState({phone: ev.target.value});
    const status = ev.target.value.trim();
    if(status.length < 6){
      phoneMsg = 'Phone no. should be more than 5 characters';
      type ='';
    }else if (status.length > 15) {
      phoneMsg = 'Phone should be less than 15 characters';
      type ='';
    }else{
      phoneMsg = '';
      type ='';
    }
  }

  changeOrg(ev) {
    this.setState({org_id: ev.target.value});
  }

  valid(event) {
    event.preventDefault();
    message ='';
    type = 'spinningBubbles';
    this.props.sginup(this.state);
  }

  render() {

    if(this.props.signup.statusCode === 409){
      message=  'User is already registered';
      type ='';
      // this.props.signup.statusCode = '';

    }
    else if (this.props.signup.statusCode === 400){
      message = 'Fill in the inputs';
      type ='';
      // this.props.signup.statusCode = '';

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
              <form className='form' onSubmit={this.valid.bind(this)}>
                <div className='form-group'>
                  <input type='text'
                    className='form-control'
                    placeholder='Full name'
                    value={this.state.username}
                    onChange={this.changeName.bind(this)}
                    />
                  <p className='error'>{nameMsg}</p>
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={this.changeEmail.bind(this)}
                    />
                    <p className='error'>{emailMsg}</p>
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.changePassword.bind(this)}
                    />
                  <p className='error'>{passMsg}</p>
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Phone number'
                    value={this.state.phone}
                    onChange={this.changePhone.bind(this)}
                    />
                  <p className='error'>{phoneMsg}</p>
                </div>
                <SelectOrgs
                  options={this.props.orgs}
                  value={this.state.org_id}
                  change={this.changeOrg.bind(this)}
                  />
                  <Status type={type} color={blue}/>
                  <p className='error'>{message}</p>
                <button
                  type="submit"
                  className='btn btn-primary'
                  action='submit'
                  >
                  Sign up
                </button>
              </form>
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
