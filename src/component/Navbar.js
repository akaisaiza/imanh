import '../Navrbar.css';
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="#" className="logo">LOGO</a>
        <input type='checkbox' id='toggler' />
        <label for="toggler"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg></label>
        <div className="menu">
          <ul className="list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
