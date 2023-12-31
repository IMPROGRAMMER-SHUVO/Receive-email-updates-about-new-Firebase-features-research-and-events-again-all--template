import { Link } from "react-router-dom";



const Header = () => {
    return (
        <div>
<button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"></button>
<div className="navbar bg-primary text-primary-content">
  <a className="btn btn-ghost normal-case text-xl">REBOOK</a>
<Link to='/'     className="btn btn-ghost normal-case text-xl">Home</Link>
<Link to='/Login'    className="btn btn-ghost normal-case text-xl">Login</Link>
<Link to='/Register' className="btn btn-ghost normal-case text-xl"> Register</Link>
</div>
        </div>
    );
};

export default Header;