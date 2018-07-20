import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    // 传给弹窗组件数据
    public  popoutInfo={
        title:'string',
        message:'string',
        event:false,
        show: false,
        scale: false,
    }

    //====================传给分页组件数据 
    public pagination = {
        totalNum: 100,  //总数据条数 需从后台
        pageSize: 5, // 每页显示数量
        curPage: 1, //当前页
        segmentSize: 5, //最大显示页码标签数量
      };



	constructor() { 
	}
	ngOnInit(){
    }
    // 弹窗关闭事件 可以自定义命名
    closePopouot(e){
        let p = this.popoutInfo;
        p.show = false;
        p.scale = false;
        if(p.event){
            if(e ) {
                alert("您点击了确认按钮！")
            }else{
                alert("您点击了取消或关闭按钮！")
            }
        } 
        p.event = false;
    }

    // 弹窗显示事件 b可以不传值 为true时显示取消按钮
    POPNOTE(t,m,b=false){
        let p = this.popoutInfo;
        p.title = t;
        p.message= m;
        p.show = true;
        p.scale = false;
        p.event= b ? true : false;
        setTimeout(() => {
            p.scale = true;
        }, 10);
    }

    // 使用操作
    click1(){
        this.POPNOTE('操作提示','这是普通提示内容');
    }
    click2(){
        this.POPNOTE('操作提示','这是带取消按钮的提示内容',true);
    }


    // ===============分页组件事件
    getPageData(i) {
        this.pagination.curPage = i;
        //  此处请求当前页面数据
        console.log(this.pagination.curPage);
    }
	
};
