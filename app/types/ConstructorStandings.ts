import type Constructor from './Constructor';

interface DriverStandings {
  season: string;
  round: string;
  ConstructorStandings: {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Constructor: Constructor;
  }[];
}

export default DriverStandings;
