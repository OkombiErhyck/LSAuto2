import axios from "axios";
import { useState } from "react";
import "./PhotosUploader.css";
import Image from "./image";
import Compressor from "compressorjs";

export default function PhotosUploader({ addedPhotos, onChange }) {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();
  
    // Compress and append each selected file to the form data
    for (let i = 0; i < files.length; i++) {
      const compressedFile = await imageCompression(files[i], {
        maxSizeMB: 1, // Maximum size of the compressed image
        maxWidthOrHeight: 1920, // Maximum width or height of the compressed image
        useWebWorker: true, // Use a web worker for the compression process
      });
      data.append("photos", compressedFile);
    }
  
    setIsLoading(true);
  
    axios
      .post("/upload", data, {
        headers: { "Content-type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setUploadProgress(progress);
        },
      })
      .then((response) => {
        const { data: filenames } = response;
        onChange((prev) => {
          return [...prev, ...filenames];
        });
        setIsLoading(false);
        setUploadProgress(0);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setUploadProgress(0);
      });
  
  
  }
  return (
    <>
      <label>
        <input type="file" multiple className="hidden" onChange={uploadPhoto} />
        {isLoading && <div className="loading">Loading...</div>}
        {uploadProgress > 0 && (
          <progress
            value={uploadProgress}
            max="100"
            className={`progress-bar ${uploadProgress === 100 ? "hidden" : ""}`}
          />
        )}
        {addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <div
              className="holder"
              key={link}
              style={{ position: "relative", width: "auto", height: "215px" }}
            >
              <Image className="img1" src={link} />
              <button
                onClick={(ev) => removePhoto(ev, link)}
                class="my-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-1 h-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 012.09 7.738M5.276 13.968a48.103 48.103 0 01-2.09-7.738m0 0a48.103 48.103 0 012.09-7.738"
              />
            </svg>
          </button>
          <button
            onClick={(ev) => selectAsMainPhoto(ev, link)}
            className="my-button"
            style={{ top: 0, right: 0, position: "absolute" }}
          >
            Set as main
          </button>
        </div>
      ))}
    {addedPhotos.length === 0 && (
      <div className="text-gray-400">No photos added yet</div>
    )}
  </label>
</>

    )
}