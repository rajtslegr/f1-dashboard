const config = {
  baseUrl: 'https://ergast.com/api/f1',
  endpoints: {
    races: '/current.json',
    standings: {
      driver: '/current/driverStandings.json',
    },
  },
};

export default config;
