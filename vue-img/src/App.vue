<template>
       <div>
        <!--  -->
       <mt-header fixed title="传智播客.黑马程序员Vue商城系统"></mt-header>
        <!-- 占位 -->
        <router-view></router-view>

        <!-- 底部 -->
    	<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email">
				
				</span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		</div>
</template>

<script>  
    // import {calc} from './calc.js';
    //导入需要使用的控件
    // import {Toast} from 'mint-ui'
    
    export default{
        // es6的导出手法
        // data(){  //等价于 es5的 data:function(){
			
		// },
        methods:{
            // add:calc.add,
            // add1:calc.substrict,
           
        }
    } 
    /* new Vue({data:{}}) 就是导出一个 Vue的实例  */
</script>


<style scoped>
/* 中的样式是当前组件的 */
    .red{
        color:red;
    }
</style>