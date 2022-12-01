import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // subscribe to the state
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span className="logo">REDUX STORE</span>

      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          cart
        </Link>
        <span className="cartCount">Cart item: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
