import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {

  constructor(
    public router: Router
  ) {}

  connection($event: FormGroup) {
    console.log($event);
  }
}
