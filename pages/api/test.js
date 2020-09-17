export const config = {
  api: {
    externalResolver: true,
  },
}

const connect = require('connect');
const app = connect()

app.use(function middleware1(req, res, next) {
  // middleware 1
  console.log('middleware 1');

  next();
});