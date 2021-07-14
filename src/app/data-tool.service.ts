import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Receiver } from './chats/chart-detail/receiver';
import { Sender } from './chats/sender';
import { DataService } from './data.service';

@Injectable()
export class DataToolService implements OnInit {
  chatSender$: Observable<Sender>;
  chatReceiver: Receiver[] = [];
  constructor(private service: DataService) {}
  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      localStorage.setItem('sender-chat', JSON.stringify(data));
    });
  }

  SetReceiverData(chat: Receiver) {
    console.log(chat);
    let localData = this.getReceiverData();
    if (localData) {
      this.chatReceiver = localData;
      console.log(chat);
      this.chatReceiver.push(chat);
      localStorage.setItem('reciver-chat', JSON.stringify(this.chatReceiver));
    } else {
      this.chatReceiver.push(chat);
      localStorage.setItem('reciver-chat', JSON.stringify(this.chatReceiver));
    }
  }
  getReceiverData() {
    return JSON.parse(localStorage.getItem('reciver-chat'));
  }
  getSenderData() {
    return JSON.parse(localStorage.getItem('sender-chat'));
  }
}
