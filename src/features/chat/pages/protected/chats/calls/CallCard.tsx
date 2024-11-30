// CallCard.tsx
import React from 'react';
import { CallMissed, CallMade, CallReceived } from '@mui/icons-material';
import { CallModel } from './CallModel'; // Import the type
import CircleImage from '../../../../Components/Ui/CircleImage';
import StatusBadge from '../../../../../../Components/ui/StatusBadge';
import TimeDisplay from '../../../../../../Components/ui/TimeDisplay';
import GenericCard from '../../../../../../Components/ui/GenericCard';
import { Call } from '@mui/icons-material';

interface CallCardProps {
  call: CallModel; // Define the type of 'call'
  onCallClick: () => void; // Callback to trigger the modal

}

const CallCard: React.FC<CallCardProps> = ({ call , onCallClick }) => {
  return (
    <GenericCard
      key={call.id}
      className="shadow-sm hover:shadow-md transition-all duration-200 p-2"
      leftComponent={<CircleImage size={12} imageUrl={call.image} />}
      centerComponent={
        <div>
          <p className="flex items-center font-medium text-lg">
            <StatusBadge
              content={
                call.status === 'missed' ? <CallMissed fontSize="small" /> :
                call.status === 'outgoing' ? <CallMade fontSize="small" /> :
                call.status === 'incoming' ? <CallReceived fontSize="small" /> : null
              }
              size={6}
              color="bg-transparent"
              textColor={
                call.status === 'missed' ? "text-red-500" :
                call.status === 'outgoing' ? "text-green-500" :
                call.status === 'incoming' ? "text-blue-500" : "text-gray-500"
              }
            />
            <span className={`ml-2 ${call.status === 'missed' ? 'text-red-500' : call.status === 'outgoing' ? 'text-green-500' : call.status === 'incoming' ? 'text-blue-500' : 'text-gray-500'}`}>
              {call.name}
            </span>
            {call.callCount > 1 && (
              <StatusBadge
                content={`(${call.callCount})`}
                color="bg-transparent"
                textColor={
                  call.status === 'missed' ? "text-red-500" :
                  call.status === 'outgoing' ? "text-green-500" :
                  call.status === 'incoming' ? "text-blue-500" : "text-gray-500"
                }
                textSize="text-sm"
              />
            )}
          </p>
          <TimeDisplay time={call.time} />
        </div>
      }
      rightComponent={
        <button className="p-2" aria-label="Add Call"  onClick={onCallClick}>
          <Call className="text-green-700" fontSize="large" />
        </button>
      }
    />
  );
};

export default CallCard;
