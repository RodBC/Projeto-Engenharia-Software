import * as styled from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import { NavBar } from "../Navbar/navbar";
import { Footer } from "../Footer/Footer";
import { UserForm } from "../userForms/userForms";

export const UserPage = () => {
  const auth = useContext(AuthContext);

  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <styled.ModalContainer>
          <div
            style={{
              width: "100%",
              height: "80px",
              display: "flex",
              justifyContent: "end",
              padding: "10px",
            }}
          >
          <styled.IconClose onClick={toggleModal} />
          </div>
          <UserForm/>
        </styled.ModalContainer>
      )}

      <styled.Container className={showModal ? "blurred" : ""}>
        <NavBar />
        <styled.BoxImages>
          <styled.BannerImage style={{backgroundImage: `url(${auth?.user?.bannerUrl})`}}/>
          <styled.ProfileImage src={auth?.user?.imgUrl} />
          <styled.BoxInfos>
            <styled.BoxHidden>
              <styled.EditButton onClick={toggleModal}>
                Editar Perfil <styled.EditIcon />
              </styled.EditButton>
            </styled.BoxHidden>
            <styled.TextName>
              {auth?.user && `${auth?.user?.name}`}
            </styled.TextName>
            <styled.BoxIcons>
              <styled.FacebookIcon />
              <styled.InstagramIcon />
              <styled.TwitterIcon />
            </styled.BoxIcons>
          </styled.BoxInfos>
        </styled.BoxImages>

        <styled.AboutContainer>
          <styled.AboutTextContainer>
            <div style={{ display: "flex", alignItems: "center" }}>
              <styled.H2Text>Sobre</styled.H2Text>
            </div>
            <hr />
            <styled.AboutText>
              {auth?.user && auth?.user.description}
            </styled.AboutText>
          </styled.AboutTextContainer>
        </styled.AboutContainer>

        <styled.InitiativesContainer>
          <styled.ContainerLikedInitiatives>
            <styled.H2Text>Iniciativas Curtidas</styled.H2Text>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <styled.Initative />
                <Carousel.Caption>
                  <styled.GlassCard>
                    <h3>Nome da iniciativa</h3>
                    <p>Descrição da iniciativa. lorem ipsum gavida tauris.</p>
                  </styled.GlassCard>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </styled.ContainerLikedInitiatives>

          <styled.ContainerCreatedInitiatives>
            <styled.H2Text>Iniciativas Criadas</styled.H2Text>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <styled.Initative />
                <Carousel.Caption>
                  <styled.GlassCard>
                    <h3>Nome da iniciativa</h3>
                    <p>Descrição da iniciativa. lorem ipsum gavida tauris.</p>
                  </styled.GlassCard>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </styled.ContainerCreatedInitiatives>
        </styled.InitiativesContainer>
        <Footer />
      </styled.Container>
    </>
  );
};
