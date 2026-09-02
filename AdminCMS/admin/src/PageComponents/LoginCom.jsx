import { useState } from 'react';
import { useNavigate ,Link, useLocation } from 'react-router-dom';
import { Email, Password, Username } from '../Components/Inputs.jsx';
import { RegisterApi, LoginApi } from '../Api_Connections/userApi.js';
import { TokenManager } from '../Models/ManegeToken.js';

function LoginForm() {
  const Token = new TokenManager();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleSubmit = async (e) => {
    await LoginApi({ email, password, isRunning, setIsRunning, e, Token, navigate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Email email={email} setEmail={setEmail} />
      <Password password={password} setPassword={setPassword} />
      <button type="submit" disabled={isRunning}>
        {isRunning ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleSubmit = async (e) => {
    await RegisterApi({ email, username, password, isRunning, setIsRunning, e });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Username username={username} setUsername={setUsername} />
      <Email email={email} setEmail={setEmail} />
      <Password password={password} setPassword={setPassword} />

      <button type="submit" disabled={isRunning}>
        {isRunning ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  );
}

function Nav(){
  const location = useLocation();

  if (location.pathname === '/dashboard') {
    return null;
  }
 if(location.pathname ==='/login' || location.pathname ==='/signup' )
  return (<>
  <nav>
   <Link to="/login" >
          Login
        </Link>
        <Link to="/signup">
          Sign Up
        </Link>
        </nav>
        </>
  )
  

}
export { LoginForm, RegisterForm , Nav };