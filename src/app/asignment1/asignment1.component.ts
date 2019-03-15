import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-asignment1',
  templateUrl: './asignment1.component.html',
  styleUrls: ['./asignment1.component.css']
})
export class Asignment1Component implements OnInit {
  username = '';
  disabled = true;

  clearUsername() {
    this.username = '';
  }

  setUsername() {
    this.disabled = (this.username == '') ? true : false;

    return this.disabled;
  }

  constructor() { }

  ngOnInit() {
  }

}
