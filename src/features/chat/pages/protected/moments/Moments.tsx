import React, { useState, useEffect } from "react";

interface PostData {
  text: string;
  mediaFiles: File[];
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [postText, setPostText] = useState<string>("");
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [isPosting, setIsPosting] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setMediaFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
    }
  };

  const handlePost = () => {
    if (postText.trim() || mediaFiles.length > 0) {
      setIsPosting(true);
      setTimeout(() => {
        setPosts((prevPosts) => [
          { text: postText, mediaFiles },
          ...prevPosts,
        ]);
        setPostText("");
        setMediaFiles([]);
        setIsPosting(false);
        alert("تم نشر المنشور بنجاح!");
      }, 2000);
    } else {
      alert("يرجى إضافة نص أو وسائط قبل النشر.");
    }
  };

  const handleRemoveMedia = (index: number) => {
    setMediaFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center space-y-6">
      {/* واجهة إنشاء المنشور */}
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

      {/* عرض المنشورات */}
      <div className="w-full max-w-4xl space-y-6">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

const PostCard: React.FC<{ post: PostData }> = ({ post }) => {
  const maxDisplayCount = 4; // أقصى عدد للصور المعروضة بشكل كامل

  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden">
      {/* النص */}
      {post.text && (
        <div className="p-4">
          <p className="text-gray-800 text-lg">{post.text}</p>
        </div>
      )}

      {/* عرض الوسائط */}
      {post.mediaFiles.length > 0 && (
        <div className="p-4">
          {/* عرض صورة واحدة */}
          {post.mediaFiles.length === 1 && (
            <div className="flex justify-center mb-4">
              <div className="relative w-full h-72">
                <img
                  src={URL.createObjectURL(post.mediaFiles[0])}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          )}

          {/* عرض صورتين */}
          {post.mediaFiles.length === 2 && (
            <div className="flex justify-center gap-4 mb-4">
              {post.mediaFiles.map((file, index) => (
                <div key={index} className="relative w-48 h-48">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Uploaded"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}

          {/* عرض ثلاث صور */}
          {post.mediaFiles.length === 3 && (
            <div className="flex justify-center gap-4 mb-4">
              {post.mediaFiles.map((file, index) => (
                <div key={index} className="relative w-48 h-48">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Uploaded"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}

          {/* عرض أربع صور أو أكثر */}
          {post.mediaFiles.length >= 4 && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              {post.mediaFiles.slice(0, 4).map((file, index) => (
                <div key={index} className="relative w-48 h-48">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Uploaded"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
              {/* عرض الصور المتبقية في حالة وجود أكثر من 4 صور */}
              {post.mediaFiles.length > 4 && (
                <div className="relative w-48 h-48 flex justify-center items-center bg-gray-300 rounded-lg">
                  <span className="text-white text-xl font-bold">
                    +{post.mediaFiles.length - 4}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};





export default App;
