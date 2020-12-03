const config = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return {
        HOST: 'local.ecological.earth',
        API_URL: 'http://ecological.earth.api/api/v1',
      };

    case 'production':
      return {
        HOST: 'app.ecological.earth',
        API_URL: 'https://ecologicalearth.herokuapp.com/api/v1',
      };

    default:
      return {};
  }
};

export default config();
