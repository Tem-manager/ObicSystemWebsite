// // import React from "react";

// // interface AddPostProps {
// //   postText: string;
// //   mediaFiles: File[];
// //   isPosting: boolean;
// //   handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
// //   handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// //   handlePost: () => void;
// //   handleRemoveMedia: (index: number) => void;
// // }

// // const AddPost: React.FC<AddPostProps> = ({
// //   postText,
// //   mediaFiles,
// //   isPosting,
// //   handleTextChange,
// //   handleFileChange,
// //   handlePost,
// //   handleRemoveMedia,
// // }) => {
// //   return (
// // <div className=" flex items-center justify-center bg-gray-100">
// //   <div className="max-w-md w-full p-4 bg-white shadow-lg rounded-lg">
// //     <h2 className="text-xl font-semibold mb-4">إنشاء منشور جديد</h2>

// //         {/* حقل النص */}
// //         <textarea
// //           placeholder="بم تفكر؟"
// //           value={postText}
// //           onChange={handleTextChange}
// //           rows={4}
// //           className="w-full border border-gray-300 rounded-lg p-2 mb-4"
// //         ></textarea>

// //         {/* زر إضافة ملفات */}
// //         <div className="mb-4">
// //           <label
// //             htmlFor="mediaInput"
// //             className="block bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer text-center"
// //           >
// //             إضافة صور/فيديوهات
// //           </label>
// //           <input
// //             id="mediaInput"
// //             type="file"
// //             accept="image/*,video/*"
// //             multiple
// //             onChange={handleFileChange}
// //             className="hidden"
// //           />
// //         </div>

// //         {/* عرض الملفات المرفقة */}
// //         {mediaFiles.length > 0 && (
// //           <div className="flex flex-wrap gap-2 mb-4">
// //             {mediaFiles.map((file, index) => {
// //               const fileUrl = URL.createObjectURL(file);

// //               return (
// //                 <div
// //                   key={index}
// //                   className="relative w-24 h-24 border border-gray-300 rounded-lg overflow-hidden"
// //                 >
// //                   {file.type.includes("video") ? (
// //                     <video
// //                       src={fileUrl}
// //                       className="w-full h-full object-cover"
// //                       controls
// //                     />
// //                   ) : (
// //                     <img
// //                       src={fileUrl}
// //                       alt="Uploaded"
// //                       className="w-full h-full object-cover"
// //                     />
// //                   )}
// //                   <button
// //                     onClick={() => handleRemoveMedia(index)}
// //                     className="absolute top-1 right-1 bg-red-500 text-white text-sm rounded-full p-1"
// //                   >
// //                     ×
// //                   </button>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         )}

// //         {/* زر النشر */}
// //         <button
// //           onClick={handlePost}
// //           className={`w-full py-2 text-white rounded-lg ${
// //             isPosting
// //               ? "bg-gray-400 cursor-not-allowed"
// //               : "bg-green-500 hover:bg-green-600"
// //           }`}
// //           disabled={isPosting}
// //         >
// //           {isPosting ? "جاري النشر..." : "نشر"}
// //         </button>
// //       </div>
// //     </div>

    
// //   );
// // };

// // export default AddPost;


// import React, { useState } from "react";

// // واجهة المكوّن AddPost
// interface AddPostProps {
//   postText: string;
//   mediaFiles: File[];
//   isPosting: boolean;
//   handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
//   handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handlePost: () => void;
//   handleRemoveMedia: (index: number) => void;
// }

// // مكوّن AddPost
// const AddPost: React.FC<AddPostProps> = ({
//   postText,
//   mediaFiles,
//   isPosting,
//   handleTextChange,
//   handleFileChange,
//   handlePost,
//   handleRemoveMedia,
// }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//       <div className="max-w-md w-full p-4 bg-white shadow-lg rounded-lg">
//         <h2 className="text-xl font-semibold mb-4">إنشاء منشور جديد</h2>

//         {/* حقل النص */}
//         <textarea
//           placeholder="بم تفكر؟"
//           value={postText}
//           onChange={handleTextChange}
//           rows={4}
//           className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//         ></textarea>

//         {/* زر إضافة ملفات */}
//         <div className="mb-4">
//           <label
//             htmlFor="mediaInput"
//             className="block bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer text-center"
//           >
//             إضافة صور/فيديوهات
//           </label>
//           <input
//             id="mediaInput"
//             type="file"
//             accept="image/*,video/*"
//             multiple
//             onChange={handleFileChange}
//             className="hidden"
//           />
//         </div>

//         {/* عرض الملفات المرفقة */}
//         {mediaFiles.length > 0 && (
//           <div className="flex flex-wrap gap-2 mb-4">
//             {mediaFiles.map((file, index) => {
//               const fileUrl = URL.createObjectURL(file);

//               return (
//                 <div
//                   key={index}
//                   className="relative w-24 h-24 border border-gray-300 rounded-lg overflow-hidden"
//                 >
//                   {file.type.includes("video") ? (
//                     <video
//                       src={fileUrl}
//                       className="w-full h-full object-cover"
//                       controls
//                     />
//                   ) : (
//                     <img
//                       src={fileUrl}
//                       alt="Uploaded"
//                       className="w-full h-full object-cover"
//                     />
//                   )}
//                   <button
//                     onClick={() => handleRemoveMedia(index)}
//                     className="absolute top-1 right-1 bg-red-500 text-white text-sm rounded-full p-1"
//                   >
//                     ×
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         )}

//         {/* زر النشر */}
//         <button
//           onClick={handlePost}
//           className={`w-full py-2 text-white rounded-lg ${
//             isPosting
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-green-500 hover:bg-green-600"
//           }`}
//           disabled={isPosting}
//         >
//           {isPosting ? "جاري النشر..." : "نشر"}
//         </button>
//       </div>
//     </div>
//   );
// };

// // المكوّن الأساسي
// const UserIconWithName: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // بيانات الحالة للمنشور
//   const [postText, setPostText] = useState("");
//   const [mediaFiles, setMediaFiles] = useState<File[]>([]);
//   const [isPosting, setIsPosting] = useState(false);

//   // وظائف التحكم
//   const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setPostText(e.target.value);
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setMediaFiles(Array.from(e.target.files));
//     }
//   };

//   const handlePost = () => {
//     setIsPosting(true);
//     setTimeout(() => {
//       setIsPosting(false);
//       setIsModalOpen(false); // إغلاق النافذة بعد النشر
//     }, 2000); // محاكاة عملية النشر
//   };

//   const handleRemoveMedia = (index: number) => {
//     setMediaFiles(mediaFiles.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="relative min-h-screen bg-gray-100">
//       {/* الأيقونة */}
//       <div
//         className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full p-4 flex items-center space-x-3 cursor-pointer"
//         onClick={() => setIsModalOpen(true)}
//       >
//         {/* صورة الأيقونة */}
//         <div className="relative">
//           <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 text-blue-500"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
//             </svg>
//           </div>
//           {/* زر الإضافة */}
//           <button
//             className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md"
//           >
//             +
//           </button>
//         </div>

//         {/* النص بجانب الأيقونة */}
//         <span className="text-lg font-medium text-gray-700">Hadeel</span>
//       </div>

//       {/* النافذة المنبثقة */}
//       {isModalOpen && (
//         <AddPost
//           postText={postText}
//           mediaFiles={mediaFiles}
//           isPosting={isPosting}
//           handleTextChange={handleTextChange}
//           handleFileChange={handleFileChange}
//           handlePost={handlePost}
//           handleRemoveMedia={handleRemoveMedia}
//         />
//       )}
//     </div>
//   );
// };

// export default UserIconWithName;




// import React, { useState } from "react";

// // واجهة المدخلات
// interface AddPostProps {
//   postText: string;
//   mediaFiles: File[];
//   isPosting: boolean;
//   handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
//   handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handlePost: () => void;
//   handleRemoveMedia: (index: number) => void;
// }

// // الكود الأساسي
// const UserIconWithName: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // دالة لفتح وإغلاق الواجهة المنبثقة
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div className="relative min-h-screen bg-gray-100">
//       {/* العنصر المثبّت أعلى الصفحة */}
//       <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full p-4 flex items-center space-x-3">
//         {/* صورة الأيقونة */}
//         <div className="relative">
//           <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 text-blue-500"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
//             </svg>
//           </div>
//           {/* زر الإضافة */}
//           <button
//             className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md"
//             onClick={toggleModal}  // فتح الواجهة المنبثقة عند الضغط على الأيقونة
//           >
//             +
//           </button>
//         </div>

//         {/* النص بجانب الأيقونة */}
//         <span className="text-lg font-medium text-gray-700">Hadeel</span>
//       </div>

//       {/* هنا يتم عرض الواجهة المنبثقة عند تفعيل حالة isModalOpen */}
//       {isModalOpen && <AddPostModal />}
//     </div>
//   );
// };

// // واجهة إضافة المنشور
// const AddPostModal: React.FC = () => {
//   const [postText, setPostText] = useState("");
//   const [mediaFiles, setMediaFiles] = useState<File[]>([]);
//   const [isPosting, setIsPosting] = useState(false);

//   // دوال للتعامل مع المنشور
//   const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setPostText(e.target.value);
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setMediaFiles([...mediaFiles, ...Array.from(e.target.files)]);
//     }
//   };
//   const handleRemoveMedia = (index: number) => {
//     setMediaFiles(mediaFiles.filter((_, i) => i !== index));
//   };
//   const handlePost = () => {
//     setIsPosting(true);
//     // محاكاة إرسال المنشور
//     setTimeout(() => {
//       setIsPosting(false);
//       setPostText("");
//       setMediaFiles([]);
//     }, 2000);
//   };

//   return (
//     <div className="flex items-center justify-center bg-gray-100 fixed inset-0 z-50">
//       <div className="max-w-md w-full p-4 bg-white shadow-lg rounded-lg">
//         <h2 className="text-xl font-semibold mb-4">إنشاء منشور جديد</h2>

//         {/* حقل النص */}
//         <textarea
//           placeholder="بم تفكر؟"
//           value={postText}
//           onChange={handleTextChange}
//           rows={4}
//           className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//         ></textarea>

//         {/* زر إضافة ملفات */}
//         <div className="mb-4">
//           <label
//             htmlFor="mediaInput"
//             className="block bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer text-center"
//           >
//             إضافة صور/فيديوهات
//           </label>
//           <input
//             id="mediaInput"
//             type="file"
//             accept="image/*,video/*"
//             multiple
//             onChange={handleFileChange}
//             className="hidden"
//           />
//         </div>

//         {/* عرض الملفات المرفقة */}
//         {mediaFiles.length > 0 && (
//           <div className="flex flex-wrap gap-2 mb-4">
//             {mediaFiles.map((file, index) => {
//               const fileUrl = URL.createObjectURL(file);
//               return (
//                 <div
//                   key={index}
//                   className="relative w-24 h-24 border border-gray-300 rounded-lg overflow-hidden"
//                 >
//                   {file.type.includes("video") ? (
//                     <video
//                       src={fileUrl}
//                       className="w-full h-full object-cover"
//                       controls
//                     />
//                   ) : (
//                     <img
//                       src={fileUrl}
//                       alt="Uploaded"
//                       className="w-full h-full object-cover"
//                     />
//                   )}
//                   <button
//                     onClick={() => handleRemoveMedia(index)}
//                     className="absolute top-1 right-1 bg-red-500 text-white text-sm rounded-full p-1"
//                   >
//                     ×
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         )}

//         {/* زر النشر */}
//         <button
//           onClick={handlePost}
//           className={`w-full py-2 text-white rounded-lg ${
//             isPosting
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-green-500 hover:bg-green-600"
//           }`}
//           disabled={isPosting}
//         >
//           {isPosting ? "جاري النشر..." : "نشر"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserIconWithName;












// import React, { useState } from "react";

// // الواجهة الرئيسية
// const UserIconWithName: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [posts, setPosts] = useState<{ text: string; mediaFiles: File[] }[]>([]);

//   // فتح/إغلاق النافذة
//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   // دالة حفظ المنشور
//   const savePost = (text: string, mediaFiles: File[]) => {
//     setPosts([{ text, mediaFiles }, ...posts]);
//   };

//   return (
//     <div className="relative min-h-screen bg-gray-100">
//       {/* أيقونة المستخدم */}
//       <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full p-4 flex items-center space-x-3">
//         <div className="relative">
//           <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 text-blue-500"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
//             </svg>
//           </div>
//           <button
//             className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md"
//             onClick={toggleModal}
//           >
//             +
//           </button>
//         </div>
//         <span className="text-lg font-medium text-gray-700">Hadeel</span>
//       </div>

//       {/* عرض النافذة عند التفعيل */}
//       {isModalOpen && (
//         <AddPostModal
//           setIsModalOpen={setIsModalOpen}
//           savePost={savePost}
//         />
//       )}

//       {/* عرض المنشورات */}
//       <div className="mt-20 space-y-4 p-4">
//         {posts.map((post, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 rounded-lg shadow-md border border-gray-300"
//           >
//             <p>{post.text}</p>
//             {post.mediaFiles.length > 0 && (
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {post.mediaFiles.map((file, i) => (
//                   <img
//                     key={i}
//                     src={URL.createObjectURL(file)}
//                     alt="Media"
//                     className="w-24 h-24 object-cover rounded-lg"
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // واجهة إضافة المنشور
// const AddPostModal: React.FC<{
//   setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   savePost: (text: string, mediaFiles: File[]) => void;
// }> = ({ setIsModalOpen, savePost }) => {
//   const [postText, setPostText] = useState("");
//   const [mediaFiles, setMediaFiles] = useState<File[]>([]);
//   const [isPosting, setIsPosting] = useState(false);

//   const handlePost = () => {
//     if (postText.trim() || mediaFiles.length > 0) {
//       setIsPosting(true);

//       // محاكاة عملية النشر
//       setTimeout(() => {
//         savePost(postText, mediaFiles); // حفظ المنشور
//         setIsPosting(false);
//         setPostText("");
//         setMediaFiles([]);
//         setIsModalOpen(false); // إغلاق النافذة
//       }, 2000);
//     }
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setMediaFiles([...mediaFiles, ...Array.from(e.target.files)]);
//     }
//   };

//   const handleRemoveMedia = (index: number) => {
//     setMediaFiles(mediaFiles.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-xl font-semibold mb-4">إنشاء منشور جديد</h2>
//         <textarea
//           value={postText}
//           onChange={(e) => setPostText(e.target.value)}
//           className="w-full border rounded-lg p-2 mb-4"
//           placeholder="بم تفكر؟"
//         ></textarea>
//         <input
//           type="file"
//           multiple
//           accept="image/*,video/*"
//           onChange={handleFileChange}
//           className="mb-4"
//         />
//         {mediaFiles.length > 0 && (
//           <div className="flex flex-wrap gap-2 mb-4">
//             {mediaFiles.map((file, index) => (
//               <div key={index} className="relative w-20 h-20">
//                 <img
//                   src={URL.createObjectURL(file)}
//                   alt="media"
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//                 <button
//                   className="absolute top-1 right-1 bg-red-500 text-white text-sm rounded-full"
//                   onClick={() => handleRemoveMedia(index)}
//                 >
//                   ×
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//         <button
//           onClick={handlePost}
//           className={`w-full py-2 text-white rounded-lg ${
//             isPosting
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-green-500 hover:bg-green-600"
//           }`}
//           disabled={isPosting}
//         >
//           {isPosting ? "جاري النشر..." : "نشر"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserIconWithName;












import React, { useState } from "react";
import ListTitle from "./ListTitle";
import { user } from "../../pages/protected/moments/MomentsData"; // استيراد بيانات المستخدم
import SendInput from "./SendInput";

import CircleImage from "./CircleImage";


// الواجهة الرئيسية
const UserIconWithName: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ text: string; mediaFiles: File[] }[]>([]);

  // فتح/إغلاق النافذة
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // دالة حفظ المنشور
  const savePost = (text: string, mediaFiles: File[]) => {
    setPosts([{ text, mediaFiles }, ...posts]);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* قسم أيقونة المستخدم */}
      <header className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full p-4 flex items-center space-x-3">
      <ListTitle
          Title={user.username}
          imageComponent={
            <CircleImage
            size={12}
            imageUrl={
              user.avatar
            }
          />
          
          }
         width="0"
          showIcon={true}
          onClick={toggleModal} 
          subTitle={""} 
    />
      </header>

      {/* عرض النافذة عند التفعيل */}
      {isModalOpen && (
        <AddPostModal
          setIsModalOpen={setIsModalOpen}
          savePost={savePost}
        />
      )}

      {/* قسم عرض المنشورات */}
      <main className="pt-32 space-y-4 p-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-300"
          >
            <p>{post.text}</p>
            {post.mediaFiles.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {post.mediaFiles.map((file, i) => (
                  <img
                    key={i}
                    src={URL.createObjectURL(file)}
                    alt="Media"
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

// واجهة إضافة المنشور
const AddPostModal: React.FC<{
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  savePost: (text: string, mediaFiles: File[]) => void;
}> = ({ setIsModalOpen, savePost }) => {
  const [postText, setPostText] = useState("");
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [isPosting, setIsPosting] = useState(false);

  const handlePost = () => {
    if (postText.trim() || mediaFiles.length > 0) {
      setIsPosting(true);

      // محاكاة عملية النشر
      setTimeout(() => {
        savePost(postText, mediaFiles); // حفظ المنشور
        setIsPosting(false);
        setPostText("");
        setMediaFiles([]);
        setIsModalOpen(false); // إغلاق النافذة
      }, 2000);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMediaFiles([...mediaFiles, ...Array.from(e.target.files)]);
    }
  };

  const handleRemoveMedia = (index: number) => {
    setMediaFiles(mediaFiles.filter((_, i) => i !== index));
  };

  const [message, setMessage] = React.useState("");
  const handleSendMessage = () => {
    console.log("Message sent:", message);
    setMessage("");
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">إنشاء منشور جديد</h2>
        <textarea
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          className="w-full border rounded-lg p-2 mb-4"
          placeholder="بم تفكر؟"
        ></textarea>

        <SendInput value={message} onChange={(e) => setMessage(e.target.value)} placeholder="بم تفكر؟" Bg="bg-white" className={`w-full border rounded-lg p-2 mb-4`} textColor="text-black" />

        <input
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={handleFileChange}
          className="mb-4"
        />
        {mediaFiles.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {mediaFiles.map((file, index) => (
              <div key={index} className="relative w-20 h-20">
                <img
                  src={URL.createObjectURL(file)}
                  alt="media"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  className="absolute top-1 right-1 bg-red-500 text-white text-sm rounded-full"
                  onClick={() => handleRemoveMedia(index)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={handlePost}
          className={`w-full py-2 text-white rounded-lg ${
            isPosting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={isPosting}
        >
          {isPosting ? "جاري النشر..." : "نشر"}
        </button>
      </div>
    </div>
  );
};

export default UserIconWithName;
