import axios from "axios";
import { useState } from "react";
import "./PhotosUploader.css";
import Image from "./image";

export default function PhotosUpLoader({ addedPhotos, onChange }) {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
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

  function removePhoto(ev, filename) {
    ev.preventDefault();
    onChange([...addedPhotos.filter((photo) => photo !== filename)]);
  }

  function selectAsMainPhoto(ev, filename) {
    ev.preventDefault();
    const addedPhotosWithoutSelected = addedPhotos.filter(
      (photo) => photo !== filename
    );
    const newAddedPhotos = [filename, ...addedPhotosWithoutSelected];
    onChange(newAddedPhotos);
  }

  return (
    <>
      <label>
        <input type="file" multiple className="hidden" onChange={uploadPhoto} />
        {isLoading && <div className="loading">Se incarca...</div>}
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
        
        </div>
      ))}
    {addedPhotos.length === 0 && (
      <div className="text-gray-400">Nu au fot adaugate poze inca</div>
    )}
  </label>
</>

    )
}