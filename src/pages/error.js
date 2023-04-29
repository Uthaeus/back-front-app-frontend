import { Link } from "react-router-dom";

function ErrorPage() {

    return (
        <div className="error-container">
            <h1>Error Page</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/">Home</Link>
        </div>
    );
}

export default ErrorPage;