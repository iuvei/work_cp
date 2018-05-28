import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { SharkModule } from '@ntesmail/shark-angular2';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
/***********components***************/
import { LanguageComponent } from '../component/language/language.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { GoucaiqueryComponent } from './goucaiquery/goucaiquery.component'
import { ZhuihaoqueryComponent } from './zhuihaoquery/zhuihaoquery.component'



@NgModule({
    imports: [
        SharkModule, CommonModule,FormsModule
    ],
    declarations: [LanguageComponent,HeaderComponent,FooterComponent,GoucaiqueryComponent,ZhuihaoqueryComponent],
    exports: [LanguageComponent,HeaderComponent,FooterComponent,GoucaiqueryComponent,ZhuihaoqueryComponent ],
})
export class ComponentsModule { }
