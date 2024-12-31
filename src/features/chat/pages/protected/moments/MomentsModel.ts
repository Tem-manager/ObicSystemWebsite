// momentsModel.ts
export interface PostData {
  text: string;
  mediaFiles: File[] | string[]; // يدعم الملفات أو الروابط
  user: {
    username: string;
    avatar: string;
  };
}
