import { Component, Input } from '@angular/core';
import { User } from 'src/app/user/domain/User';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent {
  @Input() userLogged: User;
}
