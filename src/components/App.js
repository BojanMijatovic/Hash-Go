import React, { useState, useEffect } from 'react';
import '../style/index.scss';
import database from '../firebase/firebase';
import Login from './Login/Login';
import Terminal from './Terminal/Terminal';

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
    setPhoneNumber('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
    setPhoneNumberError('');
  };

  const handleLogin = () => {
    clearErrors();
    database
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            setEmailError(error.message);
            break;
          default: {
            setEmailError(error.message);
          }
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    database
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/email-already-in-use':
            setEmailError(error.message);
            break;
          case 'auth/weak-password':
            setPasswordError(error.message);
            break;
          default:
            setPasswordError(error.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(error.message);
            break;
        }
      });
  };

  const handleLogOut = () => {
    database.auth().signOut();
  };

  const handlePhoneNumber = () => {
    database
      .auth()
      .signInWithPhoneNumber(phoneNumber)
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-phone-number':
            setPhoneNumberError(error.message);
            break;
          default:
            setPhoneNumberError(error.message);
            break;
          case 'auth/missing-phone-number':
            setPhoneNumberError(error.message);
            break;
          case 'auth/quota-exceeded':
          case 'auth/user-disabled':
          case 'auth/operation-not-allowed':
            setPhoneNumberError(error.message);
            break;
        }
      });
  };

  useEffect(() => {
    const authListener = () => {
      database.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInputs();
          setUser(user);
        } else {
          setUser('');
        }
      });
    };
    authListener();
  }, []);

  return (
    <div className='App'>
      {user ? (
        <Terminal user={user} handleLogOut={handleLogOut} email={user.email} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          setPhoneNumber={setPhoneNumber}
          handlePhoneNumber={handlePhoneNumber}
          phoneNumber={phoneNumber}
          phoneNumberError={phoneNumberError}
        />
      )}
    </div>
  );
};

export default App;
