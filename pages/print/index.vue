<template>
<view>
	<view >
		<button @click="calldh"class="btncall">📞呼叫</button>
	</view>
	<view class="print">
		<image :src="text"  class="imageu" ></image>
	</view>
</view>
	
</template>

<script>
	import store from '../../store/index.js'
	export default{
		data(){
			return{
				text:store.state.count,
				dhhm:store.state.dianhua,
			}
		},
		methods:{
			calldh(){ 
						wx.makePhoneCall({
						  phoneNumber: this.dhhm,
						})
			},
			
		},
		
		onLoad:function(options) {
			const ee =options.courseUuid;
			this.textimg=ee;
			uni.showToast({
				title:"图片加载缓慢",
				icon:'loading',
				duration:1200
			})
		}
	}
</script>

<style scoped>
	.print{
		/*width: 750rpx;
		 padding-top: 6rpx;
		display: flex;
		justify-content: center;
		align-content: center; */
		width: 750rpx;

	}
	.imageu{
		width:100%;
		height: 700rpx;
		border-radius: 20rpx;
	}
	.btncall{
		background-color: #07c160;
		color: white;
	}
</style>
