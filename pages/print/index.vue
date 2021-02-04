<template>
	<view class="print">
		<image :src="text" mode="widthFix" class="imageu"></image>
		
	</view>
	<!-- <image src="https://ae03.alicdn.com/kf/H3f9b1e0d82694af0a793ac6f050d34a13.jpg" mode="widthFix"></image> -->
</template>

<script>
	import store from '../../store/index.js'
	export default{
		data(){
			return{
				text:store.state.count,
			}
		},
		onLoad:function(options) {		
			const ee =options.courseUuid;
			this.textimg=ee;
			uni.showToast({
				title:"加载中",
				icon:'loading',
				duration:1200
			})
		}
	}
</script>

<style scoped>
	.print{
		width: 750rpx;
		padding-top: 6rpx;
		display: flex;
		justify-content: center;
		align-content: center;
	}
	.imageu{
		width: 94%;
		border-radius: 20rpx;
	}
</style>
