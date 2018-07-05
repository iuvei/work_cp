const algorithm = { 
	arrangement(total, target){　　　　// 阶乘算法total：总的排列数　　@target：组合的总数
        var nTotal = 1;
        var nTarget = 1;
        var nNum = 1;
        for(var i=1; i<=total; i++){
            nTotal *= i;
        }
        for(var k=1, tar=total-target; k<=tar; k++){
            nTarget *= k;
        }
        for(var s=1; s<=target; s++){
            nNum *= s;    
        }
        return nTotal/(nTarget*nNum);
    },
	arrnum(t,arr){
		var a = [];
		
	},
	hasArr(val,array){
		let res = false
		array.map((value) => {
			if(value === val){
				res = true
			}
		})
		return res
	},
	removeArr(val,array){
		array.map((value,i) => {
			value === val && array.splice(i,1)
		})
		return array
	},
	// 排列组合
	plzh(_selfs, _arr, _indexs, _total, _where) {
		if (_selfs != null && _arr.length >= _selfs.length) {
			if (_where < _selfs.length - 1) { //非末位
				var index = _indexs[_where];
				if (index == _arr.length) { //非末位末尾
					--_where;
					if (_where == -1) { //首位超出
						return;
					} else {
						_indexs[_where] = _indexs[_where] + 1;
						for (var i = _where + 1; i < _selfs.length; i++) {
							_indexs[i] = _indexs[i - 1] + 1;
						}
						this.plzh(_selfs, _arr, _indexs, _total, _where);
					}
				} else {
					_selfs[_where] = _arr[index];
					this.plzh(_selfs, _arr, _indexs, _total, ++_where);
				}
			} else { //末位
				var index = _indexs[_where];
				if (index == _arr.length) {  //直接末位末尾
					--_where;
					if (_where == -1) { //末位超出即 单关
						return;
					}
					_indexs[_where] = _indexs[_where] + 1;
					for (var i = _where + 1; i < _selfs.length; i++) {
						_indexs[i] = _indexs[i - 1] + 1;
					}
					this.plzh(_selfs, _arr, _indexs, _total, _where);
				} else {
					_selfs[_where] = _arr[index];
					_total.push(algorithm.deepCoby(_selfs));
					var _nextIndex = _indexs[_where] + 1;
					if (_nextIndex < _arr.length) {
						_indexs[_where] = _nextIndex;
						this.plzh(_selfs, _arr, _indexs, _total, _where);
					} else { //下一个末位末尾
						--_where;
						if (_where == -1) {
							return;
						}
						_indexs[_where] = _indexs[_where] + 1;
						for (var i = _where + 1; i < _selfs.length; i++) {
							_indexs[i] = _indexs[i - 1] + 1;
						}
						this.plzh(_selfs, _arr, _indexs, _total, _where);
					}
				}
			}
		}
	},
	// 深度复制
	deepCoby(obj) {
		if (null == obj || "object" != typeof obj)
			return obj;
		if (obj instanceof Date) {
			var copy1 = new Date();
			copy1.setTime(obj.getTime());
			return copy1;
		}

		if (obj instanceof Array) {
			var copy2 = [];
			for (var i = 0, len = obj.length; i < len; ++i) {
				copy2[i] = this.deepCoby(obj[i]);
			}
			return copy2;
		}
		if (obj instanceof Object) {
			var copy3 = {};
			for (var attr in obj) {
				if (obj.hasOwnProperty(attr)) copy3[attr] = this.deepCoby(obj[attr]);
			}
			return copy3;
		}
		throw new Error("Unable to copy obj! Its type isn't supported.");
	}
}

const Matchrule = {
	chooseball(nowarr,len){
		let allarr = [];
		for(let j=0;j<len.arr.length;j++){
			let arr = []
			for (let i in nowarr[j]) {
				if(i!=''){
					if(parseInt(nowarr[j][i])>=0){
						arr.push(nowarr[j][i]); 
					}
				}
			}
			allarr.push(arr)
		}
		return allarr
	},
	Rule_1(nowarr,len){
		let allarr = [],totalbet = 1
		let obj :any = {}
		allarr = Matchrule.chooseball(nowarr,len)
		let Isaddball = true
		for(let i=0;i<allarr.length;i++){
			if(allarr[i].length==0){
				Isaddball = false;
			}
			totalbet = totalbet*allarr[i].length
		}
		obj = {'status':Isaddball,'allarr':allarr,'totalbet':totalbet}
		obj.ball = TranBall(obj,len)
		return obj
	},
	Rule_2(nowarr,len){
		let allarr = [],totalbet = 1
		let obj :any = {}
		allarr = Matchrule.chooseball(nowarr,len)
		let Isaddball = true   
		for(let i=0;i<allarr.length;i++){
			if(allarr[i].length==0){
				Isaddball = false;
			}
			totalbet = totalbet*allarr[i].length
		}
		totalbet = totalbet * allarr.length
		obj = {'status':Isaddball,'allarr':allarr,'totalbet':totalbet}
		obj.ball = TranBall(obj,len)
		return obj
	},
	Rule_3(nowarr,len){
		let allarr = [],totalbet = 1,ballarr = []
		let obj :any = {}
		ballarr = Matchrule.chooseball(nowarr,len)
		let Isaddball = false 
		if(len.arr.length === 1){
			ballarr[0].map(function(res){  
			   allarr.push([res])
			});
			if(allarr.length>=len.datarule[1]){
				Isaddball = true;
			}
			totalbet = algorithm.arrangement(allarr.length,len.datarule[1])
		}
		
		if(len.arr.length === 2){
			allarr = Matchrule.chooseball(nowarr,len)
			let a = [],c = 0
			allarr[allarr.length-1].map(function(res){
				a.push(res)
			})
			for(var l = 0;l<allarr[0].length;l++){
				if(algorithm.hasArr(allarr[0][l],allarr[1])){
					var _selfs;
					var _arr = [];
					var _indexs = []; //初始排列组合，即对应的_arr的索引下标为0,1,2
					var _where = 0;
					var _total = [];
					if(len.datarule[1]<len.datarule[2]){
						for(var q = 0;q<len.datarule[2];q++){
							_indexs.push(q)
						}
						_arr = allarr[1]
						_selfs = new Array(len.datarule[2])
						algorithm.plzh(_selfs, _arr, _indexs, _total, _where);
						for(var j = 0;j<_total.length;j++){
							if(algorithm.hasArr(allarr[0][l],_total[j])){
								c = c + 1
							}
						}
					}
					if(len.datarule[1]>=len.datarule[2]){
						for(var q = 0;q<len.datarule[1];q++){
							_indexs.push(q)
						}
						_arr = allarr[0]
						_selfs = new Array(len.datarule[1])
						algorithm.plzh(_selfs, _arr, _indexs, _total, _where);
						for(var j = 0;j<_total.length;j++){
							if(algorithm.hasArr(allarr[0][l],_total[j])){
								c = c + 1
							}
						}
					}
					
				}
			}
			for(let i=0;i<allarr.length;i++){
				if(allarr[i].length<len.datarule[i+1]){
					Isaddball = false;
				}else{
					allarr[0].map(function(res){
						if(!algorithm.hasArr(res,allarr[1])){
							a.push(res)
						}
					})
					if(a.length>=len.datarule[1]+len.datarule[2] && allarr[0].length>=len.datarule[1] && allarr[1].length>=len.datarule[2]){
						Isaddball = true
						if(len.datarule[1]>=len.datarule[2]){
							totalbet = algorithm.arrangement(allarr[0].length,len.datarule[1])*allarr[1].length - c
						}
						if(len.datarule[1]<len.datarule[2]){
							totalbet = algorithm.arrangement(allarr[1].length,len.datarule[2])*allarr[0].length - c
						}
					}
				}
			}
		}
		obj = {'status':Isaddball,'allarr':allarr,'totalbet':totalbet}
		obj.ball = TranBall(obj,len)
		return obj
	}
}

//-- 改造选号显示
const TranBall = (data,mat) => {
	let res = ''
	for(var i=0;i<data.allarr.length;i++){
		res = res!=''?res+'|'+data.allarr[i].join(','):res+data.allarr[i].join(',')
	}
	return res;
}

export const Utils= {
	Matchrule,
	TranBall,
	algorithm
};

