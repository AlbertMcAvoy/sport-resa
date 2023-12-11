import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateComponent } from './private.component';
import {HttpClientModule} from "@angular/common/http";

describe('PrivateComponent', () => {
  let component: PrivateComponent;
  let fixture: ComponentFixture<PrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PrivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
