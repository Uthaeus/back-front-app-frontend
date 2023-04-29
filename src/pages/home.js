import { Link } from 'react-router-dom';

function HomePage() {

    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Meetup App</h1>
            <p className="home-description">This is a simple app to create and manage meetups</p>
            <Link to='/meetups' className="home-link">Get Started</Link>
        </div>
    );
}

export default HomePage;