import React,{PropTypes} from 'react';
import { browserHistory, Link } from 'react-router';
import  login  from '../../actions/signinActions';
import { connect } from 'react-redux';
import Status from '../loading/loading.jsx'
let type='';
let message ='';
let green = '#4ad86a';
class SigninPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  valid(){
    message ='';
    type = 'spinningBubbles';
    if (this.state.email.length && this.state.password.length) {
      this.props.sginin(this.state)
      this.setState({email: '', password: ''})
    }
  }
  changeEmail(ev) {
    this.setState({email: ev.target.value});
  }
  changePassword(ev) {
    this.setState({password: ev.target.value});
  }
  render() {
    if(this.props.signin.statusCode === 401){
      message=  'Email or password not correct';
      type ='';
    }
    else if (this.props.signin.statusCode === 403){
      message = 'Your registration request has not been approved yet ';
      type ='';
    }

    return (
      <section className='form-wrp signin'>
        <div className='overlay'></div>
        <img src={require('../../../img/IMG_1925.jpg')} />
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
              <div className='form'>
                <h1>Member login</h1>
                <div className='form-group'>
                  <input
                    type='email'
                    value={this.state.email}
                    className='form-control'
                    placeholder='Email'
                    onChange={this.changeEmail.bind(this)}
                    />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    value={this.state.password}
                    className='form-control'
                    placeholder='Password'
                    onChange={this.changePassword.bind(this)}
                    />
                </div>
                <p className='error'>{message}</p>
                <Status type={type} color={green}/>
                <button
                  type='submit'
                  className='btn btn-success'
                  onClick={this.valid.bind(this)}
                  >
                  Sign In
                </button>
                <p>
                  <Link to='/signup' activeClassName='active'>
                    You can create new acount
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
  return { signin: store.signin }
}

const mapDispatchToProps = () => {
  return {
    sginin  : (data) => {
      login(data)
    }
  }
}

const sginin = connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninPage)

export default sginin;
