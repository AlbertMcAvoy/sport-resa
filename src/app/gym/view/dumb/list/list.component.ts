import {Component, Input} from '@angular/core';
import {Gym} from "../../../domain/Gym";

@Component({
  selector: 'app-gym-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() gyms: Gym[];
}
