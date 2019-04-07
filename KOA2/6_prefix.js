const Koa=require('koa');
const app=new Koa();
const Router=require('koa-router');
const router=new Router({
    prefix:'/weichuang'
});


router.get('/abc',(ctx,next)=>{
    ctx.body='weichuang';
});

router.get('/test',(ctx,next)=>{
    ctx.body='TEST';
})

app.use(router.routes());
app.use(router.allowedMethods());





app.listen(3001,()=>{
    console.log('服务开启成功在3001端口')
})