import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../component/components.module';
/***********components***************/
import { ResultComponent } from './result.component';
import { CanvasComponent } from './components/canvas/canvas.component';

const routes = [
    { path: '', component: ResultComponent },
];

@NgModule({
    imports: [
         RouterModule.forChild(routes),
         FormsModule,
         CommonModule,
         ComponentsModule
    ],
    declarations: [
        ResultComponent,
        CanvasComponent,
    ],
    
})
export class ResultModule { }
