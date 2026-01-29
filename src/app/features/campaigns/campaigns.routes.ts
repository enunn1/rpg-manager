import { Routes } from '@angular/router';
import { CampaignDetailsComponent } from './components/campaign-details/campaign-details';

export const CAMPAIGNS_ROUTES: Routes = [
  {
    path: ':id',
    component: CampaignDetailsComponent
  }
];
