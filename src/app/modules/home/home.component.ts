import { Component, OnInit } from '@angular/core';
import { SideNavComponent } from "../side-nav/side-nav.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import { TodayComponent } from "../today/today.component";
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from "../add-task/add-task.component";
import { InboxComponent } from "../inbox/inbox.component";
import { CompletedComponent } from "../completed/completed.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [SideNavComponent, MatSidenavModule, TodayComponent, CommonModule, AddTaskComponent, InboxComponent, CompletedComponent]
})
export class HomeComponent implements OnInit{
  openSidenav: boolean = true;
  todayPage: boolean = true;
  addTaskPage: boolean = false;
  inboxPage: boolean = false;
  completedPage: boolean = false;

  ngOnInit(): void {
  }

  openTodayPage(){
    this.todayPage = true;
    console.log('teste');
  }
}
