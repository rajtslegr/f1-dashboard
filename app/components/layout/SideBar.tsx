import NavigationLink from '../NavigationLink';

const SideBar: React.FC = () => (
  <div className="hidden w-96 flex-col p-4 sm:flex">
    <div className="text-2xl font-bold">Formula 1 Dashboard</div>
    <nav className="flex flex-col space-y-2 pt-20">
      <NavigationLink to="races">Races</NavigationLink>
      <NavigationLink to="standings/driver">Driver Standings</NavigationLink>
    </nav>
  </div>
);

export default SideBar;
