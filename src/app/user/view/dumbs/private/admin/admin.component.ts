import { Component, Input } from '@angular/core';
import { User } from 'src/app/user/domain/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  @Input() userLogged: User;
}
