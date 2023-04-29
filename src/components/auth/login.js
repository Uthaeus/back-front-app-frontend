import { useEffect } from "react";

function Login() {

    useEffect(() => {
        fetch("http://localhost:3000/users/sign_in")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log('login', error);
            });
    }, []);

    return (
        <div>
            <h1>Login</h1>
        </div>
    );
}

export default Login;

// /users/sign_out    DELETE