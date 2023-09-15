module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME", "leewardslope"),
        api_key: env("CLOUDINARY_KEY", "783694461985968"),
        api_secret: env("CLOUDINARY_SECRET", "S0-Evp6iezzQU8jaLjqhYcqpXJg"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
