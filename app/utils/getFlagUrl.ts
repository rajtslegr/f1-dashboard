import config from '~/config/Config';
import countryIds from '~/constants/countryIds';

const getFlagUrl = (country: string): string => {
  const baseFlagUrl = config.flagsBaseUrl;
  const flagUrl = `${baseFlagUrl}/${countryIds[country]}`;

  return flagUrl;
};

export default getFlagUrl;
