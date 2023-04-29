import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [username, setUsername] = useState("");

    function inputChangeHandler(event) {
        const { id, value } = event.target;

        switch (id) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "passwordConfirmation":
                setPasswordConfirmation(value);
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

        // fetch("http://localhost:3000/users/", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ user: { email, password, password_confirmation: passwordConfirmation, username } }),
        // })
        // .then((response) => {
        //     if (response.ok) {
        //         console.log(response);
        //     }
        // })
        // .catch((error) => {
        //     console.log("signup", error);
        // });
        console.log('signup');
    }

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            onChange={inputChangeHandler}
            value={email}
          />
        </div>

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

        <div className="form-group">
          <label htmlFor="passwordConfirmation" className="form-label">
            Password Confirmation
          </label>
          <input
            type="password"
            id="passwordConfirmation"
            className="form-control"
            onChange={inputChangeHandler}
            value={passwordConfirmation}
          />
        </div>

        <button className="btn btn-primary" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
