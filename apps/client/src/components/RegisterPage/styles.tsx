import styled from "styled-components";
import { GiPadlock } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import { BiSolidUser } from 'react-icons/bi'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  gap: 200px;
  height: 100vh;
  transition: all 0.8s ease-in;
  overflow: hidden;

  @media (max-width: 950px) {
    gap: 0px;
  }

`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #046ee5;
  }
`;

export const Image = styled.img`
  width: 350px;
  height: 350px;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const Title = styled.h2`
  color: #676767;
  font-weight: bold;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const PasswordIcon = styled(GiPadlock)`
  position: absolute;
  pointer-events: none;
  padding-left: 2px;
  color: #676767;
`;

export const EmailIcon = styled(MdEmail)`
  position: absolute;
  pointer-events: none;
  padding-left: 2px;
  color: #676767;
`;

export const UserIcon = styled(BiSolidUser)`
  position: absolute;
  pointer-events: none;
  padding-left: 2px;
  color: #676767;
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
