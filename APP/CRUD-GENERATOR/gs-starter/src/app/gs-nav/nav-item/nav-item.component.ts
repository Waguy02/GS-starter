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

  ngAfterViewInit() {

  }

  @Input() label;

  @Input() target=null;



  @ContentChildren(NavItemComponent) childrenItems:QueryList<NavItemComponent>;
}
