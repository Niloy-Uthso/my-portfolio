import { Link, NavLink, useLocation, useNavigate } from 'react-router';


const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleSkillClick = () => {
    if (location.pathname === '/') {
      // Already on home, just scroll
      const section = document.getElementById('skills');
      section?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home and scroll after mount
      navigate('/', { state: { scrollToSkills: true } });
    }
  };
  const handleProjectClick = () => {
  if (location.pathname === '/') {
    // Already on home, just scroll
    const section = document.getElementById('projects');
    section?.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Navigate to home and scroll after render
    navigate('/', { state: { scrollToProjects: true } });
  }
};

const handleContactClick = () => {
  navigate('/', { state: { scrollToContact: true } });
};
  const navItems = (
    <>
      <li><NavLink to="/" className="hover:text-primary">Home</NavLink></li>
<li><NavLink to="/about" className="hover:text-primary">About</NavLink></li>
<li>
  <button onClick={handleSkillClick} className="hover:text-primary">Skills</button>
</li>

<li>
  <button onClick={handleProjectClick} className="hover:text-primary">
    Projects
  </button>
</li>
<li><button onClick={handleContactClick} className="hover:text-primary">Contact</button></li>

    </>
  );

  return (
    <div className="navbar bg-slate-100 shadow-md fixed top-0 z-50">
      <div className="navbar-start ml-3">
        <Link to="/" className="flex items-center">
  <img src="https://i.ibb.co/4ZRYP0GH/Add-a-heading-2.png" alt="Niloy.dev Logo" className="h-10 w-auto" />
</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {navItems}
        </ul>
      </div>

      <div className="navbar-end lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
