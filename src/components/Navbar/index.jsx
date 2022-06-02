import { Link } from 'react-router-dom';
import { router } from '../../lib/router';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <main className='navbar__container'>
        <ul>
          {router.map(({ name, link }) => (
            <li key={name}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </nav>
  );
};

export default Navbar;
