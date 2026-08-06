import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Campaign } from "../../shared/models/Campaign";
import { BehaviorSubject, tap } from "rxjs";
import { CampaignInvite } from "../../shared/models/CampaignInvite";
import { CampaignMembership } from "../../shared/models/CampaignMembership";

@Injectable({ providedIn: 'root' })
export class CampaignService {
  private apiUrl = 'http://localhost:3000/campaigns';
  
  private campaignsSubject = new BehaviorSubject<Campaign[]>([]);
  campaigns$ = this.campaignsSubject.asObservable();

  constructor(private http: HttpClient) {}

  createCampaign(name: string, description?: string) {
    return this.http.post<Campaign>(this.apiUrl, { name, description }).pipe(
      tap(() => this.loadMyCampaigns())
    );
  }

  loadMyCampaigns() {
    return this.http.get<Campaign[]>(`${this.apiUrl}/user`)
    .subscribe(campaigns => this.campaignsSubject.next(campaigns));
  }

  getCampaignById(id: string) {
    return this.http.get<Campaign>(`${this.apiUrl}/${id}`);
  }

  createInvite(id: string) {
    return this.http.post<CampaignInvite>(`${this.apiUrl}/${id}/invites`, {});
  }

  joinCampaign(code: string) {
    return this.http
      .post<CampaignMembership>(`${this.apiUrl}/join`, {
        code: code.trim().toUpperCase(),
      })
      .pipe(
        tap(() => this.loadMyCampaigns())
      );
  }
}