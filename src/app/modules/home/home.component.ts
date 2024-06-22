import { Component } from '@angular/core';
import { SideNavComponent } from "../side-nav/side-nav.component";
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [SideNavComponent, MatSidenavModule]
})
export class HomeComponent {

}
