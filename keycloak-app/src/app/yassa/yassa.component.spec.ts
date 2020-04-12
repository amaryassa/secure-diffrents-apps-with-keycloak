import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YassaComponent } from './yassa.component';

describe('YassaComponent', () => {
  let component: YassaComponent;
  let fixture: ComponentFixture<YassaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YassaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YassaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
