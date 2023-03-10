import React, { useState } from "react";
import { registerUser } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const onChange = (ev) => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value });
  };

  const register = (ev) => {
    ev.preventDefault();
    dispatch(registerUser(credentials));

    if (auth.id) {
      navigate("/", { replace: true });
    }
  };

  return (
    <div>
      <h2>Create an Account</h2>
      <form onSubmit={register} className='account-form'>
        <input
          placeholder="username"
          value={credentials.username}
          name="username"
          onChange={onChange}
        />
        <input
          placeholder="password"
          name="password"
          value={credentials.password}
          onChange={onChange}
        />
        <button type="submit">Register</button>
      </form>
      <Link to="/">Log In</Link>
    </div>
  );
};

export default Register;
