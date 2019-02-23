import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RantDetailsComponent } from './rant-details.component';

describe('RantDetailsComponent', () => {
  let component: RantDetailsComponent;
  let fixture: ComponentFixture<RantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
