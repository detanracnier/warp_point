import React, { useState } from "react";
import Login from "./Login";

export default function Authenticate() {
    const [isRegistration, setIsRegistration] = useState(false);

    const handleIsRegistration = (e) => {
        console.log("click");
        setIsRegistration(!isRegistration);
    }

    if (isRegistration){
        return (
            <div>
                <p>register</p>
                <div onClick={() => handleIsRegistration()} >Login</div>
            </div>
        );
    }
    else {
        return (
            <div>
                    <p>Login</p>
                    <Login />
                    <div onClick={() => handleIsRegistration()} >Register</div>
            </div>
        );
    }

}