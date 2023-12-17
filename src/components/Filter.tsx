import { useAppContextData } from "../context/AppContext";

export default function Filter(){
    const {state, handleReload } = useAppContextData();
    return (
        <div>
            <p>filter</p>
            { state ? "true" : "false"}
            <br></br>
            <button onClick={handleReload}>cambiar estado</button>
        </div>
    )
}