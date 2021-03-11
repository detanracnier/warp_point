import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";

export default function ProtectedRoute({ children }){
    const { user } = useContext(UserContext);

    // If there is no user logged in (i.e. stored in state) then redirect to login
    if(!user){
        return(children)
    }

    return(
        <Redirect to={"/"+user.type+"/dashboard"} />
    )
}