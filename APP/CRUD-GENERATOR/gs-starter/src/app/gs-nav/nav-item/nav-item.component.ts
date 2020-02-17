import { Component, OnInit, ContentChildren, QueryList, Input } from '@angular/core';

@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }



  sidenav_close(){
    let body = document.getElementsByTagName('body')[0];
      body.classList.remove('nav-open');
    }




  ngAfterViewInit() {

  }

  @Input() label;

  @Input() target=null;


  @Input() icon="ti-blackboard"


  @ContentChildren(NavItemComponent) childrenItems:QueryList<NavItemComponent>;
}
