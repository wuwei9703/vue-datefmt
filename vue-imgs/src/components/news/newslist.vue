 
    <template>
    <!-- 登录组件的模板 -->
            <div id='tmp'>
                   <!-- 新闻列表1 -->
                   <ul class="mui-table-view">
				<li v-for='(item,index) in list' :key='index' class="mui-table-view-cell mui-media">
					<router-link v-bind="{to:'/news/newsinfo/'+item.id}">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>{{item.zhaiyao}}</p>
                                                        <div>
                                                             <span class="time">发表时间:{{item.add_time | datefmt('YYYY-MM-DD hh:mm:ss')}}</span>  
                                                             <span class="click">点击数:{{item.click}}</span> 
                                                        </div>
						</div>
					</router-link>
				</li>
			</ul>
            </div>
    </template>

    
    <script>
    import { Toast } from 'mint-ui';
    import common from '../../kits/common.js';
    // 2. 负责导出vue的对象
            // 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用)
            export default{  // es6的导出对象的写法
                    data(){
                        return {
                            list:[]
                        }
                    },
                    methods:{
                        getnewslist(){
                                var url = common.apidomain +'/api/getnewslist';
                                this.$http.get(url).then(function(res){
                                        // console.log(res)
                                       var data = res.body
                                       if(data.status!=0){
                                                Toast(data.message);
                                               return
                                       };
                                       this.list = data.message;
                                       console.log(this.list)
                                });
                                /*  数据格式：
				{
					  "status": 0,   // 0 :代表的是成功  非0代表的是服务器发生了错误
					  "message": [
						{
						  "id": 13,
						  "title": "1季度多家房企利润跌幅超50% 去库存促销战打响",
						  "add_time": "2015-04-16T03:50:28.000Z",
						  "zhaiyao": "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
						  "click": 1,
						  "img_url": "http://www.webhm.top:8080/upload/201504/16/201504161149414479.jpg"
						},
						{
						  "id": 14,
						  "title": "买房还是炒股，2015年买房无法拒绝的5大理由",
						  "add_time": "2015-04-16T04:05:34.000Z",
						  "zhaiyao": "转眼间2015年已经过去了4个月，在这短短的四个月",
						  "click": 2,
						  "img_url": "http://www.webhm.top:8080/upload/201504/16/201504161205596364.jpg"
						}
						]

				*/
                        }
                    },
                    created(){
                         this.getnewslist()
                    }
            }
    </script>

   
    <style scoped>
        .mui-table-view img{
                width: 80px;
                height: 80px;
        }

       .mui-table-view .mui-media-object{
               max-width: 80px;
               line-height: 80px;
       } 

       .mui-table-view .mui-media-body div{
               margin-top: 10px;
               font-size: 14px;
               color:#0094ff;
       }

       .mui-table-view .mui-media-body div .click{
               margin-left: 20px;
       }
    </style>