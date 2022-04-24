import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersigninComponent } from './ownersignin.component';

describe('OwnersigninComponent', () => {
  let component: OwnersigninComponent;
  let fixture: ComponentFixture<OwnersigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnersigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
