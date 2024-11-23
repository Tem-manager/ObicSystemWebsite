import React, { useState, useRef } from "react";

interface MediaCard {
  file: File | null;
  text: string;
}

const App: React.FC = () => {
  const [mediaFiles, setMediaFiles] = useState<MediaCard[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempMedia, setTempMedia] = useState<MediaCard>({ file: null, text: "" });
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => setIsModalOpen(true);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setTempMedia((prev) => ({ ...prev, file: files[0] }));
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempMedia((prev) => ({ ...prev, text: event.target.value }));
  };

  const handleSubmit = () => {
    if (tempMedia.file || tempMedia.text) {
      setMediaFiles((prevFiles) => [...prevFiles, tempMedia]);
      setTempMedia({ file: null, text: "" });
      setIsModalOpen(false);
    }
  };

  const renderCards = () => {
    return mediaFiles.map((media, index) => {
      const fileUrl = media.file ? URL.createObjectURL(media.file) : null;

      return (
        <div
          key={index}
          className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96"
        >
          {/* عرض النص */}
          <div className="p-4">
            <TextWithShowMore text={media.text || "بدون عنوان"} />
          </div>

          {/* عرض الصورة */}
          {fileUrl && (
            <div className="relative overflow-hidden rounded-xl bg-clip-border">
              {media.file?.type.includes("video") ? (
                <video controls className="w-full rounded-md">
                  <source src={fileUrl} type={media.file.type} />
                </video>
              ) : (
                <img
                  src={fileUrl}
                  alt="card"
                  className="w-full rounded-md"
                  style={{
                    height: "400px", // زيادة ارتفاع الصورة
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4 max-w-md mx-auto bg-gray-50 rounded-lg shadow-md">
      {/* أيقونة الإضافة */}
      <div
        className="cursor-pointer text-white w-16 h-16 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 flex items-center justify-center"
        onClick={handleIconClick}
      >
        +
      </div>

      {/* عرض الكروت */}
      <div className="w-full flex flex-wrap justify-center">{renderCards()}</div>

      {/* الواجهة المنبثقة */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">إضافة محتوى</h2>

            <input
              type="text"
              placeholder="أدخل نصًا"
              value={tempMedia.text}
              onChange={handleTextChange}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            />

            <input
              type="file"
              accept="image/*,video/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            />

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              >
                إلغاء
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                إضافة
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// مكون عرض النص مع "عرض المزيد"
const TextWithShowMore: React.FC<{ text: string }> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const MAX_LENGTH = 200;

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className="text-slate-800 text-sm font-light">
      <p
        className={`whitespace-normal ${
          !isExpanded ? "truncate" : "break-words"
        }`}
      >
        {isExpanded ? text : text.substring(0, MAX_LENGTH) + (text.length > MAX_LENGTH ? "..." : "")}
      </p>
      {text.length > MAX_LENGTH && (
        <button
          onClick={toggleExpand}
          className="text-blue-500 underline mt-2 text-sm"
        >
          {isExpanded ? "إخفاء" : "عرض المزيد"}
        </button>
      )}
    </div>
  );
};

export default App;
