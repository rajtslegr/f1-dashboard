const config = {
  baseUrl: 'https://ergast.com/api/f1',
  endpoints: {
    races: '/current.json',
    standings: {
      driver: '/current/driverStandings.json',
      constructor: '/current/constructorStandings.json',
    },
  },
  flagsBaseUrl: 'https://countryflagsapi.com/png',
};

export default config;
