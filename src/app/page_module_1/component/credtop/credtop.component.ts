import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";
import "rxjs/add/operator/filter";

@Component({
  selector: "app-credtop",
  templateUrl: "./credtop.component.html",
  styleUrls: ["./credtop.component.scss"]
})
export class CredtopComponent implements OnInit, OnDestroy, OnChanges {
  @Input() type: string; //当前的彩种
  // @Input() number: number[];  //开奖区开奖号码
  @Input()
  indata: {
    style: string;
    prev: string; //上一期开奖期号
    prevball: number[]; // 开奖区上一期开奖号码
    next: string; //x下期开奖期号
    time: any;
  };
  ngOnChanges(changes: SimpleChanges) {
    // this.setimg();
  }
  public timedate = new Date();
  public time;
  // public routid;  //路由ID
  public shownav = false;
  public textnumber = 1;
  public currentparent: string; //一级导航
  public currentitem: string; // 二级导航
  public currentactive: number; // 当前展开的子导航
  public isrc;
//   public imgsrc = {
//     ssc: require("../../images/cqssc_13.png"),
//     vrc: require("../../images/vrc.png"),
//     tx_ffc: require("../../images/tx_ffc.png"),
//     bj_ffc: require("../../images/ffc/AZ3FC.png"),
//     tw_ffc: require("../../images/ffc/BJSSC.png"),
//     qq_ffc: require("../../images/ffc/DJ1.5FC.png"),
//     slfk_ffc: require("../../images/ffc/HGKLC.png"),
//     dj_ffc: require("../../images/ffc/JNDKLC.png"),
//     js_ffc: require("../../images/ffc/QQFFC.png"),
//     hs_ffc: require("../../images/ffc/SLFK5F.png"),
//     az_ffc: require("../../images/ffc/TW5FC.png"),
//     jnd_ffc: require("../../images/ffc/TXFFC.png")
//   };
  public data = [
    {
      title: "时时彩",
      bg: {
        x: -122,
        y: -10
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: "重庆时时彩",
          imgsrc: require("../../images/cqssc_13.png"),
          creditssc: true,
          linko: "/lottery/officialssc/cq",
          linkc: "/lottery/creditssc/cq",
        },
        {
          text: "天津时时彩",
          imgsrc: require("../../images/cqssc_13.png"),
          creditssc: true,
          linko: "/lottery/officialssc/tj",
          linkc: "/lottery/creditssc/tj",
        },
        {
          text: "新疆时时彩",
          imgsrc: require("../../images/cqssc_13.png"),
          creditssc: true,
          linko: "/lottery/officialssc/xq",
          linkc: "/lottery/creditssc/xq",
        },
        {
          text: "北京时时彩",
          imgsrc: require("../../images/cqssc_13.png"),
          creditssc: true,
          linko: "/lottery/officialssc/bj",
          linkc: "/lottery/creditssc/bj",
        }
      ]
    },
    {
      title: "分分彩",
      bg: {
        x: -122,
        y: -54
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: "韩式1.5分彩",
          imgsrc: require("../../images/ffc/SLFK5F.png"),
          creditssc: true,
          linko: "/lottery/officialffc/hs",
          linkc: "/lottery/creditffc/hs"
        },
        {
          text: "北京时时彩",
          imgsrc: require("../../images/ffc/AZ3FC.png"),
          creditssc: true,
          linko: "/lottery/officialffc/bj",
          linkc: "/lottery/creditffc/bj"

        },
        {
          text: "台湾5分彩",
          imgsrc: require("../../images/ffc/BJSSC.png"),
          creditssc: true,
          linko: "/lottery/officialffc/tw",
          linkc: "/lottery/creditffc/tw",
        },
        {
          text: "加拿大3.5分彩",
          imgsrc: require("../../images/ffc/TXFFC.png"),
          creditssc: true,
          linko: "/lottery/officialffc/jnd",
          linkc: "/lottery/creditffc/jnd"
        },
        {
          text: "澳洲3分彩",
          imgsrc: require("../../images/ffc/TW5FC.png"),
          creditssc: true,
          linko: "/lottery/officialffc/az",
          linkc: "/lottery/creditffc/az"
        },
        {
          text: "斯洛伐克5分彩",
          imgsrc: require("../../images/ffc/HGKLC.png"),
          creditssc: true,
          linko: "/lottery/officialffc/slfk",
          linkc: "/lottery/creditffc/slfk",
        },
        {
          text: "腾讯分分彩",
          imgsrc: require("../../images/tx_ffc.png"),
          creditssc: true,
          linko: "/lottery/officialffc/tx",
          linkc: "/lottery/creditffc/tx",
        },
        {
          text: "QQ分分彩",
          imgsrc: require("../../images/ffc/DJ1.5FC.png"),
          creditssc: true,
          linko: "/lottery/officialffc/qq",
          linkc: "/lottery/creditffc/qq",
        },
        {
          text: "东京1.5分彩",
          imgsrc: require("../../images/ffc/JNDKLC.png"),
          creditssc: true,
          linko: "/lottery/officialffc/dj",
          linkc: "/lottery/creditffc/dj",
        },
        {
          text: "极速分分彩",
          imgsrc: require("../../images/ffc/QQFFC.png"),
          creditssc: true,
          linko: "/lottery/officialffc/js",
          linkc: "/lottery/creditffc/js",
        }
      ]
    },
    {
      title: "PK10",
      bg: {
        x: -10,
        y: -98
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: "北京PK10",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialpk10/bjpk",
          linkc: "/lottery/creditpk10/bjpk",
        },
        {
          text: "幸运飞艇",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialpk10/xyft",
          linkc: "/lottery/creditpk10/xyft",
        }
      ]
    },
    {
      title: "11选5",
      bg: {
        x: -66,
        y: -98
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: "山东11选5",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialexf/sdexf",
          linkc: "/lottery/creditexf/sdexf",
        },
        {
          text: "江西11选5",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialexf/jxexf",
          linkc: "/lottery/creditexf/jxexf",
        },
        {
          text: "黑龙江11选5",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialexf/hljexf",
          linkc: "/lottery/creditexf/hljexf",
        },
        {
          text: "江苏11选5",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialexf/jsexf",
          linkc: "/lottery/creditexf/jsexf",
        },
        {
          text: "上海11选5",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialexf/shexf",
          linkc: "/lottery/creditexf/shexf",
        },
        {
          text: "新疆11选5",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialexf/xjexf",
          linkc: "/lottery/creditexf/xjexf",
        },
      ]
    },
    {
      title: "快乐彩",
      bg: {
        x: -122,
        y: -98
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: "北京快乐8",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialklc/bjkl8",
          linkc: "/lottery/creditklc/bjkl8",
        },
        {
          text: "台湾宾果",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialklc/twbg",
          linkc: "/lottery/creditklc/twbg",
        },
        {
          text: "加拿大快乐8",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialklc/jndkl8",
          linkc: "/lottery/creditklc/jndkl8",
        },
        {
          text: "澳洲快乐8",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialklc/azkl8",
          linkc: "/lottery/creditklc/azkl8",
        },
        {
          text: "斯洛伐克",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialklc/slfk",
          linkc: "/lottery/creditklc/slfk",
        }
      ]
    },
    {
      title: "低频彩",
      bg: {
        x: -10,
        y: -10
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: "福彩3D",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialdpc/fc3d",
          linkc: "/lottery/creditdpc/fc3d",
        },
        {
          text: "排列3,5",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialdpc/pl35",
          linkc: "/lottery/creditdpc/pl35",
        },
        {
          text: "上海时时乐",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialdpc/shssl",
          linkc: "/lottery/creditdpc/shssl",
        }
      ]
    },
    {
      title: "PC蛋蛋",
      bg: {
        x: -66,
        y: -10
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: "幸运28",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/creditpcdd/xy28",
          linkc: "/lottery/creditpcdd/xy28",
        },
        {
          text: "斯洛伐克28",
          imgsrc: "",
          creditssc: true,
          linko: "lottery/creditpcdd/snfk28",
          linkc: "/lottery/creditpcdd/snfk28",
        },
        {
          text: "澳洲28",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/creditpcdd/az28",
          linkc: "/lottery/creditpcdd/az28",
        },
        {
          text: "加拿大28",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/creditpcdd/jnd28",
          linkc: "/lottery/creditpcdd/jnd28",
        },
        {
          text: "韩式28",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/creditpcdd/hs28",
          linkc: "/lottery/creditpcdd/hs28",
        },
        {
          text: "台湾28",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/creditpcdd/tw28",
          linkc: "/lottery/creditpcdd/tw28",
        },
        {
          text: "东京28",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/creditpcdd/dj28",
          linkc: "/lottery/creditpcdd/dj28",
        },
      ]
    },
    {
      title: "快三",
      bg: {
        x: -10,
        y: -54
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: "江苏快三",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialk3/jsk3",
          linkc: "/lottery/creditk3/jsk3",
        },
        {
          text: "安徽快3",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialk3/ahk3",
          linkc: "/lottery/creditk3/ahk3",
        },
        {
          text: "河北快3",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialk3/hbk3",
          linkc: "/lottery/creditk3/hbk3",
        },
        {
          text: "河南快3",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialk3/hnk3",
          linkc: "/lottery/creditk3/hnk3",
        },
        {
          text: "湖北快3",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialk3/hubk3",
          linkc: "/lottery/creditk3/hubk3",
        },
        {
          text: "上海快3",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialk3/shks",
          linkc: "/lottery/creditk3/shks",
        },
        {
          text: "北京快3",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialk3/bjk3",
          linkc: "/lottery/creditk3/bjk3",
        },
        {
          text: "广西快3",
          imgsrc: "",
          creditssc: true,
          linko: "/lottery/officialk3/gxk3",
          linkc: "/lottery/creditk3/gxk3",
        },
        
      ]
    },
    {
      title: "VR彩",
      bg: {
        x: -66,
        y: -54
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: "彩票百家乐",
          imgsrc: require("../../images/vrc.png"),
          creditssc: true,
          linko: "/lottery/vrc/bjl",
          linkc: "/lottery/vrc/bjl"
        },
        {
          text: "3分彩",
          imgsrc: require("../../images/vrc.png"),
          creditssc: true,
          linko: "/lottery/vrc/3fc",
          linkc: "/lottery/vrc/3fc",
        },
        {
          text: "金星1.5粉彩",
          imgsrc: require("../../images/vrc.png"),
          creditssc: true,
          linko: "/lottery/vrc/jx",
          linkc: "/lottery/vrc/jx",
        },
        {
          text: "快艇",
          imgsrc: require("../../images/vrc.png"),
          creditssc: true,
          linko: "/lottery/vrc/kt",
          linkc: "/lottery/vrc/kt",
        },
        {
          text: "六合彩",
          imgsrc: require("../../images/vrc.png"),
          creditssc: true,
          linko: "/lottery/vrc/lhc",
          linkc: "/lottery/vrc/lhc",
        },
        {
          text: "赛车",
          imgsrc: require("../../images/vrc.png"),
          creditssc: true,
          linko: "/lottery/vrc/sc",
          linkc: "/lottery/vrc/sc",
        },
      ]
    }
  ];
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    // 设置应该显示的logo图片

    this.route.params.subscribe(data => {
      this.routreg(data.id);
    });

    this.time = setInterval(() => {
      this.timedate = new Date();
    }, 1000);
  }
  ngAfterViewInit() {}
  ngOnDestroy() {
    clearInterval(this.time);
  }
  //判断路由地址是否有效
  routreg(id) {
    let rout = this.router.url;
    let d = this.data;
    for (let i = 0; i < d.length; i++) {
      let b = d[i].items;
      for (let q = 0; q < b.length; q++) {
        if (rout === b[q].linko) {
            this.currentitem = b[q].text;
            this.currentactive = i;
          // 设置彩种logo
          if (b[q].imgsrc) {
            this.isrc = b[q].imgsrc;
          } else {
            this.isrc = require("../../images/cqssc_13.png");
          }
          //此处请求官方玩法数据
          return;
        }
        if (rout === b[q].linkc) {
            this.currentitem = b[q].text;
            this.currentactive = i;
          // 设置彩种logo
          if (b[q].imgsrc) {
            this.isrc = b[q].imgsrc;
          } else {
            this.isrc = require("../../images/cqssc_13.png");
          }
          //此处请求信用玩法数据
          return;
        }
      }
    }
    this.router.navigate(["/index"]); // 最终跳转到404页面
  }

  // 设置的logo图片
//   setimg(id) {
//     let str = id + "_" + this.type;
//     if (this.imgsrc[str]) {
//       this.isrc = this.imgsrc[str];
//     } else {
//       this.isrc = this.imgsrc["ssc"];
//     }
//   }
  // 导航栏目录点击事件
  itemboxclick(i) {
    if (this.currentactive == i) {
      this.currentactive = -1;
    } else {
      this.currentactive = i;
    }
  }
  // 鼠标经过目录事件
  itemboxenter(i) {
    let d = this.data[i];
    d.isover = true;
  }
  // 鼠标离开目录事件
  itemboxleave(i) {
    let d = this.data[i];
    if (this.currentactive == i) {
      return;
    }
    d.isover = false;
  }
  // 导航栏二级菜单点击事件
  itemclick(O) {
    // 跳转路由
    let str = this.indata.style === "credit" ? O.linkc : O.linko;
    this.router.navigate([str]);
    // this.shownav = false;
  }
}
