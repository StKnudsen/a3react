import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./store/userSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function loginUser() {
    const response = await fetch("http://localhost:9090/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    const data = await response.json();

    dispatch(login(data));
    navigate("/");
  }

  return (
    <div>
      <h1>Login</h1>

      <form>
        <label htmlFor="username">
          Username &apos;admin&lsquo;
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <br />
        </label>
        <label htmlFor="password">
          Password &apos;secret&lsquo;
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <br />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            loginUser();
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
