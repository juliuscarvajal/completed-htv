import Router from 'koa-router';
import post from './post';
import get from './get';

const router = new Router();
router
  .post('/', post)
  .get('/', get)


export default () => router.routes();
