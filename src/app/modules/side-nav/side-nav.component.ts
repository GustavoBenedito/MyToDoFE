import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  myProfilefontIcon: string = '';
  openMenuMyProfile: boolean = false;
  menu = true;

  constructor(public homeComponent: HomeComponent) {}

  addTask() {
    return 'implement the function';
  }

  openMyProfile() {
    this.openMenuMyProfile = !this.openMenuMyProfile;
  }

  openInbox() {
    return 'implement the function';
  }

  openToday() {
    this.homeComponent.openTodayPage();
    return 'implement the function';
  }

  openCompleted() {
    return 'implement the function';
  }
}
