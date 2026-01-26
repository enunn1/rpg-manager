import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Campaign } from "../../shared/models/Campaign";
import { BehaviorSubject, tap } from "rxjs";

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
}