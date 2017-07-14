import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import api from './api';

const port = process.env.PORT || 3000;
const app = new Koa();

app.use(bodyParser());
app.use(api());
app.listen(port);
