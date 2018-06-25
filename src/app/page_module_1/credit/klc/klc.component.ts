import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import {
  Router,
  Route,
  ActivatedRoute,
  Params,
  NavigationEnd
} from "@angular/router";
import userModel from "../../../../status/user.model";
import { Base } from "../../../../factory/base.model";
import "rxjs/add/operator/filter";

@Component({
  selector: "app-klc",
  templateUrl: "./klc.component.html",
  styleUrls: ["./klc.component.scss"]
})
export class KlcComponent implements OnInit, OnDestroy, AfterViewInit {
  loadpage = false;
  public cpnav = {
    style: "credit",
    prev: "20180517022",
    prevball: [2, 5, 9, 0, 8],
    next: "20180517023",
    time: ""
  };
  public odds = 7.8; // 赔率
  public rangevalue = 7.8; //绑定滑动条数据
  public delay = true; // 选择金额框判断
  public boxshow = false; // 选择金额框显示判断
  public boxvalid = true; // 选择金额框禁用判断
  public type = 1; // 控制 玩法
  public curinpt; //当前操作的金额输入框
  public selectbtnvalue = 0; //控制 一般 、快捷按钮数据
  public inputshow = true;
  public btolast = 0; //控制 前中后选择
  public selmoeny = [100, 200, 500, 1000, 5000]; // 活动选择金额框数据
  public routeid;
  public BALL = {
    numb: 0,
    value: ""
  };
  public typedata = [
    {
      id: 1,
      name: "两面盘"
    },
    {
      id: 2,
      name: "特码"
    },
    {
      id: 3,
      name: "正码一"
    },
    {
      id: 4,
      name: "正码二"
    },
    {
      id: 5,
      name: "正码三"
    },
    {
      id: 6,
      name: "正码四"
    },
    {
      id: 7,
      name: "正码五"
    },
    {
      id: 8,
      name: "正码六"
    },
    {
      id: 9,
      name: "正码七"
    },
    {
      id: 10,
      name: "龙虎斗"
    },
    {
      id: 11,
      name: "全8中1"
    }
  ];
  public contenttoptitle3 = [, , , , ,];
  public setallmoney = {
    value: ""
  }; //绑定快捷金额
  // 活动选择框的位置
  public boxposition = {
    x: "",
    y: ""
  };
  public betdatab1_1 = [
    {
      title: "特码",
      data1: [
        { name: "特单", value: "" },
        { name: "特双", value: "" },
        { name: "特尾大", value: "" },
        { name: "特尾小", value: "" },
        { name: "特大", value: "" },
        { name: "特小", value: "" },
        { name: "合单", value: "" },
        { name: "合双", value: "" }
      ]
    },
    {
      title: "正码一",
      data1: this.setbigorsmall()
    },
    {
      title: "正码二",
      data1: this.setbigorsmall()
    },
    {
      title: "正码三",
      data1: this.setbigorsmall()
    },
    {
      title: "正码四",
      data1: this.setbigorsmall()
    },
    {
      title: "正码五",
      data1: this.setbigorsmall()
    },
    {
      title: "正码六",
      data1: this.setbigorsmall()
    },
    {
      title: "正码七",
      data1: this.setbigorsmall()
    },
    {
      title: "总和",
      data1: [
        { name: "总单", value: "" },
        { name: "总双", value: "" },
        { name: "总尾大", value: "" },
        { name: "总尾小", value: "" },
        { name: "总大", value: "" },
        { name: "总小", value: "" },
        { name: null, value: "" },
        { name: null, value: "" }
      ]
    },
    {
      title: "",
      data1: [
        { name: null, value: "" },
        { name: null, value: "" },
        { name: null, value: "" },
        { name: null, value: "" },
        { name: null, value: "" },
        { name: null, value: "" },
        { name: null, value: "" },
        { name: null, value: "" }
      ]
    }
  ];
  public betdatab2_1 = {
    data1: this.setball(),
    data2: [
      { name: "上", value: "" },
      { name: "和", value: "" },
      { name: "下", value: "" },
      { name: "特单", value: "" },
      { name: "特大", value: "" },
      { name: "奇", value: "" },
      { name: "和", value: "" },
      { name: "偶", value: "" },
      { name: "特双", value: "" },
      { name: "特小", value: "" },
      { name: "总单", value: "" },
      { name: "总大", value: "" },
      { name: "总尾大", value: "" },
      { name: "特尾大", value: "" },
      { name: "合单", value: "" },
      { name: "总双", value: "" },
      { name: "总小", value: "" },
      { name: "总尾小", value: "" },
      { name: "特尾小", value: "" },
      { name: "合双", value: "" }
    ]
  };
  public betdatab2_2 = [, , , , ,];
  public zhengma = [
    this.setzhengma(),
    this.setzhengma(),
    this.setzhengma(),
    this.setzhengma(),
    this.setzhengma(),
    this.setzhengma(),
    this.setzhengma()
  ];

  public betdatab7_1 = [
    {
      numb: 0,
      title: "正一VS正二",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 1,
      title: "正一VS正三",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 2,
      title: "正一VS正四",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 3,
      title: "正一VS正五",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 4,
      title: "正一VS正六",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 5,
      title: "正一VS正七",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 6,
      title: "正一VS特码",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 7,
      title: "正二VS正三",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 8,
      title: "正二VS正四",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 9,
      title: "正二VS正五",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 10,
      title: "正二VS正六",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 11,
      title: "正二VS正七",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 12,
      title: "正二VS特码",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 7,
      title: "正三VS正四",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 7,
      title: "正三VS正五",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 7,
      title: "正三VS正六",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 7,
      title: "正三VS正七",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 8,
      title: "正三VS特码",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 7,
      title: "正四VS正五",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 7,
      title: "正四VS正六",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 7,
      title: "正四VS正七",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 9,
      title: "正四VS特码",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 7,
      title: "正五VS正六",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 7,
      title: "正五VS正七",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 9,
      title: "正五VS特码",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 7,
      title: "正六VS正七",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 9,
      title: "正六VS特码",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    },
    {
      numb: 9,
      title: "正七VS特码",
      value1: {
        value: ""
      },
      value2: {
        value: ""
      }
    }
  ];
  public bettatab8_1 = this.setball();

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
      top: "10px",
      data: []
    }
  };
  public subdata = [];
  public submoney = 0;
  public subob = {
    channel: "",
    type: this.typedata[this.type - 1].name,
    id: "20180808",
    ball: "-",
    number: "-",
    point: "-",
    money: "-"
  };
  constructor(
    private el: ElementRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadpage = userModel.platform;

    if (!Base.Store.get("selmoeny")) {
      Base.Store.set("selmoeny", this.selmoeny, true);
    } else {
      let arr = JSON.parse(JSON.stringify(Base.Store.get("selmoeny")));
      this.selmoeny = arr;
    }

    this.popup.shade.w = screen.width;
    this.popup.shade.h = screen.height;
    // 跳转官方路由设置
    // this.setlink();
    this.route.params.subscribe(data => {
      this.routeid = data.id;
    });
  }
  ngAfterViewInit() {}
  ngOnDestroy() {}

  // 禁用快选活动框事件
  setboxvalid() {
    this.boxvalid = !this.boxvalid;
  }
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
    if (i === 0) {
      this.selectbtnvalue = 0;
      this.inputshow = true;
    }
    if (i === 1) {
      this.selectbtnvalue = 1;
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
    Base.Store.set("selmoeny", d, true);
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
      this.curinpt = this.bettatab8_1[i];
    }
    this.setposition(e);
  }
  // 整合 金额框获得焦点事件 /curinpt为当前操作输入框 变量
  // i 、q 为对应数据的key值或者index
  inmoney1focus(e, i, q) {
    this.curinpt = this.betdatab1_1[i].data1[q];
    this.setposition(e);
  }
  // 龙虎斗 金额框获得焦点事件 /curinpt为当前操作输入框 变量
  // t、i 、q 为对应数据的key值或者index
  inmoney2focus(e, t, i) {
    this.curinpt = this.betdatab2_1[t][i];
    this.setposition(e);
  }
  inmoney3focus(e, i, t, q) {
    this.curinpt = this.zhengma[i][t][q];
    this.setposition(e);
  }
  inmoney4focus(e, i, t) {
    this.curinpt = this.betdatab7_1[i][t];
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
    if (this.curinpt === this.setallmoney) {
      let v = i;
      this.amend(v);
    }
    this.curinpt.value = i;
    this.boxshow = false;
  }
  // 重置当前页面所有的输入框
  reset() {
    let v = "";
    this.amend(v);
    this.setallmoney.value = "";
  }
  // 快捷选项下的输入框值改变后的方法，
  allchange() {
    let v = this.setallmoney.value;
    this.amend(v);
  }
  amend(v) {
    if (this.type === 11) {
      let d = this.bettatab8_1;
      for (let q = 0; q < d.length; q++) {
        if (d[q].numb !== null) {
          d[q].value = v;
        }
      }
    }
    if (this.type === 10) {
      let d = this.betdatab7_1;
      for (let q = 0; q < d.length; q++) {
        d[q].value1.value = v;
        d[q].value2.value = v;
      }
    }
    if (this.type > 2 && this.type < 10) {
      let n = this.type - 3;
      let d = this.zhengma[n].data1;
      let b = this.zhengma[n].data2;
      for (let q = 0; q < d.length; q++) {
        if (d[q].numb !== null) {
          d[q].value = v;
        }
      }
      for (let q = 0; q < b.length; q++) {
        b[q].value = v;
      }
    }
    if (this.type === 2) {
      let d = this.betdatab2_1;
      for (let q = 0; q < d.data1.length; q++) {
        if (d.data1[q].numb !== null) {
          d.data1[q].value = v;
        }
      }
      for (let q = 0; q < d.data2.length; q++) {
        d.data2[q].value = v;
      }
    }
    if (this.type == 1) {
      let d = this.betdatab1_1;
      for (let w = 0; w < d.length; w++) {
        for (let q = 0; q < d[w].data1.length; q++) {
          if (d[w].data1[q].name !== null) {
            d[w].data1[q].value = v;
          }
        }
      }
    }
  }
  // 限制输入框只能输入数字
  changereg() {
    this.curinpt.value = Number(this.curinpt.value.replace(/\D/g, ""));
  }

  // 确认提交按钮事件
  sub() {
    let data = [];
    if (this.type == 11) {
      this.popup.sub.top = "10px";
      let point = (11.633 + (1.3 / 7.8) * this.rangevalue).toFixed(3);
      let d = this.bettatab8_1;
      for (let i = 0; i < d.length; i++) {
        if (Number(d[i].value) > 0 && d[i].numb !== null) {
          let l = data.length;
          data[l] = Object.assign({}, this.subob);
          data[l].channel = "快乐彩 - " + this.routeid;
          data[l].type = this.typedata[this.type - 1].name;
          data[l].number = d[i].numb;
          data[l].point = point;
          data[l].money = d[i].value;
        }
      }
    }
    if (this.type == 10) {
      this.popup.sub.top = "460px";
      let point1 = (1.944 + (0.224 / 7.8) * this.rangevalue).toFixed(3);
      let point2 = (8.98 + (0.78 / 7.8) * this.rangevalue).toFixed(2);
      let d = this.betdatab7_1;
      for (let i = 0; i < d.length; i++) {
        if (Number(d[i].value1.value) > 0) {
          let l = data.length;
          data[l] = Object.assign({}, this.subob);
          data[l].channel = "快乐彩 - " + this.routeid;
          data[l].type = this.typedata[this.type - 1].name;
          data[l].ball = d[i].title;
          data[l].number = "龙";
          data[l].point = point1;
          data[l].money = d[i].value1.value;
        }
        if (Number(d[i].value2.value) > 0) {
          let l = data.length;
          data[l] = Object.assign({}, this.subob);
          data[l].channel = "快乐彩 - " + this.routeid;
          data[l].type = this.typedata[this.type - 1].name;
          data[l].ball = d[i].title;
          data[l].number = "龙";
          data[l].point = point2;
          data[l].money = d[i].value2.value;
        }
      }
    }
    if (this.type > 1 && this.type < 10) {
      this.popup.sub.top = "10px";
      let point1 = (11.633 + (1.3 / 7.8) * this.rangevalue).toFixed(3);
      let point2 = (1.8 + (0.13 / 7.8) * this.rangevalue).toFixed(3);
      let d;
      let b;
      if (this.type === 2) {
        d = this.betdatab2_1.data1;
        b = this.betdatab2_1.data2;
      } else {
        d = this.zhengma[this.type - 3].data1;
        b = this.zhengma[this.type - 3].data2;
      }
      for (let i = 0; i < d.length; i++) {
        let d1 = d[i];
        if (Number(d1.value) > 0 && d1.numb !== null) {
          let l = data.length;
          data[l] = Object.assign({}, this.subob);
          data[l].channel = "快乐彩 - " + this.routeid;
          data[l].type = this.typedata[this.type - 1].name;
          data[l].number = d1.numb;
          data[l].point = point1;
          data[l].money = d1.value;
        }
      }
      for (let i = 0; i < b.length; i++) {
        let d1 = b[i];
        if (Number(d1.value) > 0) {
          let l = data.length;
          data[l] = Object.assign({}, this.subob);
          data[l].channel = "快乐彩 - " + this.routeid;
          data[l].type = this.typedata[this.type - 1].name;
          data[l].ball = d1.name;
          data[l].point = point2;
          data[l].money = d1.value;
        }
      }
    }
    if (this.type === 1) {
      this.popup.sub.top = "350px";
      let point = (1.8 + (0.156 / 7.8) * this.rangevalue).toFixed(3);
      let d = this.betdatab1_1;
      for (let i = 0; i < d.length; i++) {
        let d1 = d[i].data1;
        for (let q = 0; q < d1.length; q++) {
          if (Number(d1[q].value) > 0 && d1[q].name !== null) {
            let l = data.length;
            data[l] = Object.assign({}, this.subob);
            data[l].channel = "快乐彩 - " + this.routeid;
            data[l].type = this.typedata[this.type - 1].name;
            data[l].ball = d[i].title;
            data[l].number = d1[q].name;
            data[l].point = point;
            data[l].money = d1[q].value;
          }
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
  routlink() {
    let str;
    this.route.params.subscribe(data => (str = data.id));
    this.router.navigate(["/lottery/officialklc", str]);
  }

  // 设置整合 球的数据
  setball() {
    let data = [];
    for (let q = 1; q <= 20; q++) {
      let o = Object.assign({}, this.BALL);
      o.numb = q;
      data.push(o);
    }
    return data;
  }
  // 设置空球数据
  setempty() {
    let data = [];
    for (let i = 0; i < 10; i++) {
      let o = Object.assign({}, this.BALL);
      o.numb = null;
      data.push(o);
    }
    return data;
  }
  setbigorsmall() {
    let data = [];
    let d = ["单", "双", "尾大", "尾小", "大", "小", "合单", "合双"];
    for (let i = 0; i < d.length; i++) {
      data[i] = {
        name: d[i],
        value: ""
      };
    }
    return data;
  }
  // 设置正码数据
  setzhengma() {
    let d = {
      data1: this.setball(),
      data2: [
        { name: "上", value: "" },
        { name: "和", value: "" },
        { name: "下", value: "" },
        { name: "单", value: "" },
        { name: "大", value: "" },
        { name: "奇", value: "" },
        { name: "和", value: "" },
        { name: "偶", value: "" },
        { name: "双", value: "" },
        { name: "小", value: "" },
        { name: "总单", value: "" },
        { name: "总大", value: "" },
        { name: "总尾大", value: "" },
        { name: "尾大", value: "" },
        { name: "合单", value: "" },
        { name: "总双", value: "" },
        { name: "总小", value: "" },
        { name: "总尾小", value: "" },
        { name: "尾小", value: "" },
        { name: "合双", value: "" }
      ]
    };
    let data = Object.assign({}, d);
    return data;
  }
}