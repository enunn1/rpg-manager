import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";
import { CampaignService } from '../../campaigns.service';
import { MatInput } from "@angular/material/input";

@Component({
  selector: 'app-create-campaign-dialog',
  imports: [MatButtonModule, MatDialogModule, MatFormFieldModule, FormsModule, MatInput],
  templateUrl: './create-campaign-dialog.html',
  styleUrl: './create-campaign-dialog.scss',
})
export class CreateCampaignDialog {

  name = '';
  description = '';

  constructor(
    readonly dialogRef: MatDialogRef<CreateCampaignDialog>,
    private campaignService: CampaignService
  ) {}

  submit() {
    this.campaignService.createCampaign(this.name, this.description).subscribe(campaign => {
        this.dialogRef.close(campaign);
    });
  }
}
