

export interface StatusModel{
    statusid: number;
    username: string;
    imageUrls: string[];
    time: string;
    statusType: 'VIWED' | 'RESENT' | 'MUTED';

  }
