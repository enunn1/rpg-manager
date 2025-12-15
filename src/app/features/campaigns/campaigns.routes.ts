import { Routes } from '@angular/router';
import { CampaignListComponent } from './components/campaign-list/campaign-list';
import { CampaignDetailsComponent } from './components/campaign-details/campaign-details';

export const CAMPAIGNS_ROUTES: Routes = [
  {
    path: '',
    component: CampaignListComponent
  },
  {
    path: ':id',
    component: CampaignDetailsComponent
  }
];
