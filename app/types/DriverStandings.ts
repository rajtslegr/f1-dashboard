import type Constructor from './Constructor';
import type Driver from './Driver';

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
