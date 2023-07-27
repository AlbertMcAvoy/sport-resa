import { Component, Input } from '@angular/core';
import { User } from 'src/app/user/domain/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() userLogged: User;
}
