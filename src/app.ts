import Koa from 'koa';
import Static from 'koa-static';
import path from 'path';

const app = new Koa();

app.use(Static(path.resolve(__dirname, '../client/build')));

const port = 9000;
app.listen(port);
console.log(`server running on port ${port}`);
