<template>
        <div id="tmp">
            <!-- 实现图片详情，及缩略图 -->
            <div id="desc">
                <!-- 图片标题部分 -->
                <div id="title">
                    <h4>{{photoinfo.title}}</h4>
                    <p>
                        {{photoinfo.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}} &nbsp;{{photoinfo.click}}次浏览
                    </p>
                    <p class="line"></p>
                </div>

            <!-- 缩略图 -->
                <div class="mui-content">
				    <ul class="mui-table-view mui-grid-view mui-grid-9">
					    <li  v-for="(item, index) in list" :key='index' class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						    <img class="preview-img"  :src="item.src" height="100" @click="$preview.open(index, list)" >
                            <!-- @click="$preview.open(index, list)" -->
					    </li>
				    </ul>
			    </div>
            <!-- 详情信息 -->
                <p v-html="photoinfo.content"></p>
            </div>
            <div id="comment">
                <comment :id = "id"></comment>
            </div>
        </div>
</template>

<script>
        import { Toast } from 'mint-ui';
        import common from '../../kits/common.js';
        //10.0 导入评论组件 comment.vue
        import comment from '../subcom/comment.vue';
        export default {
            components:{
                comment
            },
            data(){
                return {
                    id:0,
                    photoinfo :{
				        // "id": 52,
					    // "title": "柳岩出席设计师好友兰玉的高级成衣发布Show",
					    // "click": 0,
					    // "add_time": "2015-04-18T06:27:06.000Z",
					    // "content": "北京四季酒店,柳岩出席设计师好友兰玉的高级成衣发布Show,她身穿兰玉设计的纯白卡肩礼服惊艳登场,优雅晚装发髻搭配翡翠镶钻珠宝,举手投足尽显大气温婉,而卡肩低胸的礼服设计更是衬托出柳岩傲人的事业线资本,性感指数爆灯,入场即引来现场阵阵骚动,柳岩轻松看秀全程甜笑连连,心情靓绝。"
                    },  //图片的详情描述数据对象
                    list:[]
                }
            },
            created(){
                this.id = this.$route.params.id;
                this.gitinfo();
                this.getimgs()
            },
            methods:{
                gitinfo(){
                    var url =common.apidomain +'/api/getimageInfo/'+this.id;
                    this.$http.get(url).then(function(res){
                        // console.log(res)
                        if(res.body.status != 0){
                            Toast(res.body.message)
                            return
                        }
                        
                        this.photoinfo = res.body.message[0];
                    })
                },
                // 获取图片
                getimgs(){
                    var url = common.apidomain + '/api/getthumimages/'+this.id;
                    this.$http.get(url).then(function(res){
                        console.log(res)
                        if(res.body.status !=0 ){
                            Toast(res.body.message)
                            return
                        }
                                // vue-preview组件的要求是要有src width height
                            res.body.message.forEach(function(item){
                                var img = document.createElement('img');
                                img.src = item.src;
                                img.onload = function(){
                                    item.h = img.height;
                                    item.w = img.width;
                                 }
                            });
                             this.list = res.body.message;
                    })
                }
            }
        }
</script>

<style>
   
     #desc{
	  padding: 10px;
  }
	#desc  .title h4{
		color: #0094ff;
	}

  #desc .title p{
	color:rgba(0,0,0,0.4);
	  margin-top: 10px;
  }

  #desc .title .line{
	  width: 100%;
	  height: 1px;
	  border-bottom: 1px solid rgba(0,0,0,0.4);
  }

  .mui-content,.mui-content ul{
	  background-color: #fff;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
	  border-right:0px;
	  border-bottom:0px;
  }
  .mui-grid-view.mui-grid-9{
	  border-top:0px;
	  border-left:0px;
  }

  /* 9宫格缩略图的样式*/
	.mui-content img{
		width: 100px;
		height: 100px;
	}
</style>


