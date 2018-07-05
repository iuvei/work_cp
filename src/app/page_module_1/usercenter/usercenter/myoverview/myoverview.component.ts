import { Component, OnInit } from '@angular/core';
import { MYREPORT, userdef } from "../../../../../factory/usercent";
import userModel from '../../../../../status/user.model';
@Component({
  selector: 'app-myoverview',
  templateUrl: './myoverview.component.html',
  styleUrls: ['./myoverview.component.scss']
})
export class MyoverviewComponent implements OnInit {
  public now_lang :any=userModel.langpackage;
  public now_lang_type :any='zh';
  public querydata = {
    starttime: "",
    endtime: "",
  };
  constructor() {}
  ngOnInit() {
  }

}
