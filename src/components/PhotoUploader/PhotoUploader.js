import "./photoUploader.scss";
import { AiOutlineUpload, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const PhotoUploader = ({ setFile }) => {
  const [preview, setPreview] = useState("");

  return (
    <>
      <div className="fileUpload">
        {preview ? (
          <>
            <AiFillCloseCircle
              className="closeButton"
              onClick={() => {
                console.log("remove image");
                setPreview("");
                setFile("");
              }}
            />
            <img src={preview} alt="produit à vendre" />
          </>
        ) : (
          <label htmlFor="file-upload">
            <p>
              <AiOutlineUpload />
              {" Photo"}
            </p>
          </label>
        )}
      </div>
      <input
        id="file-upload"
        className="file"
        type="file"
        onChange={(event) => {
          console.log(event.target.files);
          setFile(event.target.files[0]);
          setPreview(URL.createObjectURL(event.target.files[0]));
        }}
      />
    </>
  );
};

export default PhotoUploader;
