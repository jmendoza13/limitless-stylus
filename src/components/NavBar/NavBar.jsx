import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css"


export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark p-md-3 mx-auto">
      <div className="container-fluid">
      <a className="navbar-brand">Limitless Stylus</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav justify-content-end">
      <Link to='/' className="navitem text-white">Home</Link>
      &nbsp;  &nbsp;
      <Link to='/ProductsDetails' className="navitem text-white">Product Details</Link>
      &nbsp;  &nbsp;
      <Link to='/OnlineShop' className="navitem text-white">Online Shop</Link>
      &nbsp;  &nbsp;
      <Link to='/orders' className="navitem text-white">Order History</Link>
      &nbsp;  &nbsp;
      <Link to='' onClick={handleLogOut} className="navitem text-white">Log Out</Link>
      </ul>
      </div>
      </div>
    </nav>
  );
}