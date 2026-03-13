import {React,useContext,useState} from "react";
import UserContext from "../Context/userContext";
function Login(){
    const[userName,setuserName]=useState(null)
    const[password,setPassword]=useState()
    const{setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({userName,setuserName})
    }
  
    return(
        <>
            <div>
                <input 
                type="text"
                placeholder="enter username" 
                value={userName}
                onChange={(e)=>setuserName(e.target.value)}

                />
                <input 
                type="password"
                placeholder="enter password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}

                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )


}
export default Login;