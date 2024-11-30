// import React, { useState } from 'react';
// import ChatTab from "../../../../Components/Partials/ChatTab";
// import { CallMissed, Call, CallReceived, CallMade } from '@mui/icons-material'; // Adding required icons
// import TimeDisplay from '../../../../../../Components/ui/TimeDisplay';
// import  GroupIcon  from '../../../../../../../public/images/GroupIcon.png'
// import  user1  from '../../../../../../../public/images/user1.png'
// import CircleImage from '../../../../Components/Ui/CircleImage';
// import StatusBadge from '../../../../../../Components/ui/StatusBadge';

// // Defining the Call type
// interface Call {
//   id: number;
//   name: string;
//   time: string;
//   status: 'active' | 'completed' | 'missed' | 'outgoing' | 'incoming'; // Adding new call statuses
//   isVideoCall: boolean;
//   callCount: number; 
//   image: string; 
// }

// const Calls: React.FC = () => {
//   // Call data
//   const [calls] = useState<Call[]>([
//     { id: 1, name: 'Group4', time: '10:30 AM', status: 'missed', isVideoCall: true, callCount: 3,  image: GroupIcon },
//     { id: 2, name: 'Hadeel', time: '09:00 AM', status: 'outgoing', isVideoCall: false, callCount: 2 ,  image: user1},
//     { id: 3, name: 'Group1', time: 'Yesterday', status: 'missed', isVideoCall: true, callCount: 1 , image:GroupIcon },
//     { id: 4, name: 'Taiseer', time: '11:00 AM', status: 'incoming', isVideoCall: false, callCount: 5 , image: user1},
//     { id: 5, name: 'Group2', time: '11:00 AM', status: 'outgoing', isVideoCall: false, callCount: 1 , image: GroupIcon},
//   ]);

//   return (
//     <>
//       <ChatTab />

//       <div className="flex-grow ml-[50px] p-6">
//         <h2 className="text-2xl font-semibold mb-4">Your Calls</h2>

//         {/* Displaying the calls as expandable cards */}
//         <div className="space-y-2">
//           {calls.map((call) => (
//             <div key={call.id} 
//                 className="p-2 rounded-lg border shadow-sm hover:shadow-md transition-all duration-200"
//             // className="p-2 rounded-lg border shadow-sm hover:shadow-md focus:shadow-md transition-all duration-200"

//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 rounded-full flex items-center justify-center ">
//                   <CircleImage
//                       // size={12} // Specify the size of the image (12 * 4 = 48px)
//                       imageUrl={call.image} // Use the image from the data
//                     />                 
//                      </div>
//                       <div>
//                     <p className="flex items-center font-medium text-lg">
//                     <StatusBadge
//                         content={
//                           call.status === 'missed' ? <CallMissed fontSize="small" /> :
//                           call.status === 'outgoing' ? <CallMade fontSize="small" /> :
//                           call.status === 'incoming' ? <CallReceived fontSize="small" /> : null
//                         }
//                         size={6} // Adjust size as needed
//                         color="bg-transparent" // Make the background transparent

//                         textColor={
//                           call.status === 'missed' ? "text-red-500" :
//                           call.status === 'outgoing' ? "text-green-500" :
//                           call.status === 'incoming' ? "text-blue-500" : "text-gray-500"
//                         }
//                       />

//                       <span className={`${call.status === 'missed' ? 'text-red-500' : call.status === 'outgoing' ? 'text-green-500' : call.status === 'incoming' ? 'text-blue-500' : 'text-gray-500'}`}>
//                         {call.name}
//                       </span>
//                       {call.callCount > 1 && (
//                       <StatusBadge
//                         content={`(${call.callCount})`}
//                         // size={8} // Adjust size as needed
//                         color="bg-transparent" // Transparent background
//                         textColor={
//                           call.status === 'missed' ? "text-red-500" :
//                           call.status === 'outgoing' ? "text-green-500" :
//                           call.status === 'incoming' ? "text-blue-500" : "text-gray-500"
//                         }
//                         textSize="text-sl" // Adjust text size as needed
//                         className="" // Add margin-left
//                       />
//                     )}

//                     </p>
//                       <TimeDisplay time={call.time}/>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <button
//                     className="p-2"
//                     aria-label="Add Call"
//                   >
//                     <Call className="text-green-700" fontSize="large" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Calls;



import React, { useState } from 'react';
import ChatTab from "../../../../Components/Partials/ChatTab";
import { callData } from './CallData'; // استيراد البيانات الوهمية
import { CallModel } from './CallModel'; // استيراد النموذج
import CallCard from './CallCard';
import TransitionsModal from './TransitionsModal';

const Calls: React.FC = () => {
  const [calls] = useState<CallModel[]>(callData); // Using mock data from the file
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUserImage, setCurrentUserImage] = useState('');
  const [currentUserName, setCurrentUserName] = useState('');

  const handleOpen = (imageUrl: string, userName: string) => {
    setCurrentUserImage(imageUrl);
    setCurrentUserName(userName);
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);

  const handleAcceptCall = () => {
    console.log('Call accepted');
    handleClose();
  };

  const handleRejectCall = () => {
    console.log('Call rejected');
    handleClose();
  };
  return (
    <>
      <ChatTab />

      <div className="flex-grow ml-[50px] p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Calls</h2>

        {/* عرض البيانات باستخدام GenericCard */}
        <div>
          {calls.map((call) => (
            <CallCard key={call.id} call={call} 
            onCallClick={() => handleOpen('https://example.com/user-avatar.jpg', 'Hadeely')}

            />

            
          ))}
        </div>
      </div>
      <TransitionsModal
        open={modalOpen}
        handleClose={handleClose}
        userImageUrl={currentUserImage}
        userName={currentUserName}
        onAcceptCall={handleAcceptCall}
        onRejectCall={handleRejectCall}
      />
    </>
  );
};

export default Calls;
