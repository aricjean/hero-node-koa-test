const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();
var port = process.env.PORT ? process.env.PORT : 12355;
// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    // ctx.response.body = '<h1>Hello, koa2!</h1>port: ' + port;
    ctx.response.body = `
      <h1>Hello, koa2!</h1>
      <p>server started at port: ${port}</p>
    `;
});

app.listen(port, () => {
  console.log("server started at port:", port);
});
