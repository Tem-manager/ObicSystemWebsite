// momentsData.ts

import { PostData } from "./MomentsModel";

// تصدير بيانات المنشورات
export const MomentsData: PostData[] = [
  {
    text: "هذا نص المنشور الأول. مرحبًا بالجميع!",
    mediaFiles: ["https://via.placeholder.com/150"], // صورة افتراضية
    user: {
      username: "Wadha",
      avatar: "https://via.placeholder.com/50",
    },
  },
  {
    text: "هذا نص المنشور الثاني. أرجو أن يعجبكم!",
    mediaFiles: ["https://via.placeholder.com/200", "https://via.placeholder.com/250"],
    user: {
      username: "User1",
      avatar: "https://via.placeholder.com/50",
    },
  },
];

// تصدير المستخدم (إذا كنت بحاجة فقط للمستخدم)
export const user = MomentsData[0].user; // استخدام أول مستخدم كمثال
