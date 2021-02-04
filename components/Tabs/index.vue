<template>
	<view class="tabs">
		<view class="tabs_title">
			<view v-for="(item,index) in tabs" :key="index"
			 class="title_item"
			 @click="hanldeItemTap(index)" :class="{active:item.whether}" >
				{{item.name}}
			</view>
		</view>
		<view class="tabs_mune">

			<block v-if="tabs[0].whether">
				<navigator class="ment_first" v-for="(item,index) in canteenDataOne"
				 :key="item.id" url="../../pages/print/index" @click="skip(index)">
						{{item.name}}
				</navigator>
			</block>
			
			<block v-if="tabs[1].whether" >
				<navigator class="ment_first" v-for="(item,index) in canteenDataTwe"
				 :key="item.id" url="../../pages/print/index" @click="skip(index)">
						{{item.name}}
				</navigator>
			</block>
			<block v-if="tabs[2].whether">
				<navigator class="ment_first" v-for="(item,index) in canteenDataThree"
				 :key="item.id" url="../../pages/print/index" @click="skip(index)">
						{{item.name}}
				</navigator>
			</block>
		</view>
	</view>
</template>

<script>
	import store from '@/store/index.js'
	export default{
		props:{
			tabs:Array
		},
		data(){
			return{
				// canteenData:store.state.textImg,
				canteenDataOne:[],
				canteenDataTwe:[],
				canteenDataThree:[],
				baseUrl:store.state.count,
			}
		},
		methods:{
			hanldeItemTap(e){
				const index = e;
				this.$emit("itemChange",index);
				uni.pageScrollTo({
					scrollTop:0,
					duration:300
				})
			}, 	
			skip(e){
				const index = e;
				store.commit('increment',index)
			},			
		},
		mounted(){
			const textm = store.state.textImg;
			textm.forEach((v,i,a)=>{
				if(i<=10){
					this.canteenDataOne.push(v)
				}else if(i>=11&i<=18){
					this.canteenDataTwe.push(v)
				}else{
					this.canteenDataThree.push(v)
				}
			})
		}
	
	}
</script>

<style>
	.tabs_title{
		display: flex;
		text-align: center;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
		background-color: #0094ff;
		color:#e2e2e2
	}
	.title_item{
		flex: 1; 
		display: flex;
		justify-content: center;
		padding: 10rpx 0;
		height: 80rpx;
		line-height: 80rpx;
		font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	}
	.active{
		color:white;
		border-bottom: 5rpx solid currentColor;
	}
	
	.tabs_mune {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 750rpx;
		height: 800rpx;
		margin-top: 110rpx;
	}
	.ment_first{
		background-color: #f6f5f5;
		border: 2rpx solid #808080;
		border-radius: 8rpx;
		color: #333333;
		font-size: 30rpx;
		font-weight: 500;
		text-align: center;
		line-height: 100rpx;
		width: 48%;
		height: 100rpx;
		margin: 5rpx 2rpx;
	}
</style>
