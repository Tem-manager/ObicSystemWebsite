// import React, { useState } from "react";
// import EmojiPicker from "emoji-picker-react"; // استيراد مكتبة الإيموجي
// import AddPost from "../../../Components/Ui/AddPost";
// import { MomentsData } from "./MomentsData";
// import { PostData } from "./MomentsModel";
// import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'; // استيراد الأيقونات
// import { BsThreeDots } from 'react-icons/bs'; // أيقونة القائمة الجانبية

// const Moments: React.FC = () => {
//   const [posts, setPosts] = useState<PostData[]>(MomentsData); // استخدام البيانات المستوردة
//   const [postText, setPostText] = useState<string>(""); // نص المنشور
//   const [mediaFiles, setMediaFiles] = useState<File[]>([]); // الملفات الإعلامية
//   const [isPosting, setIsPosting] = useState(false); // حالة الإرسال

//   const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setPostText(e.target.value);
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (files) {
//       setMediaFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
//     }
//   };

//   const handlePost = () => {
//     if (postText.trim() || mediaFiles.length > 0) {
//       setIsPosting(true);
//       setTimeout(() => {
//         setPostText("");
//         setMediaFiles([]);
//         setIsPosting(false);
//       }, 2000);
//     }
//   };

//   const handleRemoveMedia = (index: number) => {
//     setMediaFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
//   };

//   // إضافة منشور جديد
//   const handleNewPost = (newPost: PostData) => {
//     setPosts((prevPosts) => [newPost, ...prevPosts]);
//   };

//   return (
//     <div className="bg-gray-100 p-6 flex flex-col items-center w-full">
//       <div className="w-full max-w-4xl space-y-6">
//         <AddPost
//           postText={postText}
//           mediaFiles={mediaFiles}
//           isPosting={isPosting}
//           handleTextChange={handleTextChange}
//           handleFileChange={handleFileChange}
//           handlePost={handlePost}
//           handleRemoveMedia={handleRemoveMedia}
//           onNewPost={handleNewPost}
//         />
//         <div className="pt-24 space-y-4 p-4 z-10 mt-1">
//           {posts.map((post, index) => (
//             <PostCard key={index} post={post} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const PostCard: React.FC<{ post: PostData }> = ({ post }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isCommentOpen, setIsCommentOpen] = useState(false);
//   const [comments, setComments] = useState<{ text: string; timestamp: Date }[]>([]);
//   const [newComment, setNewComment] = useState("");
//   const [isLiked, setIsLiked] = useState(false);
//   const [isExpandedComment, setIsExpandedComment] = useState<boolean[]>([]);
//   const [commentLikes, setCommentLikes] = useState<boolean[]>([]);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [editedCommentIndex, setEditedCommentIndex] = useState<number | null>(null); // لتخزين التعليق المعدل
//   const [editedCommentText, setEditedCommentText] = useState<string>("");
//   const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

//     const toggleDropdown = (index: number) => {
//       setActiveDropdown(activeDropdown === index ? null : index);
//     };

//   const maxCharCount = 300;

//   const toggleExpand = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   const toggleComments = () => {
//     setIsCommentOpen((prev) => !prev);
//   };

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       setComments((prevComments) => [
//         ...prevComments,
//         { text: newComment, timestamp: new Date() },
//       ]);
//       setCommentLikes((prevLikes) => [...prevLikes, false]); // إضافة حالة الإعجاب الافتراضية
//       setNewComment("");
//       setIsExpandedComment((prev) => [...prev, false]);
//     }
//   };

//   const toggleCommentExpand = (index: number) => {
//     setIsExpandedComment((prev) => {
//       const newState = [...prev];
//       newState[index] = !newState[index];
//       return newState;
//     });
//   };

//   const toggleLike = () => {
//     setIsLiked((prev) => !prev);
//   };

//   const toggleCommentLike = (index: number) => {
//     setCommentLikes((prevLikes) => {
//       const updatedLikes = [...prevLikes];
//       updatedLikes[index] = !updatedLikes[index];
//       return updatedLikes;
//     });
//   };

//   const handleEmojiClick = (emoji: { emoji: string }) => {
//     setNewComment((prevComment) => prevComment + emoji.emoji);
//   };

//   const handleEditComment = (index: number) => {
//     setEditedCommentIndex(index);
//     setEditedCommentText(comments[index].text);
//   };

//   const handleSaveEditedComment = (index: number) => {
//     const updatedComments = [...comments];
//     updatedComments[index].text = editedCommentText;
//     setComments(updatedComments);
//     setEditedCommentIndex(null);
//     setEditedCommentText("");
//   };

//   const handleDeleteComment = (index: number) => {
//     setComments((prevComments) => prevComments.filter((_, i) => i !== index));
//     setCommentLikes((prevLikes) => prevLikes.filter((_, i) => i !== index));
//   };

//   const timeAgo = (timestamp: Date) => {
//     const now = new Date();
//     const diff = now.getTime() - timestamp.getTime();
//     const diffMinutes = Math.floor(diff / (1000 * 60));
//     const diffHours = Math.floor(diff / (1000 * 60 * 60));
//     const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

//     if (diffMinutes < 60) {
//       return `${diffMinutes} دقيقة${diffMinutes === 1 ? "" : "s"}`;
//     } else if (diffHours < 24) {
//       return `${diffHours} ساعة${diffHours === 1 ? "" : "s"}`;
//     } else {
//       return `${diffDays} يوم${diffDays === 1 ? "" : "s"}`;
//     }
//   };



//   return (
//     <div className="bg-white shadow-lg rounded-lg border overflow-hidden w-full">
//       <div className="flex items-center space-x-4 p-4 border-b">
//         <img
//           src={post.user.avatar}
//           alt={post.user.username}
//           className="w-12 h-12 rounded-full object-cover"
//         />
//         <h3 className="text-lg font-semibold text-gray-800">{post.user.username}</h3>
//       </div>
//       {post.text && (
//         <div className="p-4">
//           <p className="text-gray-800 text-lg">
//             {isExpanded || post.text.length <= maxCharCount
//               ? post.text
//               : `${post.text.slice(0, maxCharCount)}...`}
//           </p>
//           {post.text.length > maxCharCount && (
//             <button
//               onClick={toggleExpand}
//               className="text-blue-500 mt-2 underline"
//             >
//               {isExpanded ? "عرض أقل" : "قراءة المزيد"}
//             </button>
//           )}
//         </div>
//       )}
//       {post.mediaFiles.length > 0 && (
//         <div className="p-4">
//           {post.mediaFiles.map((file, index) => (
//             <div key={index} className="relative w-full h-72 mb-4">
//               <img
//                 src={typeof file === "string" ? file : URL.createObjectURL(file)}
//                 alt="Uploaded"
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="flex justify-between items-center p-4 border-t">
//         <button
//           onClick={toggleComments}
//           className="flex items-center text-gray-500 hover:text-blue-500 space-x-1"
//         >
//           <span>💬</span>
//           <span>{comments.length} تعليق</span>
//         </button>

//         <button
//           onClick={toggleLike}
//           className="flex items-center text-gray-500 hover:text-red-500 space-x-1"
//         >
//           <span>{isLiked ? "❤️" : "🤍"}</span>
//           <span>{isLiked ? "أعجبني" : "أعجبني"}</span>
//         </button>
//       </div>

  
//       {isCommentOpen && (
//   <div className="bg-gray-100 p-4 border-t max-h-[400px] overflow-y-auto">
//     <div className="space-y-4">
//       {comments.map((comment, index) => (
//         <div
//           key={index}
//           className="flex items-start space-x-2 bg-white p-2 rounded-lg shadow-sm mb-2 relative"
//         >
//           <img
//             src={post.user.avatar}
//             alt={post.user.username}
//             className="w-8 h-8 rounded-full object-cover"
//           />
//           <div className="flex-1">
//             <p className="font-semibold text-gray-800">{post.user.username}</p>
//             {editedCommentIndex === index ? (
//               <div className="flex space-x-2">
//                 <textarea
//                   value={editedCommentText}
//                   onChange={(e) => setEditedCommentText(e.target.value)}
//                   className="w-full p-2 border rounded-lg text-sm"
//                 />
//                 <button
//                   onClick={() => handleSaveEditedComment(index)}
//                   className="bg-blue-500 text-white p-2 rounded-lg"
//                 >
//                   حفظ
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <p className="text-gray-700">
//                   {isExpandedComment[index] || comment.text.length <= maxCharCount
//                     ? comment.text
//                     : `${comment.text.slice(0, maxCharCount)}...`}
//                 </p>
//                 {comment.text.length > maxCharCount && (
//                   <button
//                     onClick={() => toggleCommentExpand(index)}
//                     className="text-blue-500 mt-2 underline"
//                   >
//                     {isExpandedComment[index] ? "عرض أقل" : "قراءة المزيد"}
//                   </button>
//                 )}
//                 <p className="text-gray-500 text-sm mt-1">
//                   {timeAgo(comment.timestamp)}
//                 </p>
//               </>
//             )}




//   <div className="relative">
//   <button
//     onClick={() => toggleDropdown(index)} // عند الضغط على النقاط الثلاث
//     className="absolute  right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
//   >
//     <BsThreeDots size={20} />
//   </button>
//   {activeDropdown === index && (
//     <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg z-10">
//       <button
//         onClick={() => {
//           handleEditComment(index); // تنفيذ إجراء التعديل
//           setActiveDropdown(null); // إخفاء القائمة
//         }}
//         className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
//       >
//         <FaRegEdit className="inline mr-2" /> تعديل
//       </button>
//       <button
//         onClick={() => {
//           handleDeleteComment(index); // تنفيذ إجراء الحذف
//           setActiveDropdown(null); // إخفاء القائمة
//         }}
//         className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
//       >
//         <FaTrashAlt className="inline mr-2" /> حذف
//       </button>
//     </div>
//   )}
// </div>


        


//           </div>
//         </div>
//       ))}
//     </div>
//     <div className="flex space-x-2 mt-4">
//       <button
//         onClick={() => setShowEmojiPicker((prev) => !prev)}
//         className="text-xl"
//       >
//         😀
//       </button>
//       {showEmojiPicker && (
//         <div className="absolute bottom-16 left-4 z-10">
//           <EmojiPicker onEmojiClick={handleEmojiClick} />
//         </div>
//       )}
//       <textarea
//         value={newComment}
//         onChange={(e) => setNewComment(e.target.value)}
//         onFocus={() => setShowEmojiPicker(false)} // إغلاق قائمة الإيموجي عند التركيز
//         className="w-full p-2 border rounded-lg text-sm"
//         placeholder="اكتب تعليقك..."
//       />
//       <button
//         onClick={() => {
//           handleAddComment();
//           setShowEmojiPicker(false); // إغلاق قائمة الإيموجي عند الإرسال
//         }}
//         className="bg-blue-500 text-white p-2 rounded-lg"
//       >
//         إرسال
//       </button>
//     </div>
//   </div>
// )}

//     </div>
//   );
// };


// export default Moments;


























import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react"; // استيراد مكتبة الإيموجي
import AddPost from "../../../Components/Ui/AddPost";
import { MomentsData } from "./MomentsData";
import { PostData } from "./MomentsModel";
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'; // استيراد الأيقونات
import { BsThreeDots } from 'react-icons/bs'; // أيقونة القائمة الجانبية

const Moments: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>(MomentsData); // استخدام البيانات المستوردة
  const [postText, setPostText] = useState<string>(""); // نص المنشور
  const [mediaFiles, setMediaFiles] = useState<File[]>([]); // الملفات الإعلامية
  const [isPosting, setIsPosting] = useState(false); // حالة الإرسال

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
        setPostText("");
        setMediaFiles([]);
        setIsPosting(false);
      }, 2000);
    }
  };

  const handleRemoveMedia = (index: number) => {
    setMediaFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // إضافة منشور جديد
  const handleNewPost = (newPost: PostData) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="bg-gray-100 p-6 flex flex-col items-center w-full">
      <div className="w-full max-w-4xl space-y-6">
        <AddPost
          postText={postText}
          mediaFiles={mediaFiles}
          isPosting={isPosting}
          handleTextChange={handleTextChange}
          handleFileChange={handleFileChange}
          handlePost={handlePost}
          handleRemoveMedia={handleRemoveMedia}
          onNewPost={handleNewPost}
        />
        <div className="pt-24 space-y-4 p-4 z-10 mt-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PostCard: React.FC<{ post: PostData }> = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [comments, setComments] = useState<{ text: string; timestamp: Date }[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isExpandedComment, setIsExpandedComment] = useState<boolean[]>([]);
  const [commentLikes, setCommentLikes] = useState<boolean[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [editedCommentIndex, setEditedCommentIndex] = useState<number | null>(null); // لتخزين التعليق المعدل
  const [editedCommentText, setEditedCommentText] = useState<string>("");
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
      setActiveDropdown(activeDropdown === index ? null : index);
    };

  const maxCharCount = 300;

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const toggleComments = () => {
    setIsCommentOpen((prev) => !prev);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prevComments) => [
        ...prevComments,
        { text: newComment, timestamp: new Date() },
      ]);
      setCommentLikes((prevLikes) => [...prevLikes, false]); // إضافة حالة الإعجاب الافتراضية
      setNewComment("");
      setIsExpandedComment((prev) => [...prev, false]);
    }
  };

  const toggleCommentExpand = (index: number) => {
    setIsExpandedComment((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  const toggleCommentLike = (index: number) => {
    setCommentLikes((prevLikes) => {
      const updatedLikes = [...prevLikes];
      updatedLikes[index] = !updatedLikes[index];
      return updatedLikes;
    });
  };

  const handleEmojiClick = (emoji: { emoji: string }) => {
    setNewComment((prevComment) => prevComment + emoji.emoji);
  };

  const handleEditComment = (index: number) => {
    setEditedCommentIndex(index);
    setEditedCommentText(comments[index].text);
  };

  const handleSaveEditedComment = (index: number) => {
    const updatedComments = [...comments];
    updatedComments[index].text = editedCommentText;
    setComments(updatedComments);
    setEditedCommentIndex(null);
    setEditedCommentText("");
  };

  const handleDeleteComment = (index: number) => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
    setCommentLikes((prevLikes) => prevLikes.filter((_, i) => i !== index));
  };

  const timeAgo = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const diffMinutes = Math.floor(diff / (1000 * 60));
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (diffMinutes < 60) {
      return `${diffMinutes} دقيقة${diffMinutes === 1 ? "" : "s"}`;
    } else if (diffHours < 24) {
      return `${diffHours} ساعة${diffHours === 1 ? "" : "s"}`;
    } else {
      return `${diffDays} يوم${diffDays === 1 ? "" : "s"}`;
    }
  };



  return (
    <div className="bg-white shadow-lg rounded-lg border overflow-hidden w-full">
      <div className="flex items-center space-x-4 p-4 border-b">
        <img
          src={post.user.avatar}
          alt={post.user.username}
          className="w-12 h-12 rounded-full object-cover"
        />
        <h3 className="text-lg font-semibold text-gray-800">{post.user.username}</h3>
      </div>
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
      {post.mediaFiles.length > 0 && (
        <div className="p-4">
          {post.mediaFiles.map((file, index) => (
            <div key={index} className="relative w-full h-72 mb-4">
              <img
                src={typeof file === "string" ? file : URL.createObjectURL(file)}
                alt="Uploaded"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-between items-center p-4 border-t">
        <button
          onClick={toggleComments}
          className="flex items-center text-gray-500 hover:text-blue-500 space-x-1"
        >
          <span>💬</span>
          <span>{comments.length} تعليق</span>
        </button>

        <button
          onClick={toggleLike}
          className="flex items-center text-gray-500 hover:text-red-500 space-x-1"
        >
          <span>{isLiked ? "❤️" : "🤍"}</span>
          <span>{isLiked ? "أعجبني" : "أعجبني"}</span>
        </button>
      </div>

  
      {isCommentOpen && (
  <div className="bg-gray-100 p-4 border-t max-h-[400px] overflow-y-auto">
    <div className="space-y-4">
    {comments.map((comment, index) => (
  <div
    key={index}
    className="relative flex items-start space-x-2 bg-white p-2 rounded-lg shadow-sm mb-2"
  >
    {/* صورة المستخدم */}
    <img
      src={post.user.avatar}
      alt={post.user.username}
      className="w-8 h-8 rounded-full object-cover"
    />

    {/* محتوى التعليق */}
    <div className="flex-1">
      <p className="font-semibold text-gray-800">{post.user.username}</p>
      {editedCommentIndex === index ? (
        <div className="flex space-x-2">
          <textarea
            value={editedCommentText}
            onChange={(e) => setEditedCommentText(e.target.value)}
            className="w-full p-2 border rounded-lg text-sm"
          />
          <button
            onClick={() => handleSaveEditedComment(index)}
            className="bg-blue-500 text-white p-2 rounded-lg"
          >
            حفظ
          </button>
        </div>
      ) : (
        <>
          <p className="text-gray-700">
            {isExpandedComment[index] || comment.text.length <= maxCharCount
              ? comment.text
              : `${comment.text.slice(0, maxCharCount)}...`}
          </p>
          {comment.text.length > maxCharCount && (
            <button
              onClick={() => toggleCommentExpand(index)}
              className="text-blue-500 mt-2 underline"
            >
              {isExpandedComment[index] ? "عرض أقل" : "قراءة المزيد"}
            </button>
          )}
          <p className="text-gray-500 text-sm mt-1">
            {timeAgo(comment.timestamp)}
          </p>
        </>
      )}
    </div>

    {/* أيقونة الثلاث نقاط والقائمة */}
    <div className="absolute top-2 right-2">
      <button
        onClick={() => toggleDropdown(index)} // عند الضغط على النقاط الثلاث
        className="text-gray-500 hover:text-gray-700 cursor-pointer"
      >
        <BsThreeDots size={20} />
      </button>
      {activeDropdown === index && (
        <div className="absolute right-0 mt-0 m-10 bg-white border rounded-lg shadow-lg z-10">
          <button
            onClick={() => {
              handleEditComment(index); // تنفيذ إجراء التعديل
              setActiveDropdown(null); // إخفاء القائمة
            }}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            <FaRegEdit className="inline mr-2" /> تعديل
          </button>
          <button
            onClick={() => {
              handleDeleteComment(index); // تنفيذ إجراء الحذف
              setActiveDropdown(null); // إخفاء القائمة
            }}
            className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
          >
            <FaTrashAlt className="inline mr-2" /> حذف
          </button>
        </div>
      )}




        


          </div>
        </div>
      ))}
    </div>
    <div className="flex space-x-2 mt-4">
      <button
        onClick={() => setShowEmojiPicker((prev) => !prev)}
        className="text-xl"
      >
        😀
      </button>
      {showEmojiPicker && (
        <div className="absolute bottom-16 left-4 z-10">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        onFocus={() => setShowEmojiPicker(false)} // إغلاق قائمة الإيموجي عند التركيز
        className="w-full p-2 border rounded-lg text-sm"
        placeholder="اكتب تعليقك..."
      />
      <button
        onClick={() => {
          handleAddComment();
          setShowEmojiPicker(false); // إغلاق قائمة الإيموجي عند الإرسال
        }}
        className="bg-blue-500 text-white p-2 rounded-lg"
      >
        إرسال
      </button>
    </div>
  </div>
)}

    </div>
  );
};


export default Moments;


