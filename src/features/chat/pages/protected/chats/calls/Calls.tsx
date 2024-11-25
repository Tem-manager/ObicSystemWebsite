import React, { useState } from 'react';
import ChatTab from "../../../../Components/Partials/ChatTab";

// تعريف نوع المكالمة
interface Call {
  id: number;
  name: string;
  time: string;
  status: 'active' | 'completed' | 'missed';
  isVideoCall: boolean;
}

const Calls: React.FC = () => {
  // بيانات المكالمات
  const [calls] = useState<Call[]>([
    { id: 1, name: 'أحمد', time: '10:30 AM', status: 'active', isVideoCall: true },
    { id: 2, name: 'سارة', time: '09:00 AM', status: 'completed', isVideoCall: false },
    { id: 3, name: 'يوسف', time: 'Yesterday', status: 'missed', isVideoCall: true },
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
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${call.isVideoCall ? 'bg-blue-500' : 'bg-green-500'}`}>
                    <span className="text-white text-xl">{call.isVideoCall ? '🎥' : '📞'}</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg">{call.name}</p>
                    <p className="text-sm text-gray-500">{call.time}</p>
                  </div>
                </div>

                {/* أزرار المكالمة */}
                <div className="flex items-center space-x-4">
                  {/* حالة المكالمة */}
                  <span
                    className={`text-sm px-3 py-1 rounded-full font-medium ${call.status === 'active' ? 'bg-blue-100 text-blue-500' : call.status === 'completed' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}
                  >
                    {call.status === 'active' ? 'نشطة' : call.status === 'completed' ? 'مكتملة' : 'مفقودة'}
                  </span>

                  {/* زر بدء أو إيقاف المكالمة */}
                  <button
                    className={`px-4 py-2 rounded-full text-white ${call.status === 'active' ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
                  >
                    {call.status === 'active' ? 'إنهاء المكالمة' : 'بدء المكالمة'}
                  </button>
                </div>
              </div>

              {/* تفاصيل إضافية إذا كانت المكالمة نشطة */}
              {call.status === 'active' && (
                <div className="mt-2 text-sm text-gray-600">
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
