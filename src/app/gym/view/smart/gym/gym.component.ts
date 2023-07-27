import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Gym} from "../../../domain/Gym";

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.scss']
})
export class GymComponent implements OnInit {

  gyms: Gym[];

  gym: Gym;

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({gyms, gym}) => {
      this.gyms = gyms;
      this.gym = gym;
    })
  }
}
