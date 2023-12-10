import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import {RouterTestingModule} from "@angular/router/testing";
import {Gym} from "../../../domain/Gym";

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ DetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    component.gym = getGym();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  let getGym = () => {
    let gym = new Gym();
    gym.id = 1;
    gym.name = 'Bascic Fit';
    gym.city = 'Valence';
    gym.opening = '6:00';
    gym.closing = '22:00';
    gym.zipCode = '26000';
    return gym;
  };
});
