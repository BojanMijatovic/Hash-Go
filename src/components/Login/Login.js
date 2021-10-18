import './Login.styles.scss';

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
        <label>Username</label>
        <input type='text' autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
        {emailError && <p className='errorMsg'>{emailError}</p>}
        <label>Password</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        {passwordError && <p className='errorMsg'>{passwordError}</p>}
        {hasAccount ? (
          <></>
        ) : (
          <>
            <label>Phone</label>
            <input type='number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            {phoneNumberError && <p className='errorMsg'>{phoneNumberError}</p>}
          </>
        )}

        <div className='btnContainer'>
          {hasAccount ? (
            <>
              <button className='loginBtn' onClick={handleLogin}>
                Sign in
              </button>
              <p>
                Don`t have account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button className='loginBtn' onClick={handleSignUp}>
                Sign up
              </button>
              <p>
                Have account <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </form>
    </section>
  );
};

export default Login;
