import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../component/components.module";
/***********components***************/
import { LotteryComponent } from './lottery.component';

const routes:Routes = [
  {
    path: "",
    component: LotteryComponent,
  },
];

@NgModule({
  imports: [
    SharkModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ComponentsModule
  ],
  declarations: [
      LotteryComponent,
    ],
  providers:[],
})
export class LotteryModule {}
