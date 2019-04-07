const Koa=require('koa');
const app=new Koa();
const Router=require('koa-router');
const router=new Router();
router.get('/abc',(ctx,next)=>{
    console.log(ctx);
    console.log(next);
    ctx.body='weichuang';
});

app.use(router.routes());
app.use(router.allowedMethods());





app.listen(3001,()=>{
    console.log('服务开启成功在3001端口')
})