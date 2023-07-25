import {Component} from '@angular/core';
import {LocalStorageService} from "../../application/local-storage.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isLoggedIn = false;

  constructor(
    private localStorageService: LocalStorageService
  ) {
    localStorageService.tokenValue.subscribe((nextValue) => {
      this.isLoggedIn = nextValue !== "undefined";
    })
  }

  logOut() {
    this.localStorageService.token = "undefined";
  }
}
