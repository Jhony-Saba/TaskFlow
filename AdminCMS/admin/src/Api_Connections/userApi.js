
 
 
 async function RegisterApi ({email,username,password,isRunning,setIsRunning,e}){
        e.preventDefault();
        if(! email|| !username || ! password)
    if(isRunning) return;
setIsRunning(true);
     try {
      const response = await fetch("http://localhost:8000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          email,
          role: "admin",
        }),
       
      });

      const data = await response.json();
          
      if (!response.ok) {
        setIsRunning(false);
        throw new Error(data.message || "Registration failed");

      }
 
      alert("Registration successful");
      setIsRunning(false);
      console.log(data);
      
    } catch (error) {
      alert(error.message);
       setIsRunning(false);
    }


}
async function LoginApi({email,password,isRunning,setIsRunning,e,Token}){
    
  
  e.preventDefault();
 if(isRunning)return;
  setIsRunning(true);
    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
         setIsRunning(false);
        throw new Error(data.message || "Login failed");
      }

      console.log(data);
      alert(typeof data.Tokenaccess); 
      Token.setToken(data.Tokenaccess); 
      setIsRunning(false);

    } catch (error) {
      alert(error.message);
       setIsRunning(false);
    }

}

export {RegisterApi,LoginApi}