import './Login.styles.scss';
import Modal from '../Modal/Modal';

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignUp,
  hasAccount,
  setHasAccount,
  emailError,
  passwordError,
  setPhoneNumber,
  phoneNumber,
  phoneNumberError,
}) => {
  return (
    <section className='login'>
      <form className='loginContainer' onSubmit={(e) => e.preventDefault()}>
        <Modal />
        <label>Korisničko ime</label>
        <input type='text' autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
        {emailError && <p className='errorMsg'>{emailError}</p>}
        <label>Šifra</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        {passwordError && <p className='errorMsg'>{passwordError}</p>}
        {!hasAccount ? (
          <>
            <label>Telefon</label>
            <input type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            {phoneNumberError && <p className='errorMsg'>{phoneNumberError}</p>}
          </>
        ) : null}

        <div className='btnContainer'>
          {hasAccount ? (
            <>
              <button className='loginBtn' onClick={handleLogin}>
                Prijava
              </button>

              <p>
                Nemaš nalog ?<span onClick={() => setHasAccount(!hasAccount)}>Registruj se</span>
              </p>
            </>
          ) : (
            <>
              <button className='loginBtn' onClick={handleSignUp}>
                Registruj se
              </button>
              <p>
                Imaš nalog ?<span onClick={() => setHasAccount(!hasAccount)}>Prijavi se</span>
              </p>
            </>
          )}
        </div>
      </form>
    </section>
  );
};

export default Login;
