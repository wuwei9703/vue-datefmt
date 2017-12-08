

 <template>
    <!-- 评论组件的模板 -->
            <div id='tmp'>
                    <!-- 提交数据的静态结构 -->
                <div id="postcomment">
			<h3>提交评论</h3>
			<p class="p"></p>
			<textarea placeholder="请输入您要评论的内容..." v-model="postcontent"></textarea>
			<mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
		</div>
                <!-- 评论内容 -->
                <div id="list">
			<h3>评论列表</h3>
			<p class="p"></p>
                        <!-- <div> -->
			<div v-for="(item,index) in list" :key='index'>
				<div class="title">
					<span>第{{index+1}}楼:</span>
					<span>用户：{{item.user_name}}</span>
					<span>发表时间：{{item.add_time | datefmt('YYYY-MM-DD hh:mm:ss')}}</span>
				</div>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell" v-html="item.content"></li>
				</ul>
			</div>
                        <!-- 加载更多 -->
                        <mt-button type="danger" size="large" @click="getmore">加载更多</mt-button>
		</div>
            </div>
    </template>

    
    <script>
     import { Toast } from 'mint-ui';

     import common from '../../kits/common.js';
    // 2. 负责导出vue的对象
            // 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用)
            export default{  // es6的导出对象的写法
                props:['id'],
                data(){
                        return {
                                postcontent:'',
                                list:[],
                                pageindex:1
                        }
                },
                methods:{
                        getmore(){
                                this.pageindex++;
                                this.getcomment(this.pageindex)
                        },
                        getcomment(pageindex){
                                pageindex = pageindex | 1;
                                 var url = common.apidomain +'/api/getcomments/'+this.id+'?pageindex='+pageindex;

                                // 2发出ajax请求获取数据
                                this.$http.get(url).then(function(res){
                                        console.log(res)
                                          var body1 = res.body;
                                         if( body1.status!=0){
                                                Toast(body1.message);
                                               return
                                       };
                                //3赋值
                                this.list = this.list.concat(res.body.message);
                                })
                        },
                        postcomment(){
                                if(this.postcontent.trim().length<=0){
                                        Toast('内容不能为空');
                                        return
                                }
                                  //1定义url
                                 var url = common.apidomain +'/api/postcomment/'+this.id;

                                // 2发出ajax请求获取数据
                                this.$http.post(url,{content:this.postcontent},{emulateJSON:true}).then(function(res){
                                        console.log(res)
                                         Toast(res.body.message);
                               
                                this.list = [{
						"user_name": "匿名用户",
						"add_time": new Date(),
						"content": this.postcontent
					}].concat(this.list);

					//	4.0 将文本框中的评论内容清空
                                        this.postcontent = '';
                                 });
                        }
                },
                created(){
                        //1.0 获取当前资讯数据的评论信息列表
			this.getcomment(this.pageindex);
		},
               
            }
    </script>

   
    <style scoped>
        #postcomment{
	        padding: 5px;
        }
        .p{
                height: 1px;
                width: 100%;
                border-bottom: 1px solid rgba(0,0,0,0.3);
        }

                /*2.0 评论列表的样式*/
        #list{
                padding: 5px;
        }
        .title{
                padding: 5px;
                color: #6d6d72;
                font-size: 15px;
                background-color: rgba(0,0,0,0.1);
        }
    </style>