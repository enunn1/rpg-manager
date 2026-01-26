import { Component } from '@angular/core';
import { CampaignListComponent } from "../../../campaigns/components/campaign-list/campaign-list";
import { CharacterListComponent } from '../../../characters/components/character-list/character-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { CreateCampaignDialog } from '../../../campaigns/components/create-campaign-dialog/create-campaign-dialog';
import { CampaignService } from '../../../campaigns/campaigns.service';

@Component({
  selector: 'app-dashboard',
  imports: [CampaignListComponent, CharacterListComponent, MatButtonModule, MatCardModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent {

  constructor(private dialog: MatDialog, private campaignService: CampaignService) {}

  openCreateCampaign() {
    const ref = this.dialog.open(CreateCampaignDialog, {width: '40%'})

    ref.afterClosed().subscribe(result => {
      if (result) {
        this.campaignService.loadMyCampaigns();
      }
    });
  }

}
