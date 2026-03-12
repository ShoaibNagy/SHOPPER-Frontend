import './css/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">ALready have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the Terms of Use & the Provacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
