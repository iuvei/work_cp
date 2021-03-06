import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharkModule } from "@ntesmail/shark-angular2";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
/***********components***************/
import { ComponentsModule } from "../../component/components.module";
import { EXFofficialComponent } from './exf.component';

const routes = [
    { 
		path:':id',component: EXFofficialComponent
	},
	{
		path: "",
		redirectTo: 'tx'
	}
];

@NgModule({
    imports: [
        SharkModule,
		RouterModule.forChild(routes),
		CommonModule,
		FormsModule,
		ComponentsModule
    ],
    declarations: [EXFofficialComponent]
})
export class EXFofficialModule {
	
}
