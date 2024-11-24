import { COLORS } from "../../../../../../thems/Color";

function ChatList() {
  return (
    <div
      className="w-full sm:w-[38%] p-4 m-2 border border-gray-300 rounded-lg shadow-md h-screen"
      style={{ backgroundColor: COLORS.BACKGROUND }}
    >
      <h2 className="text-xl font-semibold mb-4 sticky top-0 py-2">
        All Chats
      </h2>

      {/* قائمة المحادثات */}
      <div className="space-y-0 overflow-y-auto">
        {/* محادثة 1 (مع رسالة غير مقروءة) */}
        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer border-b border-gray-300 last:border-b-0">
          <img
            src="https://via.placeholder.com/50"
            alt="User"
            className="w-12 h-12 rounded-full mr-3"
          /> 
          <div className="flex-1">
            <h3 className="font-semibold text-lg">John Doe</h3>
            <p className="text-sm text-gray-500 line-clamp-1">
              Hey! How are you? Let's catch up soon.
            </p>
          </div>
          <div className="flex flex-col items-end text-right">
            <span className="text-xs text-gray-400">10:30</span>
            <span className="bg-blue-400 text-white text-xs rounded-full px-2 py-1 mt-1 self-end">
              3
            </span>
          </div>
        </div>

        {/* محادثة 2 (رسالة مقروءة) */}
        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer border-b border-gray-300 last:border-b-0">
          <img
            src="https://via.placeholder.com/50"
            alt="User"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">Jane Smith</h3>
            <p className="text-sm text-gray-500 line-clamp-1">
              Are you coming to the party?
            </p>
          </div>
          <div className="flex flex-col items-end text-right">
            <span className="text-xs text-gray-400">Yesterday</span>
          </div>
        </div>

        {/* محادثة 3 (رسالة مقروءة) */}
        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer border-b border-gray-300 last:border-b-0">
          <img
            src="https://via.placeholder.com/50"
            alt="Group"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">Work Group</h3>
            <p className="text-sm text-gray-500 line-clamp-1">
              Please check the new project details, it's important.
            </p>
          </div>
          <div className="flex flex-col items-end text-right">
            <span className="text-xs text-gray-400">11:15</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
