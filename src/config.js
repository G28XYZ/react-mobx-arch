/**
 * Настройки сервисов
 */
const config = {
  store: {
    log: true,

    modules: {
      session: {
        tokenHeader: "X-Token",
      },
    },
  },

  api: {
    baseUrl: "https://rocky-wildwood-04132.herokuapp.com",
  },
};

export default config;
