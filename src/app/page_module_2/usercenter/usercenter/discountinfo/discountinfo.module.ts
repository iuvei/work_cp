import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharkModule } from '@ntesmail/shark-angular2';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../component/components.module';
import { DiscountinfoComponent } from './discountinfo.component';

/***********components***************/

const routes = [
    { path: '', component: DiscountinfoComponent},
];

@NgModule({
    imports: [
        SharkModule,FormsModule,CommonModule,ComponentsModule, RouterModule.forChild(routes)
    ],
    declarations: [ DiscountinfoComponent ]
})
export class DiscountinfoModule { }
