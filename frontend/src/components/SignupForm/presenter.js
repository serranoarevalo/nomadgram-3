import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from 'prop-types';
import formStyles from "shared/formStyles.scss";


const SignupForm = props => (
    <div className={formStyles.formComponent}>
      <h3 className={formStyles.signupHeader}>
      Sign up to see photos and videos from your friends.</h3>
      <button className={formStyles.button}>
        <Ionicon icon="logo-facebook" fontSize="20px" color="white" /> Log in with
        Facebook
      </button>
      <span className={formStyles.divider}>or</span>
      <form className={formStyles.form}>
        <input 
          type="email" 
          placeholder="Email" 
          className={formStyles.textInput} 
          name="email"
          value={props.emailValue}
          />
        <input type="text" 
          placeholder="Full Name" 
          className={formStyles.textInput} 
          name="name"
          value={props.nameValue}
          />
        <input
          type="text"
          placeholder="Username"
          className={formStyles.textInput}
          name="username"
          value={props.usernameValue}
        />
        <input
          type="password"
          placeholder="Password"
          className={formStyles.textInput}
          name="password"
          value={props.passwordValue}
        />
        <input type="submit" value="Sign up" className={formStyles.button} />
      </form>
      <p className={formStyles.terms}>
        By signing up, you agree to our <span>Terms & Privacy Policy</span>.
      </p>
    </div>
  );

  SignupForm.propTypes = {
    emailValue: PropTypes.string.isRequired,
    nameValue: PropTypes.string.isRequried,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handelInputChange: PropTypes.func.isRequired
  }

  SignupForm.contextType = {
    t: PropTypes.func.isRequired
  }

  export default SignupForm;