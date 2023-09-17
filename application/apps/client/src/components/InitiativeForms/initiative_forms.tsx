import { Main, About, Socials, UserImg, Button } from "./formStyles.tsx";
import Form from "react-bootstrap/Form";
import { AiFillFacebook } from "react-icons/ai";
import { useState } from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { AuthContext, useAuth } from "../../contexts/auth/AuthContext.tsx";
import { useContext } from "react";
// import { showAutoCloseAlert } from "../Alert/Alert.tsx";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { v4 } from "uuid";

export const InitiativeForm = () => {
  //  --------------------firebase-config--------------------------

  const { updateUser } = useAuth();
  const auth = useContext(AuthContext);
  const [textarea, setTextArea] = useState("");

  const [imageUpload, setImageUpload] = useState(null);
  const [imageBanner, setImageBanner] = useState(null);

  // const uploadFileIcon = async () => {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(
  //     storage,
  //     `images/user/icon/${imageUpload.name + v4()}`
  //   );

  //   // if (imageBanner == null) return;
  //   // const imageRef2 = ref(
  //   //   storage,
  //   //   `images/user/banner/${imageBanner.name + v4()}`
  //   // );
    
  //   try {
  //     // Upload the image and get the URL
  //     const snapshot = await uploadBytes(imageRef, imageUpload);
  //     // const snapshot2 = await uploadBytes(imageRef2, imageBanner);

  //     const url = await getDownloadURL(snapshot.ref);
  //     // const url2 = await getDownloadURL(snapshot2.ref);

  //     // Now, call updateUser with the updated imageUrls
  //     // updateUser(auth?.user?.id, url, textarea, url2);
  

  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //   }
  // };

  function teste(){
    console.log(textarea)
    updateUser(textarea)
  }

  return (
    <>
      <Main>
        <div>
          <Form.Group controlId="formFile" style={{display: 'flex', flexDirection: 'column', marginBottom: '15px'}}>
            <input
              type="file"
              title="Selecione uma imagem para o perfil"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
             
            />
            <input style={{ marginTop: '15px'}}
              type="file"
              onChange={(event) => {
                setImageBanner(event.target.files[0]);
              }}
            />
          </Form.Group>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
              marginBottom: "20px",
            }}
          >
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Fale mais sobre você...</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                style={{ maxHeight: "200px" }}
                onChange={(e) => {
                  [setTextArea(e.target.value)];
                }}
                value={textarea}
              />
            </Form.Group>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
              }}
            >
              <p style={{ marginBottom: "0.32em" }}>Redes Sociais</p>

              <label htmlFor="">
                <AiFillFacebook style={{ width: "2rem", height: "2rem" }} />{" "}
                <Socials className="form-control" placeholder="Link..." />
              </label>

              <label htmlFor="">
                <AiFillInstagram style={{ width: "2rem", height: "2rem" }} />{" "}
                <Socials className="form-control" placeholder="Link..." />
              </label>

              <label htmlFor="">
                <AiFillTwitterCircle
                  style={{ width: "2rem", height: "2rem" }}
                />{" "}
                <Socials className="form-control" placeholder="Link..." />
              </label>
            </div>
          </div>

          <Button className="btn btn-primary" onClick={teste}>
            Prosseguir
          </Button>
        </div>
      </Main>
    </>
  );
};
