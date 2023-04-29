import { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function inputChangeHandler(event) {
    const { id, value } = event.target;

    switch (id) {
      case "password":
        setPassword(value);
        break;
      case "username":
        setUsername(value);
        break;
      default:
        break;
    }
  }

  function submitHandler(event) {
    event.preventDefault();

    // fetch("http://localhost:3000/users/login", {
    //   method: "POST",
    //   body: JSON.stringify({ user: { password, username } }),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log(response);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("login", error);
    //   });
    console.log('login');
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="username"
            id="username"
            className="form-control"
            onChange={inputChangeHandler}
            value={username}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            onChange={inputChangeHandler}
            value={password}
          />
        </div>

        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

// /users/sign_out    DELETE
