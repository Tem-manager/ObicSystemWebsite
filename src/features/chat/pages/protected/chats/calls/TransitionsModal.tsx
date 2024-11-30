import { Modal, Backdrop, Box, Fade } from '@mui/material';
import { Call, CallEnd } from '@mui/icons-material'; // استيراد الأيقونات
import CircleImage from '../../../../Components/Ui/CircleImage';
import user1 from '../../../../../../../public/images/user1.png';
import StatusBadge from '../../../../../../Components/ui/StatusBadge';

interface TransitionsModalProps {
  open: boolean;
  handleClose: () => void;
  userImageUrl: string; // URL لصورة المستخدم
  userName: string; // اسم المستخدم
  onAcceptCall: () => void; // معالج قبول المكالمة
  onRejectCall: () => void; // معالج رفض المكالمة
}

const TransitionsModal: React.FC<TransitionsModalProps> = ({
  open,
  handleClose,
  
}) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box className="absolute  rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-[500px] bg-white p-6 shadow-xl flex flex-col justify-center items-center text-center">

        <StatusBadge
            content={<CircleImage size={24} imageUrl={user1} />} // تمرير CircleImage كمحتوى
            color="bg-gray-200" // يمكنك تخصيص اللون هنا
            size={40} // الحجم (دائرة أكبر)
            textColor="text-white"
            className="p-2" // إضافة بعض الحشو داخل الدائرة
          />

            <div className='pb-40'><p>Taiseer</p></div>
        

          {/* الأزرار مع الأيقونات */}
          <div className="flex gap-60 mt-6">
            {/* زر قبول المكالمة */}
            <StatusBadge
              content={<Call fontSize="large" />} // استخدام أيقونة "Call"
              color="bg-green-500" // اللون الأخضر للبدء
              textColor="text-white"
              size={16} // حجم الدائرة
              className="p-3 cursor-pointer"
            //   onClick={onAcceptCall}
            />
            
            {/* زر رفض المكالمة */}
            <StatusBadge
              content={<CallEnd fontSize="large" />} // استخدام أيقونة "CallEnd"
              color="bg-red-500" // اللون الأحمر لإنهاء المكالمة
              textColor="text-white"
              size={16} // حجم الدائرة
              className="p-3 cursor-pointer"
            //   onClick={onRejectCall}
            />
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default TransitionsModal;
