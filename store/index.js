import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		count:'',
		dianhua:'',
		texs:'',
		textImg: [
			{																								
				name:"炸鸡汉堡",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRvbJr.jpg",
				sjHao:"18611186804"
			},
			{
																										
				name:"重庆小面",
				image:"https://t1.picb.cc/uploads/2021/10/20/wR3E0r.jpg",
				sjHao:"13137431619"
			},
			{
																								
				name:"沙县小吃	",
				image:"https://t1.picb.cc/uploads/2021/03/09/ZhyXqW.jpg",
				sjHao:"******"
			},
			{
																								
				name:"擂椒拌饭",
				image:"https://t1.picb.cc/uploads/2021/10/20/wR3KoJ.jpg",
				sjHao:"******"
			},
			{
																						
				name:"招牌麻辣面",
				image:"https://t1.picb.cc/uploads/2021/03/09/Zhy9yX.jpg",
				sjHao:"******"
			},
			{
																						
				name:"千里香混沌",
				image:"https://t1.picb.cc/uploads/2021/03/09/Zhyvt1.jpg",
				sjHao:"******"
			},
			{
																					
				name:"大碗面@粉",
				image:"https://t1.picb.cc/uploads/2021/03/09/Zhy8cM.jpg",
				sjHao:"******"
			},
			{
																				
				name:"大盘鸡面",
				image:"https://t1.picb.cc/uploads/2021/03/09/ZhyAQt.jpg",
				sjHao:"******"
			},
			{
																				
				name:"姐弟倆土豆粉",
				image:"https://t1.picb.cc/uploads/2021/03/09/ZhyqqJ.jpg",
				sjHao:"******"
			},
			{
																			
				name:"泡泡鱼",
				image:"https://t1.picb.cc/uploads/2021/10/20/wR3DHF.jpg",
				sjHao:"******"
			},
			{
																		
				name:"咸肉菜饭	",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRNuWX.jpg",
				sjHao:"******"
			},
			{
																	
				name:"洛阳擀面皮	",
				image:"https://t1.picb.cc/uploads/2021/03/09/ZhySiL.jpg",
				sjHao:"******"
			},
			{
																	
				name:"逍遥镇胡辣汤",
				image:"https://t1.picb.cc/uploads/2021/03/09/ZhyxXg.jpg",
				sjHao:"******"
			},
			{
																	
				name:"黄焖鸡",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRNlig.jpg",
				sjHao:"******"
			},
			{
																
				name:"陕西老碗面",
				image:"https://t1.picb.cc/uploads/2021/03/09/ZhyPtR.jpg",
				sjHao:"******"
			},
			{
															
				name:"大米快餐	",
				image:"https://t1.picb.cc/uploads/2021/03/09/ZhyNSa.jpg",
				sjHao:"******"
			},
			{
															
				name:"酱香饼·面",
				image:"https://t1.picb.cc/uploads/2021/03/09/Zhy7x0.jpg",
				sjHao:"******"
			},
			{
													
				name:"麦香馅饼",
				image:"https://t1.picb.cc/uploads/2021/03/09/ZhyjQv.jpg",
				sjHao:"******"
			},
			{
											
				name:"好粥道营养粥",
				image:"https://t1.picb.cc/uploads/2021/03/09/ZhyHS6.jpg",
				sjHao:"******"
			},
			{
									
				name:"特色米线	",
				image:"https://t1.picb.cc/uploads/2021/03/09/ZhybcD.jpg",
				sjHao:"******"
			},
			{
													
				name:"茶油炒饭",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRNCxG.jpg",
				sjHao:"******"
			},
			{
											
				name:"花甲粉",
				image:"https://t1.picb.cc/uploads/2021/03/09/ZhyGr7.jpg",
				sjHao:"******"
			},
			{
									
				name:"筷来见面	",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRQVEe.jpg",
				sjHao:"******"
			},
			{
								
				name:"正新鸡排",
				image:"https://t1.picb.cc/uploads/2021/03/09/ZhyUay.jpg",
				sjHao:"******"
			},
			{
						
				name:"麻辣香锅",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRQfZT.jpg",
				sjHao:"******"
			},
			//下面“二楼”
			{
				name:"炝锅面焖面",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7o6lF.jpg",
				sjHao:"15563943368"
			},
			{
				name:"烩面王",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRjhL1.jpg",
				sjHao:"15537476152"
			},
			{							
				name:"泡泡鸡	",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRj7h0.jpg",
				sjHao:"13733643389"
			},
			{
				name:"荞麦面	",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRjrBT.jpg",
				sjHao:"16603741059"
			},
			{						
				name:"咸肉菜饭	",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7ddhK.jpg",
				sjHao:"13271190950"
			},
			{
				name:"板面",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRjA4t.jpg",
				sjHao:"13193463191"
			},
			{
				name:"螺丝粉",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRjOKr.jpg",
				sjHao:"13193463191"
			},
			{																																													
				name:"麻辣香锅	",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7oef0.jpg",
				sjHao:"17703994325"
			},
			{																																											
				name:"二楼右边·大米快餐	",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7oOP8.jpg",
				sjHao:"18749573562"
			},
			{																																								
				name:"二楼黄焖鸡",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7o4Yv.jpg",
				sjHao:"17639595391"
			},
			{																																						
				name:"胡闯鱼粉",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7o1jD.jpg",
				sjHao:"18790923300"
			},
			{																																				
				name:"盖浇饭",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7o5UW.jpg",
				sjHao:"13271235335"
			},
			{																																		
				name:"老碗面",
				image:"https://t1.picb.cc/uploads/2021/05/06/ZKuZjL.jpg",
				sjHao:"18837436398"
			},
			{																															
				name:"瓦罐面	",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7dYlc.jpg",
				sjHao:"18903996257"
			},
			{
				name:"卤肉面	",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRjMbF.jpg",
				sjHao:"13707602570"
			},
			{																														
				name:"过桥米线	",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7orvL.jpg",
				sjHao:"18838938928"
			},
			{																											
				name:"鹅一派",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7oMMR.jpg",
				sjHao:"13782389008"
			},
			{																									
				name:"砂锅面",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7ot4T.jpg",
				sjHao:"15893717597"
			},
			{
																								
				name:"三汁焖锅",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7oZjM.jpg",
				sjHao:"13298213872"
			},
			{																					
				name:"天下好面",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7doLN.jpg",
				sjHao:"16649789915"
			},
			{																			
				name:"煎饼·热干面",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7owYt.jpg",
				sjHao:"15188523952"
			},
			{																	
				name:"私房·牛肉面",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7oiUJ.jpg",
				sjHao:"15188523952"
			},
			{															
				name:"石锅饭",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7oVF7.jpg",
				sjHao:"18237472926"
			},
			{
															
				name:"二楼快餐",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7ouFd.jpg",
				sjHao:"18749573562"
			},
			{												
				name:"重庆鸡公煲",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7omGu.jpg",
				sjHao:"17633565086"
			},
			{										
				name:"披萨意面	",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7oIvr.jpg",
				sjHao:"15237406085"
			},
			{									
				name:"禹州烩菜",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7dDjy.jpg",
				sjHao:"13569463456"
			},
			{								
				name:"陶香鸡米饭",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7oJAs.jpg",
				sjHao:"13782239098"
			},
			{						
				name:"秘制·花甲",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7oHui.jpg",
				sjHao:"15139466859"
			},
			{					
				name:"30秒牛排烧",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRj8JM.jpg",
				sjHao:"15637415220"
			},
			{
				name:"麻辣爆肚",
				image:"https://t1.picb.cc/uploads/2021/11/09/wEjpZv.jpg",
				sjHao:"18237403709"
			},
			//下面“三楼菜谱”
			{
				name:"陈老伍麻辣烫",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRjsjj.jpg",
				sjHao:"*******"
			},
			{
				name:"重庆特色面",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRjzYc.jpg",
				sjHao:"18324330121"
			},
			{
				name:"大盘鸡",
				image:"https://t1.picb.cc/uploads/2021/11/26/fkXnHJ.jpg",
				sjHao:"13839562524"
			},
			{
				name:"黄焖鸡米饭",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7YjQc.jpg",
				sjHao:"15290960510"
			},
			{
				name:"胖孩土豆粉",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7YUQF.jpg",
				sjHao:"13837412263"
			},
			{
		
				name:"烤肉饭·脆皮鸡",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7YsDr.jpg",
				sjHao:"15836573718"
			},
			{
							
				name:"焖锅米饭",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7YKT1.jpg",
				sjHao:"17719913989"
			},
			{
									
				name:"牛肉面",
				image:"https://t1.picb.cc/uploads/2021/10/20/wRjElK.jpg",
				sjHao:"18039991145"
			},
			{
				name:"阳春面",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7YEq0.jpg",
				sjHao:"19839565588"
			},
			{
				name:"滋补烩面",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7dVmv.jpg",
				sjHao:"13782311797"
			},
			{			
				name:"尚品盖浇饭",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7dgai.jpg",
				sjHao:"13298232398"
			},
			{							
				name:"郏县和饸烙面",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7dZnW.jpg",
				sjHao:"13273868610"
			},
			{								
				name:"恋尚麻辣香锅",
				image:"https://t1.picb.cc/uploads/2021/03/09/Z7dkDL.jpg",
				sjHao:"17319787966"
			},
		    ]
	},
	mutations:{
		increment(state,v){
			state.count = state.textImg[v].image;
			state.dianhua = state.textImg[v].sjHao;
			state.texs = state.textImg[v].name;
			// state.textImg.forEach((item)=>{
			// 	state.imgsList.push(item.image)
			// })
		}
	}
})

export default store