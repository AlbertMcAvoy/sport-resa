import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../../application/authentication.service";
import {LocalStorageService} from "../../../../shared/application/local-storage.service";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {

  errorMessage: string;

  constructor(
    public router: Router,
    private auth: AuthenticationService,
    private localStorageService: LocalStorageService
  ) {
    this.errorMessage = "";
  }

  connection($event: FormGroup) {
    this.auth.login($event.value.email, $event.value.password)
      .subscribe({
        next: (data: any) => {
          this.localStorageService.token = data.token;
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err.body.msg;
        }
      });
  }
}
