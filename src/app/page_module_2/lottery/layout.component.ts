import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";

import userModel from "../../../status/user.model";
import { Base } from "../../../factory/base.model";
import { HttpInterceptorService } from '../../Http.Service';

import { HttpClient,HttpHeaders } from '@angular/common/http';

// import {Observable} from 'rxjs';
// import 'rxjs/Rx'

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  loadpage = false;
  public barwidth = 180;
  public type='ssc'; //当前的彩种
  public indata= {
    style: 'credit',
    prev: '2018050738', //上一期开奖期号
    prevball :[9,2,5,6,8], // 开奖区上一期开奖号码
    next: '2018050736', //x下期开奖期号
    time: 'any',// 
  };
  public timedate = new Date();
  public time;
  public hostarr = [,,,,,];
  // public routid;  //路由ID
  public shownav = false;
  public textnumber = 1;
  public currentparent: string; //一级导航
  public currentitem: string; // 二级导航
  public currentactive: number; // 当前展开的子导航
  public isrc;
  public data = [
    {
      title: this.now_lang.lot_type.ssc,
      bg: {
        x: -122,
        y: -202
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.cq_ssc,
          type:"ssc",
          imgsrc: require("../images/cqssc_13.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialssc/cq",
          linkc: "/lottery/creditssc/cq",
        },
        {
          text: this.now_lang.lot_type.tj_ssc,
          type:"ssc",
          imgsrc: require("../images/cqssc_13.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialssc/tj",
          linkc: "/lottery/creditssc/tj",
        },
        {
          text: this.now_lang.lot_type.xq_ssc,
          type:"ssc",
          imgsrc: require("../images/cqssc_13.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialssc/xq",
          linkc: "/lottery/creditssc/xq",
        },
        {
          text: this.now_lang.lot_type.bj_ssc,
          type:"ssc",
          imgsrc: require("../images/cqssc_13.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialssc/bj",
          linkc: "/lottery/creditssc/bj",
        }
      ]
    },
    {
      title: this.now_lang.lot_type.ffc,
      bg: {
        x: -122,
        y: -522,
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.hs_ffc,
          type:"ssc",
          imgsrc: require("../images/ffc/SLFK5F.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/hs",
          linkc: "/lottery/creditffc/hs"
        },
        {
          text: this.now_lang.lot_type.bj_ffc,
          type:"ssc",
          imgsrc: require("../images/ffc/AZ3FC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/bj",
          linkc: "/lottery/creditffc/bj"

        },
        {
          text: this.now_lang.lot_type.tw_ffc,
          type:"ssc",
          imgsrc: require("../images/ffc/BJSSC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/tw",
          linkc: "/lottery/creditffc/tw",
        },
        {
          text: this.now_lang.lot_type.jnd_ffc,
          type:"ssc",
          imgsrc: require("../images/ffc/TXFFC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/jnd",
          linkc: "/lottery/creditffc/jnd"
        },
        {
          text: this.now_lang.lot_type.az_ffc,
          type:"ssc",
          imgsrc: require("../images/ffc/TW5FC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/az",
          linkc: "/lottery/creditffc/az"
        },
        {
          text: this.now_lang.lot_type.slfk_ffc,
          type:"ssc",
          imgsrc: require("../images/ffc/HGKLC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/slfk",
          linkc: "/lottery/creditffc/slfk",
        },
        {
          text: this.now_lang.lot_type.tx_ffc,
          type:"ssc",
          imgsrc: require("../images/tx_ffc.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/tx",
          linkc: "/lottery/creditffc/tx",
        },
        {
          text: this.now_lang.lot_type.qq_ffc,
          type:"ssc",
          imgsrc: require("../images/ffc/DJ1.5FC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/qq",
          linkc: "/lottery/creditffc/qq",
        },
        {
          text: this.now_lang.lot_type.dj_ffc,
          type:"ssc",
          imgsrc: require("../images/ffc/JNDKLC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/dj",
          linkc: "/lottery/creditffc/dj",
        },
        {
          text: this.now_lang.lot_type.js_ffc,
          type:"ssc",
          imgsrc: require("../images/ffc/QQFFC.png"),
          credit: true,
        official: true,
          linko: "/lottery/officialffc/js",
          linkc: "/lottery/creditffc/js",
        }
      ]
    },
    {
      title: this.now_lang.lot_type.pk_10,
      bg: {
        x: -10,
        y: -330,
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.bj_pk10,
          type:"pk10",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialpk10/bjpk",
          linkc: "/lottery/creditpk10/bjpk",
        },
        {
          text: this.now_lang.lot_type.xyft_pk10,
          type:"pk10",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialpk10/xyft",
          linkc: "/lottery/creditpk10/xyft",
        }
      ]
    },
    {
      title: this.now_lang.lot_type.Exf,
      bg: {
        x: -66,
        y: -10,
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.sd_exf,
          type:"exf",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialexf/sdexf",
          linkc: "/lottery/creditexf/sdexf",
        },
        {
          text:  this.now_lang.lot_type.jx_exf,
          type:"exf",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialexf/jxexf",
          linkc: "/lottery/creditexf/jxexf",
        },
        {
          text: this.now_lang.lot_type.hlj_exf,
          type:"exf",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialexf/hljexf",
          linkc: "/lottery/creditexf/hljexf",
        },
        {
          text: this.now_lang.lot_type.js_exf,
          type:"exf",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialexf/jsexf",
          linkc: "/lottery/creditexf/jsexf",
        },
        {
          text: this.now_lang.lot_type.shh_exf,
          type:"exf",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialexf/shexf",
          linkc: "/lottery/creditexf/shexf",
        },
        {
          text: this.now_lang.lot_type.xj_exf,
          type:"exf",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialexf/xjexf",
          linkc: "/lottery/creditexf/xjexf",
        },
      ]
    },
    {
      title: this.now_lang.lot_type.Klc,
      bg: {
        x: -122,
        y: -74,
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.bjkl8_klc,
          type:"kl8",
          imgsrc: "",
          credit: false,
        official: true,
          linko: "/lottery/officialklc/bjkl8",
          linkc: "/lottery/creditklc/bjkl8",
        },
        {
          text: this.now_lang.lot_type.jndkl8_klc,
          type:"kl8",
          imgsrc: "",
          credit: false,
        official: true,
          linko: "/lottery/officialklc/jndkl8",
          linkc: "/lottery/creditklc/jndkl8",
        },
        {
        text: this.now_lang.lot_type.azkl8_klc,
        type:"kl8",
        imgsrc: "",
        credit: false,
        official: true,
        linko: "/lottery/officialklc/azkl8",
        linkc: "/lottery/creditklc/azkl8",
        },
        {
          text: this.now_lang.lot_type.slfk_klc,
          type:"kl8",
          imgsrc: "",
          credit: false,
        official: true,
          linko: "/lottery/officialklc/slfk",
          linkc: "/lottery/creditklc/slfk",
        },
        {
          text: this.now_lang.lot_type.twbg_klc,
          type:"kl8",
          imgsrc: "",
          credit: false,
        official: true,
          linko: "/lottery/officialklc/twbg",
          linkc: "/lottery/creditklc/twbg",
        },
        {
          text: "广东快十",
          type:"kl8",
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditklc/gdk10",
        },
        {
          text: "广西快十",
          type:"kl8",
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditklc/gxk10",
        },
        {
          text: "重庆快十",
          type:"kl8",
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditklc/cqk10",
        },
      ]
    },
    {
      title: this.now_lang.lot_type.Dpc,
      bg: {
        x: -10,
        y: -458
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.fc3d_dpc,
          type:"dpc",
          imgsrc: "",
          credit: false,
        official: true,
          linko: "/lottery/officialdpc/fc3d",
          linkc: "/lottery/creditdpc/fc3d",
        },
        {
          text: this.now_lang.lot_type.pl35_dpc,
          type:"dpc",
          imgsrc: "",
          credit: false,
        official: true,
          linko: "/lottery/officialdpc/pl35",
          linkc: "/lottery/creditdpc/pl35",
        },
        {
          text:  this.now_lang.lot_type.shssl_dpc,
          type:"dpc",
          imgsrc: "",
          credit: false,
        official: true,
          linko: "/lottery/officialdpc/shssl",
          linkc: "/lottery/creditdpc/shssl",
        },
        {
          text: "香港⑥合彩",
          type:"dpc",
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditdpc/liuhec",
        },
      ]
    },
    {
      title: this.now_lang.lot_type.pc_dd,
      bg: {
        x: -66,
        y: -266
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.xy_28,
          type:"pcdd",
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditpcdd/xy28",
        },
        {
          text: this.now_lang.lot_type.slfk_28,
          type:"pcdd",
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditpcdd/snfk28",
        },
        {
          text: this.now_lang.lot_type.az_28,
          type:"pcdd",
          imgsrc: "",
          credit: true,
        official: false,
          linko: "/",
          linkc: "/lottery/creditpcdd/az28",
        },
        {
          text: this.now_lang.lot_type.jnd_28,
          type:"pcdd",
          imgsrc: "",
          credit: true,
        official: false,
          linko: "/",
          linkc: "/lottery/creditpcdd/jnd28",
        },
        {
          text: this.now_lang.lot_type.hs_28,
          type:"pcdd",
          imgsrc: "",
          credit: true,
        official: false,
          linko: "/",
          linkc: "/lottery/creditpcdd/hs28",
        },
        {
          text: this.now_lang.lot_type.tw_28,
          type:"pcdd",
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditpcdd/tw28",
        },
        {
          text: this.now_lang.lot_type.dj_28,
          type:"pcdd",
          imgsrc: "",
          credit: true,
        official: false,
          linko: "",
          linkc: "/lottery/creditpcdd/dj28",
        },
      ]
    },
    {
      title: this.now_lang.lot_type.K3,
      bg: {
        x: -10,
        y: -138,
      },
      type:"k3",
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.jsk3_ffc,
          type:"k3",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/jsk3",
          linkc: "/lottery/creditk3/jsk3",
        },
        {
          text: this.now_lang.lot_type.ahk3_ffc,
          type:"k3",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/ahk3",
          linkc: "/lottery/creditk3/ahk3",
        },
        {
          text: this.now_lang.lot_type.hbk3_ffc,
          type:"k3",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/hbk3",
          linkc: "/lottery/creditk3/hbk3",
        },
        {
          text: this.now_lang.lot_type.hnk3_ffc,
          type:"k3",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/hnk3",
          linkc: "/lottery/creditk3/hnk3",
        },
        {
          text: this.now_lang.lot_type.hubk3_ffc,
          type:"k3",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/hubk3",
          linkc: "/lottery/creditk3/hubk3",
        },
        {
          text: this.now_lang.lot_type.shks_ffc,
          type:"k3",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/shks",
          linkc: "/lottery/creditk3/shks",
        },
        {
          text: this.now_lang.lot_type.bjk3_ffc,
          type:"k3",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/bjk3",
          linkc: "/lottery/creditk3/bjk3",
        },
        {
          text: this.now_lang.lot_type.gxk3_ffc,
          type:"k3",
          imgsrc: "",
          credit: true,
        official: true,
          linko: "/lottery/officialk3/gxk3",
          linkc: "/lottery/creditk3/gxk3",
        },
        
      ]
    },
    {
      title: this.now_lang.lot_type.Vrc,
      bg: {
        x: -66,
        y: -394,
      },
      isover: false,
      isactive: false,
      items: [
        {
          text: this.now_lang.lot_type.cpbjl_vr,
          type:"vrc",
          imgsrc: require("../images/vrc.png"),
          credit: true,
        official: true,
          linko: "/lottery/vrc/bjl",
          linkc: "/lottery/vrc/bjl",
        },
        {
          text:  this.now_lang.lot_type.tfencai_vr,
          type:"vrc",
          imgsrc: require("../images/vrc.png"),
          credit: true,
        official: true,
          linko: "/lottery/vrc/3fc",
          linkc: "/lottery/vrc/3fc",
        },
        {
          text: this.now_lang.lot_type.jx15_vr,
          type:"vrc",
          imgsrc: require("../images/vrc.png"),
          credit: true,
        official: true,
          linko: "/lottery/vrc/jx",
          linkc: "/lottery/vrc/jx",
        },
        {
          text: this.now_lang.lot_type.kt_vr,
          type:"vrc",
          imgsrc: require("../images/vrc.png"),
          credit: true,
        official: true,
          linko: "/lottery/vrc/kt",
          linkc: "/lottery/vrc/kt",
        },
        {
          text: this.now_lang.lot_type.lhc_vr,
          type:"vrc",
          imgsrc: require("../images/vrc.png"),
          credit: true,
        official: true,
          linko: "/lottery/vrc/lhc",
          linkc: "/lottery/vrc/lhc",
        },
        {
          text:  this.now_lang.lot_type.sc_vr,
          type:"vrc",
          imgsrc: require("../images/vrc.png"),
          credit: true,
        official: true,
          linko: "/lottery/vrc/sc",
          linkc: "/lottery/vrc/sc",
        },
      ]
    }
  ];
  
  constructor(private router: Router,private route: ActivatedRoute, private hserve: HttpInterceptorService,private http:HttpClient) {}

  ngOnInit() {
    this.now_lang_type=userModel.now_lang_type;
    this.loadpage = userModel.platform;
    this.time = setInterval(() => {
      this.timedate = new Date();
      this.barwidth = this.barwidth>260?16:this.barwidth+1;
    }, 1000);
    // 设置应该显示的logo图片
    this.routreg();
    // 路由地址改变后的事件
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        // this.getrouteurl();
        this.routreg();
      });
    // this.route.params.subscribe(data => {
    //   });
    //   console.log(this.currentitem);
    }
    ngAfterViewInit() {}
    ngOnDestroy() {
      clearInterval(this.time);
    }
    //判断路由地址是否有效
    routreg() {
      let rout = this.router.url;
      let d = this.data;
      for (let i = 0; i < d.length; i++) {
        let b = d[i].items;
        for (let q = 0; q < b.length; q++) {
          if (rout === b[q].linko) {
              this.currentitem = b[q].text;

              this.currentactive = i;
              this.type = d[i].type;
              this.indata.style = 'official';
            // 设置彩种logo
            if (b[q].imgsrc) {
              this.isrc = b[q].imgsrc;
            } else {
              this.isrc = require("../images/cqssc_13.png");
            }
            //此处请求官方玩法数据
            return;
          }
          if (rout === b[q].linkc) {
              this.currentitem = b[q].text;
              console.log(this.currentitem);
              this.currentactive = i;
              this.type = b[q].type;
              this.indata.style = 'credit';
            // 设置彩种logo
            if (b[q].imgsrc) {
              this.isrc = b[q].imgsrc;
            } else {
              this.isrc = require("../images/cqssc_13.png");
            }
            //此处请求信用玩法数据
            return;
          }
        }
      }
      this.router.navigate(["/index"]); // 最终跳转到404页面
    }
  
    // 导航栏目录点击事件
    itemboxclick(i) {
      if (this.currentactive === i) {
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
    //   this.route.params.subscribe(data => {
    //       this.routreg(data.id);
    //     });
      // this.isrc = O.imgsrc?O.imgsrc:require("../images/cqssc_13.png");
      // this.currentitem = O.text;
    }
    result(){
        let str = this.indata.style === "official"?`${this.currentitem}[官]`:`${this.currentitem}[信]`
        Base.Store.set('HistoryAddress',str,false);
        this.router.navigate(["/result"]);
    }
}
