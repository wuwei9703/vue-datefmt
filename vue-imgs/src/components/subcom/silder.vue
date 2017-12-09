<template>
        <div id='tmp'>
            <mt-swipe :auto="2000">
                <!-- <mt-swipe-item>1</mt-swipe-item> -->
                <mt-swipe-item v-for="(item ,index) in imgs" :key="index">
                    <img :src="item.img">
                </mt-swipe-item>
            </mt-swipe>
        </div>
</template>
<script>
export default {
        props:['imgs'],
        data () {
            return {
                
            };
        }
}
</script>
<style lang="css" scoped>
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