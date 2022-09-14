import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <main>
      <br></br>
      <h1>Welcome to Limitless Stylus</h1>
      <imgage src="https://i.imgur.com/B2cBBGP.jpg"></imgage>
      <br></br>
      { showLogin ?
          <LoginForm setUser={setUser} />
          :
          <SignUpForm setUser={setUser} />
      }
      <button type="submit" class="btn btn-primary btn-lg" button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Sign Up' : 'Log In'}
      </button>
    </main>
  );
}