// momentsModel.ts
export interface PostData {
    text: string;
    mediaFiles: File[];
    username: string;
    avatar: string;
  }
  
  export interface AddPostModalProps {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    savePost: (text: string, mediaFiles: File[]) => void;
  }
  