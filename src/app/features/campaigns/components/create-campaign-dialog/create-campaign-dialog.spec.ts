import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampaignDialog } from './create-campaign-dialog';

describe('CreateCampaignDialog', () => {
  let component: CreateCampaignDialog;
  let fixture: ComponentFixture<CreateCampaignDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCampaignDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCampaignDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
