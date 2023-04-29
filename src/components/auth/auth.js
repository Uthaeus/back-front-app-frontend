import { useState } from "react";
import { Outlet } from "react-router";

import MainNavigation from "../navigation/main-navigation";

function AuthPage() {
  const [loginToggel, setLoginToggel] = useState(true);

  return (
    <div>
      <MainNavigation />

      <Outlet />
    </div>
  );
}

export default AuthPage;
