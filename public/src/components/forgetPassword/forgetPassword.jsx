import React,{PropTypes} from 'react';
import { browserHistory, Link } from 'react-router';
import  forgetPasswordAction  from '../../actions/forgetPasswordAction.js';
import { connect } from 'react-redux';
import Status from '../loading/loading.jsx'
let type='spinningBubbles';
let message ='';
let green = '#4ad86a';
class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }
  valid(){
    if (this.state.email.length) {
      this.props.submit(this.state)
      this.setState({email: ''})
    }
  }
  changeEmail(ev) {
    this.setState({email: ev.target.value});
  }
  render() {
    message = this.props.password.msg
console.log('this.props.password.msg:',message);
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
                <h1>Get the reset link</h1>
                <div className='form-group'>
                  <input
                    type='email'
                    value={this.state.email}
                    className='form-control'
                    placeholder='Enter your email address here'
                    onChange={this.changeEmail.bind(this)}
                    />
                </div>
                  <p className='error'>{message}</p>
                <button
                  type='submit'
                  className='btn btn-success'
                  onClick={this.valid.bind(this)}
                  >
                  Submit
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
  return { password: store.forgetPassword }
}

const mapDispatchToProps = () => {
  return {
    submit  : (data) => {
      forgetPasswordAction(data)
    }
  }
}

const forgetPassword = connect(
  mapStateToProps,
  mapDispatchToProps
)(Password)

export default forgetPassword;
