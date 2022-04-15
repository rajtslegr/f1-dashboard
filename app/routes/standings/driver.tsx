import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import config from '~/config/Config';
import type DriverStandingsInterface from '~/types/DriverStandings';

export const loader: LoaderFunction = async () => {
  const res = await fetch(
    `${config.baseUrl}${config.endpoints.standings.driver}`,
  );
  const json = await res.json();
  const parsedData = json.MRData.StandingsTable.StandingsLists[0];

  return parsedData;
};

const DriverStandings = () => {
  const driverStandings = useLoaderData<DriverStandingsInterface>();

  return (
    <div>
      <div>
        <h1>Stadings</h1>
        <p>Season: {driverStandings.season}</p>
        {driverStandings.DriverStandings.map(
          ({ Driver, Constructors, position }) => (
            <div key={`${Driver.code}`}>
              <h2>
                {position}. {Driver.givenName} {Driver.familyName}
              </h2>
              <p>{Constructors[0].name}</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default DriverStandings;
