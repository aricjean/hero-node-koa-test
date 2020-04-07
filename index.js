const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();
var port = process.env.PORT ? process.env.PORT : 12355;
const MongoClient = require('mongodb').MongoClient;
async function mongo() {
return new Promise((resolve, reject) => {

const uri = "mongodb+srv://admin:zxcasdqwe123@cluster0-zvimr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
	reject("我是链接 mongo 失败时返回的！");
});
resolve("我是链接 mongo 成功后返回的！！！");
});
}
async function test() {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
		   resolve("这是延时处理来的");
	   }, 1000);
	})
}
// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    // ctx.response.body = '<h1>Hello, koa2!</h1>port: ' + port;
	// mongo();
	// let data = await test();
	let data = await mongo();
	ctx.response.body = data;
	setTimeout(() => {
		ctx.response.body = 'hello world';
	}, 0);
 	// ctx.response.body = 'hello world!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';
    // ctx.response.body = `
    //  <h1>Hello, koa2!</h1>
    //  <p>server started at port: ${port}</p>
    // `;
});

app.listen(port, () => {
  console.log("server started at port:", port);
});
