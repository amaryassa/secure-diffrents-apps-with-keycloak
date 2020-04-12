import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmarComponent } from './amar.component';

describe('AmarComponent', () => {
  let component: AmarComponent;
  let fixture: ComponentFixture<AmarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
