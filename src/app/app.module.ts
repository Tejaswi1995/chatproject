import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChatsComponent } from './chats/chats.component';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartDetailComponent } from './chats/chart-detail/chart-detail.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule } from '@angular/router';
import { DataToolService } from './data-tool.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: 'chat', component: ChatsComponent },{ path: '', redirectTo:'chat' ,pathMatch:'full' },
    { path: 'chat/:id', component: ChartDetailComponent }
  ]),
  ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ChatsComponent,
    ChartDetailComponent
  ],
  bootstrap: [AppComponent],
  providers: [DataService, DataToolService]
})
export class AppModule {}
