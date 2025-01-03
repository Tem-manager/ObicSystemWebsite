import ChatTab from "../../../../Components/Partials/ChatTab";
import GroupIcon from '@mui/icons-material/Group'; // استيراد أيقونة مجموعة المستخدمين من Material-UI

function Groups() {
  // مصفوفة البيانات
  const chatData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    groupImgSrc: "", // إزالة الصورة الأصلية لأنها سيتم استبدالها بالأيقونة
    name: `مجموعة ${index + 1}`,
    lastMessage: "هذه هي آخر رسالة.",
    time: `${10 + index}:00 `,
    unreadCount: index % 3 === 0 ? 2 : 0, // جعل بعض المحادثات تحتوي على رسائل غير مقروءة
  }));

  return (
    <div className="relative h-screen  mt-6">
      {/* مكان ثابت للـ ChatTab */}
      <div className="flex-grow-0 fixed basis-1/2 z-10">
        <ChatTab />
      </div>

      <div className="flex-grow ml-[50px] p-4 ">
        {/* تقسيم الجزء الأحمر إلى قسمين */}
        <div className="flex h-full space-x-4">
          {/* الجزء الأول - تصميم واجهة شبيهة بالواتساب */}
          <div className="w-[50%] flex-shrink-0  overflow-y-auto border border-white">
            {/* عنوان المحادثات في قسم ثابت */}
            <div className="sticky top-0 p-4 z-10 w-full bg-white">
              <h2 className="text-lg font-semibold text-[#192745]">
                المجموعات
              </h2>
            </div>

            {/* قائمة المحادثات */}
            <div className="space-y-4  px-4 pt-4 bg-white">
              {/* التكرار الديناميكي لبطاقات المحادثة */}
              {chatData.map((chat) => (
                <ChatCard
                  key={chat.id}
                  name={chat.name}
                  lastMessage={chat.lastMessage}
                  time={chat.time}
                  unreadCount={chat.unreadCount}
                />
              ))}
            </div>
          </div>

          {/* الجزء الثاني - 70% */}
          <div className="w-[70%] flex-shrink-0 p-4 rounded-lg overflow-y-auto">
            <h2 className="text-lg font-semibold text-[#192745]">
              الجزء الثاني
            </h2>
            <p>
              هذا المحتوى في الجزء الثاني الذي يأخذ 70% من مساحة الأحمر. <br />
              يمكنك إضافة محتوى هنا وسيظل الحجم ثابتًا.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
interface ChatCardProps {
  name: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
}

function ChatCard({ name, lastMessage, time, unreadCount }: ChatCardProps) {
  return (
    <div className="flex items-center justify-between p-2 bg-white border-b border-gray-300 bg-gray-100 hover:bg-gray-50">
      {/* أيقونة تمثل مجموعة المستخدمين */}
      <GroupIcon className="w-12 h-12 text-gray-600" /> {/* هذه هي الأيقونة من Material-UI */}

      {/* تفاصيل المحادثة */}
      <div className="flex-1 ml-3">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold text-[#192745]">{name}</h3>
        </div>
        <p className="text-xs text-gray-600 truncate">{lastMessage}</p>
      </div>

      {/* الوقت وعدد الرسائل غير المقروءة */}
      <div className="flex flex-col items-center ml-2">
        {/* الوقت */}
        <span className="text-xs text-gray-500 mb-1">{time}</span>

        {/* عدد الرسائل غير المقروءة */}
        {unreadCount > 0 && (
          <div className="bg-blue-400 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </div>
        )}
      </div>
    </div>
  );
}

export default Groups;
