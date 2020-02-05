import { NavItemComponent } from './../nav-item/nav-item.component';
import { Component, OnInit, ContentChildren, QueryList, Input } from '@angular/core';


enum NavPosition{
  "top",
  "left",
}


@Component({
  selector: 'gs-nav',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {


@Input()  private orientation:NavPosition=NavPosition.top;
  
@Input() private title:String;


  @ContentChildren(NavItemComponent) navItems:QueryList <NavItemComponent>;





  constructor() { }

  ngOnInit() {
  }

}
