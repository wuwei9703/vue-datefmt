

 <template>
    <!-- 登录组件的模板 -->
    
            <div id='tmp'>
                <div class="title">
		    <h4 v-text="info.title"></h4>
		   <p>{{ info.add_time | datefmt('YYYY-MM-DD') }}  {{info.click}}次浏览</p>
	        </div>
		<div id="content" v-html="info.content" ></div>

                <!--2.0 实现评论组件的集成-->
                <!--10.2 实现评论组件-->
                <comment :id = "id"></comment>
            </div>
    </template>

    
    <script>
     import { Toast } from 'mint-ui';
    import common from '../../kits/common.js';
//    10.0 导入评论组件 comment.vue
    import comment from '../subcom/comment.vue';
    // 2. 负责导出vue的对象
            // 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用)
            export default{  // es6的导出对象的写法
            components:{
                    comment
            },
                     data(){
                        return {
                             id:0,
                             info:{
                         //  "id": 13,
                        //  "title": "1季度多家房企利润跌幅超50% 去库存促销战打响",
                        //  "click": 1,
                        //  "add_time": "2015-04-16T03:50:28.000Z",
                        //  "content":"sdfsdf"}
                             }   
                        }
                    },
                     created(){
                             this.id = this.$route.params.id;
                             // 2.0 请求服务器获取到这个id对应的详情数据对象
                            this.gitinfo();
                            console.log(this.id)
                    } ,
                    methods:{
                         gitinfo(){
                                 //1定义url
                                 var url = common.apidomain +'/api/getnew/'+this.id;

                                // 2发出ajax请求获取数据
                                this.$http.get(url).then(function(res){
                                        console.log(res)
                                        var body = res.body;
                                        if(body.status!=0){
                                                Toast(body.message);
                                               return
                                       };
                                
                                //3赋值
                                this.info = body.message[0];
                                });
                         }   
                    },
                   
            }
    </script>

   
    <style scoped>
        .title h4{
		color: #0094ff;
	}
	.title p{
		color:rgba(0,0,0,0.5);
	}

	.title,#content{
		padding: 5px;
	}

    </style>