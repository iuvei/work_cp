import { Component, OnInit, ViewChild } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import userModel from "../../../status/user.model";
import { FUNCTION_TYPE } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
  // @ViewChild('canvas') canvas;
  loadpage = false;
  public gamelist = [
    { gamename: "香港⑥合彩[信]", id: "1", type: "lhc", style:"信", url: "" },
    { gamename: "重庆时时彩[官]", id: "26", type: "ssc", style:"官", url: "" },
    { gamename: "上海时时乐[官]", id: "107", type: "ssc", style:"官", url: "" },
    { gamename: "新疆时时彩[官]", id: "40", type: "ssc", style:"官", url: "" },
    { gamename: "天津时时彩[官]", id: "42", type: "ssc", style:"官", url: "" },
    { gamename: "腾讯分分彩[官]", id: "81", type: "ssc", style:"官", url: "" },
    { gamename: "QQ分分彩[官]", id: "82", type: "ssc", style:"官", url: "" },
    { gamename: "极速分分彩[官]", id: "123", type: "ssc", style:"官", url: "" },
    { gamename: "山东11选5[官]", id: "32", type: "exf", style:"官", url: "" },
    { gamename: "江西11选5[官]", id: "46", type: "exf", style:"官", url: "" },
    { gamename: "黑龙江11选5[官]", id: "50", type: "exf", style:"官", url: "" },
    { gamename: "江苏11选5[官]", id: "74", type: "exf", style:"官", url: "" },
    { gamename: "上海11选5[官]", id: "76", type: "exf", style:"官", url: "" },
    { gamename: "北京PK拾[官]", id: "29", type: "pk10", style:"官", url: "" },
    { gamename: "幸运飞艇[官]", id: "113", type: "pk10", style:"官", url: "" },
    { gamename: "安徽快3[官]", id: "84", type: "k3", style:"官", url: "" },
    { gamename: "河北快3[官]", id: "88", type: "k3", style:"官", url: "" },
    { gamename: "河南快3[官]", id: "98", type: "k3", style:"官", url: "" },
    { gamename: "湖北快3[官]", id: "100", type: "k3", style:"官", url: "" },
    { gamename: "上海快3[官]", id: "102", type: "k3", style:"官", url: "" },
    { gamename: "北京快3[官]", id: "104", type: "k3", style:"官", url: "" },
    { gamename: "广西快3[官]", id: "106", type: "k3", style:"官", url: "" },
    { gamename: "江苏快三[官]", id: "39", type: "k3", style:"官", url: "" },
    { gamename: "福彩3D[官]", id: "30", type: "fc3d", style:"官", url: "" },
    { gamename: "北京快乐8[官]", id: "28", type: "kl8", style:"官", url: "" },
    { gamename: "加拿大快乐8[官]", id: "66", type: "kl8", style:"官", url: "" },
    { gamename: "澳洲快乐8[官]", id: "69", type: "kl8", style:"官", url: "" },
    { gamename: "排列三、五[官]", id: "44", type: "kl8", style:"官", url: "" },
    { gamename: "斯洛伐克[官]", id: "70", type: "kl8", style:"官", url: "" },
    { gamename: "斯洛伐克5分[官]", id: "72", type: "ssc", style:"官", url: "" },
    { gamename: "韩式1.5分彩[官]", id: "51", type: "ssc", style:"官", url: "" },
    { gamename: "台湾5分彩[官]", id: "61", type: "ssc", style:"官", url: "" },
    { gamename: "台湾宾果[官]", id: "62", type: "ssc", style:"官", url: "" },
    { gamename: "加拿大3.5分[官]", id: "64", type: "ssc", style:"官", url: "" },
    { gamename: "东京1.5分彩[官]", id: "109", type: "ssc", style:"官", url: "" },
    { gamename: "上海11选5[信]", id: "75", type: "exf", style:"信", url: "" },
    { gamename: "江苏11选5[信]", id: "73", type: "exf", style:"信", url: "" },
    { gamename: "江西11选5[信]", id: "56", type: "exf", style:"信", url: "" },
    { gamename: "黑龙江11选5[信]", id: "55", type: "exf", style:"信", url: "" },
    { gamename: "山东11选5[信]", id: "58", type: "exf", style:"信", url: "" },
    { gamename: "新疆11选5[信]", id: "77", type: "exf", style:"信", url: "" },
    { gamename: "新疆11选5[官]", id: "78", type: "exf", style:"信", url: "" },
    { gamename: "重庆时时彩[信]", id: "7", type: "ssc", style:"信", url: "" },
    { gamename: "天津时时彩[信]", id: "9", type: "ssc", style:"信", url: "" },
    { gamename: "新疆时时彩[信]", id: "10", type: "ssc", style:"信", url: "" },
    { gamename: "北京时时彩[官]", id: "57", type: "ssc", style:"信", url: "" },
    { gamename: "北京时时彩[信]", id: "59", type: "ssc", style:"信", url: "" },
    { gamename: "加拿大3.5分[信]", id: "65", type: "ssc", style:"信", url: "" },
    { gamename: "韩式1.5分彩[信]", id: "53", type: "ssc", style:"信", url: "" },
    { gamename: "台湾5分彩[信]", id: "60", type: "ssc", style:"信", url: "" },
    { gamename: "斯洛伐克5分[信]", id: "71", type: "ssc", style:"信", url: "" },
    { gamename: "腾讯分分彩[信]", id: "79", type: "ssc", style:"信", url: "" },
    { gamename: "极速分分彩[信]", id: "122", type: "ssc", style:"信", url: "" },
    { gamename: "QQ分分彩[信]", id: "80", type: "ssc", style:"信", url: "" },
    { gamename: "东京1.5分彩[信]", id: "108", type: "ssc", style:"信", url: "" },
    { gamename: "安徽快3[信]", id: "85", type: "", style:"信", url: "" },
    { gamename: "河北快3[信]", id: "87", type: "", style:"信", url: "" },
    { gamename: "河南快3[信]", id: "97", type: "", style:"信", url: "" },
    { gamename: "湖北快3[信]", id: "99", type: "", style:"信", url: "" },
    { gamename: "上海快3[信]", id: "101", type: "", style:"信", url: "" },
    { gamename: "北京快3[信]", id: "103", type: "", style:"信", url: "" },
    { gamename: "广西快3[信]", id: "105", type: "", style:"信", url: "" },
    { gamename: "广东快十[信]", id: "5", type: "", style:"信", url: "" },
    { gamename: "广西快十[信]", id: "6", type: "", style:"信", url: "" },
    { gamename: "重庆快十[信]", id: "13", type: "", style:"信", url: "" },
    { gamename: "北京PK拾[信]", id: "15", type: "", style:"信", url: "" },
    { gamename: "江苏快三[信]", id: "22", type: "", style:"信", url: "" },
    { gamename: "幸运飞艇[信]", id: "112", type: "", style:"信", url: "" },
    { gamename: "幸运28[信]", id: "114", type: "", style:"信", url: "" },
    { gamename: "斯洛伐克28[信]", id: "115", type: "", style:"信", url: "" },
    { gamename: "澳洲28[信]", id: "116", type: "", style:"信", url: "" },
    { gamename: "加拿大28[信]", id: "117", type: "", style:"信", url: "" },
    { gamename: "韩式28[信]", id: "118", type: "", style:"信", url: "" },
    { gamename: "台湾28[信]", id: "119", type: "", style:"信", url: "" },
    { gamename: "东京28[信]", id: "120", type: "", style:"信", url: "" },
  ];
  public quergame = "香港⑥合彩[信]"; // 当前彩种
  public curgametype = "lhc"; // 当前彩种类型
  public curgamestyle = "信"; // 当前彩种类型

  public loadinfo = true; //控制页面数据加载文字

  // 控制数据对象
  public view_paramet = {
    isshowline: true, // 是否连线
    ishaowen: true, // 是否号温
    isomission: false, // 是否遗漏分层背景
    isomissionshow: true, // 是否显示遗漏分层数据
    isdisdata: true, // 是否显示统计数据
    isdouble: true, // 是否为重号
    issubline: true // 是否辅助线
  };
  public numbdata = [30, 50, 100, 200, 300];
  public numbdatactve = 0;
  
  public OB = { id: 0, number: "180100", time:'2018-07-04 15:09:00', data: [] };// 接受后台数据单期统一格式

  public resultdata; // 结果数据
  public resultomdata; // 第一期遗漏数据\

  public querydata ={
    starttime:'',
    endtime:'',
    qishu:'',
    resttime:0,
  };

  public xintab = {
      list: ["特码", "龙虎斗" ],
      active: 0,
  }
  public longhulist = {
      exf:['1v2','1v3','1v4','1v特','2v3','2v4','2v特','3v4','3v特','4v特',],
      ssc:['1v2','1v3','1v4','1v5','2v3','2v4','2v5','3v4','3v5','4v5',],
      lhc:['1v2','1v3','1v4','1v5','1v6','1v特','2v3','2v4','2v5','2v6','2v特','3v4','3v5','3v6','3v特','4v5','4v6','4v特','5v6','5v特', '6v特',],
  }

  public OBJX = {sum:0, sumBigSmall:'', balls:'', lastBigSmall:'', specialOddEven:'', specialBigSmall:'', specialCombOddEven:'', specialCombBigSmall:'', specialLastNum:'', specialAnimal:'', specialColor:'', upDown:'', oddEven:'', OneBigSmall:function(n){}, OneOddEven:function(n){}, sumOddEven:'',before:'', middle:'',  behind:'', pklh:function(l,h){},}



  //临时设置开奖数据参数
  public gamepam = {
    ssc: { min: 0, max: 9, len: 10, length: 5 },
    exf: { min: 1, max: 11, len: 11, length: 5 },
    pk10: { min: 1, max: 10, len: 10, length: 10 },
    fc3d: { min: 0, max: 9, len: 10, length: 3 },
    k3: { min: 1, max: 6, len: 6, length: 3 },
    lhc: { min: 1, max: 49, len: 49, length: 7 },
  };
  public curgame = this.gamepam[this.curgametype];
  // 临时数据end

  constructor() {}
  ngOnInit() {
    this.loadpage = userModel.platform;

    this.pageinit();

  }


  // 彩种选择框事件
  selechange() {
        this.pageinit();
  }
  // 信用玩法查询按钮事件
  query(){
    this.pageinit();
  }

  pageinit(){
    let url = "";
    for (let i = 0; i < this.gamelist.length; i++) {
        if (this.quergame === this.gamelist[i].gamename) {
            this.curgametype = this.gamelist[i].type;
            this.curgamestyle = this.gamelist[i].style;
            url = this.gamelist[i].url; //请求数据地址
            break;
        }
    }
    // ==================此处请求数据=====
    this.loadinfo = true;
    let tp = this.curgametype;
    // 模拟数据
    if (this.curgamestyle === '官') {
        if ( tp === "ssc" || tp === "exf" || tp === "pk10" || tp === "fc3d" || tp === "k3" ) {
            this.curgame = this.gamepam[tp]; // 创建当前游戏数据
            this.resultdata = this.setballdata(this.numbdata[this.numbdatactve]);
            this.resultomdata = this.setbassomisdata();
        }
        if (tp === "kl8") {
            this.resultdata = this.kl8data( this.setkl8data(this.numbdata[this.numbdatactve]) );
        }
    }
    if (this.curgamestyle === '信') {
        if ( tp === "exf" ) {
            this.curgame = this.gamepam[tp]; // 创建当前游戏数据
            this.resultdata = this.setballdata(20);
            for (let i = 0; i < this.resultdata.length; i++) {
                this.resultdata[i].data = this.GD11X5(this.resultdata[i].data)
            }
        }
        if ( tp === "ssc" ) {
            this.curgame = this.gamepam[tp]; // 创建当前游戏数据
            this.resultdata = this.setballdata(20);
            for (let i = 0; i < this.resultdata.length; i++) {
                this.resultdata[i].data = this.SSC(this.resultdata[i].data)
            }
        }
        if ( tp === "lhc" ) {
            this.curgame = this.gamepam[tp]; // 创建当前游戏数据
            this.resultdata = this.setballdata(20);
            let year = 2018; // 六合彩需要传入开奖时的 年份 数字类型
            for (let i = 0; i < this.resultdata.length; i++) {
                this.resultdata[i].data = this.SIX(year,this.resultdata[i].data)
            }
            console.log(this.resultdata);
        }
    }
    setTimeout(() => {
        this.loadinfo = false;
    }, 500);
  }

  // 选择多期开奖事件
  numbclick(i) {
    this.numbdatactve = i;
    this.pageinit();
  }

  kl8data(D){
    let data = [];
    let o = {sum:0, bigSmall:'', evenOdd:'', upDown:'', danShuang:'' }

    for (let i = 0; i < D.length; i++) {
        data[i] = Object.assign({}, D[i], o);
        let d = data[i];
        for (let q = 0; q < d.data.length; q++) {
            d.sum += d.data[q];
        }
        let n = d.sum
        d.danShuang = n%2 === 0? "双":"单";
        d.bigSmall = n <= 809 && n >= 210 ? "小": 810 === n ? "和": "大";
        d.evenOdd = (function(d){
            let n=0 , e = 0;
            for (let q = 0; q < d.length; q++) {
                (d[q]-0)%2===0? ++n: ++e;
            }
            return (n === e) ? "和": n > e ? "偶": "奇"
        })(d.data);
        d.upDown = (function(d){
            let n=0 , e = 0;
            for (let q = 0; q < d.length; q++) {
                (d[q]-0)<= 40? ++n: ++e;
            }
            return n === e ? "和": n > e ? "上": "下"
        })(d.data)
    }
    return data
  }
//   ======================信用页面数据分析
  // 信用玩法数据设置
//   public ExtendAttr = {
    SIX(year,arr) {
        let _that = this;
        let sum = _that.compute(arr);
        let obj = Object.assign({}, _that.OBJX,);
        let result = arr.join(",");
        obj.sum = sum;
        obj.sumBigSmall = _that.bigSmall(sum, 175, "zhi", { big: "总大", small: "总小" },undefined);
        obj.sumOddEven = (function () {  return sum % 2 === 0 ? "总双" :"总单"; })();
        obj.balls = JSON.parse(_that.getZodiac(year, result, 1));

        let special = result.match(/\d+$/)[0] * 1
        let specialComb = _that.compute(String(special).split(''));
        let he = "和";
        obj.specialOddEven = special === 49 ? he : (special % 2 === 0 ? "特双": "特单");
        obj.specialBigSmall = special === 49 ? he : (special >= 25 ? "特大" : "特小");
        obj.specialCombOddEven = special === 49 ? he : (specialComb % 2 === 0 ? "合双": "合单");
        obj.specialCombBigSmall = special === 49 ? he : (specialComb > 6 ? "合大": "合小");
        obj.specialLastNum = special === 25 ? he : (specialComb % 10 >= 5 ? "合尾大" : "合尾小");
        obj.specialAnimal = special === 49 ? he : _that.getZodiac(year, special, 2);
        obj.specialColor = _that.color(special) === 'red'?'红波':(_that.color(special)==='blue'?'蓝波':'绿波');
        obj.upDown = _that.three(arr.slice(0, -1), function (e) {
            e = Number(e);
            if (e === 49) {
                return special > 24 ? special + '' : '';
            } else {
                return e > 24 ? e + '' : '';
            }
        }, 6, "updown");

        obj.oddEven = _that.three(arr.slice(0, -1), function (e) {
            e = Number(e);
            if (e === 49) {
                return special % 2 === 0 ? special + '' : '';
            } else {
                return e % 2 === 0 ? e + '' : '';
            }
        }, 6, "oddeven");
        obj.pklh = function (long, hu) {
            return _that.pk(long, hu, arr, 49);
        }
        return obj;
    };
    GD11X5(arr){
        let _that = this;
        let obj = Object.assign({}, _that.OBJX);
        let sum = _that.compute(arr);
        let result = arr.join(",");
        obj.sum = sum;
        obj.sumBigSmall = _that.bigSmall(sum, 31, "zhi", { big: "总大", small: "总小" }, 30); // 总和大小
        obj.balls = result.split(",");
        obj.lastBigSmall = _that.bigSmall(sum, 5, "wei", { big: "总尾大", small: "总尾小" },undefined); // 总尾大小
        obj.sumOddEven = (function () {  return sum % 2 === 0 ? "总双" :"总单"; })();
        /// 单个号码的大小
        obj.OneBigSmall = function (num) {
            return Number(num) === 11? "和":( Number(num) >= 6?"大": "小" )
        }
        /// 单个号码的单双
        obj.OneOddEven = function (num) {
            return Number(num) === 11 ? "和" : (Number(num) % 2 === 0 ? "双": "单");
        }
    
        let special = result.match(/\d+$/)[0] * 1;
        obj.upDown = _that.three(arr.slice(0, -1), function (e) {
            e = Number(e);
            if (e === 11) {
                return special > 5 ? special + '' : '';
            } else {
                return e > 5 ? e + '' : '';
            }
        }, 4, "updown");
    
        obj.oddEven = _that.three(arr.slice(0, -1), function (e) {
            e = Number(e);
            if (e === 11) {
                return special % 2 === 0 ? special + '' : '';
            } else {
                return e % 2 === 0 ? e + '' : '';
            }
        }, 4, "oddeven");
        obj.pklh = function (long, hu) {
            return _that.pk(long, hu, arr, 11);
        }
        return obj;
    };
    SSC(arr) {
        let _that = this;
        let obj = Object.assign({}, _that.OBJX);
        let sum = _that.compute(arr);
        let result = arr.join(",");
        obj.sum = sum;
        obj.sumBigSmall = _that.compute(arr) >= 23 ? "总大" : "总小"; // 总和大小
        obj.balls = result.split(",");
        obj.lastBigSmall = _that.bigSmall(sum, 5, "wei", { big: "总尾大", small: "总尾小" },undefined); // 总尾大小
        obj.sumOddEven = (function () {  return sum % 2 === 0 ? "总双" :"总单"; })();
        /// 单个号码的大小
        obj.OneBigSmall = function (num) {
            return Number(num) >= 5?"大": "小" 
        }
        /// 单个号码的单双
        obj.OneOddEven = function (num) {
            return Number(num) % 2 === 0 ? "双": "单";
        }
    
        let special = result.match(/\d+$/)[0] * 1;
        obj.upDown = _that.three(arr.slice(0, -1), function (e) {
            e = Number(e);
            if (e === 11) {
                return special > 5 ? special + '' : '';
            } else {
                return e > 5 ? e + '' : '';
            }
        }, 4, "updown");
    
        obj.oddEven = _that.three(arr.slice(0, -1), function (e) {
            e = Number(e);
            if (e === 11) {
                return special % 2 === 0 ? special + '' : '';
            } else {
                return e % 2 === 0 ? e + '' : '';
            }
        }, 4, "oddeven");
        obj.pklh = function (long, hu) {
            let l = Number(arr[long - 1])
            let h = Number(arr[hu - 1]);
            return l===h?'和':(l>h?'龙':'虎')
        }
        obj.before = _that.ssc(arr.slice(0, 3));
        obj.middle = _that.ssc(arr.slice(1, 4));
        obj.behind = _that.ssc(arr.slice(2));
        return obj;
    };

    // GDKS: function (item, arr) {
    //     let obj = {};
    //     obj.sumBigSmall = bigSmall(item.sum, 85, "zhi", { big: "总大", small: "总小" }, true); // 总和大小
    //     obj.balls = item.result.split(",");
    //     obj.lastBigSmall = bigSmall(item.sum, 5, "wei", { big: "总尾大", small: "总尾小" }); // 总尾大小
    //     let special = item.result.match(/\d+$/)[0] * 1;
    //     obj.specialBigSmall = special >= 11 ? showTag("大", "b") : showTag("小", "r");
    //     obj.specialOddEven = special % 2 === 0 ? showTag("双", "b") : showTag("单", "r");
    //     obj.specialLastBigSmall = bigSmall(special, 5, 'wei', { big: "尾大", small: "尾小" });
    //     obj.specialCombSum = compute(String(special).split('')) % 2 === 0 ? showTag("合双", "b") : showTag("合单", "r");

    //     obj.upDown = three(arr, function (e) {
    //         return Number(e) > 10 ? e : '';
    //     }, 8, "updown");

    //     obj.oddEven = three(arr, function (e) {
    //         return Number(e) % 2 === 0 ? e : '';
    //     }, 8, "oddeven");

    //     obj.OneBigSmall = function (data) {
    //         return bigSmall(data, 11, 'zhi', { big: '大', small: '小' });
    //     }
    //     obj.OneOddEven = function (data) {
    //         return Number(data) % 2 === 0 ? showTag("双", "b") : showTag("单", "r");
    //     }
    //     obj.OneCombOddEven = function (data) {
    //         return compute(data.split('')) % 2 === 0 ? showTag("双", "b") : showTag("单", "r");
    //     }
    //     obj.OneLastBigSmall = function (data) {
    //         return bigSmall(Number(data), 5, 'wei', { big: '尾大', small: '尾小' });
    //     }
    //     return obj;
    // },
    // GXKS: function (item, arr) {
    //     let obj = {};
    //     let sixi = {
    //         '_1_2_3_4_5_': '福',
    //         '_6_7_8_9_10_': '禄',
    //         '_11_12_13_14_15_': '寿',
    //         '_16_17_18_19_20_': '喜'
    //     };
    //     obj.sumBigSmall = bigSmall(item.sum, 56, "zhi", { big: "总大", small: "总小", he: "和-和" }, true); // 总和大小
    //     obj.sumOddEven = (function () {

    //         return item.sum % 2 === 0 ? showTag("总双", "b") : showTag("总单", "r");

    //     })();
    //     obj.balls = arr;
    //     obj.lastBigSmall = bigSmall(item.sum, 5, "wei", { big: "总尾大", small: "总尾小" }); // 总尾大小
    //     obj.sixi = function (data) {
    //         if (Number(data) === 21) return '输-和';
    //         data = '_' + data + '_';
    //         let text = '';
    //         $.each(sixi, function (a, b) {
    //             a.indexOf(data) > -1 && (text = b);
    //         });
    //         return text;
    //     }
    //     obj.OneBigSmall = function (data) {
    //         data = $.isArray(data) ? Number(data[0]) : Number(data);
    //         return data === 21 ? showTag("输-和") : (data >= 11 ? showTag("大", "b") : showTag("小", "r"));
    //     }
    //     obj.OneOddEven = function (data) {
    //         data = $.isArray(data) ? Number(data[0]) : Number(data);
    //         return data === 21 ? showTag("输-和") : (data % 2 === 0 ? showTag("双", "b") : showTag("单", "r"));
    //     }
    //     obj.OneCombOddEven = function (data) {
    //         data = $.isArray(data) ? Number(data[0]) : Number(data);
    //         return data === 21 ? showTag("输-和") : (compute(String(data).split('')) % 2 === 0 ? showTag("合双", "b") : showTag("合单", "r"));
    //     }
    //     obj.OneLastBigSmall = function (data) {
    //         data = $.isArray(data) ? Number(data[0]) : Number(data);
    //         return data === 21 ? showTag("输-和") : bigSmall(data, 5, 'wei', { big: "尾大", small: "尾小" });
    //     }

    //     let special = item.result.match(/\d+$/)[0] * 1;
    //     obj.upDown = three(arr.slice(0, -1), function (e) {
    //         e = Number(e);
    //         if (e === 21) {
    //             return special > 10 ? special + '' : '';
    //         } else {
    //             return e > 10 ? e + '' : '';
    //         }
    //     }, 4, "updown");
    //     obj.oddEven = three(arr.slice(0, -1), function (e) {
    //         e = Number(e);
    //         if (e === 21) {
    //             return special % 2 === 0 ? special + '' : '';
    //         } else {
    //             return e % 2 === 0 ? e + '' : '';
    //         }
    //     }, 4, "oddeven");
    //     return obj;
    // },
    // BJPK10: function (item, arr) {
    //     let obj = {};
    //     obj.balls = arr;
    //     obj.combFirstSecond = Number(arr[0]) + Number(arr[1]);
    //     obj.combFirstSecondOddEven = obj.combFirstSecond === 11 ? BJPKSGYHZ11 == 2 ? showTag("单", "r") : showTag("和") : (obj.combFirstSecond % 2 === 0 ? showTag("双", "b") : showTag("单", "r"));
    //     obj.combFirstSecondBigSmall = obj.combFirstSecond === 11 ? BJPKSGYHZ11 == 2 ? showTag("小", "r") : showTag("和") : (obj.combFirstSecond > 11 ? showTag("大", "b") : showTag("小", "r"));
    //     obj.oneBigSmall = function (data) {
    //         return Number(data) >= 6 ? showTag("大", "b") : showTag("小", "r");
    //     }
    //     obj.oneOddEven = function (data) {
    //         return Number(data) % 2 === 0 ? showTag("双", "b") : showTag("单", "r");
    //     }
    //     obj.pk = function (data) {
    //         if (data < 5) {
    //             return Number(arr[data]) > Number(arr[9 - data]) ? showTag("龙", "b") : showTag("虎", "r");
    //         } else {
    //             return '';
    //         }
    //     }
    //     return obj;
    // },
    // GXK3: function (item, arr) {
    //     let obj = {};
    //     obj.balls = arr;
    //     obj.sumBigSmall = item.sum >= 11 ? showTag("大", "b") : showTag("小", "r");
    //     return obj;
    // },
    // PCDD: function (item, arr) {
    //     let obj = {};
    //     obj.resultList = item.result.split(',');
    //     obj.bigSmall = item.sum < 14 ? '<b style="color:#2EA514">小</b>' : '<b style="color:#ff5500">大</b>';
    //     obj.evenOdd = item.sum % 2 == 0 ? '<b style="color:#ff5500">双</b>' : '<b style="color:#2EA514">单</b>';
    //     let leopard = true;
    //     for (let i = 0; i < obj.resultList.length - 1; i++) {
    //         if (obj.resultList[i] != obj.resultList[i + 1]) {
    //             leopard = false;
    //             break;
    //         }
    //     }
    //     obj.leopard = leopard ? '' : '<span style="color:#ccc;">---</span>'; '<span style="color:#666;">豹子【' + obj.resultList[0] + '】</span>'
    //     return obj;
    // }
// };



/// year:Number, 要查询的(农历)年份
    /// num :String, 要查询的球号,如果多个号码则用逗号分隔
    /// type:Number, 1返回(Array)生肖 2返回(String)家禽/野兽
    getZodiac(year, num, type) {
        //num % 12  将号码转换成1-12,得出在数组对应的索引
        let zodiac = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
        let cate = {
            "鼠,虎,兔,龙,蛇,猴,": "野兽",
            "牛,马,羊,鸡,狗,猪,": "家禽"
        };
        let reference = 1924;///必须是鼠年，即reference对应zodiac[0]
        let index = (year - reference) % 12;
        let a = zodiac.slice(0, index + 1).reverse();
        let b = zodiac.slice(index + 1).reverse();
        let sortZodiac = a.concat(b);
        let result;
        if (type === 1) {
            let nums = num.split(',');
            // let nums = num;
            result = [];
            for (let i = 0, len = nums.length; i < len; i++) {
                result.push({
                    num: Number(nums[i]),
                    name: sortZodiac[(nums[i] - 1) % 12]
                });
            }
            result = JSON.stringify(result);
            // JSON.parse(JSON.stringify(this.outdata))
        } else if (type === 2) {
            if (Number(num) === 49) return '和';
            for (let i in cate) {
                if (i.indexOf(sortZodiac[(Number(num) - 1) % 12]) > -1) {
                    result = cate[i];
                }
            }
            // return result[0];
        }
        return result;
    }

     /// 色波
    color(num) {
        let n = Number(num);
        let arr = [
            [1,2,7,8,12,13,18,19,23,24,29,30,34,35,40,45,46,],
            [3,4,9,10,14,15,20,25,26,31,36,37,41,42,47,48,],
            [5,6,11,16,17,21,22,27,28,32,33,38,39,43,44,49,]
        ];
        // let arrCn = ["红波", "蓝波", "绿波"];
        let color = ['red', 'blue', 'green'];
        for (let i = 0; i < arr.length; i++) {
            if ( arr[i].indexOf(n) > -1) {
                return color[i];
            }
        }
    }
     /// 求和
     compute(arr) {
        let c = 0;
        for (let i = 0; i < arr.length; i++) {
            c += Number(arr[i]);
        }
        return c;
    }
    screen( arr, fn){
            if (!fn) return arr;
            var a = [];
            for (let i = 0, len = arr.length; i < len; i++) {
                fn(arr[i]) !== "" && a.push(fn(arr[i]));
            }
            return a;

    }
        /// fn:{Function}筛选号码的函数，返回下盘或偶数的数组
    /// length:{Number}参与上下奇偶的号码个数
    /// type:{String} oddeven：上下   updown：奇偶
    /// 相同规则：上下或者奇偶的个数相同则为和
    three(arr, fn, length, type) {
        let text = [];
        if (type === "oddeven") {
            text = ['偶', '奇'];
        } else if (type === "updown") {
            text = ['下', '上'];
        }
        let d = this.screen(arr,fn);
        let len1 = d.length;
        let len2 = length / 2;
        if (len1 === len2) {
            return '和';
        } else if (len1 > len2) {
            return text[0];
        } else {
            return text[1];
        }
    }
    /// 前三、中三、后三
    /// arr:{Array}
    ssc(arr) {
        arr = arr.sort(function (a, b) {
            return Number(a) - Number(b);
        });
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Number(arr[i])
        }
        if (arr[0] === arr[1] && arr[0] === arr[2]) {
            return '豹子';
        } else if ((arr[0] + 1 === arr[1] && arr[1] + 1 === arr[2]) || /^(019)|(089)$/.test(arr.join(''))) {
            return '顺子';
        // } else if (arr.unique().length === 2) {
        } else if (arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2]) {
            return '对子';
        } else if (arr[0] + 1 === arr[1] || arr[1] + 1 === arr[2] || /^0\d9$/.test(arr.join(''))) {
            return '半顺';
        } else {
            return '杂六';
        }
    }

    /// 与大小相关的属性
    /// sum:{Number}    和值
    /// bigVal:{Number} 为大的条件值
    /// type:{String}   玩法名
    /// he:{Boolen}     是否为有和
    bigSmall(sum, bigVal, type, options, he) {
        let value="";
        switch (type) {
            // 值大小（总和大小、大小）
            case "zhi":
                if (he === undefined) {
                    return value =  sum >= bigVal ? options.big : options.small;
                } else {
                    return value = sum === (bigVal - 1) ? (options.he ? options.he : "和") : (sum >= bigVal ? options.big : options.small);
                }
                /// 尾大小（总尾大小、合尾大小）
            case "wei":
                let last = Number(String(sum).slice(-1));
                return value =  last >= bigVal ? options.big : options.small;

        }
    }

    /// 龙虎斗
    pk(long, hu, arr, he) {
        let L = Number(arr[long - 1]);
        let H  = Number(arr[hu - 1]);
        if (L === he || H === he) {
            return "和";
        } else if (L > H) {
            return "龙";
        } else {
            return "虎";
        }
    }


  // ================临时数据开始
  // 创建开奖数据  n 为开奖数据期数
  setballdata(n) {
    let data = [];
    let g = this.curgame;
    for (let i = 0; i < n; i++) {
      let d = Object.assign({}, this.OB);
      d.id = i + 1;
      d.number = 180101 + i + "";
      d.data = [];
      for (let q = 0; q < g.length; q++) {
        d.data[q] = Math.floor(Math.random() * g.len + g.min);
      }
      data.push(d);
    }
    return data;
  }
  // 创建遗漏值数据
  setbassomisdata() {
    let d = [];
    let g = this.curgame;
    for (let i = 0; i < g.length; i++) {
      d[i] = [];
      for (let q = g.min; q <= g.max; q++) {
        d[i].push(Math.floor(Math.random() * g.len + g.min));
      }
    }
    return d;
  }
  // 创建快乐8数据
  setkl8data(n){
        let d = [];
        for (let i = 0; i < n; i++) {
            d[i] = Object.assign({}, this.OB);
            d[i].id = i + 1;
            d[i].number = 180101 + i + "";
            let s = new Set();
            for (let q = 0; q < 20; q = s.size) {
                let a = Math.floor(Math.random() * 80 + 1);
                s.add(a);
            }
            d[i].data=Array.from(s);
            d[i].data.sort((a,b)=>{return a-b});
        }
        return d
  }
  // 创建六合数据
  setlhcdata(n){
        let d = [];
        for (let i = 0; i < n; i++) {
            d[i] = Object.assign({}, this.OB);
            d[i].id = i + 1;
            d[i].number = 180101 + i + "";
            let s = new Set();
            for (let q = 0; q < 7; q = s.size) {
                let a = Math.floor(Math.random() * 49 + 1);
                s.add(a);
            }
            d[i].data=Array.from(s);
            d[i].data.sort((a,b)=>{return a-b});
        }
        return d
  }
  // ================临时数据结束

}
