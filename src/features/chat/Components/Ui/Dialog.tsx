// import React from 'react';

// interface DialogProps {
//   children: React.ReactNode;
//   onClose: () => void;
//   BgColor?:string
// }

// const Dialog: React.FC<DialogProps> = ({BgColor="bg-slate-600", children, onClose }) => (
   
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className={`${BgColor} p-4 rounded  w-screen h-screen`}
//           onClick={(e) => e.stopPropagation()}
//           >
          
//             <button
//               className=" absolute top-4 left-4 mt-4   "
//               onClick={onClose}
//             >
//             {children}
             
//             </button>
            
//           </div>
//         </div>
      
// );

// export default Dialog;


import React from 'react';
import StatusBadge from '../../../../Components/ui/StatusBadge';
import { IoClose } from 'react-icons/io5';

interface DialogProps {
  children: React.ReactNode;
  onClose: () => void;
  BgColor?: string;
}

const Dialog: React.FC<DialogProps> = ({ BgColor = "bg-slate-600", children, onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    onClick={onClose} 
  >
    <div
      className={`${BgColor} p-4 rounded w-screen h-screen relative`}
      onClick={(e) => e.stopPropagation()} // Prevent background click from triggering close
    >
      <button
          className=" absolute top-4 left-4 z-50 mt-4   "
          onClick={onClose}
        >
          <StatusBadge
              content={<IoClose />}
              textSize='text-2xl'
              color='bg-inherit' />
      </button>
      {children}
    </div>
  </div>
);

export default Dialog;
