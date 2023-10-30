import React from "react";
import Image from "next/image";
import { AvatarIcon1, AvatarIcon2, AvatarIcon3, AvatarIcon4, AvatarIcon5, AvatarIcon6, AvatarIcon7, AvatarIcon8, AvatarIcon9, AvatarIcon10, AvatarIcon11, AvatarIcon12, AvatarIcon13, AvatarIcon14, AvatarIcon16, AvatarIcon17, AvatarIcon18, AvatarIcon19, AvatarIcon20, AvatarIcon21, AvatarIcon22, AvatarIcon23, AvatarIcon24, AvatarIcon25, AvatarIcon26, AvatarIcon27, AvatarIcon28, AvatarIcon30, AvatarIcon31, AvatarIcon32, AvatarIcon33, AvatarIcon34, AvatarIcon35, AvatarIcon36, AvatarIcon37, AvatarIcon38, AvatarIcon39, AvatarIcon40 } from "@/assets/images";

interface AvatarGalleryProps {
  selectedAvatar: string; // Assuming selectedAvatar is a URL or a string representing the image path
  setSelectedAvatar: (avatar: string) => void; // Assuming setSelectedAvatar is a function that takes a string
}

const AvatarGallery: React.FC<AvatarGalleryProps> = ({ selectedAvatar, setSelectedAvatar }) => {
  const avatarImages: string[] = [AvatarIcon1, AvatarIcon2, AvatarIcon3, AvatarIcon4, AvatarIcon5, AvatarIcon6, AvatarIcon7, AvatarIcon8, AvatarIcon9, AvatarIcon10, AvatarIcon11, AvatarIcon12, AvatarIcon13, AvatarIcon14, AvatarIcon16, AvatarIcon17, AvatarIcon18, AvatarIcon19, AvatarIcon20, AvatarIcon21, AvatarIcon22, AvatarIcon23, AvatarIcon24, AvatarIcon25, AvatarIcon26, AvatarIcon27, AvatarIcon28, AvatarIcon30, AvatarIcon31, AvatarIcon32, AvatarIcon33, AvatarIcon34, AvatarIcon35, AvatarIcon36, AvatarIcon37, AvatarIcon38, AvatarIcon39, AvatarIcon40];

  const handleAvatarClick = (index: number) => {
    setSelectedAvatar(avatarImages[index]);
  };

  return (
    <div className="absolute bottom-[15rem] right-[0.1rem] top-[2rem] w-full h-full flex items-center justify-center z-50">
      <div className="bg-white p-1 rounded-lg shadow-lg">
        <div className="grid grid-cols-5 gap-4">
          {avatarImages.map((avatar, index) => (
            <div key={index} onClick={() => handleAvatarClick(index)}>
              <Image
                className={`w-16 h-16 ${avatar === selectedAvatar && 'border-2 border-blue-500'}`}
                src={avatar}
                alt="Avatar"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default AvatarGallery;
