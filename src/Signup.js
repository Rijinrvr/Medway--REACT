import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(null);
    if (password !== passwordConf) {
      setErr("Please enter the same password");
    }

    var user = {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConf,
    };

    axios
      .post("https://medicalstore.mashupstack.com/api/register", user)
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form">
      <h1 className="form-heading">Signup</h1>
      <form className="form-body">
        <label htmlFor="username">Name:</label>
        <input
          className="textbox"
          type="text"
          id="name"
          name="name"
          value={name}
          onInput={(e) => setName(e.target.value)}
          required
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          className="textbox"
          type="email"
          id="email"
          name="email"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
          required
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          className="textbox"
          type="password"
          id="password"
          name="password"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
          required
        ></input>
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          className="textbox"
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={passwordConf}
          onInput={(e) => setPasswordConf(e.target.value)}
          required
        ></input>
        <button className="submitbutn" type="submit" onClick={handleSubmit}>
          Signup
        </button>
        {err && <div className="err">{err}</div>}
      </form>
    </div>
  );
};

export default Signup;
