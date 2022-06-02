import { Link } from 'react-router-dom';
import { router } from '../../lib/router';

const Footer = () => {
  return (
    <footer>
      <ul>
        {router.map(({ name, link }) => (
          <li key={name}>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
