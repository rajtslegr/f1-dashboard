import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";
import RaceTable from '~/types/RaceTable';

export const loader: LoaderFunction = async () => {
  const res = await fetch("https://ergast.com/api/f1/current.json");
  const json = await res.json();
  const parsedData = json.MRData.RaceTable
  return parsedData;
}

export default function Index() {
  const races = useLoaderData<RaceTable>();

  return (
    <div>
      <div>
        <h1>
          Formula 1 Dashboard
        </h1>
        <p>Season: {races.season}</p>
        {races.Races.map((race) =>
          <div key={`${race.season}-${race.round}`}>
            <h2>{race.raceName}</h2>
            <p>{race.date}</p>
            <p>{race.Circuit.circuitName}</p>
          </div>
        )}
      </div>
    </div>
  );
}
