import { User } from "./User";

export interface Campaign {

    id: string;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
    createdByUserId: string;
    members: {
        id: string;
        role: 'DM' | 'PLAYER';
        user: User;
    }[];
    
}