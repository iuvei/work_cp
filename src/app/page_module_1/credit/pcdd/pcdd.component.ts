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
  selector: "app-pcdd",
  templateUrl: "./pcdd.component.html",
  styleUrls: ["./pcdd.component.scss"]
})
export class PcddComponent implements OnInit, OnDestroy, AfterViewInit {
  loadpage = false;
  public cpnav = {
    style: "credit",
    prev: "20180517022",
    prevball: [2, 5, 9, 0, 8],
    next: "20180517023",
    time: ""
  };
  public routeid;
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
  public BALL = {
    numb: 0,
    red: false,
    green: false,
    blue: false,
    gray: false,
    value: ""
  };
  public BALL2 = {
    name: "",
    value: ""
  };
  public contenttoptitle = [, , , ,];
  public setallmoney = {
    value: ""
  }; //绑定快捷金额
  // 活动选择框的位置
  public boxposition = {
    x: "",
    y: ""
  };
  public pcdata1 = this.setball();
  public pcdata2 = [
    [
      { name: "大", value: "" },
      { name: "单", value: "" },
      { name: "大单", value: "" },
      { name: "大双", value: "" },
      { name: "极大", value: "" }
    ],
    [
      { name: "小", value: "" },
      { name: "双", value: "" },
      { name: "小单", value: "" },
      { name: "小双", value: "" },
      { name: "极小", value: "" }
    ],
    [
      { name: "红波", value: "" },
      { name: "绿波", value: "" },
      { name: "蓝波", value: "" },
      { name: null, value: "" },
      { name: null, value: "" }
    ],
    [
      { name: "豹子", value: "" },
      { name: null, value: "" },
      { name: null, value: "" },
      { name: null, value: "" },
      { name: null, value: "" }
    ]
  ];
  public ballsel = this.setselball();
  public selballdata = {
    name: "特码包三",
    value: "",
    number: 1,
    left: "0px",
    value1: { value: 0, styn: "gray" },
    value2: { value: 8, styn: "blue" },
    value3: { value: 6, styn: "red" },
    show: false
  };


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
    channel: "pk10",
    type: "-",
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

  sanbaoclick(i) {
    let d = this.selballdata;
    d.number = i;
    d.show = true;
    let n = 170 + 80 * (i - 1);
    d.left = n + "px";
  }
  selectball(i) {
    let d = this.selballdata;
    let str = "value" + d.number;
    d[str].value = i;
    if (i % 3 === 0) {
      d[str].styn = "red";
    }
    if (i % 3 === 1) {
      d[str].styn = "green";
    }
    if (i % 3 === 2) {
      d[str].styn = "blue";
    }
    if (i === 0 || i === 13 || i === 14 || i === 27) {
      d[str].styn = "gray";
    }
  }

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
      this.curinpt = this.selballdata;
    }
    this.setposition(e);
  }
  // 整合 金额框获得焦点事件 /curinpt为当前操作输入框 变量
  // t、i 、q 为对应数据的key值或者index
  inmoney1focus(e, i) {
    this.curinpt = this.pcdata1[i];
    this.setposition(e);
  }
  // 龙虎斗 金额框获得焦点事件 /curinpt为当前操作输入框 变量
  // t、i 、q 为对应数据的key值或者index
  inmoney2focus(e, i, q) {
    this.curinpt = this.pcdata2[i][q];
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
    if (
      this.curinpt === this.setallmoney ||
      this.curinpt === this.selballdata
    ) {
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
      this.amend(i);
    }
    this.curinpt.value = i;
    this.boxshow = false;
  }
  // 重置当前页面所有的输入框
  reset() {
    this.amend("");
    this.setallmoney.value = "";
  }
  // 快捷选项下的输入框值改变后的方法，
  allchange() {
    let v = this.setallmoney.value;
    this.amend(v);
  }
  amend(v) {
    let d1 = this.pcdata1;
    let d2 = this.pcdata2;
    for (let w = 0; w < d1.length; w++) {
      d1[w].value = v;
    }
    for (let w = 0; w < d2.length; w++) {
      for (let q = 0; q < d2[w].length; q++) {
        d2[w][q].value = v;
      }
    }
    this.selballdata.value = v;
  }
  // 限制输入框只能输入数字
  changereg() {
    this.curinpt.value = Number(this.curinpt.value.replace(/\D/g, ""));
  }

  // 确认提交按钮事件
  sub() {
    let data = [];
    this.popup.sub.top = "10px";
    let point = (11.633 + (1.3 / 7.8) * this.rangevalue).toFixed(3);
    let d = this.pcdata1;
    for (let i = 0; i < d.length; i++) {
      if (Number(d[i].value) > 0) {
        let l = data.length;
        data[l] = Object.assign({}, this.subob);
        data[l].channel = "PC蛋蛋 - " + this.routeid;
        data[l].number = d[i].numb;
        data[l].type = "特码";
        data[l].point = point;
        data[l].money = d[i].value;
      }
    }
    let d1 = this.selballdata;
    if (Number(d1.value) > 0) {
      let l = data.length;
      data[l] = Object.assign({}, this.subob);
      data[l].channel = "PC蛋蛋 - " + this.routeid;
      data[l].ball = d1.name;
      data[l].number = `${d1.value1.value} | ${d1.value2.value} | ${
        d1.value3.value
      } `;
      data[l].type = "特码";
      data[l].point = point;
      data[l].money = d1.value;
    }
    let d2 = this.pcdata2;
    for (let i = 0; i < d2.length; i++) {
      for (let q = 0; q < d2[i].length; q++) {
        if (Number(d2[i][q].value) > 0) {
          let l = data.length;
          data[l] = Object.assign({}, this.subob);
          data[l].channel = "PC蛋蛋 - " + this.routeid;
          data[l].ball = d2[i][q].name;
          data[l].type = "特码";
          data[l].point = point;
          data[l].money = d2[i][q].value;
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

  // 设置整合 球的数据
  setball() {
    let data = [];
    for (let q = 0; q < 28; q++) {
      let o = Object.assign({}, this.BALL);
      o.numb = q;
      if (q % 3 === 0) {
        o.red = true;
      }
      if (q % 3 === 1) {
        o.green = true;
      }
      if (q % 3 === 2) {
        o.blue = true;
      }
      if (q === 0 || q === 13 || q === 14 || q === 27) {
        o.gray = true;
      }
      data.push(o);
    }
    return data;
  }
  setselball() {
    let data = [];
    for (let i = 0; i < 28; i++) {
      data[i] = i;
    }
    return data;
  }
  //del
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
  setvs() {
    let data = [];
    for (let q = 1; q <= 10; q++) {
      for (let w = q + 1; w <= 10; w++) {
        let o = Object.assign({}, this.BALL2);
        o.name = q + "-" + w;
        data.push(o);
      }
    }
    return data;
  }
}
