import { useEffect } from "react";
import { useAppContextData } from "../context/AppContext";

export default function Porlets(){
    const { state } = useAppContextData();
    useEffect(() => {
        if(state){
            console.log("Portlet stado de contexto activo")
        }
    } ,[state])
    return (
        <div>
            <p>Portlet</p> 
            { state ? "true" : "false"}
        </div>
    )
}