import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateComponent } from './private.component';
import {HttpClientModule} from "@angular/common/http";
import {User} from "../../../domain/User";
import {CoachComponent} from "../../dumbs/private/coach/coach.component";

let getUser = () => {
  let user = new User();
  user.id = 1;
  user.name = 'Doe';
  user.firstname = 'Jhon';
  user.city = 'Valence';
  user.mail = 'jhon.doe@yahoo.com';
  user.password = '2yjdzeez1234@dssdf';
  user.isCoach = true;
  user.idGym = 1;
  user.role = 'USER';

  return user;
}

describe('PrivateComponent', () => {
  let component: PrivateComponent;
  let fixture: ComponentFixture<PrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        PrivateComponent,
        CoachComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateComponent);
    component = fixture.componentInstance;
    component.userLogged = getUser();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
