<template>
		<view class="menu_top">
			<Tabs :tabs="tabs" @itemChange="handleItem" class='ment_une'>
			</Tabs>
		</view>
</template>

<script>
	import Tabs from '@/components/Tabs/index.vue'
	import store from '@/store/index.js'
	export default {
		components:{
			Tabs
		},
		data() {
			return {
			canteenData:store.state.textImg,
				 tabs:[
					 {
						 id:0,
						 name:"一楼",
						 whether:true
					 },
					 {
						 id:1,
						 name:"二楼",
						 whether:false
					 }, 
					 {
						 id:2,
						 name:"三楼",
						 whether:false
					 }
				 ]
			}
		},
		methods: {
			handleItem(e){
				const index = e;
				let tabs =this.tabs;
				tabs.forEach((v,i)=>i === index ? v.whether=true: v.whether=false)
			}
		}
	}
</script>

<style scoped>

</style>
