import "../assets/css/login.css";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  loginWithEmailPassword,
  registerWithEmailPassword,
  signInWithGoogle,
} from "../config/auth";
import { useState } from "react";

const Login = ({ expand }) => {
  const [user] = useAuthState(auth);
  const [register, setRegister] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    console.log(e);
    let msg = "";
    try {
      msg = await loginWithEmailPassword(data.email, data.password);
      console.log(msg);
      if (msg.code) {
        throw new Error(msg);
      }
    } catch (error) {
      setData({ ...data, message: msg.name + " : " + msg.code, vis: false });
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    let msg = await registerWithEmailPassword(data.email, data.password);
    setData({ ...data, message: msg.name + " : " + msg.code });
  };
  const handleLoginWithGoogle = async (e) => {
    let msg = await signInWithGoogle(data.email, data.password);
    console.log(msg);
    setData({ ...data, message: msg.displayName + " : " + msg.uid });
  };
  return (
    <div
      className={`__logincontainer  ${
        expand ? "__logincontainerexpand" : "__logincontainercollapse"
      }`}
    >
      <div
        className="w-100"
        style={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#ccc",
          // borderBottom: "solid 1px #ccc",
          padding: "0 0 0 0",
        }}
      >
        {register ? "REGISTER" : "LOGIN"}
      </div>
      <div className="__loginform">
        <form className="w-100" onSubmit={handleSubmit}>
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="enter your email here"
            onChange={handleChange}
          />
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="your password here"
            onChange={handleChange}
          />
          {!register ? (
            <div className="__loginbutton">
              <button className="btn btn-primary btn-sm" onClick={handleSubmit}>
                LOGIN
              </button>
              <button
                className="btn btn-light btn-sm"
                onClick={() => setRegister(true)}
              >
                REGISTER NOW
              </button>
            </div>
          ) : (
            <div className="__loginbutton">
              <button
                className="btn btn-primary btn-sm"
                onClick={handleRegister}
              >
                REGISTER
              </button>
              {/* Have an account?{" "} */}
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setRegister(false)}
              >
                LOGIN
              </button>
            </div>
          )}
        </form>
        <p style={{ fontSize: "16px", color: "red" }}>{data.message}</p>
        <div
          className="w-100"
          style={{ position: "relative", marginBottom: "15px" }}
        >
          <div
            className="w-100"
            style={{ borderBottom: "solid 1px #ccc" }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              translate: "-50% -50%",
              background: "white",
              padding: "0 15px",
              borderRadius: "3px",
            }}
          >
            or
          </div>
        </div>
        <button
          className="w-100 btn btn-google btn-light"
          onClick={handleLoginWithGoogle}
        >
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" />
          Signin Using Google
        </button>
      </div>
    </div>
  );
};

export default Login;
