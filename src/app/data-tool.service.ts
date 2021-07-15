import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Receiver } from './chats/chart-detail/receiver';
import { Sender } from './chats/sender';
import { DataService } from './data.service';
import { of } from 'rxjs';

@Injectable()
export class DataToolService {
  chatSender$: Observable<Sender>;
  chatReceiver: Receiver[] = [];
  constructor(private service: DataService) {}

  setSenderData() {
    this.service.getData().subscribe(data => {
      localStorage.setItem('sender-chat', JSON.stringify(data));
    });
  }
  getSenderData() {
    let sample = JSON.parse(localStorage.getItem('sender-chat'));
    return of(sample);
  }
  getSenderDataById(id: string) {
    let sample = JSON.parse(localStorage.getItem('sender-chat'));
   // this.setRecieverReadStatus(id);
    return of(sample).pipe(map(data => data?.filter(chat => chat.id === id)));

  }
  SetReceiverData(chat: Receiver) {

    let localData = JSON.parse(localStorage.getItem('receiver-chat'));
    if (localData) {
      this.chatReceiver = localData;
      this.chatReceiver.push(chat);
      localStorage.setItem('receiver-chat', JSON.stringify(this.chatReceiver));
    } else {
      this.chatReceiver.push(chat);
      localStorage.setItem('receiver-chat', JSON.stringify(this.chatReceiver));
    }
    
  }
  getReceiverData() {
    let sample = JSON.parse(localStorage.getItem('receiver-chat'));
    return of(sample);
  }
  getReceiverDataById(id: string) {
    let sample = JSON.parse(localStorage.getItem('receiver-chat'));
    return of(sample).pipe(map(data => data?.filter(chat => chat.id === id)));
  }
  /*setRecieverReadStatus(id:string){
    let sample = JSON.parse(localStorage.getItem('sender-chat'));
    console.log("changing");
    console.log(sample);
    console.log( sample.filter(data=>data.id == id));

  }*/
}
