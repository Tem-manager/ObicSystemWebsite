import ChatTab from "../../../../Components/Partials/ChatTab";

function AllChats() {
  // مصفوفة البيانات
  const chatData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    imgSrc: "https://via.placeholder.com/50",
    name: `مستخدم ${index + 1}`,
    lastMessage: "هذه هي آخر رسالة.",
    time: `${10 + index}:00 `,
    unreadCount: index % 3 === 0 ? 2 : 0, // جعل بعض المحادثات تحتوي على رسائل غير مقروءة
  }));

  return (
    <>
    
        <ChatTab />

      <div className="flex-grow ml-[10px]  w-full h-[1200px]  ">
        {/* تقسيم الجزء الأحمر إلى قسمين */}
       
      </div>
      </>
  );
}

function ChatCard({ imgSrc, name, lastMessage, time, unreadCount }) {
  return (
    <div className="flex items-center justify-between p-2 bg-white border-b border-gray-300 bg-gray-100 hover:bg-gray-50">
      {/* صورة المستخدم */}
      <img
        src={imgSrc}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />

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

export default AllChats;
