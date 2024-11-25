import { Call, Videocam } from "@mui/icons-material";
import Header from "../../../../../Components/Partials/Header";
import CircleImage from "../../../../../Components/Ui/CircleImage";


export default function AllMessages() {


    const messages = [
        { senderName: "You", text: "Hello!", time: "10:30 AM", type: "sent" },
        { senderName: "John", text: "Hi there!", time: "10:31 AM", type: "received" },
        { senderName: "You", text: "How are you?", time: "10:32 AM", type: "sent" },
        { senderName: "John", text: "I'm good, thanks!", time: "10:33 AM", type: "received" },
      ];


  return (
    <div>
      
           {/* الهيدر */}
           <div className="relative w-full h-[4rem]">
            <Header
              leftContent={
                <div className="flex items-center space-x-3">
                  <CircleImage
                    imageUrl="https://images.pexels.com/photos/28996347/pexels-photo-28996347/free-photo-of-vibrant-dahlia-flowers-in-glass-vases.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    className="w-12 h-12"
                  />
                  <span className="text-lg font-semibold text-gray-800">Username</span>
                </div>
              }
              rightContent={
                <div className="flex items-center space-x-4 text-gray-800">
                  <button type="button" className="p-2">
                    <Videocam />
                  </button>
                  <button type="button" className="p-2">
                    <Call />
                  </button>
                </div>
              }
              className="absolute inset-0 bg-white shadow-md dark:bg-gray-800 flex items-center px-4"
            />
          </div>

          {/* الرسائل */}
          <div className="mt-[4rem] flex-grow overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className="p-2">
                <div
                  className={`p-3 rounded-lg max-w-[75%] ${
                    message.type === "sent"
                      ? "bg-blue-500 text-white ml-auto"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}
