import "./photoUploader.scss";
import { AiOutlineUpload, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const PhotoUploader = ({ setFile }) => {
  const [preview, setPreview] = useState("");

  return (
    <>
      {preview ? (
        <div className="fileUpload">
          <AiFillCloseCircle
            className="closeButton"
            onClick={() => {
              URL.revokeObjectURL(preview);
              setPreview("");
              setFile({});
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
          setFile(event.target.files[0]);
          setPreview(URL.createObjectURL(event.target.files[0]));
        }}
        //useFull if the user delete and re-add the same picture
        onClick={(event) => {
          event.target.value = null;
        }}
      />
    </>
  );
};

export default PhotoUploader;
