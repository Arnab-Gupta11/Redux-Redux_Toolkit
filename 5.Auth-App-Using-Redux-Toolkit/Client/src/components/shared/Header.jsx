import { Link } from "react-router-dom";
// import logo from "../../../assets/logo.svg";
// import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  //   const { user, logOut } = useContext(AuthContext);

  //   const handleLogOut = () => {
  //     logOut()
  //       .then(() => {})
  //       .catch((error) => console.log(error));
  //   };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/about">About</Link>{" "}
      </li>
      {/* {user?.email ? ( */}
      <>
        <li>
          <Link to="/bookings">My Bookings</Link>
        </li>
        <li>
          <button>Log out</button>
        </li>
      </>
      {/* //   ) : ( */}
      <li>
        {" "}
        <Link to="/login">Login</Link>{" "}
      </li>
      {/* //   )} */}
    </>
  );
  return (
    <div className="navbar bg-slate-200 py-5 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <h2 className="text-3xl font-bold">Auth App</h2>
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
