import React, { useState } from "react";
import AddPost from "../../../Components/Ui/AddPost";
// import { div } from "framer-motion/client";

interface PostData {
  text: string;
  mediaFiles: File[];
}

const Moments: React.FC = () => {
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
        // alert("تم نشر المنشور بنجاح!");
      }, 2000);
    }
    //  else {
    //   alert("يرجى إضافة نص أو وسائط قبل النشر.");
    // }
  };

  const handleRemoveMedia = (index: number) => {
    setMediaFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <>

<div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center w-full space-y-6">
  
    <div className="w-full max-w-4xl">
      <AddPost
        postText={postText}
        mediaFiles={mediaFiles}
        isPosting={isPosting}
        handleTextChange={handleTextChange}
        handleFileChange={handleFileChange}
        handlePost={handlePost}
        handleRemoveMedia={handleRemoveMedia}
      />


      {/* عرض المنشورات */}
      <div className="w-full max-w-4xl space-y-6 mt-6">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
      </div>
      </div>
    </>
  );
};


const PostCard: React.FC<{ post: PostData }> = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxCharCount = 200; // الحد الأقصى لعدد الأحرف المعروضة بشكل مختصر

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    
    <div className="bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden w-full items-center justify-center">
      {/* النص */}
      {post.text && (
        <div className="p-4">
          <p className="text-gray-800 text-lg">
            {isExpanded || post.text.length <= maxCharCount
              ? post.text
              : `${post.text.slice(0, maxCharCount)}...`}
          </p>
          {post.text.length > maxCharCount && (
            <button
              onClick={toggleExpand}
              className="text-blue-500 mt-2 underline"
            >
              {isExpanded ? "عرض أقل" : "قراءة المزيد"}
            </button>
          )}
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




export default Moments;



