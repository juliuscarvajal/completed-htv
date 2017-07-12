import Koa from 'koa';

const port = process.env.PORT || 3000;
const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  ctx.body = 'Hello World';
});

app.use(ctx => {
  console.log('>>>>eeee');
});

app.listen(port);
