import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";

export default function ProtectedRoute({ children }){
    const { user } = useContext(UserContext);
    console.log("Checking protected route:");
    console.log("user",user);

    // If there is no user logged in (i.e. stored in state) then redirect to login
    if(!user){
        console.log("redirecting to login");
        return(
            <Redirect to="/login" />
        )
    }

    return(children)
}