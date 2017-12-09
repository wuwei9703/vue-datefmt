
//导入vue的核心包
import Vue from 'vue';


//导入app.vue的vue对象
import App from './App.vue';

//导入vue-router
import vueRouter from 'vue-router';
//将vueRouter绑定到vue对象上
Vue.use(vueRouter);


//导入路由规则定义的组件对象
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';
import home from './components/Home.vue';
import car from './components/shopcar/car.vue';
import comment from './components/subcom/comment.vue';
import photolist from './components/photo/photolist.vue';
import photoinfo from './components/photo/photoinfo.vue';
import goodslist from './components/goods/goodslist.vue';
import goodsinfo from './components/goods/goodsinfo.vue';
import goodsdesc from './components/goods/goodsdesc.vue';
import goodscomment from './components/goods/goodscomment.vue';
//导入css样式
import '../state/css/css.css';
import 'mint-ui/lib/style.min.css';



//定义路由规则

var router1 = new vueRouter({
    linkActiveClass:'mui-active',
    routes:[
            {path:'/goods/goodscomment/:id',component:goodscomment},
            {path:'/goods/goodsdesc/:id',component:goodsdesc},
            {path:'/goods/goodsinfo/:id',component:goodsinfo},
            {path:'/goods/goodslist',component:goodslist},
            {path:'/photo/photolist',component:photolist},
            {path:'/photo/photoinfo/:id',component:photoinfo},
            {path:'/news/newslist',component:newslist}, 
            {path:'/news/newsinfo/:id',component:newsinfo},
            {path:'/home',component:home},
            {path:'/',redirect:'/home'},
            {path:'/shopcar',component:car}, 
            // {path:'/news/newsinfo/:id',component:comment}, 
    ]
    });


    //导入mint-ui
import mint from 'mint-ui'
//在vue中注册mint-ui
Vue.use(mint)

    //引入mint-ui的css样式
import '../state/mui/css/mui.css';

// 6.0 使用vue-resource
// 6.0.1 导入vue-resource
import vueResource  from 'vue-resource'
// 6.0.2 使用
Vue.use(vueResource);

// 8.0 定义一个全局过滤器实现日期的格式化
import moment from 'moment';
Vue.filter('datefmt',function(input,fmtstring){
//	使用momentjs这个日期格式化类库实现日的格式化功能
	return moment(input).format(fmtstring);
});

//10.0 图片预览组件
import vuePreview from 'vue-preview';
Vue.use(vuePreview);

//利用对象进行渲染

new Vue({
    el:'#app',
    // 使用路由对象实例
    router:router1,
    render:c=>c(App)
});