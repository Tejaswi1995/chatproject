import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Sender } from './charts/sender';


@Injectable()
export class DataService implements OnInit {
  chats$: Observable<Sender>;
  receiverMsg: String;
  url =
    'https://raw.githubusercontent.com/NablaT/test-api/master/assets/messages.json.txt';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {

  }
  getData(): Observable<Sender> {
    return this.http.get<Sender>(this.url);
  }
  getDataById(id: string) {
return this.http
      .get<Sender>(this.url)
      .pipe(map(data => data.filter(chat => chat.id === id)));
  }
}
