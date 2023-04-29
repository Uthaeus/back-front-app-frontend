import { useEffect } from "react";

function Signup() {

    useEffect(() => {
        fetch("http://localhost:3000/users/sign_up")
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
                console.log('signup', error);
            });
    }, []);

    return (
        <div>
            Signup
        </div>
    );
}

export default Signup;