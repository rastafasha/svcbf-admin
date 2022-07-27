import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

//declare function Init_Custom_Js_Plugin();
declare function init_plugins();

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styles: []
})
export class NopagefoundComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor(private location: Location) { }

  ngOnInit() {
    init_plugins();
    //Init_Custom_Js_Plugin();
  }
  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
