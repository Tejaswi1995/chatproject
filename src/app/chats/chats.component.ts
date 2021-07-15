import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataToolService } from '../data-tool.service';
import { DataService } from '../data.service';
import { Sender } from './sender';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  chats$: Observable<Sender[]>;
  constructor(
    private dataService: DataService,
    private toolService: DataToolService
  ) {}

  ngOnInit() {
    this.chats$ =this.toolService.getSenderData();
  }
}
