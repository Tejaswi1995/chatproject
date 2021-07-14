import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataToolService } from '../../data-tool.service';
import { DataService } from '../../data.service';
import { Sender } from '../sender';
import { Receiver } from './receiver';

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrls: ['./chart-detail.component.css']
})
export class ChartDetailComponent implements OnInit {
  id: string;
  chat: Sender = {
    id: '',
    sender: {
      name: '',
      profileImage: ''
    },
    content: '',
    read: null,
    date: null,
    receiver: {
      msg: {
        content: '',
        date: null
      }
    }
  };
  chatReciever: any;
  recieverChat: Receiver = {
    id: '',
    content: '',
    date: new Date()
  };
  msgForm = new FormGroup({
    inputMsg: new FormControl('')
  });
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private toolService: DataToolService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.dataService.getDataById(this.id).subscribe(data => {
        this.chat = data[0];
      });
      this.chatReciever = this.toolService.getReceiverData();
      this.toolService.SetReceiverData
    });
  }
  back() {
    this.route.navigate(['/chat']);
  }
  saveMsg() {
    this.recieverChat = {
      id: this.id,
      content: this.msgForm.value.inputMsg,
      date: new Date()
    };
    this.toolService.SetReceiverData(this.recieverChat);
    this.chatReciever = this.toolService.getReceiverData();
  }
}
