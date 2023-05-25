"use client";

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const FilePicker = () => {
  const [preview, setPreview] = useState<string | null>(null);

  function handleFileSelection(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) return;

    const previewURL: string = files[0] && URL.createObjectURL(files[0]);

    setPreview(previewURL);

  }

  return (
    <>
      <input
        onChange={handleFileSelection}
        name="coverUrl"
        type="file"
        id="media"
        className="invisible h-0 w-0"
        accept="image/*"
      />
      {preview && (
        // eslint-disable-next-line
        <img src={preview} />
      )}
    </>
  );
};

export default FilePicker;
