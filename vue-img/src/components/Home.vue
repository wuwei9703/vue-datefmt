

    <template>
    <!-- 登录组件的模板 -->
            <div id='tmp'>
                <mt-swipe :auto="2000">
                <!-- <mt-swipe-item>1</mt-swipe-item> -->
                    <mt-swipe-item v-for="(item ,index) in list" :key="index">
                        <img :src="item.img">
                    </mt-swipe-item>
                </mt-swipe>

                <!-- 九宫格 -->
                <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            <router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link>
		            </li>

		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo/photolist">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></router-link>
		             </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/feedback">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link>

		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/vide">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></router-link>

		             </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/callme">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link>
		            </li>
		            
		        </ul> 
		        </div>

            </div>
    </template>

    
    <script>
     import common from '../kits/common.js';
    // 2. 负责导出vue的对象
            // 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用)
            export default{  // es6的导出对象的写法
                   data(){
                        return {
                            list:[]
                        }
                   },
                    created(){
                        this.getimgs()
                    },
                    methods:{
                        getimgs(){
                            // 实现轮播组件中的数据请求
                            // 1.0 确定url
                            // http://www.lovegf.cn:8899/api/
                            
                            var url =common.apidomain+'/api/getlunbo';

                            // 2.0 调用$http.get()
                            this.$http.get(url).then(function(res){
                                console.log(res)
                                var data = res.body;
                                //错误处理
                                if(data.status != 0){
                                    Toast(data.message);
                                    return;
                                }

                                // 如果服务器返回的数据正常则赋值给list
                                this.list = data.message;
                                console.log(this.list)
                            });
                        }
                    }
            }
    </script>

   
    <style scoped>
        .mint-swipe{
            width: 100%;
            height: 300px;
        }
        .mint-swipe-item{
            width: 100%;
            height: 300px;
        }
        .mint-swipe-item img{
            width: 100%;
            height:300px;
        }
    </style>