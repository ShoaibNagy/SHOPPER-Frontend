import { useState } from 'react';
import './css/LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState('Sign Up');
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const login = async () => {
    console.log("Login Funciton Executed", formData);
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => { response.json() }).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  }

  const signup = async () => {
    console.log("Sign Up Function Eecuted", formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => { response.json() }).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === 'Sign Up' ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Full Name" required /> : <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" required />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" required />
        </div>
        <button onClick={() => { state === 'Login' ? login() : signup() }}>Continue</button>
        {state === 'Sign Up' ?
          <p className="loginsignup-login">ALready have an account? <span onClick={() => { setState('Login') }}>Login here</span></p>
          :
          <p className="loginsignup-signup">New to SHOPPER? <span onClick={() => { setState('Sign Up') }}>Sign Up here</span></p>}
        <div className="loginsignup-agree">
          {state === 'Sign Up' ? <><input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the Terms of Use & the Provacy Policy</p></> : <></>}
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
