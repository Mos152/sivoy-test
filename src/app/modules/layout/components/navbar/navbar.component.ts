import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@core/services/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
    //this.navigateHome()
  }

  navigateHome() {
    this.router.navigate(['/layout-page/home-module']);
  }

  navigateCreate() {
    this.router.navigate(['/layout-page/create-module']);
  }

  navigateNotifications() {
    this.router.navigate(['/layout-page/notifications-module']);
  }

  navigateUser() {
    this.router.navigate(['/layout-page/user-module']);
  }
  navigateExclusive() {
    this.router.navigate(['/layout-page/exclusive-module']);
  }


}
