import { Component, OnInit } from '@angular/core';
import { DataToolService } from './data-tool.service';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: DataToolService) {}
  ngOnInit(): void {
    console.log("setting data into local storage")
    this.service.setSenderData();
  }
}
