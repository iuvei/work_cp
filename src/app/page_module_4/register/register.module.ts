import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharkModule } from '@ntesmail/shark-angular2';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../component/components.module';

/***********components***************/
import { RegisterComponent } from './register.component';
// import { ErrtipComponent } from '../component/errtip/errtip.component';

const routes = [
    { path: '', component: RegisterComponent},
];

@NgModule({
    imports: [
        SharkModule,FormsModule,CommonModule,ComponentsModule, RouterModule.forChild(routes)
    ],
    declarations: [RegisterComponent]
})
export class RegisterModule { }
