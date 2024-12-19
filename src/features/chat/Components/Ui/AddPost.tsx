import React, { useState } from "react";
import { user } from "../../pages/protected/moments/MomentsData";

const AddPost: React.FC<{ onNewPost: (post: any) => void }> = ({ onNewPost }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postText, setPostText] = useState("");
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [isPosting, setIsPosting] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null); // لحفظ الوسائط المختارة

  // فتح/إغلاق النافذة
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // دالة لحفظ المنشور
  const savePost = () => {
    if (postText.trim() || mediaFiles.length > 0) {
      setIsPosting(true);
      setTimeout(() => {
        const newPost = {
          text: postText,
          mediaFiles,
          user: {
            username: user.username,
            avatar: user.avatar,
          },
          createdAt: new Date().toISOString(),
        };
        onNewPost(newPost); // تمرير المنشور الجديد للأعلى
        setPostText("");
        setMediaFiles([]);
        setIsPosting(false);
        setIsModalOpen(false);
      }, 2000);
    }
  };

  // معالجة الملفات المرفقة
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMediaFiles([...mediaFiles, ...Array.from(e.target.files)]);
    }
  };

  // إزالة ملف مرفق
  const handleRemoveMedia = (index: number) => {
    setMediaFiles(mediaFiles.filter((_, i) => i !== index));
  };

  // دالة لفتح الوسائط
  const openMedia = (file: File) => {
    const objectURL = URL.createObjectURL(file);
    setSelectedMedia(objectURL); // عرض الوسائط المختارة
  };

  // دالة لإغلاق الوسائط
  const closeMedia = () => {
    setSelectedMedia(null); // إغلاق النافذة
  };

  const handleButtonClick = () => {
    document.getElementById("fileInput")?.click();
  };

  return (
    <div className="relative bg-gray-100 h-auto">
      <header
        className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full p-4 flex items-center space-x-3 cursor-pointer"
        onClick={toggleModal}
      >
        <img
          src={user.avatar}
          alt={user.username}
          className="w-12 h-12 rounded-full object-cover"
        />
        <h3 className="text-lg font-semibold">{user.username}</h3>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div
            className="absolute inset-0 bg-gray-500 bg-opacity-50"
            onClick={toggleModal}
          ></div>

          <div className="relative z-60 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <button
              className="absolute top-3 right-3 text-red-600 text-xl font-bold"
              onClick={toggleModal}
            >
              ×
            </button>

            <h2 className="text-xl font-semibold mb-4">إنشاء منشور جديد</h2>

            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="بم تفكر؟"
              className="w-full border rounded-lg p-2 mb-4 h-40 bg-gray-100 text-black"
            ></textarea>
{/* 
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="mb-4"
            /> */}
            <div>
            <input
              id="fileInput"
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="hidden" // لإخفاء عنصر الإدخال
            />
            <button
              onClick={handleButtonClick}
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-3"
            >
              اختر الملفات
            </button>
          </div>

            {mediaFiles.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {mediaFiles.map((file, index) => (
                  <div key={index} className="relative w-20 h-20">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="media"
                      className="w-full h-full object-cover rounded-lg cursor-pointer"
                      onClick={() => openMedia(file)} // استدعاء دالة فتح الوسائط
                    />
                    <button
                      className="absolute top-1 right-1 bg-red-500 text-white text-sm rounded-full w-5"
                      onClick={() => handleRemoveMedia(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={savePost}
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
      )}

      {/* عرض الوسائط عند النقر عليها */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75">
          <div className="relative">
            <button
              onClick={closeMedia}
              className="absolute top-2 right-2 bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
            {selectedMedia.endsWith(".mp4") || selectedMedia.endsWith(".webm") ? (
              <video
                src={selectedMedia}
                controls
                className="max-w-full max-h-screen rounded-lg"
              ></video>
            ) : (
              <img
                src={selectedMedia}
                alt="Selected media"
                className="max-w-full max-h-screen rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPost;
