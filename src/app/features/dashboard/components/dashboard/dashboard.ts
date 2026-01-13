import { Component } from '@angular/core';
import { CampaignListComponent } from "../../../campaigns/components/campaign-list/campaign-list";
import { CharacterListComponent } from '../../../characters/components/character-list/character-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  imports: [CampaignListComponent, CharacterListComponent, MatButtonModule, MatCardModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent {

  constructor() {}

}
