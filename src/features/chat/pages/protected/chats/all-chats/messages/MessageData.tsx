export interface MessageType {
  id: number;
  type: "text" | "image" | "video"| "audio"| "location"|"contact"|"document"| "call" ; // أنواع الرسائل
  content: string; // النص، رابط الصورة، أو رابط الفيديو
  comment?: string; // تعليق نصي للرسائل من نوع الفيديو (اختياري)
  time: string; // وقت الإرسال
  phoneNumber?: string; // رقم الهاتف (اختياري)
  profileImageUrls?: string[]; // روابط الصور لجهات الاتصال (اختياري)
  names?: string[];
   status?: "sending" | "sent" | "read" | "failed";
  isSent: boolean; // true للمرسلة، false للمستقبلة
  isDeleted?: boolean;
}

export const MessageData: MessageType[] = [
  {
    id: 1,
    type: "text",
    content: "مرحباً! كيف حالك؟",
    time: "10:00 AM",
    isSent: false,
    isDeleted: false,  // إضافة حالة الرسالة (محذوفة أم لا)

 
  },
  {
    id: 2,
    type: "image",
    content:
    
      "https://images.pexels.com/photos/28996347/pexels-photo-28996347/free-photo-of-vibrant-dahlia-flowers-in-glass-vases.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    time: "10:10 AM",
    comment: "ما رأيك في الصورة؟",

    isSent: false,
  },
  {
    id: 3,
    type: "text",
    content: " +967 778987678 أنا بخير! ماذا عنك؟  https://images.pexels.com/photos/28996347/pexels-photo-28996347/free-photo-of-vibrant-dahlia-flowers-in-glass-vases.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    time: "10:05 AM",
    isSent: true,
    status:"sent",
    // isDeleted: true,
  },

 
  {
    id: 5,
    type: "image",
    content:
      "https://images.pexels.com/photos/28748477/pexels-photo-28748477/free-photo-of-open-book-and-camera-amid-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    time: "10:15 AM",
    comment: " الصورة؟",
    isSent: true,
      status:"sending"
  },
  {
    id: 6,
    type: "image",
    content:
      "https://images.pexels.com/photos/28748477/pexels-photo-28748477/free-photo-of-open-book-and-camera-amid-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    time: "10:15 AM",
        comment: "ما رأيك ؟",

    isSent: false,
  },
  {
    id: 7,
    type: "video",
    content:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    comment: "شاهد هذا الفيديو المميز!",
    time: "10:20 AM",
    isSent: false,

  },
  {
    id: 8,
    type: "video",
    content:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    comment: "ما رأيك في هذا الفيديو؟",
    time: "10:25 AM",
    isSent: true,
      status:"read"
  },
  {
    id: 9,
    type: "text",
    content: " tesssssttesssssttessssst tessssst tessssst tessssst tessssst tessssst tessssst tessssst tessssst tesssssttessssst tesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttesssssttessssst",
    time: "10:05 AM",
    isSent: true,
    status:"sending"
  },
  {
    id: 10,
    type: "audio", 
    content: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    time: "10:05 AM",
    isSent: true,
    status: "sent",
    comment: "Audio message",
  },
  {
    id: 11,
    type: "location", // نوع الرسالة هو الموقع
    content: "https://media.istockphoto.com/id/1362679737/photo/blue-location-3d-icon-marker-or-route-gps-position-navigator-sign-and-travel-navigation-pin.jpg?b=1&s=612x612&w=0&k=20&c=oLipSFmWIQpEMoConfqczCDHeAK2JoiH55swBkIV-H4=", // رابط الصورة (مثال)
    latitude: 40.712776, // خط العرض
    longitude: -74.005974, // خط الطول
    time: "11:00 AM",
    isSent: false,
    status: "sent",
    comment: "Here's my location",
  },

  {
    id: 12,
    type: "location", // نوع الرسالة هو الموقع
    content: "https://media.istockphoto.com/id/1362679737/photo/blue-location-3d-icon-marker-or-route-gps-position-navigator-sign-and-travel-navigation-pin.jpg?b=1&s=612x612&w=0&k=20&c=oLipSFmWIQpEMoConfqczCDHeAK2JoiH55swBkIV-H4=", // رابط الصورة (مثال)
    latitude: 40.712776, // خط العرض
    longitude: -74.005974, // خط الطول
    time: "11:00 AM",
    isSent: true,
    status: "sent",
    comment: "Here's my location",
  },
  {
    id: 13,
    type: "contact",
    profileImageUrls: [
      "https://images.pexels.com/photos/28748477/pexels-photo-28748477/free-photo-of-open-book-and-camera-amid-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/28748477/pexels-photo-28748477/free-photo-of-open-book-and-camera-amid-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/28996347/pexels-photo-28996347/free-photo-of-vibrant-dahlia-flowers-in-glass-vases.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    ],
    names: ["Contact 1", "Contact 2", "Contact 3"],
    phoneNumbers: ["123-456-7890", "098-765-4321", "111-222-3333"], // قائمة بأرقام الهواتف
    content: "Here are some contacts!",
    time: "11:00 AM",
    isSent: true,
    status: "sent",
  },
  {
    id: 14,
    type: "contact",
    profileImageUrls: [
      "https://images.pexels.com/photos/28748477/pexels-photo-28748477/free-photo-of-open-book-and-camera-amid-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    ],
    names: ["Contact 1"],
    phoneNumbers: ["123-456-7890"], // قائمة تحتوي على رقم هاتف واحد
    content: "Here is my contact!",
    time: "11:00 AM",
    isSent: false,
    status: "sent",
  },

  {
    id: 15,
    type: "document",
    fileName: "Document1.pdf",
    fileSize: "2 MB",
    fileType: "PDF",
    fileUrl: "https://example.com/document1.pdf",
    isSent: true,
    time: "12:30 PM",
    status: "read",
  },
  {
    id: 16,
    type: "document",
    fileName: "Presentation.pptx",
    fileSize: "5 MB",
    fileType: "PPT",
    fileUrl: "https://example.com/presentation.pptx",
    isSent: false,
    time: "11:00 AM",
    status: "sent",
  },
  {
    id: 17,
    type: "call",
    content: "Voice Call with John Doe", // وصف المكالمة الصوتية
    time: "12:45 PM",
    status: "sent",
    isSent: true,
    callType: "outgoing", // نوع المكالمة: صادرة
    callMode: "voice", // وضع المكالمة: صوتية
    duration: "05:30", // مدة المكالمة
  },
  {
    id: 18,
    type: "call",
    content: "Missed Voice Call from Jane Smith",
    time: "1:00 PM",
    status: "failed",
    isSent: false,
    callType: "missed", // نوع المكالمة: فائتة
    callMode: "voice", // وضع المكالمة: صوتية
  },
  {
    id: 19,
    type: "call",
    content: "Incoming Voice Call from Sarah",
    time: "2:15 PM",
    status: "read",
    isSent: false,
    callType: "incoming", // نوع المكالمة: واردة
    callMode: "voice", // وضع المكالمة: صوتية
    duration: "10:15", // مدة المكالمة
  },
  {
    id: 20,
    type: "call",
    content: "Video Call with John Doe", // وصف المكالمة الفيديو
    time: "3:30 PM",
    status: "sent",
    isSent: true,
    callType: "outgoing", // نوع المكالمة: صادرة
    callMode: "video", // وضع المكالمة: فيديو
    duration: "15:45", // مدة المكالمة
  },
  {
    id: 21,
    type: "call",
    content: "Missed Video Call from Jane Smith",
    time: "4:00 PM",
    status: "failed",
    isSent: false,
    callType: "missed", // نوع المكالمة: فائتة
    callMode: "video", // وضع المكالمة: فيديو
  },
  {
    id: 22,
    type: "call",
    content: "Incoming Video Call from Sarah",
    time: "5:00 PM",
    status: "read",
    isSent: false,
    callType: "incoming", // نوع المكالمة: واردة
    callMode: "video", // وضع المكالمة: فيديو
    duration: "20:30", // مدة المكالمة
  },
];

