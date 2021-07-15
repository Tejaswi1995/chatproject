import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Sender } from './charts/sender';

@Injectable()
export class DataService {
  chats$: Observable<Sender>;
  receiverMsg: String;
  url =
    'https://raw.githubusercontent.com/NablaT/test-api/master/assets/messages.json.txt';
  constructor(private http: HttpClient) {}

  getData(): Observable<Sender> {
    return this.http.get<Sender>(this.url);
  }
}
