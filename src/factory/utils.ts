const Matchrule = {
	chooseball(nowarr,len){
		let allarr = [];
		for(let j=0;j<len.arr.length;j++){
			let arr = []
			if(Object.keys(nowarr[j]).length>0){
				for (let i in nowarr[j]) {
					if(i!=''){
						if(parseInt(nowarr[j][i])>=0){
							arr.push(nowarr[j][i]); 
						}else{
							if(nowarr[j][i]!=''){
								arr.push(nowarr[j][i])
							}
						}
					}
				}
			}
			if(arr.length>0){
				allarr.push(arr)
			}else{
				allarr.push([])
			}
		}
		return allarr
	},
	Rule_1(nowarr,len){
		let allarr = [],totalbet = 1
		let obj :any = {}
		allarr = Matchrule.chooseball(nowarr,len)
		let Isaddball = true
		if(allarr.length<len.arr.length){
			obj = {'status':false,'allarr':[],'totalbet':0,'ball':[]}
			obj.ball.push(TranBall(obj,len))
		}else{
			for(let i=0;i<allarr.length;i++){
				if(allarr[i].length==0){
					Isaddball = false;
				}
				totalbet = totalbet*allarr[i].length
			}
			obj = {'status':Isaddball,'allarr':allarr,'totalbet':totalbet,'ball':[]}
			obj.ball.push(TranBall(obj,len))
		}
		return obj
	},
	Rule_2(nowarr,len){
		let allarr = [],totalbet = 1
		let obj :any = {}
		allarr = Matchrule.chooseball(nowarr,len)
		let Isaddball = true  
		if(allarr.length<len.arr.length){
			obj = {'status':false,'allarr':[],'totalbet':0,'ball':[]}
			obj.ball.push(TranBall(obj,len))
		}else{
			for(let i=0;i<allarr.length;i++){
				if(allarr[i].length==0){
					Isaddball = false;
				}
				totalbet = totalbet*allarr[i].length
			}
			totalbet = totalbet * allarr.length
			obj = {'status':Isaddball,'allarr':allarr,'totalbet':totalbet,'ball':[]}
			obj.ball.push(TranBall(obj,len))
		}
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
				if(allarr.length>=len.arr.length && algorithm.hasArr(allarr[0][l],allarr[1])){
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
			if(allarr.length>=len.arr.length){
				//计算注数
				if(allarr[0].length<len.datarule[1] || allarr[1].length<len.datarule[2]){
					Isaddball = false;
				}else{
					if(len.datarule[1]>=len.datarule[2]){
						allarr[0].map(function(res){
							if(!algorithm.hasArr(res,allarr[1])){
								a.push(res)
							}
						})
					}else{
						allarr[0].map(function(res){
							if(!algorithm.hasArr(res,allarr[1])){
								a.push(res)
							}
						})
					}
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
				// 移除选择刚好符合规则时组合中的重复项
				if(c == 1 || allarr[0].length == 1 || allarr[1].length == 1 || totalbet == 1){
					allarr[0].map(function(res){
						if(algorithm.hasArr(res,allarr[1])){
							if(allarr[1].length == 1 && len.datarule[1]>=len.datarule[2]){
								algorithm.removeArr(res,allarr[0])
							}else if(allarr[1].length != 1 && len.datarule[1]>=len.datarule[2]){
								algorithm.removeArr(res,allarr[1])
							}
							if(allarr[0].length == 1 && len.datarule[1]<len.datarule[2]){
								algorithm.removeArr(res,allarr[1])
							}else if(allarr[0].length != 1 && len.datarule[1]<len.datarule[2]){
								algorithm.removeArr(res,allarr[0])
							}
						}
					})
				}
			}
		}
		obj = {'status':Isaddball,'allarr':allarr,'totalbet':totalbet,'ball':[]}
		obj.ball.push(TranBall(obj,len))
		return obj
	},
	Rule_4(nowarr,len){
		let allarr = [],totalbet = 1,ballarr = []
		let obj :any = {}
		let arr = []
		ballarr = Matchrule.chooseball(nowarr,len)
		let Isaddball = false 
		if(len.arr.length === 1){
			ballarr[0].map(function(res){  
			   allarr.push([res])
			});
			if(allarr.length>=len.datarule[1]){
				Isaddball = true;
			}
		}
		if(len.datarule[3]){
			var _selfs;
			var _arr = [];
			var _indexs = [0,1];
			var _where = 0;
			var _total = [];
			_arr = [0,1,2,3,4,5,6,7,8,9]
			
			if(len.datarule[3]=="Z3"){
				_selfs = new Array(2)
				algorithm.plzh(_selfs, _arr, _indexs, _total, _where);
				for(var i=0;i<_total.length;i++){
					arr.push((_total[i][0]*2)+_total[i][1])
					arr.push((_total[i][1]*2)+_total[i][0])
				}
				
				var _selfs_1 = new Array(3)
				var _total_1 = [];
				var _indexs_1 = [0,1,2];
				algorithm.plzh(_selfs_1, _arr, _indexs_1, _total_1, _where);
				for(var i=0;i<_total_1.length;i++){
					arr.push(_total_1[i][0]+_total_1[i][1]+_total_1[i][2])
				}
			}else if(len.datarule[3]=="Z2"){
				_selfs = new Array(2)
				algorithm.plzh(_selfs, _arr, _indexs, _total, _where);
				for(var i=0;i<_total.length;i++){
					arr.push((_total[i][0])+_total[i][1])
				}
			}
		}else{
			if(len.datarule[2]==3){
				for(var i=0;i<10;i++){
					for(var j=0;j<10;j++){
						for(var k=0;k<10;k++){
							arr.push(i+j+k)
						}
					}
				}
			}else if(len.datarule[2]==2){
				for(var i=0;i<10;i++){
					for(var j=0;j<10;j++){
						arr.push(i+j)
					}
				}
			}else{
				if(len.datarule[0]=='Rule_8'){
					if(len.datarule[1]==3){
						for(var i=0;i<10;i++){
							for(var j=0;j<10;j++){
								for(var k=0;k<10;k++){
									arr.push(i+j+k)
								}
							}
						}
					}else{
						for(var i=0;i<10;i++){
							for(var j=0;j<10;j++){
								arr.push(i+j)
							}
						}
					}
				}
			}
		}
		let c = 0
		for(var i=0;i<allarr.length;i++){
			c = c+algorithm.hasarrCount(arr,allarr[i])
		}
		totalbet = c
		obj = {'status':Isaddball,'allarr':allarr,'totalbet':totalbet,'ball':[]}
		obj.ball.push(TranBall(obj,len))
		return obj
	},
	Rule_5(nowarr,len){
		let allarr = [],totalbet = 1,ballarr = []
		let obj :any = {}
		let arr = []
		ballarr = Matchrule.chooseball(nowarr,len)
		let Isaddball = false 
		if(len.arr.length === 1){
			ballarr[0].map(function(res){  
			   allarr.push([res])
			});
			if(allarr.length>=len.datarule[1]){
				Isaddball = true;
			}
		}
		totalbet = algorithm.arrangement(allarr.length,2)*2
		obj = {'status':Isaddball,'allarr':allarr,'totalbet':totalbet,'ball':[]}
		obj.ball.push(TranBall(obj,len))
		return obj
	},
	Rule_6(nowarr,len){
		let allarr = [],totalbet = 0,ballarr = []
		let obj :any = {ball:[]}
		let arr = []
		allarr = Matchrule.chooseball(nowarr,len)
		let Isaddball = false
		for(let i=0;i<allarr.length;i++){
			if(allarr[i].length>0){
				Isaddball = true;
			}
			totalbet = totalbet+allarr[i].length
		}
		obj = {'status':Isaddball,'allarr':allarr,'totalbet':totalbet,'ball':[]}
		for(var i=0;i<allarr.length;i++){
			let res = ''
			for(var j=0;j<allarr[i].length;j++){
				res = res!=''?res+'|'+allarr[i][j]:res+allarr[i][j]
			}
			obj.ball.push(res)
		}
		return obj
	},
	Rule_7(nowarr,len){
		let allarr = [],totalbet = 0,ballarr = []
		let obj :any = {ball:[]}
		let arr = []
		allarr = Matchrule.chooseball(nowarr,len)
		let Isaddball = false
		let c = 0,t = 0
		var _selfs;
		var _arr = [];
		var _indexs = []; 
		var _where = 0;
		var _total = [];
		for(let i=0;i<allarr.length;i++){
			if(allarr[i].length>0){
				c = c+1
				_arr.push(allarr[i].length)
				
			}
		}
		for(var i=0;i<len.datarule[1];i++){
			_indexs.push(i)
		}
		_selfs = new Array(len.datarule[1])
		algorithm.plzh(_selfs, _arr, _indexs, _total, _where);
		for(var i=0;i<_total.length;i++){
			var a = 1
			for(var j=0;j<_total[i].length;j++){
				a = _total[i][j] * a
			}
			t = t + a
		}
		totalbet = t
		if(c>=len.datarule[1]){
			Isaddball = true
		}
		obj = {'status':Isaddball,'allarr':allarr,'totalbet':totalbet,'ball':[]}
		for(var i=0;i<allarr.length;i++){
			let res = ''
			for(var j=0;j<allarr[i].length;j++){
				res = res!=''?res+'|'+allarr[i][j]:res+allarr[i][j]
			}
			obj.ball.push(res)
		}
		return obj
	},
	Rule_8(nowarr,len,checkarr){
		let c = this.Rule_4(nowarr,len).totalbet
		let allarr = [],totalbet = 0,ballarr = []
		let obj :any = {}
		allarr = Matchrule.chooseball(nowarr,len)
		let Isaddball = false
		if(checkarr && checkarr.length<len.datarule[1]){
			obj = {'status':false,'allarr':[],'totalbet':0,'ball':[]}
			obj.ball.push(TranBall(obj,len))
		}else{
			for(let i=0;i<allarr.length;i++){
				if(allarr[i].length>=len.datarule[2]){
					Isaddball = true;
					if(len.datarule[2]==1){
						totalbet = totalbet + (algorithm.arrangement(checkarr.length,len.datarule[1])*c)
					}else{
						totalbet = totalbet+algorithm.arrangement(checkarr.length,len.datarule[1])*algorithm.arrangement(allarr[i].length,len.datarule[2])
					}
				}
			}
			if(allarr[0] && allarr[0].length>=len.datarule[2]){
				allarr[0].map(function(res){  
				   ballarr.push([res])
				});
			}
			obj = {'status':Isaddball,'allarr':ballarr,'totalbet':totalbet,'ball':[]}
			obj.ball.push(TranBall(obj,len))
		}
		return obj
	},
	Rule_9(nowarr,len,checkarr){
		let allarr = [],totalbet = 0,ballarr = []
		let obj :any = {}
		// allarr = Matchrule.chooseball(nowarr,len)
		let Isaddball = false
		if(checkarr && checkarr.length<len.datarule[1]){
			obj = {'status':false,'allarr':[],'totalbet':0,'ball':[]}
			obj.ball.push(TranBall(obj,len))
		}else{
			let newlen = algorithm.deepCoby(len)
			algorithm.removeArr(newlen.datarule[1],newlen.datarule)
			let c = this.Rule_3(nowarr,newlen)
			if(len.datarule[3]=='Z6'){
				let n = algorithm.arrangement(checkarr.length,len.datarule[1])
				totalbet = c.totalbet * n
			}else{
				totalbet = c.totalbet * checkarr.length
			}
			obj = {'status':c.status,'allarr':c.allarr,'totalbet':totalbet,'ball':[]}
			obj.ball.push(TranBall(obj,len))
		}
		return obj
	},
	Rule_10(nowarr,len,checkarr){
		let allarr = [],totalbet = 0,ballarr = []
		let obj :any = {}
		let Isaddball = false
		if(checkarr && checkarr.length<len.datarule[1]){
			obj = {'status':false,'allarr':[],'totalbet':0,'ball':[]}
			obj.ball.push(TranBall(obj,len))
		}else{
			let newlen = algorithm.deepCoby(len)
			algorithm.removeArr(newlen.datarule[1],newlen.datarule)
			let c = this.Rule_5(nowarr,newlen)
			let n = algorithm.arrangement(checkarr.length,len.datarule[1])
			totalbet = c.totalbet * n
			obj = {'status':c.status,'allarr':c.allarr,'totalbet':totalbet,'ball':[]}
			obj.ball.push(TranBall(obj,len))
		}
		return obj
	},
	Rule_d1(str,len){
		let arr = [],count = len.datarule[1],Isaddball = false, ballarr = [],totalbet=0,noball = [];
		let obj :any = {},rep = [],nary = [],allarr = [],zarr = []
		for (let i = 0, len = str.length / count; i < len; i++) {
			let subStr = str.substr(0, count);
			if(subStr.length>=count){
				arr.push(subStr);
			}else{
				noball.push(subStr.split('').join(','))
			}
			str = str.replace(subStr, "");
		}
		totalbet = arr.length
		if(totalbet>0){
			Isaddball = true
			for(var i=0;i<arr.length;i++){
				allarr.push(arr[i])
				nary.push(arr[i])
			}
			if(len.datarule[2] && len.datarule[2]=='Z'){
				allarr = algorithm.disrepeat(allarr)
				nary=algorithm.disrepeatno(allarr,nary);
				for(var i=0;i<nary.length;i++){
					rep.push([nary[i]]);
				}
			}else{
				allarr = Array.from(new Set(allarr))  //es6的去重方法
				nary=algorithm.disrepeatno(allarr,nary);
				for(var i=0;i<nary.length;i++){
					rep.push([nary[i]]);
				}
			}
			for(var i=0;i<allarr.length;i++){
				ballarr.push([allarr[i].split('').join(',')])
			}
			
		}
		obj = {'status':Isaddball,'allarr':ballarr,'totalbet':totalbet,'ball':[],'repball':rep,'noball':noball}
		obj.ball.push(TranBall(obj,len))
		return obj
	},
	Rule_d2(str,len,checkarr){
		let arr = [],count = len.datarule[1],Isaddball = false, ballarr = [],totalbet=0,noball = [];
		let obj :any = {},rep = [],nary = [],allarr = [],zarr = []
		if(checkarr && checkarr.length<len.datarule[1]){
			obj = {'status':false,'allarr':[],'totalbet':0,'ball':[]}
			obj.ball.push(TranBall(obj,len))
		}else{
			for (let i = 0, len = str.length / count; i < len; i++) {
				let subStr = str.substr(0, count);
				if(subStr.length>=count){
					arr.push(subStr);
				}else{
					noball.push(subStr.split('').join(','))
				}
				str = str.replace(subStr, "");
			}
			
			if(arr.length>0){
				Isaddball = true
				for(var i=0;i<arr.length;i++){
					allarr.push(arr[i])
					nary.push(arr[i])
				}
				if(len.datarule[3] && len.datarule[3]=='Z'){
					allarr = algorithm.disrepeat(allarr)
					nary=algorithm.disrepeatno(allarr,nary);
					for(var i=0;i<nary.length;i++){
						rep.push([nary[i]]);
					}
				}else{
					allarr = Array.from(new Set(allarr))  //es6的去重方法
					nary=algorithm.disrepeatno(allarr,nary);
					for(var i=0;i<nary.length;i++){
						rep.push([nary[i]]);
					}
				}
				for(var i=0;i<allarr.length;i++){
					ballarr.push([allarr[i].split('').join(',')])
				}
				
			}
			totalbet = ballarr.length * algorithm.arrangement(checkarr.length,len.datarule[2])
			obj = {'status':Isaddball,'allarr':ballarr,'totalbet':totalbet,'ball':[],'repball':rep,'noball':noball}
			obj.ball.push(TranBall(obj,len))
		}
		return obj
	}
}

const Randomrule = (obj) =>{
	var basearr = ["w", "q", "b", "s", "g"]
	var m = [],a = [],o = ''
	if(algorithm.hasArr(obj.arr[0],basearr)){
		for(var i=0;i<10;i++){
			m.push(i)
		}
		if(obj.datarule[0]=='Rule_6'){
			o = obj.format[0].replace('n',algorithm.RandomArray(m,1)[0])
		}else{
			obj.arr.map(function(res){
				a.push(algorithm.RandomArray(m,1)[0])
			})
			a.map(function(res){
				o = o ==''?obj.format[0].replace('n',res):o.replace('n',res)
			})
		}
	}else{
		if(obj.datarule[0]=='Rule_4'){
			if(obj.datarule[2]=='Z'){
				for(var i=1;i<27;i++){
					m.push(i)
				}
			}else{
				for(var i=0;i<28;i++){
					m.push(i)
				}
			}
		}else{
			for(var i=0;i<10;i++){
				m.push(i)
			}
		}
		var l=0
		if(obj.arr.length==1){
			l = obj.datarule[1]
		}else{
			l = obj.datarule[1]+obj.datarule[2]
		}
		a = algorithm.RandomArray(m,l)
		a.map(function(res){
			o = o ==''?obj.format[0].replace('m',res):o.replace('n',res)
		})
	}
	return o
}

//-- 改造选号显示
const TranBall = (data,mat) => {
	let res = ''
	for(var i=0;i<data.allarr.length;i++){
		res = res!=''?res+'|'+data.allarr[i].join(','):res+data.allarr[i].join(',')
	}
	return res;
}

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
			if (_where < _selfs.length - 1) { 
				var index = _indexs[_where];
				if (index == _arr.length) { 
					--_where;
					if (_where == -1) { 
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
			} else {
				var index = _indexs[_where];
				if (index == _arr.length) {
					--_where;
					if (_where == -1) { 
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
					} else { 
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
	},
	// 随机从数组中取出几个元素
	RandomArray(arr, count) {
		var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
		while (i-- > min) {
			index = Math.floor((i + 1) * Math.random());
			temp = shuffled[index];
			shuffled[index] = shuffled[i];
			shuffled[i] = temp;
		}
		return shuffled.slice(min);
	},
	// 两数相加
	add(a,b){
		var args = arguments,
			lens = args.length,
			d = 0,
			sum = 0;
		for(var key in args){
			var str = ""+args[key];
			if(str.indexOf(".")!=-1){
				var temp = str.split(".")[1].length;
				d = d < temp ? temp : d;
			}
		}
		var m = Math.pow(10,d);
		for(var key in args){
			sum += args[key]*m;
		}
		return sum/m;

	},
	// 判断数组中某个值的个数
	hasarrCount(arr,m){
		var obj={};
		for(var i=0;i<arr.length;i++){  
		   var key:any = arr[i];  
		   if(obj[key]){
			   obj[key]++;  
		   }else{  
			   obj[key]=1;
		   }  
		}  
		var maxCount=0;
		var maxElement=arr[0];
		for(var c in obj){  
		   if(m==c){  
			   maxCount=obj[c];
		   }  
		}  
		return maxCount;
	},
	// 导入txt文件
	Filetxt(e){
		let val
		let that = this
		if (e.target.files[0]) {
		    const file = e.target.files[0];
		    var reader = new FileReader();
		    reader.readAsDataURL(file); 
		    reader.onload = function() {  
				val = this.result.replace('data:text/plain;base64,','')
				var base = new that.Base64()
				return base.decode(val)
			}
		}
		return val
	},
	// 过滤出数字
	getNum(text){
		var value = text.replace(/[^0-9]/ig,""); 
		return value;
	},
	// /1.加密 var str = '124中文内容'; var base = new Base64(); var result = base.encode(str); 2.解密 base.decode(result); 
	Base64() { 
		var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; 
		this.encode = function (input) { 
			var output = ""; 
			var chr1, chr2, chr3, enc1, enc2, enc3, enc4; 
			var i = 0; 
			input = _utf8_encode(input); 
			while (i < input.length) { 
				chr1 = input.charCodeAt(i++); 
				chr2 = input.charCodeAt(i++); 
				chr3 = input.charCodeAt(i++); 
				enc1 = chr1 >> 2; 
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4); 
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); 
				enc4 = chr3 & 63; 
				if (isNaN(chr2)) { 
					enc3 = enc4 = 64; 
				} else if (isNaN(chr3)) { 
					enc4 = 64; 
				} 
				output = output + 
				_keyStr.charAt(enc1) + _keyStr.charAt(enc2) + 
				_keyStr.charAt(enc3) + _keyStr.charAt(enc4); 
			} 
			return output; 
		} 
		  
		this.decode = function (input) { 
			var output = ""; 
			var chr1, chr2, chr3; 
			var enc1, enc2, enc3, enc4; 
			var i = 0; 
			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); 
			while (i < input.length) { 
				enc1 = _keyStr.indexOf(input.charAt(i++)); 
				enc2 = _keyStr.indexOf(input.charAt(i++)); 
				enc3 = _keyStr.indexOf(input.charAt(i++)); 
				enc4 = _keyStr.indexOf(input.charAt(i++)); 
				chr1 = (enc1 << 2) | (enc2 >> 4); 
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); 
				chr3 = ((enc3 & 3) << 6) | enc4; 
				output = output + String.fromCharCode(chr1); 
				if (enc3 != 64) { 
					output = output + String.fromCharCode(chr2); 
				} 
				if (enc4 != 64) { 
					output = output + String.fromCharCode(chr3); 
				} 
			} 
			output = _utf8_decode(output); 
			return output; 
		} 
		  
		var _utf8_encode = function (string) { 
			string = string.replace(/\r\n/g,"\n"); 
			var utftext = ""; 
			for (var n = 0; n < string.length; n++) { 
				var c = string.charCodeAt(n); 
				if (c < 128) { 
					utftext += String.fromCharCode(c); 
				} else if((c > 127) && (c < 2048)) { 
					utftext += String.fromCharCode((c >> 6) | 192); 
					utftext += String.fromCharCode((c & 63) | 128); 
				} else { 
					utftext += String.fromCharCode((c >> 12) | 224); 
					utftext += String.fromCharCode(((c >> 6) & 63) | 128); 
					utftext += String.fromCharCode((c & 63) | 128); 
				} 

			} 
			return utftext; 
		} 

		var _utf8_decode = function (utftext) { 
			var string = ""; 
			var i = 0; 
			var c =0, c1 = 0,c2 = 0,c3; 
			while ( i < utftext.length ) { 
				c = utftext.charCodeAt(i); 
				if (c < 128) { 
					string += String.fromCharCode(c); 
					i++; 
				} else if((c > 191) && (c < 224)) { 
					c2 = utftext.charCodeAt(i+1); 
					string += String.fromCharCode(((c & 31) << 6) | (c2 & 63)); 
					i += 2; 
				} else { 
					c2 = utftext.charCodeAt(i+1); 
					c3 = utftext.charCodeAt(i+2); 
					string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)); 
					i += 3; 
				} 
			} 
			return string; 
		} 
	},
	// 去掉重复的包括顺序不同数字的重复
	disrepeat (arr){
		var arr = arr,i,j,
		len = arr.length;
		for(i = 0; i < len; i++){
			for(j = i + 1; j < len; j++){
				if(arr[i].split('').sort().join('') == arr[j].split('').sort().join('')){
					arr.splice(j,1);
					len--;
					j--;
				}
			}
		}
		return arr;
	},
	// 留下重复的包括顺序不同数字的重复
	disrepeatno (allarr,arr){
		var i,j,c=0,
		len = allarr.length,alen = arr.length;
		for(i = 0; i < len; i++){
			c = 0
			for(j = 0; j < alen; j++){
				if(allarr[i] == arr[j]){
					c = c+1
					if(c == 1){
						arr.splice(j,1);
					}
				}
			}
		}
		return arr;
	}
	
}

export const Utils= {
	Matchrule,
	TranBall,
	algorithm,
	Randomrule
};

