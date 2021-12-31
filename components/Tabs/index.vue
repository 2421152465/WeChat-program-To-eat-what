<template>
	<view class="tabs" v-cloak>
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
				 :key="item.id" url="../../pages/print/index" @click="skip(index+25)">
						{{item.name}}
				</navigator>
			</block>
			<block v-if="tabs[2].whether">
				<navigator class="ment_first" v-for="(item,index) in canteenDataThree"
				 :key="item.id" url="../../pages/print/index" @click="skip(index+56)">
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
				numsu:0,
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
				//点击到了（index）按钮 ，发送index给store
			skip(e){
				const index = e;
				store.commit('increment',index)
			},			
		},
		mounted(){
			const textm = store.state.textImg;
			textm.forEach((v,i,a)=>{
				if(i<=24){
					this.canteenDataOne.push(v);

				}else if(i>=25&&i<56){
					this.canteenDataTwe.push(v);

				}else{
					this.canteenDataThree.push(v);
				}
			})
		}
	
	}
</script>

<style>
	
	
	[v-cloak]{
		display: none!important ;
	}
	.tabs_title{
		display: flex;
		text-align: center;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
		background-color:#1781b5;
		color:#FFCC99;
		/* color:#f1908c; */
		font-weight: bold;
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
		font-size: 46rpx;
		border-bottom: 6rpx solid #ffffff;
	}
	
	.tabs_mune {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 750rpx;
		/* height: 800rpx; */
		height: 100%;
		margin-top: 110rpx;
		/* background: linear-gradient(to top, #ffffff ,#0094ff) */
		background-color:#FFFFFF ;
	}
	.ment_first{
		/* background-color:#ffffff ; */
		/* border: 2rpx solid #808080; */
		background-color: #f1908c ;
		/* border-radius: 26rpx; */
		
		color: #1781b5;
		font-size: 40rpx;
		font-weight: bold;
		letter-spacing:6rpx;
		text-align: center;
		line-height: 160rpx;
		width: 46%;
		height: 160rpx;
		margin: 5rpx 0rpx;
	}
	.ment_first:nth-child(2n+1){
		border-radius: 26rpx 0 0 26rpx;
	}
	.ment_first:nth-child(2n){
		border-radius: 0 26rpx 26rpx  0;
	}
</style>
