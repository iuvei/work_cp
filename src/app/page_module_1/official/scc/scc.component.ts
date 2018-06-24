import { Component, OnInit } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { RouterModule, Routes, Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";

import { Base } from '../../../../factory/base.model';
import { Api } from '../../../../factory/api.model';
import { formmod } from '../../../../factory/form';
import userModel from '../../../../status/user.model';
@Component({
    selector: 'sccofficial',
    templateUrl: './scc.component.html',
    styleUrls: ['./scc.component.scss']
})

export class SCCofficialComponent implements OnInit {

	constructor(private route: ActivatedRoute,private httpClient:HttpClient,private router: Router) { }
	loadpage=false;
	public resultdata = [{'sta':'20180517014','num':'2 9 0 8 7'},{'sta':'20180517014','num':'2 9 0 8 7'} ,{'sta':'20180517014','num':'2 9 0 8 7'} , {'sta':'20180517014','num':'2 9 0 8 7'},{'sta':'20180517014','num':'2 9 0 8 7'} , {'sta':'20180517014','num':'2 9 0 8 7'},{'sta':'20180517014','num':'2 9 0 8 7'} ,{'sta':'20180517014','num':'2 9 0 8 7'}];
	public rankdata = [{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'}];
	multiple_input : any = {value:1};
	// public multiple_input = 1;
	public radom_input :any = {value:1};
	public multi_select = [10,50,100,500,1000,2000,5000,10000];
	public ul_hidden = true;
	public now_tips = '这是一个比较短的提示!';
	public tips_hidden = true;
	public riskvalue = -0.2;
	public rangepercent = 0;
	public now_tips_menu :any='1_1';
	public now_description = '';
	public hothidden = false;
	public nowPageId :any='';
	public nowitems :any={};
	public userInfo = {
		name:'赌神',
		balance:'9999.99',
		id:'007'

	};
	public other_rules = {
		reward_rule:'<div> 奖金计算说明：<p style="margin-left:1em;">非常规时时彩中奖后，根据中奖号码球号的奖金组，中奖奖金需要乘以球号的奖金组，如：</p><p style="margin-left:1em;line-height: 25px;padding:3px 0;">1、北京时时彩后三直选（1800奖金组）：下注321，开奖号码54321，其中3号球的奖金组为：1.014，2号球的奖金组为：0.984，1号球的奖金组为1.022；那么中奖后的实际奖金=1800*1.014*0.984*1.022=1835.509</p><p style="margin-left:1em;line-height: 25px;padding:3px 0;">2、若北京时时彩后三直选（1800奖金组）：下注246，开奖号码54246，其中2号球的奖金组为：0.984，4号球的奖金组为：0.976，6号球的奖金组为0.98；那么中奖后的实际奖金=1800*0.984*0.976*0.98=1694.117</P></div>'
	};
	public cpnav = {
	    prev:'20180517022',
	    prevball:[2,5,9,0,8],
	    next:'20180517023',
	    time:''
	};
	public items_show = {
		'bjpk_ffc':{
			'tabitem':['猜冠军','猜前二','猜前三','猜前四','猜前五','定位胆','龙虎'],
			'reward_show':false
		},
		'xyft_ffc':{
			'tabitem':['猜冠军','猜前二','猜前三','猜前四','猜前五','定位胆','龙虎'],
			'reward_show':false
		}
	}
	public curinpt = {value:''};
	//路由id
	public routid;
	public now_tab2click_num;
	public hid_tab;
	// public rangevalue = rangevalue;
	now_lang :any={};
	status = {
		menu_1:1,//一级tab默认项
		menu_2:1  //二级tab默认项
	}
	// 一级tab
	menu_1 = [
		{
			name:'猜冠军',
			active:1
		},
		{
			name:'猜前二',
			active:2
		},
		{
			name:'猜前三',
			active:3
		},
		{
			name:'猜前四',
			active:4
		},
		{
			name:'猜前五',
			active:5
		},
		{
			name:'定位胆',
			active:6
		},
		{
			name:'龙虎',
			active:7
		}

	];
	
	// 2级tab数据以及对应要显示的内容
	menu_2_data = [
		{
			title:'猜冠军',
			menu:[{name:'猜冠军',index:1,arr:['cgj']}],
			active:1
		},
		{
			title:'猜前二',
			menu:[{name:'猜前二单式',index:1,arr:['cgj','cyj']},{name:'猜前二复式',index:2,isupload:true}],
			active:2
		},
		{
			title:'猜前三',
			menu:[{name:'猜前三单式',index:1,arr:['cgj','cyj','cjj']},{name:'猜前三复式',index:2,isupload:true}],
			active:3
		},
		{
			title:'猜前四',
			menu:[{name:'猜前四单式',index:1,arr:['dy','de','ds','dsi']},{name:'猜前四复式',index:2,isupload:true}],
			active:4
		},
		{
			title:'猜前五',
			menu:[{name:'猜前五单式',index:1,arr:['dy','de','ds','dsi','dw']},{name:'猜前五复式',index:2,isupload:true}],
			active:5
		},
		{
			title:'定位胆',
			menu:[{name:'定位胆',index:1,arr:['dy','de','ds','dsi','dw','dl','dq','db','dj','dshi']}],
			active:6
		}

		
	]
	menu_2 = []; //存储当前一级导航对应的耳机导航
	ball_tab = {
		1:['全','大','小','单','双','清'],
		2:['全','清'],
	};
	now_balllist = []; //当前号码列表
	
	// 所有号码的列表数据
	ball_data = {
		'w':{
			title:'万位',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:0
		},
		'q':{
			title:'千位',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:1
		},
		'b':{
			title:'百位',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:2
		},
		's':{
			title:'十位',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:3
		},
		'g':{
			title:'个位',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:4
		},
		'cgj':{
			title:'猜冠军',
			ball:[1,2,3,4,5,6,7,8,9,10],
			tab:this.ball_tab[1],
			index:4
		},
		'cyj':{
			title:'猜亚军',
			ball:[1,2,3,4,5,6,7,8,9,10],
			tab:this.ball_tab[1],
			index:4
		},
		'cjj':{
			title:'猜季军',
			ball:[1,2,3,4,5,6,7,8,9,10],
			tab:this.ball_tab[1],
			index:4
		},
		'dy':{
			title:'第一',
			ball:[1,2,3,4,5,6,7,8,9,10],
			tab:this.ball_tab[1],
			index:4
		},
		'de':{
			title:'第二',
			ball:[1,2,3,4,5,6,7,8,9,10],
			tab:this.ball_tab[1],
			index:4
		},
		'ds':{
			title:'第三',
			ball:[1,2,3,4,5,6,7,8,9,10],
			tab:this.ball_tab[1],
			index:4
		},
		'dsi':{
			title:'第四',
			ball:[1,2,3,4,5,6,7,8,9,10],
			tab:this.ball_tab[1],
			index:4
		},
		'dw':{
			title:'第五',
			ball:[1,2,3,4,5,6,7,8,9,10],
			tab:this.ball_tab[1],
			index:4
		},
		'dl':{
			title:'第六',
			ball:[1,2,3,4,5,6,7,8,9,10],
			tab:this.ball_tab[1],
			index:4
		},
		'dq':{
			title:'第七',
			ball:[1,2,3,4,5,6,7,8,9,10],
			tab:this.ball_tab[1],
			index:4
		},
		'db':{
			title:'第八',
			ball:[1,2,3,4,5,6,7,8,9,10],
			tab:this.ball_tab[1],
			index:4
		},
		'dj':{
			title:'第九',
			ball:[1,2,3,4,5,6,7,8,9,10],
			tab:this.ball_tab[1],
			index:4
		},
		'dshi':{
			title:'第十',
			ball:[1,2,3,4,5,6,7,8,9,10],
			tab:this.ball_tab[1],
			index:4
		}
		
	};
	// 遗漏数据
	omitarr = {
		0:[],1:[],2:[],3:[],4:[]
	}
	// 所有要用到的号码
	match_tab = {
		0:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9},
		1:{5:5,6:6,7:7,8:8,9:9},
		2:{0:0,1:1,2:2,3:3,4:4},
		3:{1:1,3:3,5:5,7:7,9:9},
		4:{0:0,2:2,4:4,6:6,8:8},
		5:{}
	};
	//所有的规则
	lot_rules = {
		'1_1':{
			description: "从01-10中任意选择1个或1个以上号码",
			example: "投注方案：01<br>开奖号码第一位：01<br>即中猜冠军",
			rule: "开奖号码的首位出现在所选号码中，即为中奖",
		},
		'2_1':{
			description: "从01-10中选择两个号码组成一注号码",
			example: "投注方案：01 02<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>即中猜前二。",
			rule: "如果开奖号码的前两位和所选号码一致，并位置正确，即为中奖",								
		},
		'2_2':{
			description: "手动输入号码，并由2个号码组成一注。",
			example: "投注方案：0102； 开奖号码：01,02,03,04,05,06,07,08,09,10，即中猜前二",
			rule: "手动输入01-10中的2个不重复的号码组成一注，所填号码与当期顺序摇出的10个号码中的前2个号码相同，且顺序一致，即中奖。",
		},
		'3_1':{
			description: "从01-10中选择三个号码组成一注号码",
			example: "投注方案：01 02 03<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>即中猜前三。",
			rule: "如果开奖号码的前三位和所选号码一致，并位置正确，即为中奖",
		},
		'3_2':{
			description: "手动输入号码，并由3个号码组成一注。",
			example: "投注方案：010203； 开奖号码：01,02,03,04,05,06,07,08,09,10，即中猜前三",
			rule: "手动输入01-10中的3个不重复的号码组成一注，所填号码与当期顺序摇出的10个号码中的前3个号码相同，且顺序一致，即中奖。",
		},
		'4_1':{
			description: "从01-10中选择四个号码组成一注号码",
			example: "投注方案：01 02 03 04<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>即中猜前四。",
			rule: "如果开奖号码的前四位和所选号码一致，并位置正确，即为中奖",
					
		},
		'4_2':{
			description: "手动输入号码，并由4个号码组成一注。",
			example: "投注方案：01020304； 开奖号码：01,02,03,04,05,06,07,08,09,10，即中猜前四",
			rule: "手动输入01-10中的4个不重复的号码组成一注，所填号码与当期顺序摇出的10个号码中的前4个号码相同，且顺序一致，即中奖。",
					
		},
		'5_1':{
			description: "从01-10中选择五个号码组成一注号码",
			example: "投注方案：01 02 03 04 05<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>即中猜前五。",
			rule: "如果开奖号码的前五位和所选号码一致，并位置正确，即为中奖",
					
		},
		'5_2':{
			description: "手动输入号码，并由5个号码组成一注。",
			example: "投注方案：0102030405； 开奖号码：01,02,03,04,05,06,07,08,09,10，即中猜前五",
			rule: "手动输入01-10中的5个不重复的号码组成一注，所填号码与当期顺序摇出的10个号码中的前5个号码相同，且顺序一致，即中奖。",
					
		},
		'6_1':{
			description: "从第一到第十名任意位置上选择1个或一个以上号码。",
			example: "投注方案：第一名 1<br/>开奖号码：第一名 1，即中奖定位胆第一。",
			rule: "从第一到第十名任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。",
					
		},
		
		
	}
	now_matchtab = {};//用来存储选中的号
	now_matchball = {0:{},1:{},2:{},3:{},4:{},5:{}}; //选中的大小单双的tab
	ballindex = -1;
	up_ball = 1;
	ngOnInit(){
		let that = this
		//获取当前id
		this.getPageId();
		this.check_have_credit()
		this.loadpage = userModel.platform;
		Base.DOM.title('重庆时时彩')
		this.now_lang=userModel.langpackage;
		that.status = {
			menu_1:1,
			menu_2:1
		}
		that.menu_2_data.map(function(res){
			if(res.active == that.status.menu_1){
				that.menu_2.push(res)
			}
		})
		this.balllist(['cgj']);
		this.now_description = this.lot_rules[this.now_tips_menu]['description'];
		//路由控制
		this.route.params.subscribe(data => {
            this.getPageId();
            this.check_have_credit();
        });
	}
	ngAfterViewInit(){
		this.inittab2();
	}
	check_have_credit(){
		console.log(this.nowPageId)
		if (this.nowPageId == 'xyft_ffc') {
			this.hid_tab = true;
		}else{
			this.hid_tab = false;
		}
	}
	// 通过id获取目前显示的项目配置文件
	getPageId(){

		let idarray = this.router.url.split("/");
		this.nowPageId = idarray[idarray.length-1]+'_ffc';
		this.nowitems = this.items_show[this.nowPageId];
	}
	inittab2(){
		let ulMax = $('.typetab').outerWidth();
		let liWidth = 0;
		$('.pointl').on('click',function(){
			$.each($('.tab_li'),function(i,n){
				liWidth = liWidth + $(n).outerWidth();
				if (liWidth>ulMax) {
					$(n).addClass('hide_it')
				}else{
					$(n).removeClass('hide_it')
				}
			});
			liWidth = 0;
		})
		$('.pointr').on('click',function(){
			$.each($('.tab_li'),function(i,n){
				liWidth = liWidth + $(n).outerWidth();
				if (liWidth<ulMax) {
					$(n).addClass('hide_it')
				}else{
					$(n).removeClass('hide_it')
				}
				
			});
			if (liWidth<ulMax) {
				$('.tab_li').removeClass('hide_it');
			}
			liWidth = 0
		})
		$.each($('.tab_li'),function(i,n){
			liWidth = liWidth + $(n).outerWidth();
			if (liWidth>ulMax) {
				$(n).addClass('hide_it')
			}
		});
		liWidth = 0;
	}
	//路由函数                      
	linkrouter(t){
	  this.router.navigate([t]);
	}
	// 滑块左侧递减事件
	rangevaluelessen() {
	  if (this.rangepercent > 0) {
	    this.rangepercent -= 1;
	  }
	}
	// 滑块左侧递加事件
	rangevalueadd() {
	  if (this.rangepercent < 30) {
	    this.rangepercent += 1;
	  }
	}
	// 时时彩一级导航切换
	tabmenu(data){
		let that = this;

		that.now_tab2click_num = that.menu_2_data[data.active-1]['menu'][0].arr.length;

		that.inittab()
		if(data.href){
			that.router.navigateByUrl(data.href)
		}else{
			that.status.menu_1 = data.active
			that.status.menu_2 = 1
			that.menu_2 = []
			that.up_ball = 1
			that.menu_2_data.map(function(res){
				if(res.active == that.status.menu_1){
					that.menu_2.push(res)
				}
			})
			if(that.menu_2[0].menu[0].arr){
				that.balllist(that.menu_2[0].menu[0].arr)
			}else{
				that.up_ball = 2
			}
			
			that.currtabname = that.menu_2[0].menu[0].name;
			// 配置规则提示
			that.now_tips_menu = that.status.menu_1+'_'+that.status.menu_2;
			that.now_description = that.lot_rules[that.now_tips_menu]['description'];
			if(that.status.menu_1>8){
				that.hothidden = true;
			}else{
				that.hothidden = false;
			}
		}
	}
	
	// 时时彩二级导航切换
	currtabname = '五星复选'
	tabmenu2(data){
		let that = this;
		if(!data.isupload){
			that.now_tab2click_num = data.arr.length;
		}else{
			that.now_tab2click_num = 0;
		}
		that.inittab()
		that.currtabname = data.name
		that.status.menu_2 = data.index
		if(data.isupload){
			that.up_ball = 2
		}else{
			that.up_ball = 1
			this.balllist(data.arr)
		}
		that.now_tips_menu = that.status.menu_1+'_'+that.status.menu_2;
		that.now_description = that.lot_rules[that.now_tips_menu]['description'];
	}
	// 时时彩下注区左侧显示列表
	balllist(arr){
		let that = this
		that.now_balllist = []
		that.now_tab2click_num = arr.length;
		for (var i = 1; i <= that.now_tab2click_num; i++) {
			that.now_matchtab[i-1] = {}
		};
		arr.map(function(res){
			if(res == 'w' || res == 'q' || res == 'b' || res == 's' || res == 'g'){
				that.hothidden = false;
			}else{
				that.hothidden = true;
			}
			that.now_balllist.push(that.ball_data[res])
		})
		//判断加多少进去
		
		
		
	}
	
	// 选中号码
	choosetab(index,clickindex,val,that){
		this.now_matchball = {0:{},1:{},2:{},3:{},4:{},5:{}}
		this.match_tab = {
			0:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9},
			1:{5:5,6:6,7:7,8:8,9:9},
			2:{0:0,1:1,2:2,3:3,4:4},
			3:{1:1,3:3,5:5,7:7,9:9},
			4:{0:0,2:2,4:4,6:6,8:8},
			5:{}
		};
		this.now_matchtab[index] = {}
		
		this.ballindex = index
		this.now_matchtab[index] = this.match_tab[clickindex]
		$(that).parent('.numright').find('li').removeClass('active');
		if(val == this.ball_tab[1][5]){
			this.now_matchball[clickindex] = ''
		}else{
			this.now_matchball[clickindex] = val
			$(that).addClass('active')
		}
	}
	
	//选中单个号码
	oneball(index,clickindex,val,that){
		if(this.now_matchtab[index][val]){
			this.now_matchtab[index][val]=''
		}else{
			this.now_matchtab[index][val] = val
		}
	}
	
	// 每次点击需要初始化的事件
	inittab(){
		this.now_matchball = {0:{},1:{},2:{},3:{},4:{},5:{}}
		this.now_matchtab = {0:{},1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{},9:{},10:{}};
		this.omitarr = {0:[],1:[],2:[],3:[],4:[]}
		this.omitname = ''
		$('.numright').find('li').removeClass('active');
		
	}
	
	// 遗漏选择
	omitname = ''
	checkomit(obj,type){
		let that = this
		if($(obj).is(':checked')) {
			$("input:checkbox[name='ballcheck']").prop("checked",false)
			$(obj).prop("checked",true)

			if(type == 'yl'){
				that.omitarr = {
					0:['05','25','13','26','14','08','11','32','19','07'],
					1:['05','25','13','26','14','08','11','32','19','07'],
					2:['05','25','13','26','14','08','11','32','19','07'],
					3:['05','25','13','26','14','08','11','32','19','07'],
					4:['05','25','13','26','14','08','11','32','19','07']
				}
				that.omitname = '当前遗漏'
			}else{
				that.omitarr = {
					0:['09','25','13','26','14','08','11','32','19','07'],
					1:['09','25','13','26','14','08','11','32','19','07'],
					2:['09','25','13','26','14','08','11','32','19','07'],
					3:['09','25','13','26','14','08','11','32','19','07'],
					4:['09','25','13','26','14','08','11','32','19','07']
				}
				that.omitname = '当前冷热'
			}
		}else{
			that.omitarr = {0:[],1:[],2:[],3:[],4:[]}
		}
	}
	
	// 确认选号
	sureballlist :any=[]
	addball(arrob){
		let that = this
		let arr = []
		let obj:any={}
		for(let j=0;j<5;j++){
			arr = []
			for (let i in that.now_matchtab[j]) {
				if(i!=''){
					arr.push(that.now_matchtab[j][i]); //属性
				}
			}
			if(obj.ball){
				obj.ball = obj.ball+'|'+arr.join(',')
			}else{
				obj.ball = arr.join(',')
			}
		}
		obj.name=that.currtabname
		that.sureballlist.push(obj)
		this.inittab()
	}
	
	// 删除号码
	delball(type,val){
		if(type=='clear'){
			this.sureballlist = []
		}{
			Base._.removeArr(val,this.sureballlist)
		}
	}
	
	// 随机选号号码
	mathball(arr){
		let that = this
		let math:any = []
		let redata:any = {}
		arr.map(function(res){
			res.menu.map(function(data){
				if(data.name == that.currtabname){
					math = data.arr
				}
			})
		})
		math.map(function(res){
			switch (res){
				case '120':
				redata.ball = Math.floor(0 + Math.random() * (9 - 0))+'|';
				break;
				default:
				if(redata.ball){
					redata.ball = redata.ball + Math.floor(0 + Math.random() * (9 - 0))+'|';
				}else{
					redata.ball = Math.floor(0 + Math.random() * (9 - 0))+'|';
				}
			}
		})
		let arrball = redata.ball.split('|')
		arrball.pop()
		redata.ball = arrball.join('|')
		redata.name=that.currtabname
		that.sureballlist.push(redata)
	}
	
	addrem(item){
		this.multiple_input.value = parseInt(this.multiple_input.value);
		this.radom_input.value = parseInt(this.radom_input.value);
		if (item=='multiple') {
			this.multiple_input.value = this.multiple_input.value+1;
		}else if(item=='radom'){
			this.radom_input.value = this.radom_input.value +1;
		}
		
	}
	minusrem(item){
		this.multiple_input.value = parseInt(this.multiple_input.value);
		this.radom_input.value = parseInt(this.radom_input.value);
		if (item=='multiple') {
			if (this.multiple_input.value>1) {
				this.multiple_input.value = this.multiple_input.value-1;
			}
		}else if(item=='radom'){
			if (this.radom_input.value>1) {
				this.radom_input.value = this.radom_input.value-1;
			}
		}
	}
	// 下拉框选择input值
	check_multi(item){
		this.multiple_input.value = item;
	}
	// 限制input输入格式
	regUpright(){
		if (this.multiple_input<0||this.multiple_input%1!=0||this.multiple_input === null) {
			this.multiple_input = parseInt(this.multiple_input.toString().replace(/\D/g,''))
			this.multiple_input = Math.abs(this.multiple_input);
			this.multiple_input = parseInt(this.multiple_input.toString());
			if(isNaN(this.multiple_input)){
				this.multiple_input = '';
			}
		}
	}

	changereg () {
        this.curinpt.value = this.curinpt.value.replace(/\D/g, "");
        // this.multiple_input.value = this.multiple_input.value.replace(/\D/g, "");
    }
    inmoneyfocus(item) {
    	if(item === 'multiple'){
			this.curinpt = this.multiple_input;
    	}else if(item === 'radom'){
    		this.curinpt = this.radom_input;
    	}
    }

	show_tips(item,em){
		if(item === 'reward_rule'){
			this.now_tips = this.other_rules[item];
		}else{
			this.now_tips = this.lot_rules[this.now_tips_menu][item];
		}
		
		em.classList.add("tipsshow");
	}
	hid_tips(item,em){
		em.classList.remove("tipsshow");
	}
	// inputurl隐藏显示
	toggle_ul(item){
		let self = this;
		this.inmoneyfocus(item)
		setTimeout(function(){
			self.ul_hidden = !self.ul_hidden;
		}, 200)
	}
	// 弹层1
	parseDom(arg) {
	　　 var objE = document.createElement("div");
	　　 objE.innerHTML = arg;
	　　 return objE.childNodes;
	};
	show_layer(param,nextrun){
		let msg = param.msg;
		let til = param.til;
		let self = this;
		let str = '<div class="cover_bg" #cover_bg></div><div id="layer_box" #layer><div class="top_til"><div class="til">'+til+'</div><div class="close">x</div></div><div class="content_box">'+msg+'</div><div class="confirm_box"><div class="confirm_btn">确定</div></div></div>';	
		let dom = $(this.parseDom(str))
		dom.find('.close').on('click',function(){
			self.hid_layer();
		}) 
		dom.find('.confirm_box').on('click',function(){
			nextrun();
		})
		$('#layer').append(dom);
		setTimeout(function(){
			dom.addClass('tobig')
		}, 10)
		window.onresize = function () {
			console.log('x')
		}
	}
	hid_layer(){
		document.getElementById("layer").innerHTML = '';
	}
}