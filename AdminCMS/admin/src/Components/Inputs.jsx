import { useState} from 'react'
import validator from 'validator'
import {Link} from 'react-router-dom'

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
  const [passwordDetails, setPasswordDetails] = useState([]);

  const handlePassword = (e) => {
    const value = e.target.value;
    const result = validatePassword(value);

    setPasswordStatus(result.message);
    setPasswordDetails(result.details || []);

    if (!result.valid) {
      setPassword('');
      return result.message;
    }

    return result.message;
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!value) {
      setPasswordStatus("");
      setPasswordDetails([]);
      return;
    }

    const result = checkPassword(value);
    setPasswordStatus(result.valid ? "" : result.message);
    setPasswordDetails(result.valid ? [] : result.details || []);
  };

  return (
    <>
      <input
        type="password"
        placeholder="Enter your Password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePassword}
      />
      {passwordStatus && <p>{passwordStatus}</p>}
      {passwordDetails.length > 0 && (
        <ol>
          {passwordDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ol>
      )}
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
  const result = inputCheck(value, 'Email');
  if (result) return result;

  if (!validator.isEmail(value)) {
    return { valid: false, message: 'Invalid email format' };
  }

  return { valid: true, message: '', details: [] };
}

function validatePassword(value) {
  const result = inputCheck(value, 'Password');
  if (result) return result;

  return checkPassword(value);
}

function validateUsername(value) {
  const result = inputCheck(value, 'Username');
  if (result) return result;

  if (value.length < 3) {
    return { valid: false, message: 'Username must be at least 3 characters' };
  }

  return { valid: true, message: '', details: [] };
}


function checkPassword(value) {
  const options = {
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  };

  const errors = [];

  // Run the built-in strong password check
  const isStrong = validator.isStrongPassword(value, options);

  // Manual checks to explain what failed
  if (value.length < options.minLength) {
    errors.push(`Password must be at least ${options.minLength} characters long`);
  }
  if ((value.match(/[a-z]/g) || []).length < options.minLowercase) {
    errors.push("Password must contain at least one lowercase letter");
  }
  if ((value.match(/[A-Z]/g) || []).length < options.minUppercase) {
    errors.push("Password must contain at least one uppercase letter");
  }
  if ((value.match(/[0-9]/g) || []).length < options.minNumbers) {
    errors.push("Password must contain at least one number");
  }
  if ((value.match(/[^A-Za-z0-9]/g) || []).length < options.minSymbols) {
    errors.push("Password must contain at least one symbol");
  }

  if (!isStrong) {
    return { valid: false, details: errors };
  }

  return { valid: true, message: "",details:[] };
}
function inputCheck(value, fieldName) {
  if (!fieldName) {
    fieldName = 'Field';
  }

  if (validator.isEmpty(value)) {
    return { valid: false, message: `${fieldName} is required`, details: [] };
  }
  if (validator.isNumeric(value)) {
    return { valid: false, message: `${fieldName} is invalid`, details: [] };
  }
  if (validator.isBoolean(value)) {
    return { valid: false, message: `${fieldName} is invalid`, details: [] };
  }
  if (validator.isEAN(value)) {
    return { valid: false, message: `${fieldName} is invalid`, details: [] };
  }

  return null;
}


function Navbar() {
  return (
    <div>
      <Link to="/login">
       Login
      </Link>
      <Link to="/signup">
      Sing Up
      </Link>
    </div>
  );
}
export { Email, Password, Username,Navbar };