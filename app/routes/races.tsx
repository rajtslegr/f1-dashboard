import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import config from '~/Config';
import RaceTable from '~/types/RaceTable';

export const loader: LoaderFunction = async () => {
  const res = await fetch(`${config.baseUrl}${config.endpoints.races}`);
  const json = await res.json();
  const parsedData = json.MRData.RaceTable;

  return parsedData;
};

const Races = () => {
  const races = useLoaderData<RaceTable>();

  return (
    <div>
      <div>
        <h1>Races</h1>
        <p>Season: {races.season}</p>
        {races.Races.map((race) => (
          <div key={`${race.season}-${race.round}`}>
            <h2>{race.raceName}</h2>
            <p>{race.date}</p>
            <p>{race.Circuit.circuitName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Races;
