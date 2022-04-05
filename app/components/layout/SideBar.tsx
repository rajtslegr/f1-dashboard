import { Link } from '@remix-run/react';

const SideBar: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link to="races">Races</Link>
      </li>
      <li>
        <Link to="standings/driver">Driver Standings</Link>
      </li>
    </ul>
  </nav>
);

export default SideBar;
