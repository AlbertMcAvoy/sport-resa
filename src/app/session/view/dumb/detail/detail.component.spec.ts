import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import {Session} from "../../../domain/Session";

let getSession = () => {
  let session = new Session();
  session.id = 1;
  session.id_gym = 1;
  session.startDate = '23/08/2025';
  session.endDate = '24/08/2025';
  session.limit = 5;
  session.id_theme= 1;

  return session;
}

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    component.session = getSession();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
