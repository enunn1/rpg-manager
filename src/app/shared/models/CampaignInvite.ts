export interface CampaignInvite {
  id: string;
  code: string;
  campaignId: string;
  createdById: string;
  createdAt: string;
  expiresAt: string;
  usedAt: string | null;
}