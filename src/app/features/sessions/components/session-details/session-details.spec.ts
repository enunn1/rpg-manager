import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDetailsComponent } from './session-details';

describe('SessionDetails', () => {
  let component: SessionDetailsComponent;
  let fixture: ComponentFixture<SessionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
