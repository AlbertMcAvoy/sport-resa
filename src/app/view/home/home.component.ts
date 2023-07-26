import { Component, OnInit } from '@angular/core';
import { GymService } from "../../gym/application/gym.service";
import { Gym } from "../../gym/domain/gym";
import { LocalStorageService } from "../../shared/application/local-storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gymList: Gym[];
  isLoggedIn: boolean;

  constructor(
    private gymService: GymService,
    private localStorageService: LocalStorageService
  ) {
    localStorageService.tokenValue.subscribe((nextValue) => {
      this.isLoggedIn = nextValue !== -1;
    })
  }

  ngOnInit() {
    this.gymService.getGyms()
      .subscribe(gymList => this.gymList = gymList);
  }

  book() {
    alert("Vous allez réserver");
  }
}
