import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaliserComponent } from './localiser.component';

describe('LocaliserComponent', () => {
  let component: LocaliserComponent;
  let fixture: ComponentFixture<LocaliserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaliserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaliserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
