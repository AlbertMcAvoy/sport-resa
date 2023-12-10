import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymComponent } from './gym.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('GymComponent', () => {
  let component: GymComponent;
  let fixture: ComponentFixture<GymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ GymComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
