import { useState } from "react";

const ProfileImageUpload = () => {
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 py-4">
      <label className="relative cursor-pointer group">

        <div
          className="w-32 h-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-100 overflow-hidden"
          style={{
            backgroundImage: preview ? `url(${preview})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {!preview && <span className="text-gray-400">Upload</span>}
        </div>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImage}
        />
      </label>

      <p className="text-sm text-gray-500">
        Upload a professional headshot
      </p>
    </div>
  );
};

export default ProfileImageUpload;