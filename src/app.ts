import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
  ctx.body = 'hello world';
});

app.use(router.routes());

app.listen(9000);
console.log(`server running on port 9000`);
