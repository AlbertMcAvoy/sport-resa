import {Component, Input} from '@angular/core';
import {Gym} from "../../../domain/Gym";

@Component({
  selector: 'app-gym-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  @Input() gym: Gym;
}
