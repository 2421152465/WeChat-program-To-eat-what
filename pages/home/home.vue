<template>
	<view class="content">
		<view class="top_t"><image src="../../static/icon/gong.png" mode="widthFix"></image>开始~点击手机号或菜名直接跳转相应界面！~</view>
		<view class="content_title">
			<view class="bot_h2">许职吃点啥!</view>
			<view class="bot_name">
				<navigator url="../print/index" @click="spak">{{stnum}}</navigator>
			</view>
			<view class="bot_sjNumber" @click="callUp">
				{{sjnum}} 
			</view>
			<button type="default" @click="handStart" :disabled="isActive" :class="{active:!isActive}">开始</button>
			<button type="default" @click="handEnd" :disabled="!isActive" :class="{active:isActive}">结束</button>
		</view>
	</view> 
</template>

<script>
	import store from '@/store/index.js'
	export default {
		data(){
			return{
				textImg:[],
				timeNo:0,
				stnum:"---",
				sjnum:"",
				isActive:false,
				index:0
			}
		}, 
		methods:{
			//点击开始
			handStart(){
				this.isActive=true;
				this.timeNo=setInterval(()=>{
					const index = Math.floor(Math.random()*(66-0)-0);
					this.stnum=this.textImg[index].name;
					this.sjnum=this.textImg[index].sjHao;
					this.index = index
				},40)
			},
			//点击结束
			handEnd(){
				clearInterval(this.timeNo);
				this.isActive=false;
			},
			//打电话
			callUp:function(){
				if(!this.isActive){ 
					wx.makePhoneCall({
					  phoneNumber: this.sjnum,
					})
				}
			},
			spak(){
				const index = this.index;
				store.commit("increment",index)
			}
		},
		
		onLoad:function(){
			this.textImg=store.state.textImg;	
		} 
		
		
	}
</script>

<style scoped>
	page{
	  margin: 0;
	  padding: 0
	}
	.content_title{
	  position: fixed;
	  left: 0;
	  right: 0;
	  bottom: 600rpx;
	  width: 750rpx;
	  height: 200rpx;
	  text-align: center;
	}
	.content_title view{
	  padding: 20rpx;
	} 
	.content_title button{
		width: 60%;
	}
	.bot_h2{ 
	  font-size: 60rpx;
	  font-family: '楷体';
	  font-weight: bold;
		margin-bottom: 40rpx;
	}
	.top_t{
		background-color: rgb(255,251,232);
		color: rgb(234,180,98);
		font-size: 34rpx;
		font-family:"华文楷体";
	}
	.top_t image{
		width: 18px;
	}
	
	
	.active{
		background-color: #007bff;
		color: white;
	}
</style>