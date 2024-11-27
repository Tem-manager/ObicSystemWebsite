import React, { useState } from 'react';
import ChatTab from "../../../../Components/Partials/ChatTab";
import { CallMissed, Call, PermIdentityOutlined, CallReceived, CallMade } from '@mui/icons-material'; // إضافة الأيقونات المطلوبة

// تعريف نوع المكالمة
interface Call {
  id: number;
  name: string;
  time: string;
  status: 'active' | 'completed' | 'missed' | 'outgoing' | 'incoming'; // إضافة حالات المكالمات الجديدة
  isVideoCall: boolean;
  callCount: number; // عدد مرات الاتصال
}

const Calls: React.FC = () => {
  // بيانات المكالمات
  const [calls] = useState<Call[]>([
    { id: 1, name: 'أحمد', time: '10:30 AM', status: 'missed', isVideoCall: true, callCount: 3 },
    { id: 2, name: 'سارة', time: '09:00 AM', status: 'outgoing', isVideoCall: false, callCount: 5 },
    { id: 3, name: 'يوسف', time: 'Yesterday', status: 'missed', isVideoCall: true, callCount: 2 },
    { id: 4, name: 'محمد', time: '11:00 AM', status: 'incoming', isVideoCall: false, callCount: 1 },
  ]);

  return (
    <>
      <ChatTab />

      <div className="flex-grow ml-[50px] p-6">
        <h2 className="text-2xl font-semibold mb-4">مكالماتك</h2>

        {/* عرض المكالمات كـ بطاقات قابلة للتوسيع */}
        <div className="space-y-4">
          {calls.map((call) => (
            <div key={call.id} className="p-2 rounded-lg border shadow-md hover:shadow-xl transition-all duration-200">
              <div className="flex items-center justify-between">
                {/* تفاصيل المكالمة */}
                <div className="flex items-center space-x-4">
                  {/* أيقونة صورة المستخدم */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-300">
                    <PermIdentityOutlined fontSize="large" className="text-gray-600" />
                  </div>

                  <div>
                    {/* اسم المتصل مع حالة المكالمة وعدد المكالمات */}
                    <p
                      className={`font-medium text-lg ${call.status === 'missed' ? 'text-red-500' : 'text-black'}`}
                    >
                      

                      {call.name}
                      
                      <span className={`text-sm ${call.status === 'missed' ? 'text-red-500' : ''}`}>( {call.callCount} )</span>

                       <span className="ml-2">
                    {call.status === 'missed' && <CallMissed fontSize="small" className="text-red-500" />}
                    {call.status === 'outgoing' && <CallMade fontSize="small" className="text-green-500" />}
                    {call.status === 'incoming' && <CallReceived fontSize="small" className="text-blue-500" />}
                  </span>



                     
                    </p>

                    {/* وقت الاتصال */}
                    <p className="text-sm text-gray-500">{call.time}</p>
                  </div>
                </div>

                {/* أزرار المكالمة */}
                <div className="flex items-center space-x-4">
                  {/* زر إضافة مكالمة */}
                  <button
                    className="p-2 "
                    aria-label="إضافة مكالمة"
                  >
                    <Call className="text-green-700" fontSize="large" />
                  </button>
                </div>
              </div>

              {/* تفاصيل إضافية إذا كانت المكالمة نشطة */}
              {call.status === 'active' && (
                <div className="mt-2 text-sm text-gray-600">
                  {/* يمكن إضافة أي تفاصيل إضافية هنا */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calls;
