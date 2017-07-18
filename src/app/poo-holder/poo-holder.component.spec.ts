import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PooHolderComponent } from './poo-holder.component';

describe('PooHolderComponent', () => {
  let component: PooHolderComponent;
  let fixture: ComponentFixture<PooHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PooHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PooHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
