import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../campaigns.service';
import { Campaign } from '../../../../shared/models/Campaign';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-campaign-list',
  imports: [MatTableModule, AsyncPipe],
  templateUrl: './campaign-list.html',
  styleUrl: './campaign-list.scss',
})
export class CampaignListComponent implements OnInit {

  displayedColumns = ['name', 'description', 'role'];
  campaigns$!: Observable<Campaign[]>
  campaignsData = new MatTableDataSource<Campaign>();

  constructor(private campaignService: CampaignService) {}

  ngOnInit(): void {
    this.campaigns$ = this.campaignService.campaigns$;

    this.campaigns$.subscribe(campaigns => {
      this.campaignsData.data = campaigns;
    });

    this.campaignService.loadMyCampaigns();
  }
}
