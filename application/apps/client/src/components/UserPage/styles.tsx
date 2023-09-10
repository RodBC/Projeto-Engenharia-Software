import styled from 'styled-components'
import foto from '../../assets/rec_antigo.jpg'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BiEdit } from 'react-icons/bi'


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #eee;
    overflow-x: hidden;
`;

export const BoxImages = styled.div`
    margin: 20px;
    position: relative;
    box-shadow: 0 1px 3px gray;
    border-radius: 20px;
`;

export const BannerImage = styled.div`
    border-top-right-radius: 20px;
    border-top-left-radius: 20px ;
    width: 100%;
    height: 250px;
    background-color: black;
    background-image: url(${foto});
    
    @media (max-width: 700px) {
        height: 220px;
    }
`;

export const ProfileImage = styled.img`
    transition: all 0.1s linear;
    width: 180px;
    height: 180px;
    background-color: white;
    border-radius: 100%;
    position: absolute;
    top:130px;
    left: 50px;

    @media (max-width: 700px) {
        width: 130px;
        height: 130px;
        top:150px;
        left: 15px;
    }
`;

export const BoxInfos = styled.div`
    width: 100%;
    height: 130px;
    // background-color: #d1c7c7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px ;

`;

export const TextName = styled.h2`
    font-weight: bold;
    width: 100%;
    text-align: start;
    
    @media (max-width: 700px) {
        text-align: center;
        font-size: 30px;
    }

    @media (max-width: 500px) {
        text-align: center;
        font-size: 25px;
    }

    @media (max-width: 400px) {
        text-align: justify;
        font-size: 20px;
    }

`;

export const BoxIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 10px;
    width: 100%;
    height: 100%; 
`;

export const BoxHidden = styled.div`
    width: 700px;
    height: 100%;
    padding: 15px;

    display: flex;
    align-items: end;
    justify-content: center;

    @media (max-width: 700px) {
        width: 500px;
        
    display: flex;
    align-items: end;
    justify-content: end;
    }

    @media (max-width: 500px) {
        width: 400px;
    }
`;

export const EditButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 130px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid gray;

    &:hover {
        background-color: #ddd5d5;
    }
`;

export const EditIcon = styled(BiEdit)`
    backgr
`;

export const FacebookIcon = styled(FaFacebook)`
    width: 30px;
    height: 30px;
    margin-left: 10px;

    @media (max-width: 700px) {
        width: 20px;
        height: 20px;
    }
`;
export const InstagramIcon = styled(FaInstagram)`
    width: 30px;
    height: 30px;
    margin-left: 10px;

    @media (max-width: 700px) {
        width: 20px;
        height: 20px;
    }
`;
export const TwitterIcon = styled(FaTwitter)`
    width: 30px;
    height: 30px;
    margin-left: 10px;

    @media (max-width: 700px) {
        width: 20px;
        height: 20px;
    }
`;

export const AboutContainer = styled.div`
    margin: 20px;
    height: 380px;
    
`;

export const AboutTextContainer = styled.div`
    // background-color: #d1c7c7;
    height: 100%;
    border-radius: 20px;
    // box-shadow: 0 2px 3px black;
`;

export const AboutText = styled.p`
    border: 1px solid gray;
    height: 250px;
    margin: 20px;
    border-radius: 15px;
    padding:15px;
`;

export const H2Text = styled.h2`
    font-weight: bold;
    margin-left: 20px;
    margin-top: 20px;
`;

export const InitiativesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin:40px;

    gap: 30px;
    overflow: hidden;

    
    @media (max-width: 700px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }


`;

export const ContainerLikedInitiatives = styled.div`
    width: 100%; 
    
`;

export const ContainerCreatedInitiatives = styled.div`
    width: 100%;
    
   
`;

export const Initative = styled.div`
   background-image: url(${foto});
   width: 100%;
   height: 350px;
   background-size: cover;
   border-radius: 20px;

`;

export const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.2); 
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2); 

  color: #fff;
  text-align: center;
`;




