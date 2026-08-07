import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";
import { CampaignService } from '../../campaigns.service';
import { MatInput } from "@angular/material/input";

@Component({
  selector: 'app-join-campaign-dialog',
  imports: [MatButtonModule, MatDialogModule, MatFormFieldModule, FormsModule, MatInput],
  templateUrl: './join-campaign-dialog.html',
  styleUrl: './join-campaign-dialog.scss',
})
export class JoinCampaignDialog {

  code = signal('');
  isJoining = signal(false);
  joinError = signal('');

  constructor(
    readonly dialogRef: MatDialogRef<JoinCampaignDialog>,
    private campaignService: CampaignService
  ) {}

  submit() {
    if (!this.code().trim() || this.isJoining()) {
      return;
    }

    this.isJoining.set(true);
    this.joinError.set('');

    this.campaignService.joinCampaign(this.code()).subscribe({
      next: campaign => {
        this.dialogRef.close(campaign);
      },
      error: error => {
        console.error('Failed to join campaign', error);
        this.joinError.set(error?.error.message);
        this.isJoining.set(false);
      },
    });
  }
}
