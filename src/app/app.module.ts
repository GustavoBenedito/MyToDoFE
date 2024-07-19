import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayComponent } from './modules/today/today.component';
import { HomeComponent } from './modules/home/home.component';
import { AddTaskComponent } from './modules/add-task/add-task.component';
import { CompletedComponent } from './modules/completed/completed.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListBodyComponent } from './modules/task-list-body/task-list-body.component';
import { DetailViewComponent } from './modules/detail-view/detail-view.component';
import {MatListModule} from '@angular/material/list';
import { provideHttpClient, withFetch } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    HomeComponent,
    AddTaskComponent,
    CompletedComponent,
    InboxComponent,
    SidebarComponent,
    TaskListBodyComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

