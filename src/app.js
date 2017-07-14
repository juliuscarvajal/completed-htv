import Koa from 'koa';
import { parse, validate } from './request';

const requestPayload = require('./test/request.json');
const port = process.env.PORT || 3000;
const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  if (validate(requestPayload)) {
    ctx.body = parse(requestPayload);
  } else {
    ctx.body = {
      error: "Could not decode request: JSON parsing failed"
    };
  }
});

app.use(ctx => {
  console.log('>>>>eeee');
});

app.listen(port);
