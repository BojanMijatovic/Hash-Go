const Terminal = ({ handleLogOut }) => {
  return (
    <section className='hero'>
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogOut}>Logout</button>
      </nav>
    </section>
  );
};

export default Terminal;