import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  myProfilefontIcon: string = '';
  openMenuMyProfile: boolean = false;
  menu = true;

  addTask() {
    console.log('teste');
    return 'implement the function';
  }

  openMyProfile() {
    this.openMenuMyProfile = !this.openMenuMyProfile;
  }

  openInbox() {
    return 'implement the function';
  }

  openToday() {
    return 'implement the function';
  }

  openCompleted() {
    return 'implement the function';
  }
}
