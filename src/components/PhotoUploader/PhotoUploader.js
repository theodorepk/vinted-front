import "./photoUploader.scss";
import { AiOutlineUpload, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const PhotoUploader = ({ setFile, file }) => {
  const [preview, setPreview] = useState("");

  return (
    <>
      {preview ? (
        <div className="fileUpload">
          <AiFillCloseCircle
            className="closeButton"
            onClick={() => {
              console.log("remove image");
              URL.revokeObjectURL(file);
              setPreview("");
              //   URL.revokeObjectURL(preview)
            }}
          />
          <img src={preview} alt="produit à vendre" />
        </div>
      ) : (
        <label htmlFor="file-upload" className="fileUpload">
          <AiOutlineUpload /> Photo
        </label>
      )}

      <input
        id="file-upload"
        className="file"
        type="file"
        onChange={(event) => {
          console.log("new Image");
          setFile(event.target.files[0]);
          setPreview(URL.createObjectURL(event.target.files[0]));
        }}
      />
    </>
  );
};

export default PhotoUploader;
