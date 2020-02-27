import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  app_name:string;
  constructor() {



    this.app_name=environment['app_name'];
  }
  ngOnInit() {

  }

}
