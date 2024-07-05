import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule, MatMenuPanel} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  myProfilefontIcon:string = ''
  openMenuMyProfile:boolean = false;
  menu = true;

  constructor(){
  }

  addTask(){
    return 'implement the function'
  }

  openMyProfile(){
    this.openMenuMyProfile = !this.openMenuMyProfile;
  }

  openInbox(){
    return 'implement the function'
  }

  openToday(){
    return 'implement the function'
  }

  openCompleted(){
    return 'implement the function'
  }
}
