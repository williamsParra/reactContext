import { useEffect } from "react";
import { useAppContextData } from "../context/AppContext"

export default function Banner(){
    const { state } = useAppContextData();

    useEffect(() => {
        console.log("Banner recarga info")
    } ,[state])
    return (
        <div>
            <p>banner</p> 
            { state ? "true" : "false"}
        </div>
    )
}