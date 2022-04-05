import { Link } from '@remix-run/react';

const NavigationBar = () => (
  <ul>
    <li>
      <Link to="races">Races</Link>
    </li>
    <li>
      <Link to="standings/driver">Driver Standings</Link>
    </li>
  </ul>
);

export default NavigationBar;
