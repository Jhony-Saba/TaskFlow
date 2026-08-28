
import{Email,Password,Username} from'../Components/Inputs'
import {  useState } from "react";
import {RegisterApi,LoginApi} from "../Api_Connections/userApi"


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleSubmit = async (e) => {
    await LoginApi({email,password,isRunning,setIsRunning,e})
  };

  return (
    <form onSubmit={handleSubmit}>
       <Email email={email} setEmail={setEmail}/>
      <Password password={password} setPassword={setPassword}/>

      <button type="submit">Login</button>
    </form>
  );
}

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRunning, setIsRunning] = useState(false);


  const handleSubmit = async (e) => {
 await RegisterApi({email,username,password,isRunning,setIsRunning,e});

  };

  return (
    <form onSubmit={handleSubmit}>
      
      <Username username={username} setUsername={setUsername}/>
      <Email email={email} setEmail={setEmail}/>
      <Password password={password} setPassword={setPassword}/>

      <button type="submit">Sign Up</button>
    </form>
  );
}



export { LoginForm, RegisterForm };