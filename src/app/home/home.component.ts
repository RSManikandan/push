import { Component, OnInit } from '@angular/core';
import  jsonData from 'menu.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public _restaraunts:any;
  constructor() { 
    this._restaraunts=jsonData.restaraunt;
  }
  ngOnInit(): void {
  }

}
