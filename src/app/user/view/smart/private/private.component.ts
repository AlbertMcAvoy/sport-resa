import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/application/local-storage.service';
import { UserService } from 'src/app/user/application/user.service';
import { User } from 'src/app/user/domain/User';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent {

  userLogged: User;

  constructor(
    private userService: UserService,
    private localService: LocalStorageService
  ) {
    const token = localService.token || -1;
    userService.getUser(token)?.subscribe((user) => this.userLogged = user);
  }

}
