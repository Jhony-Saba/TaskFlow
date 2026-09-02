
 
 
 async function RegisterApi({ email, username, password, isRunning, setIsRunning, e }) {
  e.preventDefault();
  if (!email || !username || !password) return;
  if (isRunning) return;

  setIsRunning(true);

  try {
    const response = await fetch('http://localhost:8000/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
        email,
        role: 'admin',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    alert('Registration successful');
    console.log(data);
  } catch (error) {
    alert(error.message);
  } finally {
    setIsRunning(false);
  }
}

async function LoginApi({ email, password, isRunning, setIsRunning, e, Token, navigate }) {
  e.preventDefault();
  if (isRunning) return;

  setIsRunning(true);

  try {
    const response = await fetch('http://localhost:8000/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    Token.setToken(data.Tokenaccess);
    navigate('/dashboard');
    window.location.href = '/dashboard';
  } catch (error) {
    alert(error.message);
  } finally {
    setIsRunning(false);
  }
}

export { RegisterApi, LoginApi };