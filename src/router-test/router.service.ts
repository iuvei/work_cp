import { Injectable } from "@angular/core";
import {
  Resolve,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  NavigationStart
} from "@angular/router";
import { RouterModule, Routes, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import userModel from "../status/user.model";
import { Base } from "../factory/base.model";
import { Api } from "../factory/api.model";

import { setCookie, getCookie, delCookie } from "../factory/utils";
import languagepackage from "../status/language";

import Sstore from "../factory/Sstore";

// 路由数据引入
import { routedata } from './routedata';


@Injectable()



export class RouteguardService implements CanActivate{
	setrout(){
	
	};
	constructor(private router: Router, private httpClient : HttpClient) { }
	private isLoaded = false;
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>{

		return new Promise(resolve => {
			let that = this;
			if (this.isLoaded) {
			  resolve(true);
			  return;
			}
			//语言检测
			let lang_config = userModel.lang_config;
			let now_lang = {}
			function  check_language(){
		      //   console.log(getCookie('now_lot_lang'))
		        if (getCookie('now_lot_lang')==null) {
		            setCookie('now_lot_lang',lang_config.default_lan,1)
		            let now_lot_lang = getCookie('now_lot_lang');
		            load_langpackge(now_lot_lang)
		        }else{
		            //这里手动改变语言后不做任何操作,但是同样调用引用语言包函数;
		            let now_lot_lang = getCookie('now_lot_lang');
		            load_langpackge(now_lot_lang)
		        }
		    }
		    function load_langpackge(lang){
		        now_lang = languagepackage[lang];
		        Sstore['langpackage'] = now_lang;
		        console.log(Sstore['langpackage'])
		    }
			check_language();
			

			if(!Base.Store.get('isTemplet')){
				// 根据域名配置不通路由模块
				this.httpClient.get(Api.gettemple)
				.subscribe(menuGroups => {

					let d = routedata.item1;
					const test1:Routes =[
						d[0],
						d[1],
						d[2],
						d[3],
						d[4],
						d[5],
					];

					this.router.resetConfig(test1);
					// this.router.resetConfig(routedata.item1);
					this.isLoaded = true;
					resolve(true);
					this.router.navigateByUrl(userModel.currenturl);
					Base.Store.set('isTemplet','1',false)
					userModel.platform = true
				});
			}else{
				// 这里接口写好后会换成接口的返回字段，肯定不能用缓存来判断 Base.Store.get('isTemplet')
				if(Base.Store.get('isTemplet')=='1'){


					this.router.resetConfig(routedata.item2);
					this.isLoaded = true;
					resolve(true);
					this.router.navigateByUrl(userModel.currenturl);
				}else if(Base.Store.get('isTemplet')=='2'){



					this.router.resetConfig(routedata.item3);
					this.isLoaded = true;
					resolve(true);
					this.router.navigateByUrl(userModel.currenturl);
				}else{


					this.router.resetConfig(routedata.item4);
					this.isLoaded = true;
					resolve(true);
					this.router.navigateByUrl(userModel.currenturl);
				}
				
				
				userModel.platform = true
				
				// 返回值 true: 跳转到当前路由 false: 不跳转到当前路由
				// 当前路由名称
				var path = route.routeConfig.path;  
				// nextRoute: 设置需要路由守卫的路由集合
				const nextRoute = ['login'];
				let isLogin = userModel.isLogin;  // 是否登录
				// 当前路由是nextRoute指定页时
				if (nextRoute.indexOf(path) >= 0) {
					if (!isLogin) {
						// 未登录，跳转到login
						this.router.navigate(['login']);
						resolve(false);
					}else{
						// 已登录，跳转到当前路由
						resolve(true);
					}
				}
				// 当前路由是login时 
				if (path === 'login') {
					if (!isLogin) {
						// 未登录，跳转到当前路由
						return true;
					}else{
						// 已登录，跳转到home
						this.router.navigate(['home']);
						resolve(false);
					}
				}else{
					resolve(true);
				}
			}
		})
	}
}