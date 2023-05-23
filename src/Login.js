import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./store/authSlice";
import checkGuest from "./checkguests";

const Login = () => {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(null);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    setErr(null);
    axios
      .post("https://medicalstore.mashupstack.com/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        var token = res.data.token;
        console.log(token);
        var user = { email: email, token: token };
        dispatch(setUser(user));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErr("Invalid username or password");
      });
  };

  return (
    <div className="form">
      <h1 className="form-heading">Log In to Your Account</h1>

      <form className="form-body">
        <label htmlFor="email">Email:</label>
        <input
          className="textbox"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          className="textbox"
          type="password"
          id="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submitbutn" type="submit" onClick={onSubmit}>
          Login
        </button>
        {err && <div className="err">{err}</div>}
      </form>
      <p className="log-para">
        Don't have an account yet? <a href="./Signup">Signup</a>
      </p>
    </div>
  );
};

export default checkGuest(Login);
