import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {


  openMyProfile(){
    return 'implement the function'
  }

  addTask(){
    return 'implement the function'
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
