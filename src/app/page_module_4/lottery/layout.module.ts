import { NgModule } from "@angular/core";
import { SharkModule } from "@ntesmail/shark-angular2";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../component/components.module";
/***********components***************/
import { LayoutComponent } from "./layout.component";
import { RuleComponent } from './components/rule/rule.component';

const routes:Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
        {
            path: "",
            redirectTo: 'officialssc',
            pathMatch: 'full',
        },
        {
            path: "officialssc",
            loadChildren: '../official/ssc/ssc.module#SSCofficialModule',
          },
        {
            path: "officialffc",
            loadChildren: '../official/ffc/ffc.module#FFCofficialModule',
          },
          {
            path: 'creditssc',
            loadChildren: '../credit/ssc/ssc.module#SSCcreditModule',
        },  
          {
            path: 'creditffc',
            loadChildren: '../credit/ffc/ffc.module#FFCcreditModule',
        },  
          {
            path: 'creditpk10',
            loadChildren: '../credit/pk10/pk10.module#Pk10creditModule',
        },  
          {
            path: 'creditexf',
            loadChildren: '../credit/exf/exf.module#ExfcreditModule',
        },  
        {
            path: 'creditklc',
            loadChildren: '../credit/klc/klc.module#KlccreditModule',
        },  
        {
            path: 'creditkl',
            loadChildren: '../credit/gxk10/gxk10.module#Gxk10creditModule',
        },  
          {
            path: 'creditdpc',
            loadChildren: '../credit/dpc/dpc.module#DpccreditModule',
        },  
          {
            path: 'creditk3',
            loadChildren: '../credit/k3/k3.module#K3creditModule',
        },  
          {
            path: 'creditpcdd',
            loadChildren: '../credit/pcdd/pcdd.module#PcddcreditModule',
        },  
          {
            path: 'vrc',
            loadChildren: '../credit/vrc/vrc.module#VRCcreditModule',
        },  
        {
            path: "officialpk10",
            loadChildren: '../official/scc/scc.module#SCCofficialModule',
          },  
        {
            path: "officialklc",
            loadChildren: '../official/klc/klc.module#KLCofficialModule',
          },
        {
            path: "officialdpc",
            loadChildren: '../official/dpc/dpc.module#DPCofficialModule',
          },
        {
            path: "officialexf",
            loadChildren: '../official/exf/exf.module#EXFofficialModule',
          },
        {
            path: "officialk3",
            loadChildren: '../official/k3/k3.module#K3officialModule',
          }
    ],
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
      LayoutComponent,
      RuleComponent,
    ],
  providers:[],
})
export class LayoutModule {}
