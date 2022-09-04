import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <Link to='/'>Home</Link>
      &nbsp; | &nbsp;
      <Link to='/Products'>Product Details</Link>
      &nbsp; | &nbsp;
      <Link to='/Shop'>Online Shop</Link>
      &nbsp; | &nbsp;
      <Link to='/orders/new'>New Order</Link>
      &nbsp; | &nbsp;
      <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}