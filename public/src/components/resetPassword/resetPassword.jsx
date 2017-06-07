import React, {PropTypes} from 'react';
import {browserHistory, Link} from 'react-router';
import resetPass from '../../actions/resetPasswordAction.js';
import {connect} from 'react-redux';
import Status from '../loading/loading.jsx'
let type = '';
let message = '';
let green = '#4ad86a';
let show = {display: 'none'};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      user_id: '',
      token: ''
    };
  }
  valid() {
    message = '';
    type = 'spinningBubbles';
    show = {display: 'block'};
    if (this.state.password.length) {
      this.props.resetPassAction(this.state)
      this.setState({password: ''})
    }
  }
  componentWillMount() {
    const split = this.props.location.search.split('=');
    const token = split[2];
    const user_id = split[1].split('&')[0]
    this.setState({user_id: user_id, token: token})

  }
  changePassword(ev) {
    this.setState({password: ev.target.value});
  }
  render() {
    var text = '';
    message = this.props.resetPassStore.msg
    if (message === 'Success! Your password has been changed.') {
      text = 'Go to login page'
    }
    if(message){
      show = {display: 'none'};
    }
    return (
      <section className='form-wrp signin'>
        <div className='overlay'></div>
        <img src={require('../../../img/IMG_1925.jpg')}/>
        <div className='container'>
          <div className='row'>
            <div className='
              col-sm-offset-3
              col-sm-6
              col-md-offset-4
              col-md-4
              wrapper'>
              <div className='form'>
                <h1>Reset your password</h1>
                <div className='form-group'>
                  <input type='password'
                    value={this.state.newPass}
                    className='form-control'
                    placeholder='New password'
                    onChange={this.changePassword.bind(this)}/>
                </div>
                <p className='error'>{message}</p>
                <Status type={type} color={green} show={show}/>
                <button type='submit'
                  className='btn btn-success'
                  onClick={this.valid.bind(this)}>
                  Submit
                </button>
                <p className='link'>
                  <Link to='/' activeClassName='active'>
                    {text}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (store) => {
  return {resetPassStore: store.resetPassword}
}

const mapDispatchToProps = () => {
  return {
    resetPassAction: (data) => {
      resetPass(data)
    }
  }
}

const resetPassword = connect(mapStateToProps, mapDispatchToProps)(ResetPassword)

export default resetPassword;
