import { useState } from 'react'
import validator from 'validator'

// import { useState } from "react";



function Email({ email, setEmail }) {
  const [emailStatus, setEmailStatus] = useState("");

  const handleEmail = (e) => {
    const value = e.target.value;
    const result = validateEmail(value);

    setEmailStatus(result.message);

    if (!result.valid) {
      setEmail('');
      return result.message;
    }

    return result.message;
  };

  return (
    <>
      <input
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleEmail}
      />
      <p>{emailStatus}</p>
    </>
  );
}

function Password({ password, setPassword }) {
  const [passwordStatus, setPasswordStatus] = useState("");

  const handlePassword = (e) => {
    const value = e.target.value;
    const result = validatePassword(value);

    setPasswordStatus(result.message);

    if (!result.valid) {
  
      setPassword('');
      return result.message;
    }

    return result.message;
  };

  return (
    <>
      <input
        type="password"
        placeholder="Enter your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={handlePassword}
      />
      <p>{passwordStatus}</p>
    </>
  );
}

function Username({ username, setUsername }) {
  const [usernameStatus, setUsernameStatus] = useState("");

  const handleUsername = (e) => {
    const value = e.target.value;
    const result = validateUsername(value);

    setUsernameStatus(result.message);

    if (!result.valid) {
      setUsername('');
      return result.message;
    }

    return result.message;
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onBlur={handleUsername}
      />
      <p>{usernameStatus}</p>
    </>
  );
}

function validateEmail(value) {
  if (validator.isEmpty(value)) {
    return { valid: false, message: 'Email is required' };
  }

  if (!validator.isEmail(value)) {
    return { valid: false, message: 'Invalid email format' };
  }

  return { valid: true, message: '' };
}

function validatePassword(value) {
  if (validator.isEmpty(value)) {
    return { valid: false, message: 'Password is required' };
  }

  if (value.length < 6) {
    return { valid: false, message: 'Password must be at least 6 characters' };
  }
  if( validator.isStrongPassword(value)){
    return { valid: false, message: 'Bad Password' }
  }

  return { valid: true, message: '' };
}

function validateUsername(value) {
  if (validator.isEmpty(value)) {
    return { valid: false, message: 'Username is required' };
  }

  if (value.length < 3) {
    return { valid: false, message: 'Username must be at least 3 characters' };
  }

  return { valid: true, message: '' };
}

export { Email, Password, Username };