import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { v4 } from "uuid";

export const Teste = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imageListRefIcon = ref(storage, "images/user/icon");

  const uploadFileIcon = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/user/icon/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        // console.log(imageRef.fullPath)
        // updateuser(imageRef.fullPath)
      });
    });
  };

  console.log(imageUrls)


  useEffect(() => {
    list(imageListRefIcon).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div id="teste">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFileIcon}> Upload Image</button>
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
    </div>
  );
};
