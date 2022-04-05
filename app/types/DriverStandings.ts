import Constructor from './Constructor';
import Driver from './Driver';

interface DriverStandings {
  season: string;
  round: string;
  DriverStandings: {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: Driver;
    Constructors: Constructor[];
  }[];
}

export default DriverStandings;
