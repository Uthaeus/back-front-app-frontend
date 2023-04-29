import { useState } from "react";

import Login from "./login";
import Signup from "./signup";
import MainNavigation from "../navigation/main-navigation";

function AuthPage() {
  const [loginToggel, setLoginToggel] = useState(true);

  return (
    <div>
      <MainNavigation />

      <h1>Auth Page</h1>

      {loginToggel ? <Login /> : <Signup />}

      <button className="btn" onClick={() => setLoginToggel(!loginToggel)}>
        {loginToggel ? "Signup" : "Login"}
      </button>
    </div>
  );
}

export default AuthPage;
