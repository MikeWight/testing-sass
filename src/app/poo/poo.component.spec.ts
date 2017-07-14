import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PooComponent } from './poo.component';

describe('PooComponent', () => {
  let component: PooComponent;
  let fixture: ComponentFixture<PooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
