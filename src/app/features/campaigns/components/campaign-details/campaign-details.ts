import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDivider } from '@angular/material/divider';

import { CampaignService } from '../../campaigns.service';
import { Campaign } from '../../../../shared/models/Campaign';


@Component({
  selector: 'app-campaign-details',
  imports: [AsyncPipe, MatDivider],
  templateUrl: './campaign-details.html',
  styleUrl: './campaign-details.scss',
})
export class CampaignDetailsComponent implements OnInit {

 campaign$!: Observable<Campaign>;

  constructor(private campaignService: CampaignService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const campaignId = this.route.snapshot.paramMap.get('id')!;
    this.campaign$ = this.campaignService.getCampaignById(campaignId);
  }
}
