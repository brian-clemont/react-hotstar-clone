import { useState } from 'react';
import useAuth from './useAuth';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const handleLogin = () => {
    login(username, password);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <h3>Use Any Credentials</h3>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage