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
    { gamename: "重庆时时彩[官]", id: "26", type: "ssc", link: "" },
    { gamename: "上海时时乐[官]", id: "107", type: "ssc", link: "" },
    { gamename: "新疆时时彩[官]", id: "40", type: "ssc", link: "" },
    { gamename: "天津时时彩[官]", id: "42", type: "ssc", link: "" },
    { gamename: "腾讯分分彩[官]", id: "81", type: "ssc", link: "" },
    { gamename: "QQ分分彩[官]", id: "82", type: "ssc", link: "" },
    { gamename: "极速分分彩[官]", id: "123", type: "ssc", link: "" },
    { gamename: "山东11选5[官]", id: "32", type: "exf", link: "" },
    { gamename: "江西11选5[官]", id: "46", type: "exf", link: "" },
    { gamename: "黑龙江11选5[官]", id: "50", type: "exf", link: "" },
    { gamename: "江苏11选5[官]", id: "74", type: "exf", link: "" },
    { gamename: "上海11选5[官]", id: "76", type: "exf", link: "" },
    { gamename: "北京PK拾[官]", id: "29", type: "pk10", link: "" },
    { gamename: "幸运飞艇[官]", id: "113", type: "pk10", link: "" },
    { gamename: "安徽快3[官]", id: "84", type: "k3", link: "" },
    { gamename: "河北快3[官]", id: "88", type: "k3", link: "" },
    { gamename: "河南快3[官]", id: "98", type: "k3", link: "" },
    { gamename: "湖北快3[官]", id: "100", type: "k3", link: "" },
    { gamename: "上海快3[官]", id: "102", type: "k3", link: "" },
    { gamename: "北京快3[官]", id: "104", type: "k3", link: "" },
    { gamename: "广西快3[官]", id: "106", type: "k3", link: "" },
    { gamename: "江苏快三[官]", id: "39", type: "k3", link: "" },
    { gamename: "福彩3D[官]", id: "30", type: "fc3d", link: "" },
    { gamename: "北京快乐8[官]", id: "28", type: "kl8", link: "" },
    { gamename: "加拿大快乐8[官]", id: "66", type: "kl8", link: "" },
    { gamename: "澳洲快乐8[官]", id: "69", type: "kl8", link: "" },
    { gamename: "排列三、五[官]", id: "44", type: "kl8", link: "" },
    { gamename: "斯洛伐克[官]", id: "70", type: "kl8", kl8link: "" },
    { gamename: "斯洛伐克5分[官]", id: "72", type: "ssc", link: "" },
    { gamename: "韩式1.5分彩[官]", id: "51", type: "ssc", link: "" },
    { gamename: "台湾5分彩[官]", id: "61", type: "ssc", link: "" },
    { gamename: "台湾宾果[官]", id: "62", type: "ssc", link: "" },
    { gamename: "加拿大3.5分[官]", id: "64", type: "ssc", link: "" },
    { gamename: "东京1.5分彩[官]", id: "109", type: "ssc", link: "" },
    { gamename: "加拿大3.5分[信]", id: "65", type: "", link: "" },
    { gamename: "安徽快3[信]", id: "85", type: "", link: "" },
    { gamename: "河北快3[信]", id: "87", type: "", link: "" },
    { gamename: "河南快3[信]", id: "97", type: "", link: "" },
    { gamename: "湖北快3[信]", id: "99", type: "", link: "" },
    { gamename: "上海快3[信]", id: "101", type: "", link: "" },
    { gamename: "北京快3[信]", id: "103", type: "", link: "" },
    { gamename: "广西快3[信]", id: "105", type: "", link: "" },
    { gamename: "上海11选5[信]", id: "75", type: "", link: "" },
    { gamename: "江苏11选5[信]", id: "73", type: "", link: "" },
    { gamename: "香港⑥合彩[信]", id: "1", type: "", link: "" },
    { gamename: "广东快十[信]", id: "5", type: "", link: "" },
    { gamename: "广西快十[信]", id: "6", type: "", link: "" },
    { gamename: "重庆时时彩[信]", id: "7", type: "", link: "" },
    { gamename: "天津时时彩[信]", id: "9", type: "", link: "" },
    { gamename: "新疆时时彩[信]", id: "10", type: "", link: "" },
    { gamename: "重庆快十[信]", id: "13", type: "", link: "" },
    { gamename: "北京PK拾[信]", id: "15", type: "", link: "" },
    { gamename: "江苏快三[信]", id: "22", type: "", link: "" },
    { gamename: "韩式1.5分彩[信]", id: "53", type: "", link: "" },
    { gamename: "黑龙江11选5[信]", id: "55", type: "", link: "" },
    { gamename: "江西11选5[信]", id: "56", type: "", link: "" },
    { gamename: "北京时时彩[官]", id: "57", type: "", link: "" },
    { gamename: "山东11选5[信]", id: "58", type: "", link: "" },
    { gamename: "北京时时彩[信]", id: "59", type: "", link: "" },
    { gamename: "台湾5分彩[信]", id: "60", type: "", link: "" },
    { gamename: "斯洛伐克5分[信]", id: "71", type: "", link: "" },
    { gamename: "新疆11选5[信]", id: "77", type: "", link: "" },
    { gamename: "新疆11选5[官]", id: "78", type: "", link: "" },
    { gamename: "腾讯分分彩[信]", id: "79", type: "", link: "" },
    { gamename: "QQ分分彩[信]", id: "80", type: "", link: "" },
    { gamename: "东京1.5分彩[信]", id: "108", type: "", link: "" },
    { gamename: "幸运飞艇[信]", id: "112", type: "", link: "" },
    { gamename: "幸运28[信]", id: "114", type: "", link: "" },
    { gamename: "斯洛伐克28[信]", id: "115", type: "", link: "" },
    { gamename: "澳洲28[信]", id: "116", type: "", link: "" },
    { gamename: "加拿大28[信]", id: "117", type: "", link: "" },
    { gamename: "韩式28[信]", id: "118", type: "", link: "" },
    { gamename: "台湾28[信]", id: "119", type: "", link: "" },
    { gamename: "东京28[信]", id: "120", type: "", link: "" },
    { gamename: "极速分分彩[信]", id: "122", type: "", link: "" }
  ];
  public quergame = "重庆时时彩[官]";
  public curgametype = "ssc";

  public loadinfo = true;

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
  // 接受数据格式
  public OB = { id: 0, number: "180100", data: [] };
  // 传给canvas的开奖数据和第一期遗漏数据
  public resultdata;
  public resultomdata;

  //临时设置开奖数据参数
  public gamepam = {
    ssc: { min: 0, max: 9, len: 10, length: 5 },
    exf: { min: 1, max: 11, len: 11, length: 5 },
    pk10: { min: 1, max: 10, len: 10, length: 10 },
    fc3d: { min: 0, max: 9, len: 10, length: 3 },
    k3: { min: 1, max: 6, len: 6, length: 3 }
  };
  public curgame = this.gamepam[this.curgametype];

  constructor() {}
  ngOnInit() {
    this.loadpage = userModel.platform;
    // 模拟请求数据中
    this.setresultdata(this.numbdata[this.numbdatactve]);
    setTimeout(() => {
      this.loadinfo = false;
    }, 1000);

    console.log(this.setkl8data(10));
  }



  // 彩种选择框事件
  selechange() {
      for (let i = 0; i < this.gamelist.length; i++) {
          if (this.quergame === this.gamelist[i].gamename) {
              this.curgametype = this.gamelist[i].type;
              break;
            }
        }
    let tp = this.curgametype;
    if ( tp === "ssc" || tp === "exf" || tp === "pk10" || tp === "fc3d" || tp === "k3" ) {
      // 模拟请求数据中
      this.curgame = this.gamepam[tp]; // 模拟数据变量
      this.loadinfo = true;
      this.setresultdata(this.numbdata[this.numbdatactve]);
      setTimeout(() => {
        this.loadinfo = false;
      }, 500);
    }
    if (tp === "kl8") {
    }
  }

  // 选择多期开奖事件
  numbclick(i) {
    this.numbdatactve = i;
    this.loadinfo = true;
    this.setresultdata(this.numbdata[i]);
    // 模拟请求数据中
    setTimeout(() => {
      this.loadinfo = false;
    }, 500);
  }

  // 创建模拟数据
  setresultdata(n) {
    this.resultdata = this.setballdata(n);
    this.resultomdata = this.setbassomisdata();
  }

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
      let o = {sum:0, bigSmall:'', evenOdd:'', upDown:'', danShuang:'', data:[], }
      let d = [];
    for (let i = 0; i < n; i++) {
        d[i] = Object.assign({},o);
        let s = new Set();
        for (let q = 0; q < 20; q = s.size) {
            let a = Math.floor(Math.random() * 80 + 1);
            s.add(a);
        }
        d[i].data=Array.from(s);
        d[i].data.sort((a,b)=>{return a-b});

        // 分析数据部分
        for (let q = 0; q < d[i].data.length; q++) {
            d[i].sum += d[i].data[q];
        }
        let n = d[i].sum
        d[i].danShuang = n%2 === 0? "双":"单";
        d[i].bigSmall = n <= 809 && n >= 210 ? "小": 810 === n ? "和": "大";
        d[i].evenOdd = (function(d){
            let n=0 , e = 0;
            for (let q = 0; q < d.length; q++) {
                (d[q]-0)%2===0? ++n: ++e;
            }
            return (n === e) ? "和": n > e ? "偶": "奇"
        })(d[i].data);
        d[i].upDown = (function(d){
            let n=0 , e = 0;
            for (let q = 0; q < d.length; q++) {
                (d[q]-0)<= 40? ++n: ++e;
            }
            return n === 0 ? "和": n > e ? "上": "下"
        })(d[i].data)
    }
    return d
  }
}
