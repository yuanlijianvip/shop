const Koa=require('koa')
const app=new Koa();

app.use(async ctx=>{
    //叠加数据
    let data="";

    //监听data事件，收到表单的数据的时候就会执行
    ctx.req.on('data',chunk=>{
        data+=chunk;//二进制
    });

    //接收表单提交数据完成后
    ctx.req.on('end',()=>{
        data=decodeURI(data);
        console.log(data);
    });

   ctx.body="123";
});

app.listen(3001,()=>{
    console.log('服务开启成功在3001端口');
});