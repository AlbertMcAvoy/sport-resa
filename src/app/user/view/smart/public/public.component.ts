import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../../application/authentication.service";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {

  errorMessage: string;

  constructor(
    public router: Router,
    private auth: AuthenticationService
  ) {
    this.errorMessage = "";
  }

  connection($event: FormGroup) {
    this.auth.login($event.value.email, $event.value.password)
      .subscribe({
        next: (data: any) => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err
        }
      });
  }
}
