import { Component, OnInit } from '@angular/core';
import { SideNavComponent } from "../side-nav/side-nav.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import { TodayComponent } from "../today/today.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [SideNavComponent, MatSidenavModule, TodayComponent, CommonModule]
})
export class HomeComponent implements OnInit{
  openSidenav: boolean = true;
  todayPage: boolean = true;
  
  ngOnInit(): void {
    this.todayPage = true;
  }
}
