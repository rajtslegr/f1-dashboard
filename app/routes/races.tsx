import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import RaceCard from '~/components/RaceCard';
import config from '~/config/Config';
import type RaceTable from '~/types/RaceTable';

export const loader: LoaderFunction = async () => {
  const res = await fetch(`${config.baseUrl}${config.endpoints.races}`);
  const json = await res.json();
  const parsedData = json.MRData.RaceTable;

  return parsedData;
};

const Races = () => {
  const races = useLoaderData<RaceTable>();

  return (
    <div className="flex flex-col space-y-16 self-center xl:px-32">
      <h1 className="text-5xl font-bold">Races</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        {races.Races.map((race) => (
          <RaceCard
            key={`${race.season}-${race.round}`}
            name={race.raceName}
            round={race.round}
            date={race.date}
            circuit={race.Circuit.circuitName}
            country={race.Circuit.Location.country}
          />
        ))}
      </div>
    </div>
  );
};

export default Races;
