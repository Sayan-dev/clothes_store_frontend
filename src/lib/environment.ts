const getEnvironmentName = () => {
  const environmentName = window.location.hostname.toLowerCase().match('localhost')
    ? 'LOCAL'
    : 'PROD';

  return environmentName;
};

export default getEnvironmentName;
