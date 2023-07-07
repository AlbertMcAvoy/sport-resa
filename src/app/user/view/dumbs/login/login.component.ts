import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output() submitForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  public userForm: FormGroup; // variable is created of type FormGroup is created

  constructor(
    private fb: FormBuilder,
  ) {
    this.userForm = this.fb.group({
      email : new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  submit() {
    this.submitForm.emit(this.userForm);
  }
}
