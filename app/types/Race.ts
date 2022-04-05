import Circuit from './Circuit';
import TimeStamp from './TimeStamp';

interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: TimeStamp;
  SecondPractice: TimeStamp;
  ThirdPractice: TimeStamp;
  Qualifying: TimeStamp;
}

export default Race;
