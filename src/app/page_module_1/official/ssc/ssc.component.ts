import { Component, OnInit } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { RouterModule, Routes, Router } from "@angular/router";

import { Base } from '../../../../factory/base.model';
import { Api } from '../../../../factory/api.model';
import { formmod } from '../../../../factory/form';
import userModel from '../../../../status/user.model';
@Component({
    selector: 'sscofficial',
    templateUrl: './ssc.component.html',
    styleUrls: ['./ssc.component.scss']
})

export class SSCofficialComponent implements OnInit {
	constructor(private httpClient:HttpClient,private router: Router) { }
	loadpage=false;
	public resultdata = [{'sta':'20180517014','num':'2 9 0 8 7'},{'sta':'20180517014','num':'2 9 0 8 7'} ,{'sta':'20180517014','num':'2 9 0 8 7'} , {'sta':'20180517014','num':'2 9 0 8 7'},{'sta':'20180517014','num':'2 9 0 8 7'} , {'sta':'20180517014','num':'2 9 0 8 7'},{'sta':'20180517014','num':'2 9 0 8 7'} ,{'sta':'20180517014','num':'2 9 0 8 7'}];
	public rankdata = [{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'},{'name':'王刚','type':'时时彩','money':'9999'}];
	public multiple_input = 1;
	public radom_input = 1;
	public multi_select = [10,50,100,500,1000,2000,5000,10000];
	public ul_hidden = true;
	public now_tips = '这是一个比较短的提示!';
	public now_tiparray = {
		'i1':'投注方案:12345,<br>开奖号码:12345,<br>即中一等奖。',
		'i2':'从万位,千位,百位,十位,个位,选一个五位数号码组成一注,所选号码与开奖号码顺序相同且一致则中奖',
		'i3':'这是一个比较短的提示',
	};
	public tips_hidden = true;
	public riskvalue = -0.2;
	public rangepercent = 0;
	

	
	// public rangevalue = rangevalue;
	now_lang={};
	status = {
		menu_1:1,//一级tab默认项
		menu_2:1  //二级tab默认项
	}
	
	// 一级tab
	menu_1 = [
		{
			name:'五星',
			active:1
		},
		{
			name:'前四',
			active:2
		},
		{
			name:'后四',
			active:3
		},
		{
			name:'后三码',
			active:4
		},
		{
			name:'前三码',
			active:5
		},
		{
			name:'中三码',
			active:6
		},
		{
			name:'二码',
			active:7
		},
		{
			name:'定位胆',
			active:8
		},
		{
			name:'不定胆',
			active:9
		},
		{
			name:'大小单双',
			active:10
		},
		{
			name:'趣味',
			active:11
		},
		{
			name:'任选二',
			active:12
		},
		{
			name:'任选三',
			active:13
		},
		{
			name:'任选四',
			active:14
		},
		{
			name:'龙虎',
			href:'#/'
		}
	];
	
	// 2级tab数据以及对应要显示的内容
	menu_2_data = [
		{
			title:'五星直选',
			menu:[{name:'五星复选',index:1,arr:['w','q','b','s','g']},{name:'五星单式',index:2,isupload:true},{name:'五星组合',index:3,arr:['w','q','b','s','g']}],
			active:1
		},
		{
			title:'五星组选',
			menu:[{name:'组选120',index:4,arr:['120']},{name:'组选60',index:5,arr:['2ch','dh']},{name:'组选30',index:6,arr:['2ch','dh']},{name:'组选20',index:7,arr:['3ch','dh']},{name:'组选10',index:8,arr:['3ch','2ch']},{name:'组选5',index:9,arr:['4ch','dh']}],
			active:1
		},
		{
			title:'前四直选',
			menu:[{name:'前四复式',index:1,arr:['w','q','b','s']},{name:'前四单式',index:2},{name:'前四组合',index:3}],
			active:2
		},
		{
			title:'前四组选',
			menu:[{name:'前四组选24',index:4},{name:'前四组选12',index:5},{name:'前四组选6',index:6},{name:'前四组选4',index:7}],
			active:2
		},
		{
			title:'后四直选',
			menu:[{name:'后四复式',index:1},{name:'后四单式',index:2},{name:'后四组合',index:3}],
			active:3
		},
		{
			title:'后四组选',
			menu:[{name:'后四组选24',index:4},{name:'后四组选12',index:5},{name:'后四组选6',index:6},{name:'后四组选4',index:7}],
			active:3
		},
		{
			title:'后三直选',
			menu:[{name:'后三直选复式',index:1},{name:'后三直选单式',index:2},{name:'后三直选和值',index:3}],
			active:4
		},
		{
			title:'后三组选',
			menu:[{name:'后三组三',index:4},{name:'后三组六',index:5},{name:'后三混合组选',index:6},{name:'后三组选和值',index:7}],
			active:4
		},
		{
			title:'前三直选',
			menu:[{name:'前三直选复式',index:1},{name:'前三直选单式',index:2},{name:'前三直选和值',index:3}],
			active:5
		},
		{
			title:'前三组选',
			menu:[{name:'前三组三',index:4},{name:'前三组六',index:5},{name:'前三混合组选',index:6},{name:'前三组选和值',index:7}],
			active:5
		},
		{
			title:'中三直选',
			menu:[{name:'中三直选复式',index:1},{name:'中三直选单式',index:2},{name:'中三直选和值',index:3}],
			active:6
		},
		{
			title:'中三组选',
			menu:[{name:'中三组三',index:4},{name:'中三组六',index:5},{name:'中三混合组选',index:6},{name:'中三组选和值',index:7}],
			active:6
		},
		{
			title:'二星直选',
			menu:[{name:'后二直选(复式)',index:1},{name:'后二直选(单式)',index:2},{name:'前二直选(复试)',index:3},{name:'前二直选(单式)',index:4},{name:'后二直选(和值)',index:5},{name:'前二直选(和值)',index:6}],
			active:7
		},
		{
			title:'二星组选',
			menu:[{name:'后二组选(复式)',index:7},{name:'后二组选(单式)',index:8},{name:'前二组选(复试)',index:9},{name:'前二组选(单式)',index:10},{name:'后二组选(和值)',index:11},{name:'前二组选(和值)',index:12}],
			active:7
		},
		{
			title:'定位胆',
			menu:[{name:'定位胆',index:1}],
			active:8
		},
		{
			title:'三星不定胆',
			menu:[{name:'后三一码不定胆',index:1},{name:'后二码不定胆',index:2},{name:'前三一码不定胆',index:3},{name:'前三二码不定胆',index:4}],
			active:9
		},
		{
			title:'大小单双',
			menu:[{name:'前二大小单双',index:1},{name:'后二大小单双',index:2}],
			active:10
		},
		{
			title:'特殊',
			menu:[{name:'一帆风顺',index:1},{name:'好事成双',index:2},{name:'三星报喜',index:3},{name:'四季发财',index:4}],
			active:11
		},
		{
			title:'任二直选',
			menu:[{name:'任二直选复式',index:1},{name:'任二直选单式',index:2},{name:'任二直选和值',index:3}],
			active:12
		},
		{
			title:'任二组选',
			menu:[{name:'任二组选复式',index:4},{name:'任二组选单式',index:5},{name:'任二组选和值',index:6}],
			active:12
		},
		{
			title:'任三直选',
			menu:[{name:'任三直选单式',index:1},{name:'任三直选复式',index:2},{name:'任三直选和值',index:3}],
			active:13
		},
		{
			title:'任三组选',
			menu:[{name:'任三组三',index:4},{name:'任三组六',index:5},{name:'任三混合组选',index:6},{name:'任三组三和值',index:7}],
			active:13
		},
		{
			title:'任四直选',
			menu:[{name:'任四直选单式',index:1},{name:'任四直选复式',index:2}],
			active:14
		},
		{
			title:'任四组选',
			menu:[{name:'组选24',index:3},{name:'组选12',index:4},{name:'组选6',index:5},{name:'组选4',index:6}],
			active:14
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
		'24':{
			title:'组选24',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:5
		},
		'2ch':{
			title:'二重号',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:6
		},
		'dh':{
			title:'单号',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:7
		},
		'120':{
			title:'组选120',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:8
		},
		'4ch':{
			title:'四重号',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:9
		},
		'3ch':{
			title:'三重号',
			ball:[0,1,2,3,4,5,6,7,8,9],
			tab:this.ball_tab[1],
			index:9
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
	now_matchtab = {0:{},1:{},2:{},3:{},4:{},5:{}};//用来存储选中的号
	now_matchball = {0:{},1:{},2:{},3:{},4:{},5:{}}; //选中的大小单双的tab
	ballindex = -1;
	up_ball = 2;
	ngOnInit(){
		let that = this
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
		this.balllist(['w','q','b','s','g'])
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
		let that = this
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
			
			that.currtabname = that.menu_2[0].menu[0].name
		}
	}
	
	// 时时彩二级导航切换
	currtabname = '五星组合'
	tabmenu2(data){
		let that = this
		that.inittab()
		that.currtabname = data.name
		that.status.menu_2 = data.index
		if(data.isupload){
			that.up_ball = 2
		}else{
			that.up_ball = 1
			this.balllist(data.arr)
		}
	}
	
	// 时时彩下注区左侧显示列表
	balllist(arr){
		let that = this
		that.now_balllist = []
		arr.map(function(res){
			that.now_balllist.push(that.ball_data[res])
		})
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
		this.now_matchtab = {0:{},1:{},2:{},3:{},4:{},5:{}};
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
	addball(){
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
	
	addrem(item){
		if (item=='multiple') {
			this.multiple_input = this.multiple_input+1;
		}else if(item=='radom'){
			this.radom_input = this.radom_input+1;
		}
		
	}
	minusrem(item){
			if (item=='multiple') {
				if (this.multiple_input>1) {
					this.multiple_input = this.multiple_input-1;
				}
			}else if(item=='radom'){
				if (this.radom_input>1) {
					this.radom_input = this.radom_input-1;
				}
			}
	}
	// 下拉框选择input值
	check_multi(item){
		this.multiple_input = item;
	}
	// 限制input输入格式
	regUpright(){
		if (this.multiple_input<0||this.multiple_input%1!=0) {
			this.multiple_input = Math.abs(this.multiple_input)
			this.multiple_input = parseInt(this.multiple_input.toString())
		}
	}

	show_tips(item,em){
		this.now_tips = this.now_tiparray[item];
		em.classList.add("tipsshow");
	}
	hid_tips(item,em){
		em.classList.remove("tipsshow");
	}
	// inputurl隐藏显示
	toggle_ul(e){
		let self = this;
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
		console.log('有反应么')
		document.getElementById("layer").innerHTML = '';
	}
}