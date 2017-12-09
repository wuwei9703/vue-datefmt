
<template>
  <div id='tmp'>
      <comment :id="id"></comment>
  </div>
</template>
<script>
import comment from '../subcom/comment.vue';
export default {
        
        components:{
            comment
        },
        data () {
            return {
            };
        },
        created(){
            //获取商品传入的id值
            this.id = this.$route.params.id
        }
}
</script>
<style lang="css" scoped>
</style>