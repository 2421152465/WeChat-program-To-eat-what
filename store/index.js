import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		count:'',
		textImg: [
		      {
		        name: "一楼热干面",
		        image: "https://ae03.alicdn.com/kf/H3f9b1e0d82694af0a793ac6f050d34a13.jpg",
		        sjHao: "111111"
		      },
		      {
		        name: "一楼胡辣汤",
		        image: "https://ae04.alicdn.com/kf/Ha08bffc66aaf4a889e0d53a9bb1b13a8g.jpg",
		        sjHao: "222222"
		      },
		      {
		        name: "2楼胡辣汤",
		        image: "https://ae04.alicdn.com/kf/H323f641a9da14a4c88076bbc3d832853n.jpg",
		        sjHao: "333333"
		      },
		      {
		        name: "花甲·米粉",
		        image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
		        sjHao: "44444"
		      },
					{
					  name: "一楼热干面",
					  image: "https://t1.picb.cc/uploads/2018/08/02/JnGNkK.jpg",
					  sjHao: "111111"
					},
					{
					  name: "一楼胡辣汤",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "222222"
					},
					{
					  name: "2楼胡辣汤",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "333333"
					},
					{
					  name: "花甲·米粉",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "44444"
					},
					{
					  name: "一楼热干面",
					  image: "https://t1.picb.cc/uploads/2018/08/02/JnGNkK.jpg",
					  sjHao: "111111"
					},
					{
					  name: "一楼胡辣汤",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "222222"
					},
					{
					  name: "2楼胡辣汤",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "333333"
					},
					{
					  name: "花甲·米粉",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "44444"
					},
					{
					  name: "一楼热干面",
					  image: "https://t1.picb.cc/uploads/2018/08/02/JnGNkK.jpg",
					  sjHao: "111111"
					},
					{
					  name: "一楼胡辣汤",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "222222"
					},
					{
					  name: "2楼胡辣汤",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "333333"
					},
					{
					  name: "花甲·米粉",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "44444"
					},
					{
					  name: "一楼热干面",
					  image: "https://t1.picb.cc/uploads/2018/08/02/JnGNkK.jpg",
					  sjHao: "111111"
					},
					{
					  name: "一楼胡辣汤",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "222222"
					},
					{
					  name: "2楼胡辣汤",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "333333"
					},
					{
					  name: "花甲·米粉",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "44444"
					},
					{
					  name: "一楼热干面",
					  image: "https://t1.picb.cc/uploads/2018/08/02/JnGNkK.jpg",
					  sjHao: "111111"
					},
					{
					  name: "一楼胡辣汤",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "222222"
					},
					{
					  name: "2楼胡辣汤",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "333333"
					},
					{
					  name: "花甲·米粉",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "44444"
					},
					{
					  name: "一楼热干面",
					  image: "https://t1.picb.cc/uploads/2018/08/02/JnGNkK.jpg",
					  sjHao: "111111"
					},
					{
					  name: "一楼胡辣汤",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "222222"
					},
					{
					  name: "2楼胡辣汤",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "333333"
					},
					{
					  name: "花甲·米粉",
					  image: "https://t1.picb.cc/uploads/2019/08/05/gOOiND.jpg",
					  sjHao: "44444"
					},
		    ]  ,
	},
	mutations:{
		increment(state,v){
			state.count = state.textImg[v].image
		}
	}
})

export default store