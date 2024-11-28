// CallModel.ts

export interface CallModel {
    id: number;
    name: string;
    time: string;
    status: 'active' | 'completed' | 'missed' | 'outgoing' | 'incoming';
    isVideoCall: boolean;
    callCount: number;
    image: string;
  }
  