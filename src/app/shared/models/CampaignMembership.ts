export interface CampaignMembership {
  id: string;
  campaignId: string;
  userId: string;
  role: 'DM' | 'PLAYER';
}