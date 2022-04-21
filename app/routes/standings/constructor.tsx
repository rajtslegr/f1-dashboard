import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import config from '~/config/Config';
import type ConstructorStandingsInterface from '~/types/ConstructorStandings';

export const loader: LoaderFunction = async () => {
  const res = await fetch(
    `${config.baseUrl}${config.endpoints.standings.constructor}`,
  );
  const json = await res.json();
  const parsedData = json.MRData.StandingsTable.StandingsLists[0];

  return parsedData;
};

const ConstructorStandings = () => {
  const constructorStandings = useLoaderData<ConstructorStandingsInterface>();

  return (
    <div className="flex flex-col space-y-16 self-center xl:px-32">
      <h1 className="text-5xl font-bold">Drivers Standings</h1>
      <table className="max-w-2xl table-auto">
        <thead className="rounded-xl bg-f1-red text-left text-white">
          <tr>
            <th className="w-2 rounded-tl-xl px-6 py-4">#</th>
            <th className="py-4">Constructor</th>
            <th className="py-4">Nationality</th>
            <th className="py-4">Points</th>
            <th className="rounded-tr-xl py-4">Wins</th>
          </tr>
        </thead>
        <tbody className="shadow">
          {constructorStandings.ConstructorStandings.map(
            ({ Constructor, position, points, wins }) => (
              <tr key={Constructor.constructorId} className="border-b">
                <td className="text-center">{position}</td>
                <td>{Constructor.name}</td>
                <td>{Constructor.nationality}</td>
                <td>{points}</td>
                <td>{wins}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ConstructorStandings;
