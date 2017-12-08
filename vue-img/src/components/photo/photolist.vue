 
    <template>
    <!-- 登录组件的模板 -->
            <div id='tmp'>
                <!-- 图片分类 -->
                <div id="cate">
                    <ul v-bind="{style:'width:'+ulWidth+'px'}">
                        <li>全部</li>
                        <li v-for="(item,index) in cates" :key='index'>{{item.title}}</li>
                    </ul>
                </div>

                <!--2.0 图片列表-->
                <div id="imglist">
                    <ul>
                        <li v-for="(item,index) in list" :key='index'>
                            <router-link v-bind="{to:'/photo/photoinfo/'+item.id}">
                                <img v-lazy="item.img_url" alt="">
                                <div id="desc">
                                    <span>{{item.title}}</span>
                                    <p>{{item.zhaiyao}}</p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
    </template>

    
    <script>
 import common from '../../kits/common.js';
    // 2. 负责导出vue的对象
            // 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用)
            export default{  // es6的导出对象的写法
                    data(){
                        return {
                            ulWidth:320,
                            cates : [] ,  //用来存储图片分类数据的数组
                            list:[]
                        }
                    },
                    methods:{
                        getnewslist(){
                            // 1.0 确定url
                          
				            var url = common.apidomain + '/api/getimgcategory';
                            // 2.0 调用$http的get方法获取数据
				            this.$http.get(url).then(function(res){
                                console.log(res)
                                var body = res.body;
                                this.cates = body.message;
                                var w = 62;
                                var count = body.message.length + 1;
                                this.ulWidth = w * count
                            })
                        },
                        getImage(cateid){
                            cateid = cateid || 0 ;
                             var url = 'http://vue.studyit.io/api/getimages/'+cateid;
                              this.$http.get(url).then(function(res){
                                  console.log(res)
                                var body = res.body;
                                this.list = body.message;
                              })
                        }
                    },
                    created(){
                         this.getnewslist();
                         var all = 0;
                         this.getImage(all)
                    }
            }
    </script>

   
    <style scoped>
       #cate{
	
		max-width: 375px;
		overflow-x: auto;
        }
        #cate ul{
            margin: 0px;
            padding-left: 10px;
        }
        #cate li{
            list-style: none;
            display: inline-block;
            color:#0094ff;
            font-size: 14px;
            padding-left: 6px;
        }

        #imglist ul{
            padding-left: 0px;
        }
         #imglist ul li{
             list-style: none;
             position: relative;
         }
         #imglist ul img {
             width: 100%;
             height: 300px;
         }
         #imglist ul img {
             width: 100%;
         }
         #desc{
              position: absolute;
             bottom: 3px;
             padding: 0 5px;
            background-color:rgba(0, 0, 0, 0.2);
         }
          #desc span {
             color: #ffffff;
             font-size: 14px;
             font-weight: bold;
         }
          #desc p {
             color: #fff;
             font-size: 14px;
         }
    </style>