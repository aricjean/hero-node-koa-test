const Koa = require('koa');

// ����һ��Koa�����ʾweb app����:
const app = new Koa();

// �����κ�����app�����ø��첽������������
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});
