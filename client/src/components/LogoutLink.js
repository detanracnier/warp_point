import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

export default function LogoutLink(){
    const { setUser } = useContext(UserContext);

    const logOut = () => {
        localStorage.clear();
        setUser();
    }

    return(
        <div onClick={()=> logOut()} className="btn btn-outline-dark">Logout</div>
    )
}