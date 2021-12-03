module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a05cd8d62d4c25385dfe6cc29be8696f'),
  },
});
