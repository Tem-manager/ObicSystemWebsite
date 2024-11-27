import React from "react";

interface AddPostProps {
  postText: string;
  mediaFiles: File[];
  isPosting: boolean;
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePost: () => void;
  handleRemoveMedia: (index: number) => void;
}

const AddPost: React.FC<AddPostProps> = ({
  postText,
  mediaFiles,
  isPosting,
  handleTextChange,
  handleFileChange,
  handlePost,
  handleRemoveMedia,
}) => {
  return (
    // <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center w-full space-y-6">
      <div className="max-w-md w-full p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">إنشاء منشور جديد</h2>

        {/* حقل النص */}
        <textarea
          placeholder="بم تفكر؟"
          value={postText}
          onChange={handleTextChange}
          rows={4}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        ></textarea>

        {/* زر إضافة ملفات */}
        <div className="mb-4">
          <label
            htmlFor="mediaInput"
            className="block bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer text-center"
          >
            إضافة صور/فيديوهات
          </label>
          <input
            id="mediaInput"
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* عرض الملفات المرفقة */}
        {mediaFiles.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {mediaFiles.map((file, index) => {
              const fileUrl = URL.createObjectURL(file);

              return (
                <div
                  key={index}
                  className="relative w-24 h-24 border border-gray-300 rounded-lg overflow-hidden"
                >
                  {file.type.includes("video") ? (
                    <video
                      src={fileUrl}
                      className="w-full h-full object-cover"
                      controls
                    />
                  ) : (
                    <img
                      src={fileUrl}
                      alt="Uploaded"
                      className="w-full h-full object-cover"
                    />
                  )}
                  <button
                    onClick={() => handleRemoveMedia(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white text-sm rounded-full p-1"
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* زر النشر */}
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
    //  </div>

    
  );
};

export default AddPost;
