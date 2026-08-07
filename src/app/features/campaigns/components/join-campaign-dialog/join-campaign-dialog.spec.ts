import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCampaignDialog } from './join-campaign-dialog';

describe('JoinCampaignDialog', () => {
  let component: JoinCampaignDialog;
  let fixture: ComponentFixture<JoinCampaignDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinCampaignDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinCampaignDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
