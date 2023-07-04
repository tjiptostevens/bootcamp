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
    <div className={`__logincontainer${expand ? "expand" : ""}`}>
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
                onClick={(e) => {
                  e.preventDefault();
                  setRegister(true);
                }}
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
                onClick={(e) => {
                  e.preventDefault();
                  setRegister(false);
                }}
              >
                LOGIN
              </button>
            </div>
          )}
        </form>
        {data.message ? (
          <p
            style={{
              fontSize: "14px",
              color: "white",
              padding: "5px 10px",
              margin: "0",
              background: "crimson",
              borderRadius: "3px",
            }}
          >
            {data.message}
          </p>
        ) : (
          ""
        )}
        <div
          className="w-100"
          style={{
            position: "relative",
            marginBottom: "15px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "white",
          }}
        >
          <div
            className="w-100"
            style={{ borderBottom: "solid 1px #ccc" }}
          ></div>
          <div style={{ padding: "0 15px" }}>or</div>
          <div
            className="w-100"
            style={{ borderBottom: "solid 1px #ccc" }}
          ></div>
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
