import { Component, OnInit, signal } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest, map } from 'rxjs';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { CampaignService } from '../../campaigns.service';
import { Campaign } from '../../../../shared/models/Campaign';
import { AuthService } from '../../../../core/auth/auth.service';
import { CampaignInvite } from '../../../../shared/models/CampaignInvite';


@Component({
  selector: 'app-campaign-details',
  imports: [AsyncPipe, DatePipe, MatDividerModule, MatButtonModule, ClipboardModule],
  templateUrl: './campaign-details.html',
  styleUrl: './campaign-details.scss',
})
export class CampaignDetailsComponent implements OnInit {

  campaign$!: Observable<Campaign>;
  isDM$!: Observable<boolean>;
  campaignId = '';
  invite = signal<CampaignInvite | null>(null);
  inviteError = signal('');
  isCreatingInvite = signal(false);

  constructor(
    private campaignService: CampaignService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.campaignId = this.route.snapshot.paramMap.get('id')!;
    this.campaign$ = this.campaignService.getCampaignById(this.campaignId);

    this.isDM$ = combineLatest([this.campaign$, this.authService.user$]).pipe(
      map(([campaign, user]) =>
        !!user && campaign.members.some(member => member.user.id === user.id && member.role === 'DM')
      )
    );
  }

  createInvite(): void {
    if (!this.campaignId || this.isCreatingInvite()) {
      return;
    }
    
    this.isCreatingInvite.set(true);
    this.inviteError.set('');

    this.campaignService.createInvite(this.campaignId).subscribe({
      next: invite => {
        this.invite.set(invite);
        this.isCreatingInvite.set(false);
      },
      error: error => {
        console.error('Failed to create campaign invite', error);
         this.inviteError.set(
          error.error?.message ??
            'The invite code could not be created. Please try again.',
        );
        this.isCreatingInvite.set(false);
      },
    });
  }
}
