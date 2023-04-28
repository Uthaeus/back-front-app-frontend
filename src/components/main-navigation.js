import { NavLink } from "react-router-dom";

function MainNavigation() {

    return (
        <div>
            <div>
                <h3>Meetup App</h3>
            </div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/meetups">Meetups</NavLink>
            </div>
        </div>
    );
}

export default MainNavigation;