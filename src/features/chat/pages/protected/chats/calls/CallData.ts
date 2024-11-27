// CallData.ts

import GroupIcon from '../../../../../../../public/images/GroupIcon.png';
import user1 from '../../../../../../../public/images/user1.png';
import { CallModel } from './CallModel'; // استيراد النموذج

export const callData: CallModel[] = [
    { id: 1, name: 'Group4', time: '10:30 AM', status: 'missed', isVideoCall: true, callCount: 3, image: GroupIcon },
  { id: 2, name: 'Hadeel', time: '09:00 AM', status: 'outgoing', isVideoCall: false, callCount: 2, image: user1 },
  { id: 3, name: 'Group1', time: 'Yesterday', status: 'missed', isVideoCall: true, callCount: 1, image: GroupIcon },
  { id: 4, name: 'Taiseer', time: '11:00 AM', status: 'incoming', isVideoCall: false, callCount: 5, image: user1 },
  { id: 5, name: 'Group2', time: '11:00 AM', status: 'outgoing', isVideoCall: false, callCount: 1, image: GroupIcon },
];
