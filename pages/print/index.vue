<template>
<view>
	<view >
		<button @click="calldh" class="btncall">ğŸ“å‘¼å«</button>
	</view>
	<view class="print">
		<image :src="text"  class="imageu" alt='Í¼Æ¬¼ÓÔØÖÖ'></image>
	</view>
	<view class="texex">
			{{texs}}
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
				texs:store.state.texs
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
				title:"å›¾ç‰‡åŠ è½½ç¼“æ…¢",
				icon:'loading',
				duration:1200
			})
		}
	}
</script>

<style scoped>
	.bot image{
		width: 100%;
		height: 180rpx;
		position: absolute;
		left: 0;
		bottom: 20rpx;
	}
	.print{
		/*width: 750rpx;
		 padding-top: 6rpx;
		display: flex;
		justify-content: center;
		align-content: center; */
		width: 750rpx;
		margin-top: 6rpx;
	}
	.imageu{
		width:100%;
		height: 700rpx;
/* 		border-radius: 20rpx; */
	}
	.btncall{
		/* background-color: #f1908c;
		color: #1781b5; */
		background-color:#1781b5;
	}
	.texex{
		text-align: center;
		font-size: 100rpx;
		color:#1781b5 ;
		font-weight: 400;
		text-shadow: 2px 2px 2px #9ea59b;
	}
</style>
