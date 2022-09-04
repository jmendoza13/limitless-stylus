import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css"

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <Link to='/' className="navitem">Home</Link>
      &nbsp; | &nbsp;
      <Link to='/ProductsDetails'>Product Details</Link>
      &nbsp; | &nbsp;
      <Link to='/Shop'>Online Shop</Link>
      &nbsp; | &nbsp;
      <Link to='/orders/new'>New Order</Link>
      &nbsp; | &nbsp;
      <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}