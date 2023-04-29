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
        <div className="navigation-container">
            <div className="nav-title-wrapper">
                <h3>Meetup App</h3>
            </div>
            <div className="links-wrapper">
                <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                <NavLink to="/meetups" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Meetups</NavLink>
                <NavLink to="/auth/login" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Log In</NavLink>
                <NavLink to="/auth/signup" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Sign Up</NavLink>
                <button onClick={logoutHandler} className="nav-btn">Logout</button>
            </div>
        </div>
    );
}

export default MainNavigation;