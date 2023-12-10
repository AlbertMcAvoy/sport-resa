import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicComponent } from './public.component';
import {HttpClient} from "@angular/common/http";

describe('PublicComponent', () => {
  let component: PublicComponent;
  let fixture: ComponentFixture<PublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClient],
      declarations: [ PublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
