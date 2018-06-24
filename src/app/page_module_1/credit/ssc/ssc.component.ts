import { Component, OnInit, OnDestroy, ElementRef } from "@angular/core";
import { Router, Route, ActivatedRoute, Params } from "@angular/router";
import userModel from "../../../../status/user.model";
import { Base } from '../../../../factory/base.model';

@Component({
  selector: "app-credit",
  templateUrl: "./ssc.component.html",
  styleUrls: ["./ssc.component.scss"]
})
export class SscComponent implements OnInit, OnDestroy {
  loadpage = false;
  public cpnav = {
    style:"credit",
    prev: "20180517022",
    prevball: [2, 5, 9, 0, 8],
    next: "20180517023",
    time: ""
  };
  public odds = 7.8; // 赔率
  public rangevalue = 7.8; //绑定滑动条数据
  public delay = true; // 选择金额框判断
  public boxshow = false; // 选择金额框显示判断
  public type = 1; // 控制 玩法
  public curinpt; //当前操作的金额输入框
  public selectbtnvalue = 0; //控制 一般 、快捷按钮数据
  public inputshow = true;
  public btolast = 0; //控制 前中后选择
  public selmoeny = [100, 200, 500, 1000, 5000]; // 活动选择金额框数据
  public BALL = {
    numb: 0,
    value: ""
  };
  public typedata = [
    {
      id: 1,
      name: "整合"
    },
    {
      id: 2,
      name: "龙虎斗"
    },
    {
      id: 3,
      name: "全5中1"
    }
  ];
//   public contenttoptitle1 = [
//     "第一球",
//     "第二球",
//     "第三球",
//     "第四球",
//     "第五球",
//     "总和"
//   ];
  public contenttoptitle3 = [, , , , ,];
  public setallmoney = {
    value: ""
  }; //绑定快捷金额
  // 活动选择框的位置
  public boxposition = {
    x: "",
    y: ""
  };
  public betdatam = [
    {
      title: "第一球",
      data1: this.setbigorsmall(),
      data2: this.setball()
    },
    {
      title: "第二球",
      data1: this.setbigorsmall(),
      data2: this.setball()
    },
    {
      title: "第三球",
      data1: this.setbigorsmall(),
      data2: this.setball()
    },
    {
      title: "第四球",
      data1: this.setbigorsmall(),
      data2: this.setball()
    },
    {
      title: "第五球",
      data1: this.setbigorsmall(),
      data2: this.setball()
    },
    {
      title: "总和",
      data1: [
        {
          name: "总大",
          value: ""
        },
        {
          name: "总小",
          value: ""
        },
        {
          name: "总单",
          value: ""
        },
        {
          name: "总双",
          value: ""
        }
      ],
      data2: this.setempty(),
    }
  ];
  public betdatab = [
    {
      name: "豹子",
      value: ""
    },
    {
      name: "顺子",
      value: ""
    },
    {
      name: "对子",
      value: ""
    },
    {
      name: "杂六",
      value: ""
    },
    {
      name: "半顺",
      value: ""
    }
  ];

  public betdata2 = [
    {
      numb: 0,
      title: "万千  第一球VS第二球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 1,
      title: "万百  第一球VS第三球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 2,
      title: "万十  第一球VS第四球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 3,
      title: "万个  第一球VS第五球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 4,
      title: "千百  第二球VS第三球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 5,
      title: "千十  第二球VS第四球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 6,
      title: "千个  第二球VS第五球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 7,
      title: "百十  第三球VS第四球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 8,
      title: "百个  第三球VS第五球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    },
    {
      numb: 9,
      title: "十个  第四球VS第五球",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      },
      value3: {
        value: ""
      }
    }
  ];
  public betdata3 = [
    {
      numb: 0,
      value: "",
      order: 0
    },
    {
      numb: 1,
      value: "",
      order: 5
    },
    {
      numb: 2,
      value: "",
      order: 1
    },
    {
      numb: 3,
      value: "",
      order: 6
    },
    {
      numb: 4,
      value: "",
      order: 2
    },
    {
      numb: 5,
      value: "",
      order: 7
    },
    {
      numb: 6,
      value: "",
      order: 3
    },
    {
      numb: 7,
      value: "",
      order: 8
    },
    {
      numb: 8,
      value: "",
      order: 4
    },
    {
      numb: 9,
      value: "",
      order: 9
    }
  ];

  // 遮罩层
  public shade = {
    w: 0,
    h: 0
  };
  // =弹窗对话框数据

  public popup = {
    shade: {
      show: false,
      w: 0,
      h: 0
    },
    setnumb: {
      show: false,
      value: "",
      data: []
    },
    sub: {
      show: false,
      top:'10px',
      data: []
    }
  };
  public subdata = [];
  public submoney = 0;
  public subob = {
    channel: "重庆时时彩",
    type: "-",
    id: "20180808",
    ball: "-",
    number: "-",
    point: "-",
    money: "-"
  };

  constructor(private el: ElementRef, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadpage = userModel.platform;

    if (!Base.Store.get('selmoeny')) {
        Base.Store.set('selmoeny',this.selmoeny,true);
    }else{
         let arr = JSON.parse(JSON.stringify(Base.Store.get('selmoeny'))); 
         this.selmoeny = arr ;
    }
    
    this.popup.shade.w = screen.width;
    this.popup.shade.h = screen.height;
  }
  ngOnDestroy() {}

  // 滑块左侧递减事件
  rangevaluelessen() {
    if (this.rangevalue > 0) {
      this.rangevalue -= 0.1;
    }
  }
  // 滑块左侧递加事件
  rangevalueadd() {
    if (this.rangevalue < 7.8) {
      this.rangevalue += 0.1;
    }
  }
  // 切换玩法事件 /整合/龙虎斗/全五中一
  togtype(i) {
    this.type = i;
    this.setallmoney.value = "";
  }
  // 切换一般 /快捷 事件
  tabclick(i) {
    this.selectbtnvalue = i;
    if (i === 0) {
      this.inputshow = true;
    }
    if (i === 1) {
      this.inputshow = false;
    }
    if (i === 2) {
      let p = this.popup;
      let d = this.popup.setnumb.data;
      for (let i = 0; i < this.selmoeny.length; i++) {
        d[i] = {
          value: this.selmoeny[i]
        };
      }
      p.setnumb.show = true;

      p.shade.show = true;
    }
  }

  //====快选金额事件开始=============
  savenum() {
    let d = [];
    let p = this.popup.setnumb.data;
    for (let i = 0; i < p.length; i++) {
      d.push(Number(p[i].value));
    }
    Base.Store.set('selmoeny',d,true);
    this.selmoeny = d;
    this.close();
  }
  numbdel() {
    this.popup.setnumb.value = "";
  }
  setnumbdel(i) {
    let p = this.popup;
    p.setnumb.data.splice(i, 1);
  }
  addnumb() {
    let p = this.popup;
    let n = Number(p.setnumb.value);
    if (n > 0) {
      let l = p.setnumb.data.length;
      p.setnumb.data[l] = {
        value: n
      };
    }
    p.setnumb.value = "";
  }
  changeregset(i) {
    let p = this.popup;
    if (i === -1) {
      p.setnumb.value = p.setnumb.value.replace(/\D/g, "");
    } else {
      p.setnumb.data[i].value = p.setnumb.data[i].value.replace(/\D/g, "");
    }
  }
  close() {
    let p = this.popup;
    p.setnumb.show = false;
    p.shade.show = false;
    p.sub.show = false;
  }
  //====快选金额事件end=============

  // 全五中一 和底部快捷选项输入框 获得焦点事件
  // curinpt为当前操作输入框 变量
  // i 数组当前index
  inmoneyfocus(e, i) {
    if (i == "all") {
      this.curinpt = this.setallmoney;
    } else {
      this.curinpt = this.betdata3[i];
    }
    this.setposition(e);
  }
  // 整合 金额框获得焦点事件 /curinpt为当前操作输入框 变量
  // t、i 、q 为对应数据的key值或者index
  inmoney1focus(e, i, t, q) {
    if (q !== null) {
      this.curinpt = this.betdatam[i][t][q];
    } else {
      this.curinpt = this.betdatab[i];
    }
    this.setposition(e);
  }
  // 龙虎斗 金额框获得焦点事件 /curinpt为当前操作输入框 变量
  // t、i 、q 为对应数据的key值或者index
  inmoney2focus(e, i, t) {
    this.curinpt = this.betdata2[i][t];
    this.setposition(e);
  }
  //页面输入框焦点离开后隐藏金额选择框方法
  inmoneyblur() {
    // 必须延迟，不然点击不到选择框
    setTimeout(() => {
      if (!this.delay) {
        this.boxshow = false;
      }
    }, 200);
  }
  // 获取选择框显示位置方法
  setposition(e) {
    this.delay = true;
    let box = this.boxposition;
    box.x = e.target.offsetLeft - 4 + "px";
    if (this.curinpt == this.setallmoney) {
      box.y = e.target.offsetTop + 30 + "px";
    } else {
      box.y = e.target.offsetTop + 22 + "px";
    }
    // 延迟是避免切换输入框后 显示的选择框被延迟的离开焦点事件影响又隐藏
    setTimeout(() => {
      this.boxshow = true;
      this.delay = false;
    }, 200);
  }
  // 选择框点击选项方法，赋值给当前操作的输入框
  optinclick(i) {
    if (this.curinpt == this.setallmoney) {
      if (this.type == 3) {
        let d = this.betdata3;
        for (let q = 0; q < d.length; q++) {
          d[q].value = i;
        }
      }
      if (this.type == 2) {
        let d = this.betdata2;
        for (let q = 0; q < d.length; q++) {
          d[q].value1.value = i;
          d[q].value2.value = i;
          d[q].value3.value = i;
        }
      }
      if (this.type == 1) {
        let d = this.betdatam;
        for (let w = 0; w < d.length; w++) {
          for (let q = 0; q < d[w].data1.length; q++) {
            d[w].data1[q].value = i;
          }
          for (let t = 0; t < d[w].data2.length; t++) {
            d[w].data2[t].value = i;
          }
        }
        for (let w = 0; w < this.betdatab.length; w++) {
          this.betdatab[w].value = i;
        }
      }
    }
    this.curinpt.value = i;
    this.boxshow = false;
  }
  // 重置当前页面所有的输入框
  reset() {
    if (this.type == 3) {
      let d = this.betdata3;
      for (let i = 0; i < d.length; i++) {
        d[i].value = "";
      }
      this.setallmoney.value = "";
    }
    if (this.type == 2) {
      let d = this.betdata2;
      for (let i = 0; i < d.length; i++) {
        d[i].value1.value = "";
        d[i].value2.value = "";
        d[i].value3.value = "";
      }
      this.setallmoney.value = "";
    }
    if (this.type == 1) {
      let d = this.betdatam;
      for (let w = 0; w < d.length; w++) {
        for (let q = 0; q < d[w].data1.length; q++) {
          d[w].data1[q].value = "";
        }
        for (let t = 0; t < d[w].data2.length; t++) {
          d[w].data2[t].value = "";
        }
      }
      for (let w = 0; w < this.betdatab.length; w++) {
        this.betdatab[w].value = "";
      }
    }
  }
  // 快捷选项下的输入框值改变后的方法，
  allchange() {
    let v = this.setallmoney.value;
    if (this.type == 3) {
      let d = this.betdata3;
      for (let q = 0; q < d.length; q++) {
        d[q].value = v;
      }
    }
    if (this.type == 2) {
      let d = this.betdata2;
      for (let q = 0; q < d.length; q++) {
        d[q].value1.value = v;
        d[q].value2.value = v;
        d[q].value3.value = v;
      }
    }
    if (this.type == 1) {
      let d = this.betdatam;
      for (let w = 0; w < d.length; w++) {
        for (let q = 0; q < d[w].data1.length; q++) {
          d[w].data1[q].value = v;
        }
        for (let t = 0; t < d[w].data2.length; t++) {
          d[w].data2[t].value = v;
        }
      }
      for (let w = 0; w < this.betdatab.length; w++) {
        this.betdatab[w].value = v;
      }
    }
  }
  // 限制输入框只能输入数字
  changereg() {
    this.curinpt.value = this.curinpt.value.replace(/\D/g, "");
  }

  // 确认提交按钮事件
  sub() {
    let data = [];
    if (this.type == 3) {
        this.popup.sub.top = "10px";
      let point = (2.099 + (0.191 / 7.8) * this.rangevalue).toFixed(3);
      let d = this.betdata3;
      for (let i = 0; i < d.length; i++) {
        if (Number(d[i].value) > 0) {
          let l = data.length;
          data[l] = Object.assign({}, this.subob);
          data[l].number = d[i].numb;
          data[l].type = "全5中1";
          data[l].point = point;
          data[l].money = d[i].value;
        }
      }
    }
    if (this.type == 2) {
        this.popup.sub.top = "100px";
      let point1 = (1.944 + (0.224 / 7.8) * this.rangevalue).toFixed(3);
      let point2 = (8.98 + (0.78 / 7.8) * this.rangevalue).toFixed(2);
      let point3 = (1.944 + (0.224 / 7.8) * this.rangevalue).toFixed(3);
      let d = this.betdata2;
      for (let i = 0; i < d.length; i++) {
        if (Number(d[i].value1.value) > 0) {
          let l = data.length;
          data[l] = Object.assign({}, this.subob);
          data[l].channel = d[i].title;
          data[l].type = "龙虎斗";
          data[l].ball = "龙";
          data[l].point = point1;
          data[l].money = d[i].value1.value;
        }
        if (Number(d[i].value2.value) > 0) {
          let l = data.length;
          data[l] = Object.assign({}, this.subob);
          data[l].channel = d[i].title;
          data[l].type = "龙虎斗";
          data[l].ball = "和";
          data[l].point = point2;
          data[l].money = d[i].value2.value;
        }
        if (Number(d[i].value3.value) > 0) {
          let l = data.length;
          data[l] = Object.assign({}, this.subob);
          data[l].channel = d[i].title;
          data[l].type = "龙虎斗";
          data[l].ball = "虎";
          data[l].point = point3;
          data[l].money = d[i].value3.value;
        }
      }
    }
    if (this.type == 1) {
        this.popup.sub.top = "350px";
      let point1 = (1.8 + (0.156 / 7.8) * this.rangevalue).toFixed(3);
      let point2 = (9 + (0.78 / 7.8) * this.rangevalue).toFixed(2);
      let point3 = (11.633 + (1.3 / 7.8) * this.rangevalue).toFixed(3);
      let d = this.betdatam;
      let p = this.betdatab;
      for (let i = 0; i < d.length; i++) {
        let d1 = d[i].data1;
        let d2 = d[i].data2;
        for (let q = 0; q < d1.length; q++) {
          if (Number(d1[q].value) > 0) {
            let l = data.length;
            data[l] = Object.assign({}, this.subob);
            data[l].channel = d[i].title;
            data[l].type = "整合";
            data[l].ball = d1[q].name;
            data[l].point = point1;
            data[l].money = d1[q].value;
          }
        }
        for (let q = 0; q < d2.length; q++) {
          if (Number(d2[q].value) > 0 && d2[q].numb !== null) {
            let l = data.length;
            data[l] = Object.assign({}, this.subob);
            data[l].channel = d[i].title;
            data[l].type = "整合";
            data[l].number = d2[q].numb;
            data[l].point = point2;
            data[l].money = d2[q].value;
          }
        }
      }

      for (let q = 0; q < p.length; q++) {
        if (Number(p[q].value) > 0) {
          let l = data.length;
          data[l] = Object.assign({}, this.subob);
          data[l].channel =
            this.btolast === 0
              ? "前三"
              : this.btolast === 1
                ? "中三"
                : this.btolast === 2
                  ? "后三"
                  : "-";
          data[l].type = "整合";
          data[l].ball = p[q].name;
          data[l].point = point3;
          data[l].money = p[q].value;
        }
      }
    }

    this.submoney = 0;
    for (let i = 0; i < data.length; i++) {
        this.submoney += Number(data[i].money);
    }
    
    this.subdata = data;
    this.popup.sub.show = true;
    this.popup.shade.show = true;
    // this.reset();
    // this.setallmoney.value = '';
    return false;
  }

  linkrouter(t) {
    this.router.navigate([t]);
  }
  routlink(){
    let str ;
    this.route.params.subscribe(data=>str=data.id);
    this.router.navigate(['/lottery/officialssc', str]);
  }

  // 设置整合 球的数据
  setball() {
    let data = [];
    for (let q = 0; q < 10; q++) {
      let o = Object.assign({}, this.BALL);
      o.numb = q;
      data.push(o);
    }
    return data;
  }
  setbigorsmall() {
    let data = [];
    let d = ["大", "小", "单", "双"];
    for (let i = 0; i < d.length; i++) {
      data[i] = {
        name: d[i],
        value: ""
      };
    }
    return data;
  }
  setempty(){
    let data = [];
      for (let i = 0; i < 10; i++) {
        let o = Object.assign({}, this.BALL);
        o.numb = null;
        data.push(o);
      }
      return data;
  }
}
