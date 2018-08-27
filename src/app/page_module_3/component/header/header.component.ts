import { Component, OnInit,Input,OnDestroy,AfterViewInit, ElementRef,} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";

import { Base } from "../../../../factory/base.model";
import userModel from "../../../../status/user.model";
//语言测试
import languagepackage from '../../../../status/language';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit,OnDestroy,AfterViewInit {
    @Input() username? :  {Type:any, default:'chen' }; // 用户名
    @Input() curpath? :string; // 当前路由位置
    public pathdata = ['index','lottery','usercenter','Activity','Announncement','cpinfo','phone']
    public now_lang :any=userModel.langpackage;
    public now_lang_type :any='zh';
    public regis=false;
    public login=false;
    public navdata = [
      {
        text: this.now_lang.index.Index,
        isover: false,
        link: "#/index"
      },
      {
        text: this.now_lang.index.Lot_lobby,
        isover: false,
        link: "#/lottery"
      },
      {
        text: this.now_lang.index.User_center,
        isover: false,
        link: "#/usercenter"
      },
      {
        text: this.now_lang.index.Discount,
        isover: false,
        link: "#/usercenter/discount"
      },
      {
        text: this.now_lang.index.Notice,
        isover: false,
        link: "#/usercenter/webnote"
      },
      {
        text: this.now_lang.index.Lot_info,
        isover: false,
        link: "#/usercenter/proinfo"
      },
      {
        text: this.now_lang.index.Pho_bet,
        isover: false,
        link: "#/phone",
      },
    ];
      public lineinfo = {
          width:'',
          left:'',
      }
      public langdata = {
          show: false,
          data:['中文','English','한국어',],
          curlang:'中文',
      }
    
  constructor(private httpClient: HttpClient, private router: Router,private el: ElementRef) {}
	ngOnInit(){
		this.now_lang=userModel.langpackage;
        this.now_lang_type=userModel.now_lang_type;
        setTimeout(() => {
            let n = this.pathdata.indexOf(this.curpath);
            this.navclick(n)
        }, 100);
	}
    ngAfterViewInit() {
        // 路由地址改变后的事件
        this.router.events
        .filter(event => event instanceof NavigationEnd)
        .subscribe((event: NavigationEnd) => {
            window.scrollTo(0,0);
        });
        
    }
    ngOnChanges(): void {
        console.log(this.curpath);
        setTimeout(() => {
            let n = this.pathdata.indexOf(this.curpath);
            this.navclick(n)
        }, 100);
    }
    ngOnDestroy() {
    }
    
  navclick(i){
    const ele = this.el.nativeElement.querySelectorAll("#nav li");
    let o = {
        width:$(ele[i]).width() + 'px',
        left:ele[i].offsetLeft + 'px',
    };
    this.lineinfo = Object.assign({},o);
  }

  langclick(i){
    this.langdata.curlang = this.langdata.data[i];
  }

  close(){
      this.regis=false;
      this.login=false;
  }

}
