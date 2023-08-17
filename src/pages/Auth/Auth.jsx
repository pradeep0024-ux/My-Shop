import React from "react";
import "./Auth.css";
import Logo from "../../assets/logo/LOGON.png";
import { Link } from "react-router-dom";
function Auth() {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" style={{ width: "100px", height: "100px" }} />
        <div className="WebName">
          <h1 style={{fontFamily:"sans-serif", font:"bold"}}>CONNECTS</h1>
          <h6>Lets connect with the <b>CONNECTS</b> and share our ideas</h6>
        </div>
      </div>

      {/* <Signup /> */}
      <Login/>
    </div>
  );
}
// login page start
function Login() {
  return (
    <div className="a-right">
      <form action="" className="InfoForm AuthForm">
        <h3>Log in</h3>
        <div>
          <input
            type="text"
            placeholder="User Name"
            className="InfoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="InfoInput"
            name="password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>Don't have account Sign Up!</span>
        </div>
        <button className="Button btn-signup" type="submit">
          <Link to='/' className="link-a">Login</Link>
        </button>
      </form>
    </div>
  );
}
// login page end
function Signup() {
  return (
    <div className="a-right">
      <form action="" className="InfoForm AuthForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="InfoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="InfoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            className="InfoInput"
            name="username"
            placeholder="user name"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="InfoInput"
            name="password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="InfoInput"
            name="confirmpassword"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>Already have account. Login!</span>
        </div>
        <button className="Button btn-signup" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Auth;
