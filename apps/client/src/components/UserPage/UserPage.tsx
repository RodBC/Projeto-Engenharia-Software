import * as styled from './styles'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth/AuthContext';
import { Carousel } from 'react-bootstrap'
import { useState } from 'react'

export const UserPage = () => {

  const auth = useContext(AuthContext)

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <styled.Container>

        <styled.BoxImages>
            <styled.BannerImage />
            <styled.ProfileImage src='https://via.placeholder.com/180'/>
            <styled.BoxInfos>
                <styled.BoxHidden>
                    <styled.EditButton >Editar Perfil <styled.EditIcon/></styled.EditButton>
                </styled.BoxHidden>
                <styled.TextName>{auth?.user && `${auth?.user?.name}`}</styled.TextName>
                <styled.BoxIcons>
                    <styled.FacebookIcon/>
                    <styled.InstagramIcon/>
                    <styled.TwitterIcon/>
                </styled.BoxIcons>
            </styled.BoxInfos>
        </styled.BoxImages>

        <styled.AboutContainer>
            <styled.AboutTextContainer>
                <div  style={{display: 'flex',alignItems: 'center' }}>
                <styled.H2Text>Sobre</styled.H2Text>
                </div>
                <hr />
                <styled.AboutText>
                    Description example;
                </styled.AboutText>
            </styled.AboutTextContainer>
        </styled.AboutContainer>

        <styled.InitiativesContainer>

            <styled.ContainerLikedInitiatives>
            <styled.H2Text>Iniciativas Curtidas</styled.H2Text>
                <Carousel  activeIndex={index} onSelect={handleSelect}>      
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

    </styled.Container>
  )
}
