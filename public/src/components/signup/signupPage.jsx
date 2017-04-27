import React from 'react';
import  register  from '../../actions/signupActions';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      phone: '',
      org: ''
    };
  }

  changeName(ev) {
    this.setState({name: ev.target.value});
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
    this.setState({org: ev.target.value});
  }

  valid(){
    this.props.sginup(this.state);
    this.setState(
      {
        name: '',
        email: '',
        password: '',
        phone: '',
        org: ''
      }
      );
    browserHistory.push('/home');
  }

  render() {
    return (
      <section className='form-wrp signup'>
        <div className='container'>
          <div className='row'>
            <div
              className='
              col-sm-offset-3
              col-sm-6
              col-md-offset-4
              col-md-4
              wrapper'
              >
              <h1>Sign up</h1>
              <div className='form'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Full Name'
                    onChange={this.changeName.bind(this)}
                    />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                    onChange={this.changeEmail.bind(this)}
                    />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Password'
                    onChange={this.changePassword.bind(this)}
                    />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Phone Number'
                    onChange={this.changePhone.bind(this)}
                    />
                </div>
                <div className='form-group'>
                  <select
                    className='form-control'
                    onChange={this.changeOrg.bind(this)}
                    >
                    <option
                      disabled='disabled'
                      selected='selected'>
                      Organization
                    </option>
                    <option value='1'>Mercy Corps</option>
                    <option value='2'>UNRWA</option>
                    <option value='3'>HelpAge International</option>
                    <option value='4'>Handicap</option>
                  </select>
                </div>
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

const mapDispatchToProps = () => {
  return {
    sginup  : (data) => {
      register(data)
    }
  }
}

const sginup = connect(
  mapDispatchToProps
)(SignupPage)

export default sginup;
