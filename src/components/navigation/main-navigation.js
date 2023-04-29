import { NavLink, useNavigate } from "react-router-dom";

function MainNavigation() {
    const navigate = useNavigate();

    function logoutHandler() {
        // fetch("http://localhost:3000/users/logout", {
        //     method: "DELETE"
        // })
        // .then((response) => {
        //     if (response.ok) {
        //         console.log(response);
        //     }
        // })
        // .catch((error) => {
        //     console.log("logout", error);
        // });
        // navigate("/");
        console.log('logout');
        navigate("/");
    }

    return (
        <div>
            <div>
                <h3>Meetup App</h3>
            </div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/meetups">Meetups</NavLink>
                <NavLink to="/auth/login">Log In</NavLink>
                <NavLink to="/auth/signup">Sign Up</NavLink>
                <button onClick={logoutHandler}>Logout</button>
            </div>
        </div>
    );
}

export default MainNavigation;