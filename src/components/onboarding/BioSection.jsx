import { useState } from "react";

const BioSection = () => {
  const [bio, setBio] = useState("");

  return (
    <div>
      <label className="block text-sm font-semibold mb-2">
        Short Bio
      </label>

      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        rows="4"
        maxLength="500"
        className="w-full px-4 py-3 border rounded-lg resize-none"
        placeholder="Tell clients about yourself..."
      />

      <div className="text-right text-xs text-gray-400 mt-1">
        {bio.length} / 500
      </div>
    </div>
  );
};

export default BioSection;